import { MetadataRoute } from "next";
import en from "@/i18n/en.json";
import { locales } from "@/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kznlabs.com";

  const allUrls = new Set<string>();

  const toProjectSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");

  for (const locale of locales) {
    allUrls.add(`${baseUrl}/${locale}`);
    allUrls.add(`${baseUrl}/${locale}/projects`);
    allUrls.add(`${baseUrl}/${locale}/blog`);

    for (const project of en.projects) {
      allUrls.add(`${baseUrl}/${locale}/projects/${toProjectSlug(project.name)}`);
    }
  }

  const now = new Date();
  return Array.from(allUrls).map((url) => ({
    url,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: url.endsWith("/en") || url.endsWith("/pl") ? 1 : 0.8,
  }));
}
