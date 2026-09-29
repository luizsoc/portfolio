"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { Dictionary, Locale } from "@/app/types";
import { DEFAULT_LOCALE, dictionaries } from "@/app/lib/i18n/dictionaries";

const STORAGE_KEY = "portfolio-locale";

// Minimal external store around localStorage so the current locale can be
// read via useSyncExternalStore — this is what keeps the very first client
// render identical to the server-rendered HTML (no hydration mismatch),
// while still picking up a previously saved preference right after mount.
let listeners: (() => void)[] = [];

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "pt";
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : DEFAULT_LOCALE;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function persistLocale(next: Locale) {
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, dictionary: dictionaries[locale], setLocale: persistLocale }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
