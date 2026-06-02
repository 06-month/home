import { publications } from '@/data/content';

export function Publications() {
  return (
    <section id="publications" className="border-t border-hairline bg-canvas px-4 py-20 dark:bg-[#0b1528] dark:border-neutral-850 sm:px-6 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <div className="text-left mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-soft font-sans">Research Output</h2>
          <h3 className="mt-2 text-3xl font-light tracking-[-0.03em] text-ink dark:text-white">Publications</h3>
        </div>

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div 
              key={idx} 
              className="group relative bg-canvas-soft dark:bg-white/5 border border-hairline dark:border-white/5 rounded-2xl p-6 md:p-8 hover:shadow-md transition duration-155 text-left"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-flex rounded-full bg-primary-subdued/30 dark:bg-primary-subdued/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-primary-deep dark:text-primary-soft uppercase tracking-wider font-tabular">
                    Conference Paper
                  </span>
                  <h4 className="text-lg font-medium text-ink dark:text-neutral-200 leading-snug group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-150">
                    {pub.title}
                  </h4>
                  <p className="text-[14px] text-ink-secondary dark:text-neutral-300 font-light">
                    {pub.authors}
                  </p>
                </div>
                
                <div className="shrink-0 flex items-center md:flex-col md:items-end gap-2 md:gap-1 text-right">
                  <span className="font-mono text-xs font-bold text-[#ea2261] dark:text-[#f96bee] uppercase tracking-wider">KICS 2026</span>
                  <span className="text-[13px] text-ink-mute dark:text-neutral-450 font-tabular font-light">{pub.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
