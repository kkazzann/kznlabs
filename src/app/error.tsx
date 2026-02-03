"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/features/language-provider";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const { language } = useLanguage();
  const t = language === "en" ? en : pl;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center py-10">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">500</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--foreground)]">{t.errors.error.title}</p>
        <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">{t.errors.error.description}</p>
        <div className="flex flex-col gap-3 justify-center sm:flex-row">
          <button
            onClick={() => reset()}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg sm:w-auto sm:px-6 sm:py-3"
          >
            {t.errors.error.tryAgain}
          </button>
          <a
            href="/"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] transition-all hover:scale-105 hover:shadow-lg sm:w-auto sm:px-6 sm:py-3"
          >
            {t.errors.error.button}
          </a>
        </div>
      </div>
    </div>
  );
}
