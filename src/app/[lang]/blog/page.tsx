import type { Metadata } from "next";

import { Footer } from "@/components/common/Footer";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const title = locale === "pl" ? "Blog | kznlabs" : "Blog | kznlabs";
  const description =
    locale === "pl" ? "Artykuły i notatki techniczne (wkrótce)." : "Articles and technical notes (coming soon).";

  return {
    title,
    description,
    alternates: {
      canonical: locale === "pl" ? "/pl/blog" : "/en/blog",
      languages: {
        en: "/en/blog",
        pl: "/pl/blog",
      },
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const t = locale === "en" ? en : pl;

  return (
    <>
      <div className="flex py-10 items-center justify-center">
        <h1 className="text-2xl font-bold">{t.contentPlaceholder}</h1>
      </div>

      <Footer translations={t} />
    </>
  );
}
