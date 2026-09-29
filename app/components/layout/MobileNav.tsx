"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, NAV_ITEM_IDS } from "@/app/lib/navigation";
import { profile } from "@/app/lib/content/profile";
import { useActiveSection } from "@/app/lib/useActiveSection";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { LanguageSwitcher } from "@/app/components/ui/LanguageSwitcher";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { cn } from "@/app/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const activeId = useActiveSection(NAV_ITEM_IDS);
  const { dictionary } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    panelRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <div className="fixed top-0 right-0 left-0 z-40 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-sm">
        <span className="font-mono text-sm text-foreground-muted">
          {profile.name}
        </span>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-panel"
          aria-label={dictionary.a11y.openMenu}
          className="rounded-lg p-2 text-foreground focus-visible:outline-2 focus-visible:outline-accent"
        >
          <Menu aria-hidden="true" size={22} />
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={dictionary.a11y.sectionNavigation}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex flex-col bg-background px-6 py-4 outline-none"
        >
          <div className="flex items-center justify-between">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label={dictionary.a11y.closeMenu}
              className="rounded-lg p-2 text-foreground focus-visible:outline-2 focus-visible:outline-accent"
            >
              <X aria-hidden="true" size={22} />
            </button>
          </div>

          <nav
            aria-label={dictionary.a11y.sectionNavigation}
            className="mt-12 flex flex-1 flex-col justify-center"
          >
            <ol className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        setIsOpen(false);
                        // The overflow lock below is normally released by
                        // the close effect, which runs after this handler —
                        // clearing it here first keeps the body scrollable
                        // in time for scrollToSection to actually move it.
                        document.body.style.overflow = "";
                        scrollToSection(item.id);
                        window.history.pushState(null, "", `#${item.id}`);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "flex items-baseline gap-4 text-2xl font-semibold focus-visible:outline-2 focus-visible:outline-accent",
                        isActive ? "text-accent" : "text-foreground"
                      )}
                    >
                      <span className="font-mono text-sm text-foreground-subtle">
                        {item.index}
                      </span>
                      {dictionary.nav[item.id]}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      )}
    </div>
  );
}
