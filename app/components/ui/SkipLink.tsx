"use client";

import { useLanguage } from "@/app/components/providers/LanguageProvider";

export function SkipLink() {
  const { dictionary } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-lg focus-visible:bg-surface focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-accent"
    >
      {dictionary.a11y.skipToContent}
    </a>
  );
}
