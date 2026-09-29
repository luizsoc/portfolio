import type { NavId, NavItem } from "@/app/types";

export const NAV_ITEMS: NavItem[] = [
  { index: "01", id: "hero" },
  { index: "02", id: "about" },
  { index: "03", id: "experience" },
  { index: "04", id: "projects" },
  { index: "05", id: "skills" },
  { index: "06", id: "contact" },
];

export const NAV_ITEM_IDS: NavId[] = NAV_ITEMS.map((item) => item.id);

export function getNavIndex(id: NavId): string {
  return NAV_ITEMS.find((item) => item.id === id)?.index ?? "";
}
