import { skillGroups } from '@/data/content';
import { SectionHead } from '@/components/ui/SectionHead';

export function Skills() {
  return (
    <section id="skills" className="shell py-16">
      <SectionHead label="Technical Skills" />

      <div className="card mt-9 divide-y divide-line-soft">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid grid-cols-1 gap-3 px-7 py-5 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-6"
          >
            <span className="label">{group.title}</span>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="pill font-mono text-[11px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
