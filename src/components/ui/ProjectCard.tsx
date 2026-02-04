import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800/80 dark:bg-neutral-900/40 dark:hover:border-neutral-700">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">{project.title}</h3>
        {project.ongoing && (
          <span className="shrink-0 rounded-full bg-blue-100 px-2.5 py-0.5 font-mono text-xs text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
            Ongoing
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.keywords.map((kw) => (
          <span
            key={kw}
            className="rounded-full bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {kw}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            {project.label ?? 'GitHub'}
            <span aria-hidden>→</span>
          </a>
        )}
        {project.blogHref && (
          <a
            href={project.blogHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Blog
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  );
}
