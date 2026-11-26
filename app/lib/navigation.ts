import type { NavId, NavItem } from "@/app/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "projects" },
  { id: "skills" },
  { id: "experience" },
  { id: "contact" },
];

// "hero" is observed too so nothing in the nav lights up while the top of
// the page is on screen.
export const OBSERVED_SECTION_IDS: NavId[] = [
  "hero",
  ...NAV_ITEMS.map((item) => item.id),
];
