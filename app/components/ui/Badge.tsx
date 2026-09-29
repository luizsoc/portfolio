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
        "inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-xs tracking-wide text-foreground-muted uppercase",
        className
      )}
    >
      {children}
    </span>
  );
}
