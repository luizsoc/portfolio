import type { PipelineMetric, PipelineStage } from "@/app/types";

// DataFlow Pipeline's Medallion flow and stack — drives the hero DAG and
// the featured project card. Facts from github.com/luizsoc/dataflow-pipeline.
export const PIPELINE_STAGES: PipelineStage[] = [
  { id: "extract", tech: "Python" },
  { id: "bronze", tech: "PostgreSQL" },
  { id: "silver", tech: "Pandas" },
  { id: "gold", tech: "SQL" },
  { id: "dashboard", tech: "Power BI" },
];

export const PIPELINE_ORCHESTRATOR = "Apache Airflow";
export const PIPELINE_RUNTIME = "Docker";

// Full-dataset results published in the project's README.
export const PIPELINE_METRICS: PipelineMetric[] = [
  { id: "rawRows", value: 1067371, format: "integer" },
  { id: "cleanRows", value: 0.957, format: "percent" },
  { id: "qualityChecks", value: 13, format: "integer" },
  { id: "tests", value: 79, format: "integer" },
];
