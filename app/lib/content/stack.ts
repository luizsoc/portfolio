import type { StackCategoryId } from "@/app/types";

export type StackCategory = {
  id: StackCategoryId;
  technologies: string[];
};

export const STACK_CATEGORIES: StackCategory[] = [
  { id: "languages", technologies: ["Python", "Java", "C#"] },
  {
    id: "backend",
    technologies: [
      "Django",
      "Django REST Framework",
      "Spring Boot",
      ".NET / ASP.NET Core",
    ],
  },
  { id: "database", technologies: ["PostgreSQL", "SQL"] },
  { id: "devopsTools", technologies: ["Docker", "Git", "GitHub", "Linux"] },
];
