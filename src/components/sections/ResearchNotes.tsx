import { noteArchive, researchNotes } from '@/data/content';

function ArrowIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export function ResearchNotes() {
  return (
    <section
      id="notes"
      className="border-t border-hairline bg-canvas-soft dark:bg-[#071829]/30 px-4 py-20 dark:border-neutral-850 sm:px-6 transition-colors duration-300"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: framing + archive CTA */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-soft font-sans">
              Reading & Writing
            </h2>
            <h3 className="mt-2 text-3xl font-light tracking-[-0.03em] text-ink dark:text-white">
              Research Notes
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-secondary dark:text-neutral-350 font-light">
              {noteArchive.blurb}
            </p>

            <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-hairline bg-canvas dark:bg-white/5 dark:border-white/5 px-5 py-4 shadow-sm">
              <span className="text-3xl font-light font-tabular text-primary dark:text-primary-soft">
                {noteArchive.total}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-ink-mute dark:text-neutral-400 font-semibold font-sans">
                connected notes
              </span>
            </div>

            <div className="mt-6">
              <a
                href={noteArchive.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-deep active:bg-primary-press transition duration-150"
              >
                Browse the archive
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Right: selected notes */}
          <div className="lg:col-span-7 text-left">
            <h4 className="text-xl font-medium tracking-tight text-ink dark:text-white border-b border-hairline/60 dark:border-white/5 pb-3 font-sans">
              Selected Notes
            </h4>
            <ul className="mt-4 divide-y divide-hairline/60 dark:divide-white/5">
              {researchNotes.map((note) => (
                <li key={note.href}>
                  <a
                    href={note.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 py-4 transition duration-150"
                  >
                    <div className="min-w-0">
                      <span className="text-[16px] font-semibold text-ink dark:text-neutral-200 group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-150">
                        {note.title}
                      </span>
                      <p className="mt-1 text-xs text-ink-secondary dark:text-neutral-400 font-light leading-relaxed">
                        {note.summary}
                      </p>
                    </div>
                    <span className="mt-1.5 text-ink-mute dark:text-neutral-500 group-hover:text-primary dark:group-hover:text-primary-soft group-hover:translate-x-0.5 transition duration-150">
                      <ArrowIcon />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
