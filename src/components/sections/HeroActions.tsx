"use client";

import type { Translations } from "@/i18n/types";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { trackCtaClick, trackSocialClick } from "@/lib/analytics";

interface HeroActionsProps {
  translations: Translations;
  onEmailCopy: () => void;
  className?: string;
}

export function HeroActions({ translations, onEmailCopy, className }: HeroActionsProps) {
  return (
    <div className={cn("flex flex-col items-center gap-3 pt-2 sm:flex-row sm:items-center sm:items-start", className)}>
      <button
        onClick={() => {
          trackCtaClick("hero_actions");
          onEmailCopy();
        }}
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg sm:w-auto sm:px-6 sm:py-3"
      >
        {translations.ctaButton}
        <Icon icon="mdi:arrow-right" className="size-4" />
      </button>
      <div className="flex gap-2 sm:gap-2">
        <a
          href="https://github.com/kkazzann"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          onClick={() => trackSocialClick("github", "hero_actions")}
        >
          <Icon icon="mdi:github" className="h-4 w-4" />
        </a>
        <a
          href="https://linkedin.com/in/kamil-kazaniecki"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          onClick={() => trackSocialClick("linkedin", "hero_actions")}
        >
          <Icon icon="mdi:linkedin" className="h-4 w-4" />
        </a>
        <a
          href="https://discordapp.com/users/205983099647950848"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord profile"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          onClick={() => trackSocialClick("discord", "hero_actions")}
        >
          <Icon icon="ic:baseline-discord" className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
