"use client";

import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { PROJECTS } from "@/app/lib/content/projects";
import { cn } from "@/app/lib/utils";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { dictionary } = useLanguage();

  const featured = PROJECTS.filter((project) => project.featured);
  const others = PROJECTS.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-b border-border py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <SectionHeading
            label={dictionary.nav.projects}
            title={dictionary.projects.title}
            description={dictionary.projects.description}
          />
        </RevealOnScroll>

        <div className="flex flex-col gap-4">
          {featured.map((project) => (
            <RevealOnScroll key={project.id}>
              <FeaturedProject project={project} />
            </RevealOnScroll>
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-16">
            <RevealOnScroll>
              <h3 className="mb-4 font-mono text-xs text-foreground-subtle">
                {dictionary.projects.otherTitle}
              </h3>
            </RevealOnScroll>
            <div className={cn("grid gap-4", others.length > 1 && "md:grid-cols-2")}>
              {others.map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 0.06} className="h-full">
                  <ProjectCard project={project} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
