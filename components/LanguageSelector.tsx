"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LANGUAGES } from '@/types/i18n';

export function LanguageSelector() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.locale === locale) || LANGUAGES[0];

  const buttonRef = useRef<HTMLButtonElement>(null);

  // Esc closes the list and returns focus to the button
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Named by its text, not an aria-label, so the visible language name is
          part of the accessible name (WCAG 2.5.3); on small screens that name
          is visually hidden but still read */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="language-options"
        className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-foreground transition-colors hover:bg-accent"
      >
        <span className="sr-only">{t.footer.selectLanguage}: </span>
        <span className="text-2xl" aria-hidden="true">{currentLang.flag}</span>
        <span className="sr-only text-sm font-medium sm:not-sr-only">{currentLang.nativeName}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="language-options"
            className="absolute bottom-full left-0 mb-2 w-48 overflow-hidden rounded-lg border border-border bg-card shadow-xl"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.locale}
                type="button"
                lang={lang.locale}
                aria-current={locale === lang.locale ? 'true' : undefined}
                onClick={() => {
                  setLocale(lang.locale);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-accent ${
                  locale === lang.locale ? 'bg-accent/50' : ''
                }`}
              >
                <span className="text-2xl" aria-hidden="true">{lang.flag}</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">{lang.nativeName}</div>
                  <div className="text-xs text-muted-foreground" lang="en">{lang.name}</div>
                </div>
                {locale === lang.locale && (
                  <div className="h-2 w-2 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
