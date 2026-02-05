import type { Metadata } from "next";

import { WipBanner } from "@/components/layout/WipBanner";
import { Header } from "@/components/layout/Header";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/components/features/language-provider";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/locales";

function getMetadataForLocale(locale: Locale): Pick<Metadata, "title" | "description" | "openGraph" | "twitter"> {
  if (locale === "pl") {
    const title = "Kamil Kazaniecki | Programista Fullstack (React/Next.js)";
    const description =
      "Portfolio i studio. Tworzę szybkie aplikacje webowe w React/Next.js i dowożę MVP z naciskiem na wydajność i SEO.";
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "website",
        images: [
          {
            url: "/og.png",
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/og.png"],
      },
    };
  }

  const title = "Kamil Kazaniecki | Fullstack Developer & Product Creator";
  const description =
    "Personal portfolio and studio. I build high-performance web apps with React, Next.js, and modern UI tools.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;

  return {
    ...getMetadataForLocale(locale),
    metadataBase: new URL("https://kznlabs.com"),
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      languages: {
        en: "/en",
        pl: "/pl",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;

  return (
    <LanguageProvider initialLanguage={locale}>
      <WipBanner />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-3 py-4 sm:px-4 sm:py-6 lg:px-8">
        <div className="overflow-visible rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow)] sm:rounded-3xl">
          <Header />

          <main className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8">{children}</main>
        </div>
      </div>

      <Toaster position="top-center" />
    </LanguageProvider>
  );
}
