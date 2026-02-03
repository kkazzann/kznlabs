"use client";

import { useLanguage } from "@/components/features/language-provider";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";

export function WipBanner() {
  const { language } = useLanguage();
  const t = language === "en" ? en : pl;

  return (
    <div className="sticky top-0 z-50 border-b border-yellow-600/30 bg-yellow-500/15 px-3 py-1.5 text-center backdrop-blur-sm sm:px-4 sm:py-2">
      <p className="text-[10px] font-medium uppercase tracking-wide text-yellow-800 sm:text-xs sm:tracking-wider">
        {t.wipBanner}
      </p>
    </div>
  );
}
