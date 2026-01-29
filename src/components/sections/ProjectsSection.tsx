"use client";

import { Card } from "@/components/ui/card";
import { Bleed } from "@/components/ui/bleed";
import { LinkComponent } from "@/components/common/link-component";
import { Icon, getStackIcon } from "@/lib/iconify";
import type { Translations } from "@/i18n/types";

type Project = Translations["projects"][number];

interface ProjectsSectionProps {
  translations: Translations;
  onProjectClick: (projectName: string) => void;
}

export function ProjectsSection({ translations, onProjectClick }: ProjectsSectionProps) {
  const { projectsTitle: title, projectsSubtitle: subtitle, projects } = translations;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="break-words text-lg font-semibold sm:text-xl">
          <LinkComponent href="/projects">{title}</LinkComponent>
        </h2>

        <span className="whitespace-nowrap text-xs text-[var(--muted)]">{subtitle}</span>
      </div>

      <Bleed className="-mx-0">
        <div className="grid lg:w-[115%] gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 md:py-2 lg:relative lg:-left-[7.5%] lg:-right-[7.5%]">
          {projects.map((project) => (
            <Card key={project.name} className="p-3 shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:p-4">
              <img
                alt={`${project.name} preview`}
                className="rounded-lg border border-[var(--border)] object-cover object-top sm:rounded-xl"
                src={project.image}
              />

              <div className="mt-2 break-words text-xs text-[var(--muted)] sm:mt-3 sm:text-sm">{project.tag}</div>

              <div className="mt-1.5 break-words text-base font-semibold sm:mt-2 sm:text-lg">
                <LinkComponent href={`https://${project.name}`} onClick={() => onProjectClick(project.name)}>
                  {project.name}
                </LinkComponent>
              </div>

              <p className="mt-1.5 break-words text-xs leading-relaxed text-[var(--muted)] text-justify sm:mt-2 sm:text-sm">
                {project.desc}
              </p>

              {project.stack && (
                <div className="mt-3 flex flex-wrap gap-2.5 sm:mt-4">
                  {project.stack.map((icon: string) =>
                    icon.startsWith("/") ? (
                      <img
                        key={icon}
                        src={icon}
                        alt="tech stack"
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
            </Card>
          ))}
        </div>
      </Bleed>
    </section>
  );
}
