import type { PipelineStage } from "@/app/types";

// DataFlow Pipeline's stack, stage by stage — drives the hero DAG.
export const PIPELINE_STAGES: PipelineStage[] = [
  { id: "extract", tech: "Python" },
  { id: "transform", tech: "Pandas" },
  { id: "load", tech: "PostgreSQL" },
];

export const PIPELINE_ORCHESTRATOR = "Apache Airflow";
export const PIPELINE_RUNTIME = "Docker";
