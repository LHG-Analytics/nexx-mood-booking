import { notFound } from "next/navigation";
import { getMotelConfigFromHostname } from "@/lib/getMotelConfig";
import { headers } from "next/headers";
import SuiteDetailsClient from "./suite-details-client";
import { getTranslation } from "@/locales";
import { Language } from "@/types/i18n";

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
}

function getLanguageFromCookie(cookieHeader: string | null): Language {
  if (!cookieHeader) return 'en';

  const cookies = cookieHeader.split(';').map(c => c.trim());
  const langCookie = cookies.find(c => c.startsWith('motel-language='));

  if (langCookie) {
    const lang = langCookie.split('=')[1] as Language;
    if (['en', 'pt', 'es'].includes(lang)) {
      return lang;
    }
  }

  return 'en';
}

export default async function SuitePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Get motel config from hostname
  const headersList = await headers();
  const hostname = headersList.get('host') || 'localhost';
  const motelConfig = getMotelConfigFromHostname(hostname);

  // Get language from cookie (fallback to 'en')
  const cookieHeader = headersList.get('cookie');
  const language = getLanguageFromCookie(cookieHeader);
  const t = getTranslation(language);

  // Find suite in motel config
  const suiteData = motelConfig.suites.find(s => s.id === id);

  if (!suiteData) {
    notFound();
  }

  // Helper function to replace variables in translation strings
  const replaceVars = (str: string, vars: Record<string, string>) => {
    return str.replace(/\{(\w+)\}/g, (_, key) => vars[key] || `{${key}}`);
  };

  // Transform to full suite format (with default values for detailed pricing)
  const suite: Suite = {
    id: suiteData.id,
    name: suiteData.name,
    price: suiteData.price,
    address: motelConfig.contact.address.full,
    hours: {
      weekdays: t.suiteDetails.weekdayHours,
      weekend: t.suiteDetails.weekendHours,
    },
    pricing: {
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
