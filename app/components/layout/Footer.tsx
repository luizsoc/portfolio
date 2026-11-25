"use client";

import { Container } from "@/app/components/ui/Container";
import { LogoMark } from "@/app/components/ui/Logo";
import { profile } from "@/app/lib/content/profile";
import { useLanguage } from "@/app/components/providers/LanguageProvider";

export function Footer() {
  const { dictionary } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-8 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2.5">
          <LogoMark className="size-4 text-foreground-muted" />
          <span className="text-foreground-muted">{profile.name}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono">{dictionary.footer.role}</span>
        </p>
        <p className="font-mono">
          © {year} {profile.name}. {dictionary.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
