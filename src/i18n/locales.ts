export const locales = ["en", "pl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const match = pathname.match(/^\/(en|pl)(?:\/|$)/);
  if (!match) return null;
  return match[1] as Locale;
}

export function replaceOrAddLocaleToPathname(pathname: string, locale: Locale): string {
  const withoutQueryHash = pathname;
  const hasLocale = /^\/(en|pl)(?:\/|$)/.test(withoutQueryHash);

  if (hasLocale) {
    return withoutQueryHash.replace(/^\/(en|pl)(?=\/|$)/, `/${locale}`);
  }

  if (withoutQueryHash === "/") {
    return `/${locale}`;
  }

  return `/${locale}${withoutQueryHash}`;
}

export function getLocaleFromAcceptLanguage(headerValue: string | null | undefined): Locale {
  const value = (headerValue ?? "").toLowerCase();
  if (value.startsWith("pl") || value.includes("pl")) return "pl";
  return defaultLocale;
}
