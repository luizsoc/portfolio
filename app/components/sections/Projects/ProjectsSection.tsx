"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { PROJECTS } from "@/app/lib/content/projects";
import { getNavIndex } from "@/app/lib/navigation";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { dictionary } = useLanguage();

  const featured = PROJECTS.filter((project) => project.featured);
  const others = PROJECTS.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="border-b border-border py-24 last:border-b-0"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            index={getNavIndex("projects")}
            title={dictionary.projects.title}
            description={dictionary.projects.description}
          />
        </RevealOnScroll>

        <div className="flex flex-col gap-6">
          {featured.map((project) => (
            <RevealOnScroll key={project.id}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}

          {others.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 0.06}>
                  <ProjectCard project={project} />
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
