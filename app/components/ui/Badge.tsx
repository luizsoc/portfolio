import { cn } from "@/app/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-raised/60 px-2 py-0.5 font-mono text-xs text-foreground-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
