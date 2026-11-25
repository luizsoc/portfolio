"use client";

import { ArrowUpRight } from "lucide-react";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { GitHubIcon } from "@/app/components/ui/icons";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import type { Project } from "@/app/types";

function repoPath(githubUrl: string) {
  return githubUrl.replace(/^https?:\/\/github\.com\//, "");
}

export function ProjectCard({ project }: { project: Project }) {
  const { dictionary } = useLanguage();
  const { projects } = dictionary;

  return (
    <Card interactive className="flex h-full flex-col gap-5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{projects.categoryLabels[project.category]}</Badge>
        {project.academic && <Badge>{projects.academicLabel}</Badge>}
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
          {project.name}
        </h4>
        {project.githubUrl && (
          <p className="font-mono text-xs text-foreground-subtle">
            {repoPath(project.githubUrl)}
          </p>
        )}
      </div>

      <p className="text-sm leading-relaxed text-pretty text-foreground-muted">
        {projects.items[project.id].description}
      </p>

      <ul className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-md pt-1 text-sm text-foreground-muted transition-colors duration-150 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <GitHubIcon size={15} />
          {projects.repositoryLabel}
          <ArrowUpRight aria-hidden="true" size={14} />
          <span className="sr-only">— {project.name}</span>
        </a>
      )}
    </Card>
  );
}
