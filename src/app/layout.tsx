import { headers } from "next/headers";
import { Sofia_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { isLocale, defaultLocale } from "@/i18n/locales";

const uiSans = Sofia_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerList = await headers();
  const hintedLocale = headerList.get("x-kzn-lang");
  const locale = hintedLocale && isLocale(hintedLocale) ? hintedLocale : defaultLocale;

  return (
    <html lang={locale} className={uiSans.variable}>
      <head>
        <link rel="preconnect" href="https://placehold.co" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2f6fed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e89c8322-64cb-4197-bbe8-76e33de54486"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased bg-[image:linear-gradient(var(--background),var(--background))]">{children}</body>
    </html>
  );
}
