"use client";

import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import type { Translations } from "@/i18n/types";

type TimelineItem = Translations["timeline"][number];

interface TimelineSectionProps {
  translations: Translations;
}

export function TimelineSection({ translations }: TimelineSectionProps) {
  const { timelineTitle: title, timelineSubtitle: subtitle, timeline, timelineToast } = translations;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="break-words text-lg font-semibold sm:text-xl">{title}</h2>
        <span className="whitespace-nowrap text-xs text-[var(--muted)]">{subtitle}</span>
      </div>
      <div className="space-y-2.5 sm:space-y-3">
        {timeline.map((item) => (
          <Card key={item.title} className="p-3 sm:p-4">
            <div className="text-xs text-[var(--muted)]">{item.period}</div>
            <div className="mt-1.5 break-words text-sm font-semibold sm:mt-2 sm:text-base">{item.title}</div>
            <div
              className="break-words text-xs text-[var(--muted)] sm:text-sm"
              onClick={() => toast.warning(timelineToast)}
            >
              <span className="obscured-text">{item.place}</span>
            </div>
            <p className="mt-1.5 break-words text-xs leading-relaxed text-[var(--muted)] sm:mt-2 sm:text-sm">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
