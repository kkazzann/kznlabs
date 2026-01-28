"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { Marquee } from "@/components/ui/marquee";
import type { Translations } from "@/i18n/types";
import { trackCertificateClick } from "@/lib/analytics";

type Certificate = Translations["certificates"][number];

interface CertificatesSectionProps {
  translations: Translations;
}

export function CertificatesSection({ translations }: CertificatesSectionProps) {
  const {
    certificatesTitle: title,
    certificatesSubtitle: subtitle,
    certificates,
    certificateButton: buttonText,
  } = translations;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="break-words text-lg font-semibold sm:text-xl">{title}</h2>
        <span className="whitespace-nowrap text-xs text-[var(--muted)]">{subtitle}</span>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {certificates.map((cert: Certificate) => {
          const CardWrapper = cert.credentialUrl ? "a" : "div";
          const showGoogleSghBranding = cert.image === "/umiejetnosci_jutra.png";
          const cardProps = cert.credentialUrl
            ? {
                href: cert.credentialUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "block transition-transform hover:scale-[1.01]",
                onClick: () => trackCertificateClick(cert.title, cert.issuer),
              }
            : {};

          return (
            <CardWrapper key={cert.title} {...cardProps}>
              <Card className="w-full overflow-hidden">
                  <div className="grid w-full gap-4 overflow-hidden sm:gap-6 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr]">
                    <div className="relative min-h-[150px] bg-white sm:min-h-[200px]">
                      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                        <img src={cert.image} alt={cert.title} className="h-full w-full object-contain" width="400" height="200" />
                      </div>
                    </div>

                    <div className="flex min-w-0 flex-col gap-3 p-4 sm:gap-4 sm:p-6">
                      <div className="space-y-2 text-center sm:space-y-3 sm:text-left">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                          <div className="min-w-0 flex-1">
                            <div className="break-words text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                              {cert.issuer}
                            </div>
                            <h3 className="mt-1 break-words text-base font-semibold text-[var(--foreground)] sm:text-lg md:text-xl">{cert.title}</h3>
                          </div>
                          {cert.credentialUrl && (
                            <button className="hidden w-fit cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg border border-[var(--border)] px-2.5 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)] sm:flex sm:px-3">
                              <Icon icon="mdi:open-in-new" className="h-3.5 w-3.5" />
                              {buttonText}
                            </button>
                          )}
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 text-xs text-[var(--muted)] sm:justify-start sm:gap-3">
                          <div className="flex items-center gap-1.5">
                            <Icon icon="mdi:calendar" className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="break-words">{cert.date}</span>
                          </div>
                          {cert.duration && (
                            <div className="flex items-center gap-1.5">
                              <Icon icon="mdi:clock-outline" className="h-3.5 w-3.5 flex-shrink-0" />
                              <span className="break-words">{cert.duration}</span>
                            </div>
                          )}
                        </div>

                        <p className="break-words text-xs leading-relaxed text-[var(--muted)] text-justify sm:text-sm">{cert.description}</p>
                      </div>

                      {cert.skills.length > 0 && (
                        <div className="overflow-hidden">
                          <div className="hidden sm:flex sm:flex-wrap sm:gap-1.5">
                            {cert.skills.map((skill) => (
                              <Badge key={skill} className="break-words text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <Marquee className="sm:hidden" speed="slow" pauseOnHover>
                            {cert.skills.map((skill) => (
                              <Badge key={skill} className="flex-shrink-0 whitespace-nowrap text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </Marquee>
                        </div>
                      )}

                      {cert.credentialUrl && (
                        <button
                          className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-2.5 text-xs font-medium text-[var(--muted)] transition-colors hover:border-[var(--foreground)] hover:text-[var(--foreground)] sm:hidden"
                          onClick={() => trackCertificateClick(cert.title, cert.issuer)}
                        >
                          <Icon icon="mdi:open-in-new" className="h-3.5 w-3.5" />
                          {buttonText}
                        </button>
                      )}

                      {showGoogleSghBranding && (
                        <div className="flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-3 sm:gap-6 sm:pt-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[var(--muted)]">Organizer:</span>
                            <img
                              src="/google.webp"
                              alt="Google"
                              className="h-4"
                              style={{ aspectRatio: "1280/433" }}
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[var(--muted)]">Partner:</span>
                            <img
                              src="/sgh.png"
                              alt="SGH"
                              className="h-6 opacity-80"
                              style={{ aspectRatio: "232/153" }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}
