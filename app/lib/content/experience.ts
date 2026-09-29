import type { Experience } from "@/app/types";

// Company names only — facts that don't change between languages. Role,
// dates, location, and descriptions are translated content and live in the
// i18n dictionaries, keyed by id. Most recent first.
export const EXPERIENCES: Experience[] = [
  { id: "positivo", company: "Positivo S+" },
  { id: "minsait", company: "Minsait" },
];
