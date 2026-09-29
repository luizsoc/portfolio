"use client";

import { Mail } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { RevealOnScroll } from "@/app/components/ui/RevealOnScroll";
import { Button } from "@/app/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/app/components/ui/icons";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { profile } from "@/app/lib/content/profile";
import { getNavIndex } from "@/app/lib/navigation";

export function Contact() {
  const { dictionary } = useLanguage();
  const mailto = `mailto:${profile.email}`;

  return (
    <section
      id="contact"
      className="border-b border-border py-24 last:border-b-0"
    >
      <Container>
        <RevealOnScroll>
          <SectionHeading
            index={getNavIndex("contact")}
            title={dictionary.contact.title}
            description={dictionary.contact.description}
          />
        </RevealOnScroll>

        <RevealOnScroll className="flex flex-col gap-8" delay={0.06}>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" href={mailto}>
              <Mail aria-hidden="true" size={16} />
              {dictionary.contact.emailLabel}
            </Button>
            <Button
              variant="secondary"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon size={16} />
              {dictionary.contact.githubLabel}
            </Button>
            <Button
              variant="secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon size={16} />
              {dictionary.contact.linkedinLabel}
            </Button>
          </div>

          <div>
            <Button variant="primary" href={mailto}>
              {dictionary.contact.cta}
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
