"use client";

import { NAV_ITEMS, OBSERVED_SECTION_IDS } from "@/app/lib/navigation";
import { profile } from "@/app/lib/content/profile";
import { useActiveSection } from "@/app/lib/useActiveSection";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { cn } from "@/app/lib/utils";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { LanguageSwitcher } from "@/app/components/ui/LanguageSwitcher";
import { Button } from "@/app/components/ui/Button";
import { LogoMark } from "@/app/components/ui/Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  const activeId = useActiveSection(OBSERVED_SECTION_IDS);
  const { dictionary } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("hero");
            window.history.pushState(null, "", window.location.pathname);
          }}
          aria-label={dictionary.a11y.backToTop}
          className="flex items-center gap-2.5 rounded-md text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <LogoMark />
          <span className="text-sm font-medium tracking-tight">{profile.name}</span>
        </a>

        <nav aria-label={dictionary.a11y.sectionNavigation} className="hidden lg:block">
          <ul className="flex items-center gap-1">
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
                    className={cn(
                      "rounded-md px-3 py-1.5 text-[13px] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent",
                      isActive
                        ? "text-foreground"
                        : "text-foreground-muted hover:text-foreground"
                    )}
                  >
                    {dictionary.nav[item.id]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Button href="#contact" size="sm" className="hidden lg:inline-flex">
            {dictionary.hero.contactMe}
          </Button>
          <MobileNav activeId={activeId} />
        </div>
      </div>
    </header>
  );
}
