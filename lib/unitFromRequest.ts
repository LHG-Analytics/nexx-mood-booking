// Server only (reads the filesystem): import it from server components, never
// from a "use client" file.
import { existsSync } from 'fs';
import { join } from 'path';
import maxmind, { type CityResponse, type Reader } from 'maxmind';
import type { MotelConfig } from '@/types/motel';
import { UNIT_COOKIE, nearestUnitId, resolveUnitId } from '@/lib/units';

/**
 * GeoLite2 City database, downloaded during the Docker build when the MaxMind
 * secrets exist (see .github/workflows/deploy.yml). Without it the IP step is
 * skipped and the motel's first unit is the default.
 */
const DB_PATH = process.env.GEOLITE2_CITY_PATH || join(process.cwd(), 'geo', 'GeoLite2-City.mmdb');

let readerPromise: Promise<Reader<CityResponse> | null> | undefined;
function getReader() {
  readerPromise ??= existsSync(DB_PATH)
    ? maxmind.open<CityResponse>(DB_PATH).catch(() => null)
    : Promise.resolve(null);
  return readerPromise;
}

type RequestHeaders = { get(name: string): string | null };

/** First address in X-Forwarded-For (set by Traefik), or X-Real-IP */
function clientIp(headers: RequestHeaders): string | undefined {
  const forwarded = headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || headers.get('x-real-ip') || undefined;
}

/**
 * Which unit to render for this request, in order of preference:
 * 1. the visitor's own earlier choice (cookie holding only the unit id);
 * 2. the unit nearest to the approximate location of their IP — looked up in
 *    memory, never stored or logged;
 * 3. the motel's first unit.
 * Returns undefined for motels with a single location.
 */
export async function unitIdFromRequest(config: MotelConfig, headers: RequestHeaders): Promise<string | undefined> {
  if (!config.units?.length) return undefined;

  const cookie = headers
    .get('cookie')
    ?.split(';')
    .map((part) => part.trim().split('='))
    .find(([name]) => name === UNIT_COOKIE)?.[1];
  if (cookie && config.units.some((unit) => unit.id === cookie)) return cookie;

  const ip = clientIp(headers);
  if (ip && maxmind.validate(ip)) {
    const reader = await getReader();
    const location = reader?.get(ip)?.location;
    if (location?.latitude != null && location.longitude != null) {
      return nearestUnitId(config.units, { lat: location.latitude, lng: location.longitude });
    }
  }

  return resolveUnitId(config, undefined);
}
