export function HeroCodeAccent() {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-foreground-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      GET /health <span className="text-accent-strong">→ 200 OK</span>
    </span>
  );
}
