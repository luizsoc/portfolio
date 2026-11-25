import type { NavId, NavItem } from "@/app/types";

export const NAV_ITEMS: NavItem[] = [
  { index: "01", id: "about" },
  { index: "02", id: "projects" },
  { index: "03", id: "skills" },
  { index: "04", id: "experience" },
  { index: "05", id: "contact" },
];

// "hero" is observed too so nothing in the nav lights up while the top of
// the page is on screen.
export const OBSERVED_SECTION_IDS: NavId[] = [
  "hero",
  ...NAV_ITEMS.map((item) => item.id),
];

export function getNavIndex(id: NavItem["id"]): string {
  return NAV_ITEMS.find((item) => item.id === id)?.index ?? "";
}
