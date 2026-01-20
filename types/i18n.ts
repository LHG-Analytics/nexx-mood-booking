/**
 * Internationalization (i18n) Types
 * Supports English (US), Portuguese (Brazil), and Spanish (Spain)
 * Uses full locale codes for better SEO
 */

export type Locale = 'en-US' | 'pt-BR' | 'es-ES';

// Short codes for internal mapping
export type Language = 'en' | 'pt' | 'es';

export interface LanguageOption {
  locale: Locale;
  code: Language;
  name: string;
  flag: string;
  nativeName: string;
}

export const LOCALES: Locale[] = ['en-US', 'pt-BR', 'es-ES'];

export const LANGUAGES: LanguageOption[] = [
  { locale: 'en-US', code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { locale: 'pt-BR', code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { locale: 'es-ES', code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
];

export const DEFAULT_LOCALE: Locale = 'en-US';
export const DEFAULT_LANGUAGE: Language = 'en';

// Helper to convert locale to language code
export function localeToLanguage(locale: Locale): Language {
  return locale.split('-')[0] as Language;
}

// Helper to convert language to locale
export function languageToLocale(lang: Language): Locale {
  const mapping: Record<Language, Locale> = {
    'en': 'en-US',
    'pt': 'pt-BR',
    'es': 'es-ES',
  };
  return mapping[lang];
}
