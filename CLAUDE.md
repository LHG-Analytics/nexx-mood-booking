# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server on port 4000
npm run build        # Production build
npm run lint         # ESLint checks
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format with Prettier
npm run type-check   # TypeScript type check
```

## Architecture Overview

**Next.js 15 App Router** multi-tenant landing page system for 6 motel brands (mood, yes, calle8, scape, nexx, aqua), with URL-based i18n (en-US, pt-BR, es-ES).

### Multi-tenancy

Motel identity is determined by **hostname**. `app/layout.tsx` resolves the config server-side from the `Host` header via `getMotelConfigFromHostname()` and passes it to `Providers` as `initialConfig`, which hands it to `MotelProvider`. This must stay wired: without `initialConfig`, `MotelContext` falls back to its `localhost` default and every domain server-renders Nexx, only correcting itself after hydration.

All motel configs live in `config/motels.config.ts` — each has unique themes (HSL CSS variables for light/dark), suites, contacts, GA/GTM IDs, and SEO metadata. When adding a new motel, add its entry there and map its domain in `getMotelConfig.ts`.

Optional per-motel extras: `importantInfoExtras` adds motel-specific cards to the Important Info section (each key maps to an `importantInfo.<key>` entry in every locale file).

### i18n Routing

- Middleware (`middleware.ts`) redirects bare URLs to the default locale (`en-US`)
- All pages live under `app/[locale]/` and export `generateStaticParams` covering all 3 locales
- `LanguageContext` provides the current locale; translations are in `locales/en.ts`, `pt.ts`, `es.ts`
- Use `getTranslation(lang)` or `getTranslationByLocale(locale)` to access strings; use `translateWithVars()` for interpolated strings
- Locale type: `'en-US' | 'pt-BR' | 'es-ES'`; Language type: `'en' | 'pt' | 'es'`

### Theming

Each motel defines CSS variable values (HSL format) in its config. `ThemeInjector` applies these at runtime as inline `<style>` injections. Tailwind uses `dark:` prefix with `next-themes` for dark mode. Custom motel palette tokens (`--motel-pink`, `--motel-purple`, etc.) are defined in `tailwind.config.ts`.

### Component Structure

- `components/ui/` — shadcn/ui components (do not modify directly)
- Page section components (Navbar, HeroSection, SuiteCarousel, Footer, etc.) are motel-aware via `useMotel()`
- `app/providers.tsx` composes all context providers (QueryClient, Themes, Language, Motel)

### Key Patterns

- **Server components** for layouts and metadata; **Client components** (`"use client"`) only where interactivity is needed
- Motel config is accessed via the `useMotel()` hook — never import config files directly in components
- Dynamic suite pages: `app/[locale]/suites/[id]/page.tsx` — suite data comes from the motel config
- SEO metadata (hreflang, OG tags, canonical URLs) is generated per-locale in each page's `generateMetadata`
