import { publications } from '@/data/content';
import { SectionHead } from '@/components/ui/SectionHead';

export function Publications() {
  return (
    <section id="publications" className="shell py-16">
      <SectionHead label="Publications" trailing={`${publications.length}`} />

      <div className="mt-9 space-y-4">
        {publications.map((pub, idx) => (
          <article key={idx} className="card border-l-2 border-l-ink p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pill-solid">Conference Paper</span>
              <span className="meta uppercase">{pub.venue}</span>
            </div>
            <h3 className="mt-4 text-[19px] font-bold leading-snug tracking-[-0.015em] text-ink">
              {pub.title}
            </h3>
            <p className="mt-2 text-[14px] text-ink-2">{pub.authors}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
