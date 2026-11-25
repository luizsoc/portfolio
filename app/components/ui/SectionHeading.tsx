export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:mb-16">
      <p className="flex items-center gap-3 font-mono text-xs text-foreground-subtle">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-6 bg-border-strong" />
        {label}
      </p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-balance text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-pretty text-foreground-muted">
          {description}
        </p>
      )}
    </div>
  );
}
