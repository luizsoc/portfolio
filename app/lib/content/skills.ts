import type { SkillCategory } from "@/app/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "dataEngineering",
    skills: [
      "Python",
      "SQL",
      "PostgreSQL",
      "ETL / ELT",
      "Pandas",
      "Apache Airflow",
      "Medallion Architecture",
      "Dimensional modeling",
      "Data quality",
      "Docker",
    ],
  },
  {
    id: "dataAnalysis",
    skills: ["SQL", "Pandas", "Excel", "Pivot tables"],
  },
  {
    id: "backend",
    skills: [
      "REST APIs",
      "Django",
      "Django REST Framework",
      "JWT",
      "Swagger",
      "ASP.NET Core",
    ],
  },
  {
    id: "languages",
    skills: ["Python", "SQL", "C#"],
  },
  {
    id: "infra",
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Pytest",
      "Linux",
    ],
  },
];
