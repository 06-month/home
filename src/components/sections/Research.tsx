import { priorWorkFraming, projects } from '@/data/content';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function Research() {
  return (
    <section id="research" className="border-t border-neutral-200 px-4 py-16 dark:border-neutral-800 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-50">Research & Projects</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {priorWorkFraming}
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
