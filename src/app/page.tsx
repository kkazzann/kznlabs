"use client";

import { useEffect, useState } from "react";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bleed } from "@/components/ui/bleed";
import { Card } from "@/components/ui/card";
import { LinkComponent } from "@/components/ui/link-component";
import { toast } from "sonner";
import { useLanguage } from "@/components/ui/language-provider";
import { Icon } from "@iconify/react";
import { trackLead, trackProjectClick } from "@/lib/analytics";

const blogPlaceholderImage = "https://placehold.co/640x360?text=Blog+Post&font=poppins";
const emailAddress = "contact@kznlabs.com";

export default function Home() {
  const { language, isReady } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [hideSkeleton, setHideSkeleton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const showTimer = window.setTimeout(() => {
      setShowContent(true);
    }, 50);

    const hideTimer = window.setTimeout(() => {
      setHideSkeleton(true);
    }, 500);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [isReady]);

  const copy = { en, pl } as const;
  const t = copy[language];

  const handleEmailCopy = () => {
    trackLead("email", "copy");
    toast(t.emailToast, {
      action: {
        label: t.emailActionLabel,
        onClick: () => {
          navigator.clipboard.writeText(emailAddress);
          toast.success(t.emailCopiedToast);
        },
      },
    });
  };

  const handlePhoneClick = () => {
    trackLead("phone", "click");
    toast.warning(t.phoneToast);
  };

  return (
    <div className="relative">
      <div className="space-y-10">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{t.heroLabel}</div>
            <h1 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">{t.heroTitle}</h1>
            <p className="max-w-xl text-base leading-relaxed text-[var(--muted)]">{t.heroDescription}</p>
            <div className="flex flex-wrap gap-3">
              {t.badges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={handleEmailCopy}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
              >
                {t.ctaButton}
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          <Card className="bg-[var(--background)] p-5">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative rounded-full border-2 border-green-500 p-0.5">
                  <Avatar alt="Kamil Kazaniecki" src="/AREmoji_20230713_004935%201.png" />
                  <div className="absolute -bottom-0.5 -right-0.5">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{t.aboutTitle}</h2>
                  <div className="text-sm text-[var(--muted)]">{t.aboutName}</div>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)]">{t.aboutBody}</p>
              <div className="grid gap-2 text-sm text-[var(--muted)]">
                <div>
                  <span className="font-semibold text-[var(--foreground)]">{t.labels.location}</span> {t.locationValue}
                </div>
                <div>
                  <span className="font-semibold text-[var(--foreground)]">{t.labels.availability}</span>{" "}
                  {t.availabilityValue}
                </div>
                <div>
                  <span className="font-semibold text-[var(--foreground)]">{t.labels.phone}</span>{" "}
                  <button
                    type="button"
                    className="obscured-text cursor-pointer transition-opacity hover:opacity-90"
                    onClick={handlePhoneClick}
                  >
                    {t.phoneHidden}
                  </button>
                </div>
                <div>
                  <span className="font-semibold text-[var(--foreground)]">{t.labels.contact}</span>{" "}
                  <button
                    type="button"
                    className="obscured-text cursor-pointer transition-opacity hover:opacity-90"
                    onClick={handleEmailCopy}
                  >
                    {t.emailHidden}
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              <LinkComponent href="/projects">{t.projectsTitle}</LinkComponent>
            </h2>
            <span className="text-xs text-[var(--muted)]">{t.projectsSubtitle}</span>
          </div>
          <Bleed>
            <div className="relative">
              {!hideSkeleton && (
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${showContent ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="grid w-full gap-4 md:grid-cols-3 md:py-2 [@media(min-width:1300px)]:w-[115%] [@media(min-width:1300px)]:-translate-x-[7.5%]">
                    {[1, 2, 3].map((item) => (
                      <Card key={item} className="p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] h-[332px]">
                        <div className="h-36 w-full animate-pulse rounded-xl bg-[var(--border)]" />
                        <div className="mt-3 h-3 w-20 animate-pulse rounded bg-[var(--border)]" />
                        <div className="mt-2 h-4 w-28 animate-pulse rounded bg-[var(--border)]" />
                        <div className="mt-2 h-3 w-full animate-pulse rounded bg-[var(--border)]" />
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              <div
                className={`grid w-full gap-4 md:grid-cols-3 md:py-2 [@media(min-width:1300px)]:w-[115%] [@media(min-width:1300px)]:-translate-x-[7.5%] transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
              >
                {t.projects.map((project) => (
                  <Card key={project.name} className="p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] h-[332px]">
                    <img
                      alt={`${project.name} preview`}
                      className="h-36 w-full rounded-xl border border-[var(--border)] object-cover"
                      src={project.image}
                    />
                    <div className="mt-3 text-sm text-[var(--muted)]">{project.tag}</div>
                    <div className="mt-2 text-lg font-semibold">
                      <LinkComponent href={`https://${project.name}`} onClick={() => trackProjectClick(project.name)}>
                        {project.name}
                      </LinkComponent>
                    </div>
                    <p className="mt-2 text-sm text-[var(--muted)]">{project.desc}</p>
                    {project.stack && (
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {project.stack.map((icon: string) =>
                          icon.startsWith("/") ? (
                            <img
                              key={icon}
                              src={icon}
                              alt="tech stack"
                              className="size-5 object-contain opacity-80 transition-opacity hover:opacity-100"
                            />
                          ) : (
                            <Icon
                              key={icon}
                              icon={icon}
                              className="size-5 opacity-80 transition-opacity hover:opacity-100"
                            />
                          ),
                        )}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </Bleed>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{t.timelineTitle}</h2>
            <span className="text-xs text-[var(--muted)]">{t.timelineSubtitle}</span>
          </div>
          <div className="space-y-3">
            {t.timeline.map((item) => (
              <Card key={item.title} className="p-4">
                <div className="text-xs text-[var(--muted)]">{item.period}</div>
                <div className="mt-2 text-base font-semibold">{item.title}</div>
                <div
                  className="text-sm cursor-pointer text-[var(--muted)]"
                  onClick={() => toast.warning(t.timelineToast)}
                >
                  <span className="obscured-text">{item.place}</span>
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              <LinkComponent href="/blog">{t.postsTitle}</LinkComponent>
            </h2>
            <span className="text-xs text-[var(--muted)]">{t.postsSubtitle}</span>
          </div>
          <div className="relative">
            {!hideSkeleton && (
              <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${showContent ? "opacity-0" : "opacity-100"}`}
              >
                <div className="grid gap-4 md:grid-cols-3">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="p-4 h-[310px]">
                      <div className="h-40 w-full animate-pulse rounded-xl bg-[var(--border)]" />
                      <div className="mt-3 h-3 w-16 animate-pulse rounded bg-[var(--border)]" />
                      <div className="mt-2 h-4 w-40 animate-pulse rounded bg-[var(--border)]" />
                      <div className="mt-2 h-3 w-full animate-pulse rounded bg-[var(--border)]" />
                    </Card>
                  ))}
                </div>
              </div>
            )}
            <div
              className={`grid gap-4 md:grid-cols-3 transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
            >
              {[1, 2, 3].map((item) => (
                <Card key={item} className="p-4 h-[310px]">
                  <div className="space-y-3">
                    <img
                      alt="Blog placeholder"
                      className="h-40 w-full rounded-xl object-cover"
                      src={blogPlaceholderImage}
                    />
                    <div className="text-sm text-[var(--muted)]">{t.postCategory}</div>
                    <div className="text-base font-semibold">{t.postTitle}</div>
                    <p className="text-sm text-[var(--muted)]">{t.postExcerpt}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-[var(--border)] pt-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-2 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-[var(--foreground)]">{t.footer.availableForHire}</span>
            </div>

            <div className="flex items-center gap-6">
              <LinkComponent
                href="https://github.com/"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {t.footer.social.github}
              </LinkComponent>
              <LinkComponent
                href="https://linkedin.com/"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {t.footer.social.linkedin}
              </LinkComponent>
              <LinkComponent
                href="https://twitter.com/"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {t.footer.social.twitter}
              </LinkComponent>
            </div>

            <p className="text-xs text-[var(--muted)]">{t.footer.copyright}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
