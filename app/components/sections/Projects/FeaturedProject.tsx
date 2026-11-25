"use client";

import { ArrowUpRight, Check, Lock } from "lucide-react";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { StatusDot } from "@/app/components/ui/StatusDot";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import {
  PIPELINE_ORCHESTRATOR,
  PIPELINE_RUNTIME,
  PIPELINE_STAGES,
} from "@/app/lib/content/pipeline";
import type { Project } from "@/app/types";

export function FeaturedProject({ project }: { project: Project }) {
  const { dictionary } = useLanguage();
  const { projects, pipeline } = dictionary;
  const content = projects.items[project.id];

  // Each tool shown next to the role it plays in the pipeline.
  const stackRows = [
    ...PIPELINE_STAGES.map((stage) => ({
      role: pipeline.stages[stage.id].label,
      tech: stage.tech,
    })),
    { role: pipeline.orchestration, tech: PIPELINE_ORCHESTRATOR },
    { role: pipeline.runtime, tech: PIPELINE_RUNTIME },
  ];

  return (
    <article className="grid overflow-hidden rounded-2xl border border-border-strong bg-surface lg:grid-cols-[1.3fr_1fr]">
      <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="border-accent/25 bg-accent-dim/50 text-accent-strong">
            {projects.featuredLabel}
          </Badge>
          <Badge>{projects.categoryLabels[project.category]}</Badge>
          {project.inDevelopment && (
            <Badge className="border-warning/25 bg-warning-dim/60 text-warning">
              <StatusDot tone="warning" pulse />
              {projects.inDevelopmentLabel}
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
            {project.name}
          </h3>
          <p className="max-w-xl text-base leading-relaxed text-pretty text-foreground-muted">
            {content.description}
          </p>
        </div>

        {content.goals && (
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-foreground-subtle">
              {projects.goalsLabel}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {content.goals.map((goal) => (
                <li key={goal} className="flex gap-3 text-sm text-foreground-muted">
                  <Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-accent" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-2">
          {project.githubUrl ? (
            <Button
              variant="secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projects.repositoryLabel}
              <ArrowUpRight aria-hidden="true" size={15} />
            </Button>
          ) : (
            <p className="inline-flex items-center gap-2 font-mono text-xs text-foreground-subtle">
              <Lock aria-hidden="true" size={13} />
              {projects.repositoryPending}
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-border bg-background/40 p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
        <h4 className="mb-4 font-mono text-xs text-foreground-subtle">
          {projects.stackLabel}
        </h4>
        <dl className="flex flex-col">
          {stackRows.map((row) => (
            <div
              key={row.role}
              className="flex items-center justify-between gap-4 border-b border-border py-3 last:border-b-0"
            >
              <dt className="text-sm text-foreground-muted">{row.role}</dt>
              <dd className="font-mono text-sm text-foreground">{row.tech}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
