import { experiences, additional } from '@/data/content';

export function Experience() {
  return (
    <section id="experience" className="border-t border-hairline bg-canvas px-4 py-20 dark:bg-[#0b1528] dark:border-neutral-850 sm:px-6 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <div className="text-left mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-soft font-sans">Career & Milestones</h2>
          <h3 className="mt-2 text-3xl font-light tracking-[-0.03em] text-ink dark:text-white">Experience & Awards</h3>
        </div>

        <div className="relative border-l border-hairline dark:border-white/10 ml-4 pl-6 md:pl-8 space-y-10 text-left">
          {experiences.map((item, i) => (
            <div key={i} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[28px] md:-left-[36px] top-1.5 w-3 h-3 rounded-full border-2 border-canvas dark:border-[#0b1528] bg-primary dark:bg-primary-soft group-hover:scale-125 transition-transform duration-100" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <div>
                  <h4 className="text-lg font-medium text-ink dark:text-neutral-200">
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-primary dark:text-primary-soft font-medium tracking-tight mt-0.5">
                    {item.org}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[12px] font-semibold font-tabular text-ink-mute dark:text-neutral-450 uppercase tracking-wide md:text-right">
                  {item.period}
                </span>
              </div>
              {item.description && (
                <p className="mt-2 text-[14px] leading-relaxed text-ink-secondary dark:text-neutral-300 font-light max-w-3xl">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Certifications and language scores — deliberately kept out of the timeline above */}
        <div className="mt-14 border-t border-hairline dark:border-white/10 pt-8 text-left">
          <h4 className="text-[11px] uppercase tracking-wider text-ink-mute dark:text-neutral-450 font-bold font-sans">
            Additional
          </h4>
          <dl className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-[max-content_1fr]">
            {additional.map(({ label, items }) => (
              <div key={label} className="contents">
                <dt className="text-[13px] font-medium text-ink-secondary dark:text-neutral-300 font-sans">
                  {label}
                </dt>
                <dd className="text-[13px] text-ink-mute dark:text-neutral-450 font-light">
                  {items.join(' · ')}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

