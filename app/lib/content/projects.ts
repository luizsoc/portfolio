import type { Project } from "@/app/types";

// Facts only — verified against the public repositories.
export const PROJECTS: Project[] = [
  {
    id: "dataflow",
    name: "DataFlow Pipeline",
    category: "data",
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
    category: "backend",
    technologies: [
      "C#",
      "ASP.NET Core",
      "PostgreSQL",
      "EF Core",
      "SignalR",
      "Docker",
      "JWT",
      "xUnit",
    ],
    githubUrl: "https://github.com/luizsoc/GameHub",
    featured: false,
  },
  {
    id: "devopsEsg",
    name: "ESG Initiative",
    category: "devops",
    technologies: [
      "Java 17",
      "Spring Boot",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "JUnit",
    ],
    githubUrl: "https://github.com/luizsoc/devops-esg",
    featured: false,
    academic: true,
  },
];
