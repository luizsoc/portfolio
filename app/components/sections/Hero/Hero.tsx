"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { StatusDot } from "@/app/components/ui/StatusDot";
import { useLanguage } from "@/app/components/providers/LanguageProvider";
import { profile } from "@/app/lib/content/profile";
import { cn } from "@/app/lib/utils";
import { PipelineDiagram } from "./PipelineDiagram";

export function Hero() {
  const { dictionary } = useLanguage();
  const { hero } = dictionary;

  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 max-w-3xl rounded-full bg-white/[0.04] blur-3xl"
      />

      <Container className="relative grid gap-14 pt-16 pb-16 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pt-28 lg:pb-24">
        <div className="flex animate-fade-up flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-foreground-muted backdrop-blur-sm">
            <StatusDot pulse />
            {hero.status}
          </span>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-sm text-foreground-subtle">
              {profile.name} <span aria-hidden="true">—</span> {hero.role}
            </p>
            <h1 className="text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-foreground sm:text-5xl lg:text-6xl">
              {hero.headline}{" "}
              <span className="text-foreground-subtle">{hero.headlineMuted}</span>
            </h1>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-pretty text-foreground-muted md:text-lg">
            {hero.tagline}
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="#projects">
              {hero.viewProjects}
              <ArrowRight aria-hidden="true" size={15} />
            </Button>
            <Button href="#contact" variant="secondary">
              {hero.contactMe}
            </Button>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <PipelineDiagram />
        </div>
      </Container>

      <Container className="relative">
        <dl className="grid grid-cols-2 border-t border-border md:grid-cols-4">
          {hero.facts.map((fact, index) => (
            <div
              key={fact.label}
              className={cn(
                "flex flex-col gap-1 py-5",
                index % 2 === 0 ? "pr-4" : "border-l border-border pl-4",
                index > 1 && "border-t border-border md:border-t-0",
                index === 2 && "md:border-l md:pl-4"
              )}
            >
              <dt className="font-mono text-xs text-foreground-subtle">{fact.label}</dt>
              <dd className="text-sm text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
