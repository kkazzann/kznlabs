"use client";

import { useLanguage } from "@/components/features/language-provider";
import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";
import { notFound } from "next/navigation";
import { Icon, getStackIcon } from "@/lib/iconify";
import { Footer } from "../common/Footer";
import Image from "next/image";

interface ProjectDetailViewProps {
  projectId: string;
}

export function ProjectDetailView({ projectId }: ProjectDetailViewProps) {
  const { language } = useLanguage();
  const t = language === "en" ? en : pl;

  const project = t.projects.find((p) => {
    const slug = p.name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
    return slug === projectId;
  });

  if (!project) {
    notFound();
  }

  return (
    <>
      <Image className="rounded rounded-lg" width={500} height={500} src={project.image} alt={project.name} />
      <h1>{project.name}</h1>
      <p>{project.desc}</p>
      <p>{project.tag}</p>

      {project.stack && (
        <div className="mt-3 flex flex-wrap gap-2.5 sm:mt-4">
          {project.stack.map((icon: string) =>
            icon.startsWith("/") ? (
              <img
                key={icon}
                src={icon}
                alt={`${project.name} tech stack icon`}
                className="size-5 object-contain opacity-80 transition-opacity hover:opacity-100"
                width="20"
                height="20"
              />
            ) : (
              (() => {
                const stackIcon = getStackIcon(icon);
                return stackIcon ? (
                  <Icon
                    key={icon}
                    icon={stackIcon}
                    className="size-5 opacity-80 transition-opacity hover:opacity-100"
                  />
                ) : null;
              })()
            ),
          )}
        </div>
      )}

      <Footer translations={t} />
    </>
  );
}
