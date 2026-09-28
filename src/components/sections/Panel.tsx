/** One screen of the track: full-height column on desktop, normal section on smaller screens. */
export function Panel({
  id,
  className = "",
  children,
  label,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <section
      id={id}
      data-panel
      aria-label={label}
      className={`relative shrink-0 scroll-mt-(--header-h) px-5 py-20 md:px-10 md:py-28 hz:h-full hz:overflow-hidden hz:px-12 hz:pt-[calc(var(--header-h)+1.75rem)] hz:pb-12 ${className}`}
    >
      {children}
    </section>
  );
}

export function Kicker({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="kicker">
      <span className="font-bold text-red">{n}</span>
      <span className="h-0.5 w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}
