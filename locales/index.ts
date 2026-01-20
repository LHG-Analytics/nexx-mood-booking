import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { Language, Locale, localeToLanguage } from '@/types/i18n';

export const translations = {
  en,
  pt,
  es,
};

export function getTranslation(lang: Language) {
  return translations[lang] || translations.en;
}

export function getTranslationByLocale(locale: Locale) {
  const lang = localeToLanguage(locale);
  return getTranslation(lang);
}
