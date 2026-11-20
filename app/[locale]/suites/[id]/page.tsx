import { notFound } from "next/navigation";
import { getMotelConfigFromHostname } from "@/lib/getMotelConfig";
import { headers } from "next/headers";
import SuiteDetailsClient from "./suite-details-client";
import { getTranslationByLocale } from "@/locales";
import { Locale, LOCALES, LANGUAGES } from "@/types/i18n";
import { formatHourRange, getUnit, getUnitContact } from "@/lib/units";

interface Suite {
  id: string;
  name: string;
  price: number;
  address: string;
  hours: {
    weekdays: string;
    weekend: string;
  };
  pricing: {
    weekdays: {
      fractional: number;
      daily: number;
      overnight: number;
    };
    weekend: {
      fractional: number;
      daily: number;
      overnight: number;
    };
  };
  amenities: string[];
  images: string[];
  description: string;
  unitId?: string;
  unitName?: string; // e.g. "Nexx Motel Homestead", for motels with several units
  phone: string;
  overnightWeekendLabel: string; // Weekend overnight starts at 11PM or 2AM depending on the unit
  fractionalBookingWindows?: string; // Already formatted, e.g. "8 AM–11 AM, 4 PM–7 PM and 11 PM–2 AM"
}

export default async function SuitePage({
  params
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id, locale } = await params;

  // Validate locale
  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  // Get motel config from hostname
  const headersList = await headers();
  const hostname = headersList.get('host') || 'localhost';
  const motelConfig = getMotelConfigFromHostname(hostname);

  // Get translation based on URL locale
  const t = getTranslationByLocale(locale as Locale);

  // Find suite in motel config
  const suiteData = motelConfig.suites.find(s => s.id === id);

  if (!suiteData) {
    notFound();
  }

  // Helper function to replace variables in translation strings
  const replaceVars = (str: string, vars: Record<string, string>) => {
    return str.replace(/\{(\w+)\}/g, (_, key) => vars[key] || `{${key}}`);
  };

  // Address, phone and hours of the unit this suite is in (the motel's own for
  // single-location motels)
  const unit = getUnit(motelConfig, suiteData.unitId);
  const unitContact = getUnitContact(motelConfig, suiteData.unitId);
  const language = LANGUAGES.find((l) => l.locale === locale)?.code ?? 'en';
  const windows = unit?.fractionalBookingWindows?.map((w) => formatHourRange(w, language));
  const fractionalBookingWindows = windows?.length
    ? windows.length > 1
      ? `${windows.slice(0, -1).join(', ')} ${t.suiteDetails.and} ${windows[windows.length - 1]}`
      : windows[0]
    : undefined;

  // Transform to full suite format (use specific pricing if available, otherwise calculate)
  const suite: Suite = {
    id: suiteData.id,
    name: suiteData.name,
    price: suiteData.price,
    address: unitContact.address.full,
    phone: unitContact.phone,
    unitId: unit?.id,
    unitName: unit ? unitContact.name : undefined,
    overnightWeekendLabel:
      unit?.weekendOvernightStart === 'evening' ? t.suiteDetails.overnightWeekday : t.suiteDetails.overnightWeekend,
    fractionalBookingWindows,
    hours: {
      weekdays: t.suiteDetails.weekdayHours,
      weekend: t.suiteDetails.weekendHours,
    },
    pricing: suiteData.pricing || {
      // Fallback: calculate pricing if not specified
      weekdays: {
        fractional: suiteData.price,
        daily: suiteData.price * 4,
        overnight: suiteData.price * 2,
      },
      weekend: {
        fractional: suiteData.price + 4,
        daily: (suiteData.price + 4) * 4,
        overnight: (suiteData.price + 4) * 2,
      },
    },
    amenities: suiteData.amenities,
    images: suiteData.images || [suiteData.image],
    description: suiteData.description || replaceVars(t.suiteDetails.defaultDescription, { suiteName: suiteData.name }),
  };

  return <SuiteDetailsClient suite={suite} />;
}
