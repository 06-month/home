import { publications, projects } from '@/data/content';

export function Publications() {
  const ongoingResearch = projects.filter((p) => p.ongoing);

  return (
    <section id="publications" className="border-t border-hairline bg-canvas px-4 py-20 dark:bg-[#0b1528] dark:border-neutral-850 sm:px-6 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <div className="text-left mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-soft font-sans">Research Output</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Publications Subsection */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-medium tracking-tight text-ink dark:text-white border-b border-hairline/60 dark:border-white/5 pb-3 font-sans">
              Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-canvas-soft dark:bg-white/5 border border-hairline dark:border-white/5 rounded-2xl p-6 hover:shadow-md transition duration-150"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex rounded-full bg-primary-subdued/30 dark:bg-primary-subdued/10 px-2.5 py-0.5 font-mono text-[9px] font-semibold text-primary-deep dark:text-primary-soft uppercase tracking-wider font-tabular">
                        Conference Paper
                      </span>
                      <span className="font-mono text-[10px] font-bold text-[#ea2261] dark:text-[#f96bee] uppercase tracking-wider font-tabular">
                        KICS 2026
                      </span>
                    </div>
                    <h4 className="text-[16px] font-semibold text-ink dark:text-neutral-200 leading-snug group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-150">
                      {pub.title}
                    </h4>
                    <p className="text-xs text-ink-secondary dark:text-neutral-300 font-light leading-relaxed">
                      {pub.authors}
                    </p>
                    <p className="text-[11px] text-ink-mute dark:text-neutral-450 font-tabular font-light pt-1">
                      {pub.venue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ongoing Research Subsection */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-medium tracking-tight text-ink dark:text-white border-b border-hairline/60 dark:border-white/5 pb-3 font-sans">
              Ongoing Research
            </h3>
            <div className="space-y-4">
              {ongoingResearch.map((proj) => (
                <div 
                  key={proj.id}
                  className="group relative bg-canvas-soft dark:bg-white/5 border border-hairline dark:border-white/5 rounded-2xl p-6 hover:shadow-md transition duration-150"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex rounded-full bg-yellow-500/10 dark:bg-yellow-450/10 px-2.5 py-0.5 font-mono text-[9px] font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-wider font-tabular">
                        Active Project
                      </span>
                      <span className="font-mono text-[10px] text-ink-mute dark:text-neutral-500 font-tabular font-light">
                        {proj.type}
                      </span>
                    </div>
                    <h4 className="text-[16px] font-semibold text-ink dark:text-neutral-200 leading-snug group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-150">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-ink-secondary dark:text-neutral-300 font-light leading-relaxed">
                      {proj.description}
                    </p>
                    {proj.period && (
                      <p className="text-[11px] text-ink-mute dark:text-neutral-450 font-tabular font-light pt-1">
                        {proj.period}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
