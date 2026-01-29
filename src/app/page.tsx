"use client";

import { useEffect, useState } from "react";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";
import { toast } from "sonner";
import { useLanguage } from "@/components/features/language-provider";
import { trackLead, trackProjectClick, trackSocialCopy } from "@/lib/analytics";

import { HeroSection } from "@/components/sections/HeroSection";
import { HeroActions } from "@/components/sections/HeroActions";
import { AboutCard } from "@/components/sections/AboutCard";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Footer } from "@/components/common/Footer";

const blogPlaceholderImage = "https://placehold.co/640x360?text=coming+soon&font=poppins";
const emailAddress = "contact@kznlabs.com";

export default function Home() {
  const { language, isReady } = useLanguage();
  const [showContent, setShowContent] = useState(false);
  const [hideSkeleton, setHideSkeleton] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    const showTimer = setTimeout(() => setShowContent(true), 50);
    const hideTimer = setTimeout(() => setHideSkeleton(true), 500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
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

  const handleDiscordCopy = () => {
    trackSocialCopy("discord", "about_card");
    navigator.clipboard.writeText(t.discordHidden);
    toast.success(t.discordCopiedToast);
  };

  return (
    <div className="relative">
      <div className="space-y-10 sm:space-y-12 md:space-y-16">
        <section className="grid gap-6 md:gap-6 lg:grid-cols-[1.2fr_1fr]">
          <HeroSection translations={t} onEmailCopy={handleEmailCopy} />
          <AboutCard
            translations={t}
            onEmailCopy={handleEmailCopy}
            onPhoneClick={handlePhoneClick}
            onDiscordCopy={handleDiscordCopy}
          />
          <HeroActions translations={t} onEmailCopy={handleEmailCopy} className="sm:hidden pt-0" />
        </section>

        <ProjectsSection translations={t} onProjectClick={trackProjectClick} />

        <TimelineSection translations={t} />

        <CertificatesSection translations={t} />

        <BlogSection
          translations={t}
          blogPlaceholderImage={blogPlaceholderImage}
          showContent={showContent}
          hideSkeleton={hideSkeleton}
        />

        <Footer translations={t} />
      </div>
    </div>
  );
}
