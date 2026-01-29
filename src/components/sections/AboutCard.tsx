"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { Translations } from "@/i18n/types";
import { Icon, contentCopy } from "@/lib/iconify";

interface AboutCardProps {
  translations: Translations;
  onEmailCopy: () => void;
  onPhoneClick: () => void;
  onDiscordCopy: () => void;
}

export function AboutCard({ translations, onEmailCopy, onPhoneClick, onDiscordCopy }: AboutCardProps) {
  const {
    aboutTitle,
    aboutName,
    aboutBody,
    labels,
    locationValue,
    availabilityValue,
    phoneHidden,
    emailHidden,
    discordHidden,
  } = translations;

  return (
    <Card className="w-full bg-[var(--background)] p-4 sm:p-5">
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="relative rounded-full border-2 border-green-500 p-0.5">
            <Avatar alt="Kamil Kazaniecki" src="/logo.png" />

            {/* "signal" dot */}
            <div className="absolute -bottom-0.5 -right-0.5">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 will-change-[transform,opacity]"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
              </span>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="break-words text-base font-semibold sm:text-lg">{aboutTitle}</h2>
            <div className="break-words text-xs text-[var(--muted)] sm:text-sm">{aboutName}</div>
          </div>
        </div>

        <p className="break-words text-xs leading-relaxed text-[var(--muted)] text-justify sm:text-sm">{aboutBody}</p>

        <div className="grid gap-1.5 text-xs text-[var(--muted)] sm:gap-2 sm:text-sm">
          <div className="break-words">
            <span className="font-semibold text-[var(--foreground)]">{labels.location}</span> {locationValue}
          </div>

          <div className="break-words">
            <span className="font-semibold text-[var(--foreground)]">{labels.availability}</span> {availabilityValue}
          </div>

          <div className="break-words">
            <span className="font-semibold text-[var(--foreground)]">{labels.phone}</span>{" "}
            <button
              className="obscured-text cursor-pointer inline-block px-1 py-0.5 transition-opacity hover:opacity-90"
              onClick={onPhoneClick}
            >
              {phoneHidden}
            </button>
          </div>

          <div className="break-words">
            <span className="font-semibold text-[var(--foreground)]">{labels.contact}</span>{" "}
            <button
              className="obscured-text cursor-pointer inline-block px-1 py-0.5 transition-opacity hover:opacity-90"
              onClick={onEmailCopy}
            >
              {emailHidden}
            </button>
          </div>

          <div className="break-words">
            <span className="font-semibold text-[var(--foreground)]">{labels.discord}</span>{" "}
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[var(--foreground)] transition-colors hover:text-[var(--foreground)]/80 cursor-pointer"
              onClick={onDiscordCopy}
              aria-label="Copy Discord handle"
            >
              <span>{discordHidden}</span>
              <Icon icon={contentCopy} className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
