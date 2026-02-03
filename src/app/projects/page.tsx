"use client";

import { useLanguage } from "@/components/features/language-provider";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = language === "en" ? en : pl;

  return (
    <div className="flex py-10 items-center justify-center">
      <h1 className="text-2xl font-bold">{t.contentPlaceholder}</h1>
    </div>
  );
}
