"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/app/lib/navigation";
import { profile } from "@/app/lib/content/profile";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { LanguageSwitcher } from "@/app/components/ui/LanguageSwitcher";
import { LogoMark } from "@/app/components/ui/Logo";
import { scrollToSection } from "@/app/lib/scrollToSection";
import { cn } from "@/app/lib/utils";

export function MobileNav({ activeId }: { activeId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const { dictionary } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    // Content behind the panel: real focus isolation for a role="dialog",
    // not just visual coverage. The header holding the trigger is left out
    // on purpose — inert-ing it would block the .focus() call back to the
    // trigger when the dialog closes.
    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");

    panelRef.current?.focus();
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

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
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={dictionary.a11y.openMenu}
        className="-mr-2 flex size-10 items-center justify-center rounded-lg text-foreground focus-visible:outline-2 focus-visible:outline-accent"
      >
        <Menu aria-hidden="true" size={20} />
      </button>

      {/* Portaled to <body>: the header's backdrop-filter makes it the
          containing block for fixed descendants, which would clip the
          full-screen panel to the header's height. */}
      {isOpen &&
        createPortal(
          <div
            id="mobile-nav-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={dictionary.a11y.sectionNavigation}
            tabIndex={-1}
            className="fixed inset-0 z-50 flex flex-col bg-background outline-none"
          >
            <div className="flex h-14 items-center justify-between border-b border-border px-5 sm:px-8">
              <span className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                <LogoMark />
                {profile.name}
              </span>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                aria-label={dictionary.a11y.closeMenu}
                className="-mr-2 flex size-10 items-center justify-center rounded-lg text-foreground focus-visible:outline-2 focus-visible:outline-accent"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>

            <nav
              aria-label={dictionary.a11y.sectionNavigation}
              className="flex-1 overflow-y-auto px-5 py-6 sm:px-8"
            >
              <ol className="flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <li key={item.id} className="border-b border-border">
                      <a
                        href={`#${item.id}`}
                        onClick={(event) => {
                          event.preventDefault();
                          setIsOpen(false);
                          // The overflow lock is normally released by the
                          // close effect, which runs after this handler —
                          // clearing it here first keeps the body scrollable
                          // in time for scrollToSection to actually move it.
                          document.body.style.overflow = "";
                          scrollToSection(item.id);
                          window.history.pushState(null, "", `#${item.id}`);
                        }}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "flex items-baseline gap-4 py-4 text-2xl font-medium tracking-tight focus-visible:outline-2 focus-visible:outline-accent",
                          isActive ? "text-foreground" : "text-foreground-muted"
                        )}
                      >
                        <span className="font-mono text-xs text-foreground-subtle">
                          {item.index}
                        </span>
                        {dictionary.nav[item.id]}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </nav>

            <div className="border-t border-border px-5 py-4 sm:px-8">
              <LanguageSwitcher />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
