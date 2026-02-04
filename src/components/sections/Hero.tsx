import { site } from '@/data/content';

export function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center px-4 pt-24 pb-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">Hi, I'm {site.name}</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          {site.tagline}
        </h1>
        <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{site.subline}</p>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">{site.affiliation}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {site.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-full bg-neutral-100 px-3 py-1 font-mono text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {kw}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            GitHub
          </a>
          <a
            href={site.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-transparent px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800/50"
          >
            Blog
          </a>
          {site.links.cv && (
            <a
              href={`${import.meta.env.BASE_URL}${site.links.cv}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-transparent px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800/50"
            >
              CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
