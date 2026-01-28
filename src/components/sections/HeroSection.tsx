"use client";

import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import type { Translations } from "@/i18n/types";
import { HeroActions } from "@/components/sections/HeroActions";

interface HeroSectionProps {
  translations: Translations;
  onEmailCopy: () => void;
}

export function HeroSection({
  translations,
  onEmailCopy,
}: HeroSectionProps) {
  const { heroLabel, heroTitle, heroDescription, badges, ctaButton } = translations;

  return (
    <div className="min-w-0 w-full space-y-4 text-center sm:text-left">
      <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] sm:tracking-[0.3em]">{heroLabel}</div>
      <h1 className="break-words text-2xl font-semibold leading-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">{heroTitle}</h1>
      <p className="mx-auto max-w-xl break-words text-sm leading-relaxed text-[var(--muted)] text-justify sm:mx-0 sm:text-base">{heroDescription}</p>
      <div className="w-full overflow-hidden">
        <div className="hidden sm:flex sm:flex-wrap sm:justify-start sm:gap-3">
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
        <Marquee className="sm:hidden" speed="slow" pauseOnHover>
          {badges.map((badge) => (
            <Badge key={badge} className="flex-shrink-0 whitespace-nowrap">{badge}</Badge>
          ))}
        </Marquee>
      </div>
      <HeroActions translations={translations} onEmailCopy={onEmailCopy} className="hidden sm:flex" />
    </div>
  );
}
