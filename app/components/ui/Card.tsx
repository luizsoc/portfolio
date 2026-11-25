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
        "rounded-xl border border-border bg-surface p-6",
        interactive &&
          "transition-colors duration-200 hover:border-border-strong hover:bg-surface-hover focus-within:border-border-strong",
        className
      )}
    >
      {children}
    </div>
  );
}
