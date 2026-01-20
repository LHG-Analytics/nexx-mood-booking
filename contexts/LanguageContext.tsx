"use client";

import { createContext, useContext, ReactNode } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { Language, Locale, DEFAULT_LOCALE, LOCALES, localeToLanguage } from '@/types/i18n';
import { getTranslation } from '@/locales';
import type { Translation } from '@/locales/en';

interface LanguageContextType {
  language: Language;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  // Get locale from URL params or default
  const urlLocale = params?.locale as Locale;
  const currentLocale: Locale = LOCALES.includes(urlLocale) ? urlLocale : DEFAULT_LOCALE;
  const currentLanguage = localeToLanguage(currentLocale);

  const setLocale = (newLocale: Locale) => {
    // Navigate to the same page with new locale
    const segments = pathname.split('/');
    // Replace locale segment (first segment after empty string)
    if (LOCALES.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    const newPath = segments.join('/') || `/${newLocale}`;
    router.push(newPath);
  };

  const t = getTranslation(currentLanguage);

  return (
    <LanguageContext.Provider value={{
      language: currentLanguage,
      locale: currentLocale,
      setLocale,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

/**
 * Helper function to replace placeholders in translation strings
 * @example translateWithVars(t.hero.description, { motelName: 'Mood Motel' })
 */
export function translateWithVars(text: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replace(new RegExp(`\\{${key}\\}`, 'g'), value),
    text
  );
}
