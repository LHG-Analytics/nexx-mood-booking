import { imageAlts } from '@/config/imageAlts';
import type { Language } from '@/types/i18n';

/**
 * Descriptive alt text for a suite photo, or the given fallback when the photo
 * has no entry yet (e.g. a newly added file) — never an empty or generic alt.
 */
export function getImageAlt(src: string, language: Language, fallback: string): string {
  return imageAlts[src]?.[language] ?? fallback;
}
