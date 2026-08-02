/**
 * Label + rule that opens every section, matching the archive's section grammar.
 * `trailing` holds an optional right-aligned counter or link.
 */
export function SectionHead({ label, trailing }: { label: string; trailing?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5">
      <span className="label shrink-0">{label}</span>
      <span className="h-px flex-1 bg-line" aria-hidden />
      {trailing && <span className="meta shrink-0">{trailing}</span>}
    </div>
  );
}
