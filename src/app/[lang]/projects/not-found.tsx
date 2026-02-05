"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { useLanguage } from "@/components/features/language-provider";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";
import { Footer } from "@/components/common/Footer";

export default function ProjectsNotFound() {
  const { language } = useLanguage();
  const t = language === "en" ? en : pl;
  const params = useParams<{ lang: string }>();
  const lang = (params?.lang === "pl" || params?.lang === "en" ? params.lang : "en") as "en" | "pl";

  return (
    <>
      <div className="flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--foreground)]">
            {t.errors.projectNotFound.title}
          </p>
          <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">{t.errors.projectNotFound.description}</p>
          <div className="flex flex-col items-center gap-3 justify-center sm:flex-row">
            <Link
              href={`/${lang}/projects`}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg sm:w-auto sm:px-6 sm:py-3"
            >
              {t.errors.projectNotFound.button}
            </Link>
            <Link
              href={`/${lang}`}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-all hover:scale-105 hover:shadow-lg sm:w-auto sm:px-6 sm:py-3"
            >
              {t.errors.projectNotFound.homeButton}
            </Link>
          </div>
        </div>
      </div>
      <Footer translations={t} />
    </>
  );
}
