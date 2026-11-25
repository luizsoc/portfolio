import { cn } from "@/app/lib/utils";

// Two sources feeding one sink — a minimal DAG as the personal mark.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("size-5", className)}
    >
      <path
        d="M5 5.5h3.5a3 3 0 0 1 3 3V10M5 14.5h3.5a3 3 0 0 0 3-3V10m0 0H15"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="1.25"
      />
      <rect x="2.5" y="3" width="5" height="5" rx="1.25" fill="currentColor" />
      <rect x="2.5" y="12" width="5" height="5" rx="1.25" fill="currentColor" />
      <rect x="13" y="7.5" width="5" height="5" rx="1.25" className="fill-accent" />
    </svg>
  );
}
