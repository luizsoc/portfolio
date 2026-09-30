"use client";

import { NAV_ITEMS, NAV_ITEM_IDS } from "@/app/lib/navigation";
import { useActiveSection } from "@/app/lib/useActiveSection";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { LanguageSwitcher } from "@/app/components/ui/LanguageSwitcher";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { cn } from "@/app/lib/utils";

export function SideNav() {
  const activeId = useActiveSection(NAV_ITEM_IDS);
  const { dictionary } = useLanguage();

  return (
    <>
      <LanguageSwitcher className="fixed top-8 right-8 z-40 hidden lg:inline-flex" />

      <nav
        aria-label={dictionary.a11y.sectionNavigation}
        className="fixed top-1/2 left-8 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ol className="flex flex-col gap-5">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                    window.history.pushState(null, "", `#${item.id}`);
                  }}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex items-center gap-3 rounded-md py-1 focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full border border-border-strong transition-colors duration-200",
                      isActive
                        ? "border-accent bg-accent"
                        : "bg-transparent group-hover:border-accent/60"
                    )}
                  />
                  <span
                    className={cn(
                      "font-mono text-xs tracking-wide uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100",
                      isActive && "text-accent opacity-100",
                      !isActive && "text-foreground-muted"
                    )}
                  >
                    {item.index} · {dictionary.nav[item.id]}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
