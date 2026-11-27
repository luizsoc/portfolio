import type { Project } from "@/app/types";

// Facts only — verified against the public repositories.
export const PROJECTS: Project[] = [
  {
    id: "dataflow",
    name: "DataFlow Pipeline",
    categories: ["data"],
    technologies: [
      "Python",
      "Pandas",
      "PostgreSQL",
      "Apache Airflow",
      "Power BI",
      "Docker",
      "Pytest",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/luizsoc/dataflow-pipeline",
    featured: true,
  },
  {
    id: "gamehub",
    name: "GameHub",
    categories: ["backend", "devops"],
    technologies: [
      "C#",
      "ASP.NET Core",
      "PostgreSQL",
      "EF Core",
      "SignalR",
      "JWT",
      "xUnit",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/luizsoc/GameHub",
    featured: false,
  },
];
