"use client";

import { Card } from "@/components/ui/card";
import { LinkComponent } from "@/components/common/link-component";
import type { Translations } from "@/i18n/types";
import { trackBlogClick } from "@/lib/analytics";

interface BlogSectionProps {
  translations: Translations;
  blogPlaceholderImage: string;
  showContent: boolean;
  hideSkeleton: boolean;
}

export function BlogSection({
  translations,
  blogPlaceholderImage,
  showContent,
  hideSkeleton,
}: BlogSectionProps) {
  const {
    postsTitle: title,
    postsSubtitle: subtitle,
    postCategory,
    postTitle,
    postExcerpt,
  } = translations;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="break-words text-lg font-semibold sm:text-xl">
          <LinkComponent href="/blog" onClick={() => trackBlogClick("section_title")}>
            {title}
          </LinkComponent>
        </h2>
        <span className="whitespace-nowrap text-xs text-[var(--muted)]">{subtitle}</span>
      </div>
      <div className="relative">
        {!hideSkeleton && (
          <div
            className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${showContent ? "opacity-0" : "opacity-100"}`}
          >
            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="p-3 sm:p-4">
                  <div className="h-32 w-full animate-pulse rounded-lg bg-[var(--border)] sm:h-40 sm:rounded-xl" />
                  <div className="mt-2 h-3 w-16 animate-pulse rounded bg-[var(--border)] sm:mt-3" />
                  <div className="mt-2 h-4 w-40 animate-pulse rounded bg-[var(--border)]" />
                  <div className="mt-2 h-3 w-full animate-pulse rounded bg-[var(--border)]" />
                </Card>
              ))}
            </div>
          </div>
        )}
        <div
          className={`grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
        >
          {[1, 2, 3].map((item) => (
            <Card key={item} className="p-3 sm:p-4">
              <div className="space-y-2 sm:space-y-3">
                <img alt="Blog placeholder" className="h-32 w-full rounded-lg object-cover sm:h-40 sm:rounded-xl" src={blogPlaceholderImage} width="640" height="360" />
                <div className="break-words text-xs text-[var(--muted)] sm:text-sm">{postCategory}</div>
                <div className="break-words text-sm font-semibold sm:text-base">{postTitle}</div>
                <p className="break-words text-xs leading-relaxed text-[var(--muted)] sm:text-sm">{postExcerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
