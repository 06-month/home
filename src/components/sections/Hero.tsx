import { site, noteArchive } from '@/data/content';
import { GaussianField } from '@/components/ui/GaussianField';

export function Hero() {
  return (
    <section id="hero" className="shell pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <span className="pill">
            {site.nameKo} · {site.role}
          </span>

          <h1 className="mt-7 whitespace-pre-line text-[38px] font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-[48px]">
            {site.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-2">{site.subline}</p>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {site.keywords.map((kw) => (
              <span key={kw} className="pill text-[11px]">
                {kw}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-2">
            <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="btn-solid">
              GitHub
            </a>
            <a href={site.links.blog} target="_blank" rel="noopener noreferrer" className="btn">
              Research Notes
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <GaussianField />
        </div>
      </div>

      {/* Quick facts: only figures stated elsewhere on the page, so nothing here is a claim of its own. */}
      <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-4">
        {[
          { k: 'Affiliation', v: 'Hanbat National Univ.' },
          { k: 'Focus', v: '3D/4D Reconstruction' },
          { k: 'Publications', v: '1 · KICS 2026' },
          { k: 'Research Notes', v: String(noteArchive.total) },
        ].map(({ k, v }) => (
          <div key={k} className="bg-surface px-5 py-4">
            <dt className="label text-[10px]">{k}</dt>
            <dd className="mt-1.5 text-[14px] font-semibold text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
