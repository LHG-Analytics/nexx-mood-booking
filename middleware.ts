import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOCALES, DEFAULT_LOCALE } from '@/types/i18n';

// Paths that should not be localized
const PUBLIC_FILE = /\.(.*)$/;
const EXCLUDED_PATHS = ['/_next', '/api', '/assets', '/favicon'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public files and excluded paths
  if (
    PUBLIC_FILE.test(pathname) ||
    EXCLUDED_PATHS.some(path => pathname.startsWith(path))
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = LOCALES.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to default locale (en-US)
  const locale = DEFAULT_LOCALE;
  const newUrl = new URL(`/${locale}${pathname}`, request.url);

  // Preserve query parameters
  newUrl.search = request.nextUrl.search;

  return NextResponse.redirect(newUrl, { status: 308 });
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, assets)
    '/((?!_next|api|assets|favicon|.*\\..*).*)',
  ],
};
