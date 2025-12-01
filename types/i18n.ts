/**
 * Internationalization (i18n) Types
 * Supports English, Portuguese (Brazil), and Spanish (Spain)
 */

export type Language = 'en' | 'pt' | 'es';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string; // Emoji flag
  nativeName: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
];

export const DEFAULT_LANGUAGE: Language = 'en';
