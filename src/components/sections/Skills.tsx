import { skillGroups } from '@/data/content';

export function Skills() {
  return (
    <section id="skills" className="border-t border-hairline bg-canvas-soft dark:bg-[#071829]/30 px-4 py-20 dark:border-neutral-850 sm:px-6 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <div className="text-left mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-soft font-sans">Core Capabilities</h2>
          <h3 className="mt-2 text-3xl font-light tracking-[-0.03em] text-ink dark:text-white">Technical Skills</h3>
          <p className="mt-4 text-[14px] text-ink-mute dark:text-neutral-400 font-light">
            Practical skills utilized in research, experiments, and system implementations.
          </p>
        </div>
        
        <div className="grid gap-10 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-canvas dark:bg-white/5 border border-hairline dark:border-white/5 p-6 rounded-2xl shadow-sm text-left">
              <h3 className="text-[16px] font-semibold text-ink dark:text-neutral-200 font-sans tracking-tight mb-4">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-primary-subdued/30 dark:bg-primary-subdued/10 px-3 py-1 font-mono text-xs font-medium text-primary-deep dark:text-primary-soft transition-transform hover:scale-105 duration-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

