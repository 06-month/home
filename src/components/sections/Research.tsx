import { priorWorkFraming, projects } from '@/data/content';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function Research() {
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

