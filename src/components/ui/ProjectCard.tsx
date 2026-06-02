import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-xl border border-hairline bg-canvas p-6 shadow-[rgba(0,55,112,0.06)_0_1px_3px] transition hover:shadow-md dark:border-white/5 dark:bg-white/5 text-left duration-150">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[18px] font-medium leading-[1.25] tracking-[-0.015em] text-ink dark:text-neutral-200 group-hover:text-primary dark:group-hover:text-primary-soft transition-colors duration-150">
            {project.title}
          </h3>
          {project.ongoing ? (
            <span className="shrink-0 rounded-full bg-primary-subdued/30 dark:bg-primary-subdued/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-primary-deep dark:text-primary-soft uppercase tracking-wider font-tabular">
              Ongoing
            </span>
          ) : (
            <span className="shrink-0 rounded-full bg-neutral-100 dark:bg-white/5 px-2 py-0.5 font-mono text-[9px] font-semibold text-ink-mute dark:text-neutral-400 uppercase tracking-wider font-tabular">
              Completed
            </span>
          )}
        </div>

        {/* Keywords */}
        <div className="mt-3 flex flex-wrap gap-1">
          {project.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-full bg-canvas-soft border border-hairline px-2 py-0.5 font-mono text-[10px] text-ink-mute dark:bg-white/5 dark:border-white/5 dark:text-neutral-450"
            >
              {kw}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 text-[14px] leading-relaxed text-ink-secondary dark:text-neutral-300 font-light">
          {project.description}
        </p>
      </div>

      {/* Action Links */}
      <div className="mt-6 flex flex-wrap gap-4 items-center border-t border-hairline/60 dark:border-white/5 pt-4">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-primary hover:text-primary-deep dark:text-primary-soft dark:hover:text-white transition duration-150"
          >
            {project.label ?? 'GitHub'}
            <span className="text-[10px] transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden>→</span>
          </a>
        )}
        {project.blogHref && (
          <a
            href={project.blogHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[13px] font-medium text-primary hover:text-primary-deep dark:text-primary-soft dark:hover:text-white transition duration-150"
          >
            Blog
            <span className="text-[10px] transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden>→</span>
          </a>
        )}
        {!project.href && !project.blogHref && (
          <span className="text-[12px] font-mono text-ink-mute dark:text-neutral-500 font-tabular font-light">
            Lab Research
          </span>
        )}
      </div>
    </article>
  );
}

