import { experiences } from '@/data/content';

export function Experience() {
  return (
    <section id="experience" className="border-t border-zinc-200 px-4 py-16 dark:border-zinc-800 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">Experience / Awards</h2>
        <ul className="mt-8 space-y-6">
          {experiences.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 font-mono text-sm text-zinc-500 dark:text-zinc-500">
                {item.period}
              </span>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">{item.org}</p>
                {item.description && (
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
