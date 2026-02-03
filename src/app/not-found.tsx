"use client";

import Link from "next/link";
import { useLanguage } from "@/components/features/language-provider";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";

export default function NotFound() {
  const { language } = useLanguage();
  const t = language === "en" ? en : pl;

  return (
    <div className="flex items-center justify-center py-10">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--foreground)]">{t.errors.notFound.title}</p>
        <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">{t.errors.notFound.description}</p>
        <Link
          href="/"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg sm:w-auto sm:px-6 sm:py-3"
        >
          {t.errors.notFound.button}
        </Link>
      </div>
    </div>
  );
}
