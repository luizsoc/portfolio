import { cn } from "@/app/lib/utils";

export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 transition duration-200",
        interactive &&
          "hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-hover hover:shadow-[0_0_32px_-8px_rgba(34,211,238,0.35)] focus-within:-translate-y-1 focus-within:border-accent/40 focus-within:shadow-[0_0_32px_-8px_rgba(34,211,238,0.35)]",
        className
      )}
    >
      {children}
    </div>
  );
}
