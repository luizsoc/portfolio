import type { Project } from "@/app/types";

// Facts only — verified against the real GameHub repository. No metrics,
// demo, or docs links beyond what actually exists. Structured so a future
// project only needs an entry here plus its dictionary description.
export const PROJECTS: Project[] = [
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
    featured: true,
  },
];
