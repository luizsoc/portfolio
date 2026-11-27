"use client";

import {
  Archive,
  ArrowDownToLine,
  Container as ContainerIcon,
  Funnel,
  LayoutDashboard,
  Table2,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { StatusDot } from "@/app/components/ui/StatusDot";
import {
  PIPELINE_ORCHESTRATOR,
  PIPELINE_RUNTIME,
  PIPELINE_STAGES,
} from "@/app/lib/content/pipeline";
import type { PipelineStageId } from "@/app/types";

const STAGE_ICONS: Record<PipelineStageId, LucideIcon> = {
  extract: ArrowDownToLine,
  bronze: Archive,
  silver: Funnel,
  gold: Table2,
  dashboard: LayoutDashboard,
};

// A schematic of DataFlow Pipeline's Medallion flow (Bronze → Silver → Gold),
// ending in the Power BI report built on the Gold layer.
export function PipelineDiagram() {
  const { dictionary } = useLanguage();
  const { pipeline } = dictionary;

  return (
    <figure
      aria-label={`${pipeline.title} — ${pipeline.schedule}`}
      className="overflow-hidden rounded-xl border border-border-strong bg-surface shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)]"
    >
      <figcaption className="flex h-11 items-center justify-between gap-3 border-b border-border px-4">
        <span className="flex min-w-0 items-center gap-2 text-[13px] font-medium text-foreground">
          <Workflow aria-hidden="true" size={14} className="shrink-0 text-foreground-subtle" />
          <span className="truncate">{pipeline.title}</span>
          <span className="hidden rounded border border-border px-1.5 font-mono text-[11px] text-foreground-subtle sm:inline">
            DAG
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-accent/25 bg-accent-dim/50 px-2 py-0.5 font-mono text-[11px] text-accent-strong">
          <StatusDot />
          {pipeline.schedule}
        </span>
      </figcaption>

      <ol className="p-4 sm:p-5">
        {PIPELINE_STAGES.map((stage, index) => {
          const Icon = STAGE_ICONS[stage.id];
          const content = pipeline.stages[stage.id];
          const isLast = index === PIPELINE_STAGES.length - 1;

          return (
            <li key={stage.id}>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-3 py-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border-strong bg-surface-raised text-accent">
                  <Icon aria-hidden="true" size={15} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {content.label}
                  </span>
                  <span className="truncate text-xs text-foreground-subtle">
                    {content.detail}
                  </span>
                </span>
                <span className="shrink-0 rounded-md border border-border px-2 py-0.5 font-mono text-xs text-foreground-muted">
                  {stage.tech}
                </span>
              </div>

              {!isLast && (
                <div aria-hidden="true" className="relative ml-7 h-4 w-px bg-border-strong">
                  <span
                    className="absolute left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)] animate-flow"
                    style={{ animationDelay: `${index * 0.6}s` }}
                  />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <dl className="grid grid-cols-2 border-t border-border font-mono text-xs">
        <div className="flex flex-col gap-1 border-r border-border px-4 py-3">
          <dt className="text-foreground-subtle">{pipeline.orchestration}</dt>
          <dd className="flex items-center gap-1.5 text-foreground-muted">
            <Workflow aria-hidden="true" size={12} className="shrink-0" />
            {PIPELINE_ORCHESTRATOR}
          </dd>
        </div>
        <div className="flex flex-col gap-1 px-4 py-3">
          <dt className="text-foreground-subtle">{pipeline.runtime}</dt>
          <dd className="flex items-center gap-1.5 text-foreground-muted">
            <ContainerIcon aria-hidden="true" size={12} className="shrink-0" />
            {PIPELINE_RUNTIME}
          </dd>
        </div>
      </dl>
    </figure>
  );
}
