export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <span className="font-mono text-sm tracking-widest text-accent uppercase">
        {index}
      </span>
      <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-foreground-muted">
          {description}
        </p>
      )}
    </div>
  );
}
