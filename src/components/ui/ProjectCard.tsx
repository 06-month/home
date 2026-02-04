import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-zinc-200 bg-white p-5 transition dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-cyan-500/30">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
        {project.ongoing && (
          <span className="shrink-0 rounded bg-cyan-100 px-2 py-0.5 font-mono text-xs text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300">
            Ongoing
          </span>
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.keywords.map((kw) => (
          <span
            key={kw}
            className="rounded bg-zinc-100 px-2 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {kw}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
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
            className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
          >
            Blog
            <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  );
}
