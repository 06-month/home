import { skillGroups } from '@/data/content';

export function Skills() {
  return (
    <section id="skills" className="border-t border-neutral-200 px-4 py-16 dark:border-neutral-800 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-50">Skills</h2>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
          연구·실험·시스템 구축에 실제로 사용한 기술 위주입니다.
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200">{group.title}</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-neutral-100 px-2.5 py-1 font-mono text-sm text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
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
