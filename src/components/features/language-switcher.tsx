"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/features/language-provider";
import { trackLanguageChange } from "@/lib/analytics";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLang: "en" | "pl") => {
    if (newLang !== language) {
      trackLanguageChange(language, newLang);
      setLanguage(newLang);
    }
  };

  return (
    <div
      className={cn(
        "relative flex items-center rounded-full border border-[var(--border)] bg-white/70 p-0.5 text-xs font-semibold",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-y-0.5 left-0.5 w-[calc(50%-0.125rem)] rounded-full bg-[var(--foreground)] transition-transform duration-300 ease-out",
          language === "pl" && "translate-x-full"
        )}
        aria-hidden="true"
      />
      <button
        onClick={() => handleLanguageChange("en")}
        className={cn(
          "relative z-10 cursor-pointer rounded-full px-2.5 py-1 transition-colors",
          language === "en" ? "text-white" : "text-[var(--muted)] hover:text-[var(--foreground)]"
        )}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("pl")}
        className={cn(
          "relative z-10 cursor-pointer rounded-full px-2.5 py-1 transition-colors",
          language === "pl" ? "text-white" : "text-[var(--muted)] hover:text-[var(--foreground)]"
        )}
      >
        PL
      </button>
    </div>
  );
}
