import { site } from '@/data/content';
import { GradientMesh } from '../layout/GradientMesh';
import { DashboardMockup } from '../ui/DashboardMockup';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-28 pb-16 sm:px-6">
      {/* Stripe-style Animated Gradient Mesh */}
      <GradientMesh />

      <div className="relative z-10 mx-auto max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Subdued Indigo Tag Pill */}
          <div className="inline-flex mb-4">
            <span className="rounded-full bg-primary-subdued/30 dark:bg-primary-subdued/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary-deep dark:text-primary-soft uppercase font-tabular">
              {site.nameKo} · AI Research Student
            </span>
          </div>

          {/* Sohne-inspired Display Headline */}
          <h1 className="whitespace-pre-line text-[34px] sm:text-[44px] lg:text-[48px] font-light leading-[1.05] tracking-[-0.035em] text-ink dark:text-white">
            {site.tagline}
          </h1>

          <p className="mt-6 text-[16px] sm:text-[18px] leading-relaxed text-ink-secondary dark:text-neutral-300 font-light max-w-xl">
            {site.subline}
          </p>

          <div className="mt-4 flex flex-col gap-1 text-xs sm:text-sm text-ink-mute dark:text-neutral-450">
            <p className="font-medium text-ink-secondary dark:text-neutral-300">{site.affiliation}</p>
            {site.address && <p className="font-tabular font-light">{site.address}</p>}
          </div>

          {/* Keywords as tags */}
          <div className="mt-6 flex flex-wrap gap-1.5 max-w-lg">
            {site.keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full bg-canvas-soft border border-hairline px-2.5 py-0.5 text-xs text-ink-mute dark:bg-white/5 dark:border-white/5 dark:text-neutral-400 font-sans"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* Call to Actions (Single-indigo CTA Hierarchy) */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Primary Filled Pill CTA */}
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-deep active:bg-primary-press transition duration-150"
            >
              GitHub
            </a>

            {/* Secondary Outline Pill CTA */}
            <a
              href={site.links.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-hairline bg-canvas/80 dark:bg-white/5 dark:border-white/10 px-5 py-2.5 text-sm font-semibold text-ink-secondary dark:text-neutral-200 hover:bg-canvas-soft dark:hover:bg-white/10 transition duration-150"
            >
              Blog
            </a>

            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-hairline bg-canvas/80 dark:bg-white/5 dark:border-white/10 px-5 py-2.5 text-sm font-semibold text-ink-secondary dark:text-neutral-200 hover:bg-canvas-soft dark:hover:bg-white/10 transition duration-150"
            >
              LinkedIn
            </a>

            {/* CV Link CTA */}
            <a
              href={`${import.meta.env.BASE_URL}${site.links.cv}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-hairline bg-canvas/80 dark:bg-white/5 dark:border-white/10 px-5 py-2.5 text-sm font-semibold text-ink-secondary dark:text-neutral-200 hover:bg-canvas-soft dark:hover:bg-white/10 transition duration-150"
            >
              CV
            </a>
          </div>
        </div>

        {/* Right Column: 3D Vision Research Workbench Dashboard */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
