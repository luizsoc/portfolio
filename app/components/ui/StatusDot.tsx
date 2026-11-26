import { cn } from "@/app/lib/utils";

export function StatusDot({
  pulse = false,
  className,
}: {
  pulse?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full bg-accent",
        pulse && "animate-pulse-soft",
        className
      )}
    />
  );
}
