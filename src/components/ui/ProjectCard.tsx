import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card flex flex-col justify-between p-7 transition duration-150 hover:border-ink-3">
      <div>
        <div className="flex items-center justify-between gap-3">
          {project.ongoing ? (
            <span className="pill-solid">Ongoing</span>
          ) : (
            <span className="pill text-[11px]">Completed</span>
          )}
          {project.period && <span className="meta uppercase">{project.period}</span>}
        </div>

        <h3 className="mt-5 text-[18px] font-bold leading-snug tracking-[-0.015em] text-ink">
          {project.title}
        </h3>

        <p className="mt-3 text-[14px] leading-relaxed text-ink-2">{project.description}</p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.keywords.map((kw) => (
            <span key={kw} className="pill text-[10.5px]">
              {kw}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line-soft pt-4">
          <span className="meta">{project.type}</span>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-semibold text-ink underline-offset-4 hover:underline"
            >
              {project.label ?? 'GitHub'} →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
