"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Maps internal language codes to proper BCP 47 locale tags for SEO
 */
const LANG_TO_LOCALE: Record<string, string> = {
  en: "en-US",
  pt: "pt-BR",
  es: "es-ES",
};

/**
 * Component that updates the HTML lang attribute based on selected language
 * This is important for SEO and accessibility
 */
export function LanguageHtmlUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    const locale = LANG_TO_LOCALE[language] || "en-US";
    document.documentElement.lang = locale;
  }, [language]);

  return null;
}
