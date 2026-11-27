"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { GitHubIcon } from "@/app/components/ui/icons";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import {
  PIPELINE_METRICS,
  PIPELINE_ORCHESTRATOR,
  PIPELINE_RUNTIME,
  PIPELINE_STAGES,
} from "@/app/lib/content/pipeline";
import { cn } from "@/app/lib/utils";
import type { PipelineMetric, Project } from "@/app/types";

export function FeaturedProject({ project }: { project: Project }) {
  const { dictionary, locale } = useLanguage();
  const { projects, pipeline } = dictionary;
  const content = projects.items[project.id];
  const numberLocale = locale === "pt" ? "pt-BR" : "en-US";

  function formatMetric(metric: PipelineMetric) {
    return new Intl.NumberFormat(numberLocale, {
      style: metric.format === "percent" ? "percent" : "decimal",
      maximumFractionDigits: 1,
    }).format(metric.value);
  }

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
    <article className="grid overflow-hidden rounded-2xl border border-border-strong bg-surface lg:grid-cols-[1.4fr_1fr]">
      <div className="flex flex-col gap-8 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-accent/25 bg-accent-dim/50 text-accent-strong">
              {projects.featuredLabel}
            </Badge>
            {project.categories.map((category) => (
              <Badge key={category}>{projects.categoryLabels[category]}</Badge>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">
              {project.name}
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-pretty text-foreground-muted">
              {content.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-mono text-xs text-foreground-subtle">
            {projects.metricsLabel}
          </h4>
          <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-border sm:grid-cols-4">
            {PIPELINE_METRICS.map((metric, index) => (
              <div
                key={metric.id}
                className={cn(
                  "flex flex-col-reverse justify-end gap-1 bg-background/40 p-4",
                  index % 2 === 1 && "border-l border-border",
                  index > 1 && "border-t border-border sm:border-t-0",
                  index === 2 && "sm:border-l"
                )}
              >
                <dt className="text-xs leading-snug text-foreground-subtle">
                  {pipeline.metrics[metric.id]}
                </dt>
                <dd className="font-mono text-xl font-medium tracking-tight text-foreground">
                  {formatMetric(metric)}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {content.highlights && (
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs text-foreground-subtle">
              {projects.highlightsLabel}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {content.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                >
                  <Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto">
          <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <GitHubIcon size={15} />
            {projects.repositoryLabel}
            <ArrowUpRight aria-hidden="true" size={15} />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-8 border-t border-border bg-background/40 p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-10">
        <div>
          <h4 className="mb-2 font-mono text-xs text-foreground-subtle">
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

        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
