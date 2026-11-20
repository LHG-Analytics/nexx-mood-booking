import type { MotelConfig, MotelUnit, Suite, MotelAddress } from '@/types/motel';

/** Holds only the chosen unit id ("hialeah"), never anything about the visitor */
export const UNIT_COOKIE = 'motel_unit';

export interface UnitContact {
  name: string;
  address: MotelAddress;
  phone: string;
  hours: string;
  mapsUrl: string;
}

export function getUnit(config: MotelConfig, unitId: string | undefined): MotelUnit | undefined {
  return config.units?.find((unit) => unit.id === unitId);
}

/** A unit id that exists for this motel, falling back to its first unit */
export function resolveUnitId(config: MotelConfig, unitId: string | undefined | null): string | undefined {
  if (!config.units?.length) return undefined;
  return getUnit(config, unitId ?? undefined)?.id ?? config.units[0].id;
}

/** The suites to show: all of them for single-location motels */
export function suitesForUnit(config: MotelConfig, unitId: string | undefined): Suite[] {
  if (!config.units?.length || !unitId) return config.suites;
  return config.suites.filter((suite) => suite.unitId === unitId);
}

/**
 * Address and phone of a unit. The first unit is the one in `contact`; the
 * others are in `contact.otherLocations`, matched by unitId.
 */
export function getUnitContact(config: MotelConfig, unitId: string | undefined): UnitContact {
  const main: UnitContact = {
    name: config.units?.[0] ? `${config.name} ${config.units[0].label}` : config.name,
    address: config.contact.address,
    phone: config.contact.phone,
    hours: config.contact.hours,
    mapsUrl: config.contact.mapsUrl,
  };
  if (!config.units?.length || unitId === config.units[0].id) return main;
  const location = config.contact.otherLocations?.find((l) => l.unitId === unitId);
  if (!location) return main;
  return {
    name: location.name,
    address: location.address,
    phone: location.phone ?? config.contact.phone,
    hours: location.hours ?? config.contact.hours,
    mapsUrl: location.mapsUrl,
  };
}

/** Great-circle distance in km; plenty precise for picking the closer of two motels */
function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(h));
}

export function nearestUnitId(units: MotelUnit[], point: { lat: number; lng: number }): string | undefined {
  let best: { id: string; km: number } | undefined;
  for (const unit of units) {
    const km = distanceKm(point, unit.coordinates);
    if (!best || km < best.km) best = { id: unit.id, km };
  }
  return best?.id;
}

/** "8 AM–11 AM" in English, "8h–11h" in Portuguese and Spanish, like the rest of the copy */
export function formatHourRange([start, end]: [number, number], language: 'en' | 'pt' | 'es'): string {
  const hour = (h: number) => (language === 'en' ? `${h % 12 || 12} ${h < 12 ? 'AM' : 'PM'}` : `${h}h`);
  return `${hour(start)}–${hour(end)}`;
}
