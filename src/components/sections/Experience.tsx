import { experiences, additional } from '@/data/content';
import { SectionHead } from '@/components/ui/SectionHead';

export function Experience() {
  return (
    <section id="experience" className="shell py-16">
      <SectionHead label="Experience & Awards" />

      <div className="card mt-9 divide-y divide-line-soft">
        {experiences.map((item, i) => (
          <div key={i} className="grid grid-cols-1 gap-2 px-7 py-6 sm:grid-cols-[170px_1fr] sm:gap-6">
            <span className="meta pt-1 uppercase">{item.period}</span>
            <div>
              <h4 className="text-[16px] font-bold tracking-[-0.01em] text-ink">{item.title}</h4>
              <p className="mt-1 text-[13px] font-medium text-ink-2">{item.org}</p>
              {item.description && (
                <p className="mt-2.5 max-w-2xl text-[14px] leading-relaxed text-ink-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications and language scores — deliberately outside the timeline above */}
      <div className="card mt-5 divide-y divide-line-soft">
        {additional.map(({ label, items }) => (
          <div
            key={label}
            className="grid grid-cols-1 gap-2 px-7 py-5 sm:grid-cols-[170px_1fr] sm:items-baseline sm:gap-6"
          >
            <span className="label">{label}</span>
            <p className="text-[14px] text-ink-2">{items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
