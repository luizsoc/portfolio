import type { Dictionary, Locale } from "@/app/types";
import { en } from "./en";
import { pt } from "./pt";

export const DEFAULT_LOCALE: Locale = "en";

export const dictionaries: Record<Locale, Dictionary> = { en, pt };
