"use client";

import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { cn } from "@/app/lib/utils";
import type { Project } from "@/app/types";

function repoPath(githubUrl: string) {
  return githubUrl.replace(/^https?:\/\/github\.com\//, "");
}

export function ProjectCard({ project }: { project: Project }) {
  const { dictionary } = useLanguage();
  const description = dictionary.projects.items[project.id].description;
  const categoryLabel = dictionary.projects.categoryLabels[project.category];

  return (
    <Card
      interactive
      className={cn(
        "group flex h-full flex-col gap-5",
        project.featured && "gap-6 p-8 sm:p-10"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        {project.featured ? (
          <span className="font-mono text-xs tracking-widest text-accent uppercase">
            {dictionary.projects.featuredLabel}
          </span>
        ) : (
          <span />
        )}
        <Badge>{categoryLabel}</Badge>
      </div>

      <div className="flex flex-col gap-1">
        <h3
          className={cn(
            "font-semibold text-foreground",
            project.featured ? "text-3xl" : "text-xl"
          )}
        >
          {project.name}
        </h3>
        <p className="font-mono text-xs text-foreground-subtle">
          {repoPath(project.githubUrl)}
        </p>
      </div>

      <p
        className={cn(
          "leading-relaxed text-foreground-muted",
          project.featured ? "max-w-2xl text-base" : "text-sm"
        )}
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-auto pt-2">
        <Button
          variant={project.featured ? "primary" : "secondary"}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {dictionary.projects.githubLabel}
        </Button>
      </div>
    </Card>
  );
}
