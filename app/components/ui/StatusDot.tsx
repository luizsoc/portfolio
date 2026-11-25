import { cn } from "@/app/lib/utils";

type Tone = "accent" | "warning" | "muted";

const toneStyles: Record<Tone, string> = {
  accent: "bg-accent",
  warning: "bg-warning",
  muted: "bg-foreground-subtle",
};

export function StatusDot({
  tone = "accent",
  pulse = false,
  className,
}: {
  tone?: Tone;
  pulse?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full",
        toneStyles[tone],
        pulse && "animate-pulse-soft",
        className
      )}
    />
  );
}
