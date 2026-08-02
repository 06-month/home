import { priorWorkFraming, projects } from '@/data/content';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHead } from '@/components/ui/SectionHead';

export function Research() {
  const current = projects.filter((p) => !p.earlier);
  const earlier = projects.filter((p) => p.earlier);

  return (
    <section id="work" className="shell py-16">
      <SectionHead label="Selected Work" trailing={`${projects.length}`} />

      <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-ink-2">{priorWorkFraming}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {current.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {earlier.length > 0 && (
        <details className="group card mt-5 px-7 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <span className="label">Earlier Work — 2D Visual Understanding</span>
            <span className="meta">
              {earlier.length}
              <span className="ml-2 inline-block transition-transform duration-150 group-open:rotate-90">
                ›
              </span>
            </span>
          </summary>

          <ul className="mt-4">
            {earlier.map((project) => (
              <li key={project.id} className="link-row last:border-b-0">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-[15px] font-semibold text-ink">{project.title}</span>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-semibold text-ink-2 underline-offset-4 hover:text-ink hover:underline"
                      >
                        {project.label ?? 'Link'} →
                      </a>
                    )}
                  </div>
                  <p className="meta mt-1">{project.type}</p>
                </div>
                <span className="meta shrink-0 uppercase">{project.period}</span>
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
