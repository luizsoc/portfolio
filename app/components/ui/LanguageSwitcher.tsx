"use client";

import type { Locale } from "@/app/types";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { cn } from "@/app/lib/utils";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, dictionary } = useLanguage();

  return (
    <div
      role="group"
      aria-label={dictionary.a11y.languageSwitcher}
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-surface p-0.5",
        className
      )}
    >
      {LOCALES.map(({ code, label }) => {
        const isActive = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            className={cn(
              "h-7 rounded-md px-2 font-mono text-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent",
              isActive
                ? "bg-surface-raised text-foreground shadow-[inset_0_0_0_1px_var(--border-strong)]"
                : "text-foreground-subtle hover:text-foreground"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
