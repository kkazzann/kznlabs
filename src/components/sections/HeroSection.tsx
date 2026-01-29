"use client";

import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import type { Translations } from "@/i18n/types";
import { HeroActions } from "@/components/sections/HeroActions";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  translations: Translations;
  onEmailCopy: () => void;
}

export function HeroSection({ translations, onEmailCopy }: HeroSectionProps) {
  const { heroLabel, heroTitle, heroDescription, badges, ctaButton } = translations;
  const featuredBadge = "React & Next.js";

  return (
    <div className="min-w-0 w-full space-y-4 text-center sm:text-left">
      <div className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] sm:tracking-[0.3em]">{heroLabel}</div>
      <h1 className="break-words text-2xl font-semibold leading-tight text-[var(--foreground)] sm:text-3xl md:text-4xl">
        {heroTitle}
      </h1>
      <p className="mx-auto max-w-xl break-words text-sm leading-relaxed text-[var(--muted)] text-justify sm:mx-0 sm:text-base">
        {heroDescription}
      </p>
      <div className="w-full overflow-hidden">
        <Marquee speed="slow" pauseOnHover>
          {badges.map((badge) => (
            <Badge
              key={badge}
              className={cn(
                "flex-shrink-0 whitespace-nowrap",
                badge === featuredBadge && "border-transparent bg-[var(--accent)] text-white",
              )}
            >
              {badge}
            </Badge>
          ))}
        </Marquee>
      </div>
      <HeroActions translations={translations} onEmailCopy={onEmailCopy} className="hidden sm:flex" />
    </div>
  );
}
