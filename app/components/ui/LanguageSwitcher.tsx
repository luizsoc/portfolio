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
        "inline-flex items-center gap-1 rounded-full border border-border p-1",
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
              "rounded-full px-2.5 py-1 font-mono text-xs tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent",
              isActive
                ? "bg-accent text-accent-on"
                : "text-foreground-muted hover:text-foreground"
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
