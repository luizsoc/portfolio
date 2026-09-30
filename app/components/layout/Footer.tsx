"use client";

import { Mail } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/app/components/ui/icons";
import { profile } from "@/app/lib/content/profile";
import { useLanguage } from "@/app/components/providers/LanguageProvider";

export function Footer() {
  const { dictionary } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-8">
        <div className="grid grid-cols-1 items-center gap-6 text-center md:grid-cols-3 md:text-left">
          <div className="md:justify-self-start">
            <p className="text-sm font-medium text-foreground">
              {profile.name}
            </p>
            <p className="font-mono text-xs text-foreground-subtle">
              {dictionary.hero.role}
            </p>
          </div>

          <div className="flex items-center justify-center gap-5">
            <a
              href={`mailto:${profile.email}`}
              aria-label={dictionary.footer.emailLabel}
              className="text-foreground-muted transition-colors duration-200 hover:text-accent"
            >
              <Mail aria-hidden="true" size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dictionary.footer.githubLabel}
              className="text-foreground-muted transition-colors duration-200 hover:text-accent"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dictionary.footer.linkedinLabel}
              className="text-foreground-muted transition-colors duration-200 hover:text-accent"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>

          <p className="font-mono text-xs text-foreground-subtle md:justify-self-end md:text-right">
            © {year} {profile.name}. {dictionary.footer.rights}
          </p>
        </div>

        <p className="border-t border-border pt-6 text-center font-mono text-[11px] text-foreground-subtle">
          Hero illustration:{" "}
          <a
            href="https://www.magnific.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-accent"
          >
            Designed by Magnific
          </a>
        </p>
      </Container>
    </footer>
  );
}
