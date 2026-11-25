"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { Button } from "@/app/components/ui/Button";
import { StatusDot } from "@/app/components/ui/StatusDot";
import { GitHubIcon, LinkedInIcon } from "@/app/components/ui/icons";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { profile } from "@/app/lib/content/profile";
import { getNavIndex } from "@/app/lib/navigation";

export function Contact() {
  const { dictionary } = useLanguage();
  const { contact } = dictionary;

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface px-6 py-12 sm:px-10 md:px-14 md:py-16">
            <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />

            <div className="relative flex flex-col items-start gap-6">
              <p className="flex items-center gap-3 font-mono text-xs text-foreground-subtle">
                <span className="text-accent">{getNavIndex("contact")}</span>
                <span aria-hidden="true" className="h-px w-6 bg-border-strong" />
                {dictionary.nav.contact}
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-balance text-foreground sm:text-4xl md:text-5xl">
                {contact.title}
              </h2>

              <p className="max-w-xl text-base leading-relaxed text-pretty text-foreground-muted md:text-lg">
                {contact.description}
              </p>

              <span className="inline-flex items-center gap-2 text-sm text-foreground-muted">
                <StatusDot pulse />
                {contact.availability}
              </span>

              <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap">
                <Button href={`mailto:${profile.email}`} className="min-w-0">
                  <Mail aria-hidden="true" size={15} />
                  <span className="sr-only">{contact.emailLabel}: </span>
                  <span className="truncate">{profile.email}</span>
                </Button>
                <Button
                  variant="secondary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon size={15} />
                  {contact.linkedinLabel}
                  <ArrowUpRight aria-hidden="true" size={14} className="text-foreground-subtle" />
                </Button>
                <Button
                  variant="secondary"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon size={15} />
                  {contact.githubLabel}
                  <ArrowUpRight aria-hidden="true" size={14} className="text-foreground-subtle" />
                </Button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
