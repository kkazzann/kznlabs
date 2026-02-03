"use client";

import { useLanguage } from "@/components/features/language-provider";
import { WindowControls } from "@/components/features/window-controls";
import { LanguageSwitcher } from "@/components/features/language-switcher";
import { LinkComponent } from "@/components/common/link-component";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";

export function Header() {
  const { language } = useLanguage();
  const t = language === "en" ? en : pl;

  return (
    <header className="relative flex items-center justify-between border-b border-[var(--border)] px-3 py-3 sm:px-5 sm:py-4">
      <WindowControls />

      <div className="absolute left-1/2 hidden -translate-x-1/2 text-sm font-semibold text-[var(--foreground)]/80 sm:block">
        kznlabs.com
      </div>

      <nav className="flex items-center gap-2 text-xs text-[var(--muted)] sm:gap-3 sm:text-sm">
        <LanguageSwitcher />

        <LinkComponent href="https://github.com/kkazzann" className="hidden sm:inline-flex">
          {t.footer.social.github}
        </LinkComponent>

        <LinkComponent href="https://discordapp.com/users/205983099647950848" className="hidden sm:inline-flex">
          {t.footer.social.discord}
        </LinkComponent>
      </nav>
    </header>
  );
}
