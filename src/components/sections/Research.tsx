import { priorWorkFraming, projects } from '@/data/content';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function Research() {
  const current = projects.filter((p) => !p.earlier);
  const earlier = projects.filter((p) => p.earlier);

  return (
    <section id="research" className="border-t border-hairline bg-canvas px-4 py-20 dark:bg-[#0b1528] dark:border-neutral-850 sm:px-6 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <div className="text-left mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-soft font-sans">Research & Projects</h2>
          <h3 className="mt-2 text-3xl font-light tracking-[-0.03em] text-ink dark:text-white">Selected Works</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-secondary dark:text-neutral-350 font-light max-w-3xl">
            {priorWorkFraming}
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {current.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {earlier.length > 0 && (
          <details className="group mt-10 rounded-2xl border border-hairline bg-canvas-soft dark:bg-white/5 dark:border-white/5 px-6 py-4 text-left">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-[13px] font-semibold uppercase tracking-wider text-ink-secondary dark:text-neutral-300 font-sans">
                Earlier Work — 2D Visual Understanding
              </span>
              <span className="font-mono text-[11px] text-ink-mute dark:text-neutral-500 font-tabular">
                {earlier.length} projects
                <span className="ml-2 inline-block transition-transform duration-150 group-open:rotate-90">›</span>
              </span>
            </summary>

            <ul className="mt-5 divide-y divide-hairline/60 dark:divide-white/5">
              {earlier.map((project) => (
                <li key={project.id} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-[15px] font-medium text-ink dark:text-neutral-200">{project.title}</span>
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] font-semibold text-primary dark:text-primary-soft hover:underline"
                        >
                          {project.label ?? 'Link'}
                        </a>
                      )}
                    </div>
                    <p className="mt-1 text-[13px] text-ink-mute dark:text-neutral-450 font-light">{project.type}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] text-ink-mute dark:text-neutral-500 font-tabular uppercase tracking-wide">
                    {project.period}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  );
}
