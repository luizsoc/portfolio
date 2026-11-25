import type { Education, Experience } from "@/app/types";

// Language-independent facts only. Role, dates, location, and descriptions
// are translated content and live in the i18n dictionaries, keyed by id.
// Most recent first.
export const EXPERIENCES: Experience[] = [
  {
    id: "positivo",
    company: "Positivo S+",
    technologies: ["Linux", "Windows", "Excel"],
  },
  {
    id: "minsait",
    company: "Minsait",
    technologies: [
      "Python",
      "PostgreSQL",
      "Django",
      "DRF",
      "JWT",
      "Swagger",
      "Excel",
    ],
  },
];

export const EDUCATION: Education[] = [{ id: "fiap", institution: "FIAP" }];
