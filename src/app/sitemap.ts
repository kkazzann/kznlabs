import { MetadataRoute } from "next";
import en from "@/i18n/en.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kznlabs.com";

  const projects = en.projects.map((project) => ({
    url: `${baseUrl}/project/${project.name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogArticles = [
    {
      url: `${baseUrl}/blog/placeholder`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projects,
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogArticles,
  ];
}
