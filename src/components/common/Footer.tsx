"use client";

import { LinkComponent } from "@/components/common/link-component";
import type { Translations } from "@/i18n/types";

interface FooterProps {
  translations: Translations;
}

export function Footer({ translations }: FooterProps) {
  const { footer } = translations;

  return (
    <footer className="mt-12 border-t border-[var(--border)] pt-6 sm:mt-16 sm:pt-8">
      <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
        <div className="flex items-center gap-2 text-xs font-medium sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 will-change-[transform,opacity]"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-[var(--foreground)]">{footer.availableForHire}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:gap-6">
          <LinkComponent
            href="https://github.com/kkazzann"
            className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            {footer.social.github}
          </LinkComponent>
          <LinkComponent
            href="https://linkedin.com/in/kamil-kazaniecki"
            className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            {footer.social.linkedin}
          </LinkComponent>
          <LinkComponent
            href="https://discordapp.com/users/205983099647950848"
            className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            {footer.social.discord}
          </LinkComponent>
        </div>

        <div className="flex flex-col items-center gap-1.5 sm:gap-2">
          <p className="break-words px-4 text-xs text-[var(--muted)]">{footer.copyright}</p>
          <LinkComponent
            href="https://github.com/kkazzann/kznlabs/blob/main/LICENSE.md"
            className="text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            {footer.license}
          </LinkComponent>
        </div>
      </div>
    </footer>
  );
}
