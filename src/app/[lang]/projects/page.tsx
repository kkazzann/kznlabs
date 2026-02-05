import type { Metadata } from "next";

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

  return {
    title: locale === "pl" ? "Projekty | kznlabs" : "Projects | kznlabs",
    description:
      locale === "pl" ? "Wybrane projekty i realizacje." : "Selected projects and case studies.",
    alternates: {
      canonical: locale === "pl" ? "/pl/projects" : "/en/projects",
      languages: {
        en: "/en/projects",
        pl: "/pl/projects",
      },
    },
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const t = locale === "en" ? en : pl;

  return (
    <div className="flex py-10 items-center justify-center">
      <h1 className="text-2xl font-bold">{t.contentPlaceholder}</h1>
    </div>
  );
}
