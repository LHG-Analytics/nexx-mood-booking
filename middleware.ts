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
  const pathnameLocale = LOCALES.find(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) {
    // The root layout sits above [locale] and can't read it from params, so
    // pass it along for <html lang> to be right in the server-rendered HTML.
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', pathnameLocale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Redirect to default locale (en-US)
  const locale = DEFAULT_LOCALE;
  // Avoid trailing slash to prevent double redirect (Next.js removes trailing slashes by default)
  const normalizedPath = pathname === '/' ? '' : pathname;
  const newUrl = new URL(`/${locale}${normalizedPath}`, request.url);

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
