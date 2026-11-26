export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:mb-16">
      <p className="font-mono text-xs text-accent">{label}</p>
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
