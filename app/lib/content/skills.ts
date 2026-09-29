import type { SkillCategoryId } from "@/app/types";

export type SkillCategory = {
  id: SkillCategoryId;
  technologies: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    technologies: ["Python", "Java", "C#", "TypeScript", "JavaScript"],
  },
  {
    id: "backend",
    technologies: [
      "Django",
      "Django REST Framework",
      "Spring Boot",
      "ASP.NET Core / .NET",
    ],
  },
  {
    id: "frontend",
    technologies: ["React", "Next.js", "Vite"],
  },
  { id: "database", technologies: ["PostgreSQL", "SQL"] },
  {
    id: "devopsTools",
    technologies: [
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "CI/CD",
      "GitHub Actions",
    ],
  },
];
