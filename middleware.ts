import { NextRequest, NextResponse } from "next/server";

import { getLocaleFromAcceptLanguage, isLocale, replaceOrAddLocaleToPathname } from "./src/i18n/locales";

const LANGUAGE_COOKIE = "kznlabs.language";

function getPreferredLocale(request: NextRequest) {
  const cookieValue = request.cookies.get(LANGUAGE_COOKIE)?.value;
  if (cookieValue && isLocale(cookieValue)) return cookieValue;

  return getLocaleFromAcceptLanguage(request.headers.get("accept-language"));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If already locale-prefixed, continue.
  const localeMatch = pathname.match(/^\/(en|pl)(?:\/|$)/);
  if (localeMatch) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-kzn-lang", localeMatch[1]);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = replaceOrAddLocaleToPathname(pathname, locale);
  const response = NextResponse.redirect(url);
  response.cookies.set(LANGUAGE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    // Skip Next internals, API, and all files with an extension (e.g. .png, .ico, .xml, .txt).
    "/((?!api|_next|.*\\..*).*)",
  ],
};
