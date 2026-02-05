import type { Metadata } from "next";

import { ProjectDetailView } from "@/components/features/ProjectDetailView";
import { defaultLocale, isLocale, type Locale } from "@/i18n/locales";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";

function toProjectSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; projectId: string }>;
}): Promise<Metadata> {
  const { lang, projectId } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;
  const t = locale === "en" ? en : pl;

  const project = t.projects.find((p) => toProjectSlug(p.name) === projectId);
  if (!project) {
    return {
      title: locale === "pl" ? "Projekt | kznlabs" : "Project | kznlabs",
      alternates: {
        canonical: locale === "pl" ? `/pl/projects/${projectId}` : `/en/projects/${projectId}`,
        languages: {
          en: `/en/projects/${projectId}`,
          pl: `/pl/projects/${projectId}`,
        },
      },
    };
  }

  return {
    title: `${project.name} | kznlabs`,
    description: project.desc,
    alternates: {
      canonical: locale === "pl" ? `/pl/projects/${projectId}` : `/en/projects/${projectId}`,
      languages: {
        en: `/en/projects/${projectId}`,
        pl: `/pl/projects/${projectId}`,
      },
    },
    openGraph: {
      title: `${project.name} | kznlabs`,
      description: project.desc,
      images: [{ url: project.image, alt: `${project.name} preview` }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; projectId: string }>;
}) {
  const { projectId } = await params;

  return <ProjectDetailView projectId={projectId} />;
}
