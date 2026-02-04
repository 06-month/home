import { site } from '@/data/content';

export function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center px-4 pt-24 pb-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-sm text-cyan-600 dark:text-cyan-400">Hi, I'm {site.name}</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
          {site.tagline}
        </h1>
        <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{site.subline}</p>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">{site.affiliation}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {site.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded border border-zinc-300 bg-zinc-100/80 px-2.5 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400"
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
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            GitHub
          </a>
          <a
            href={site.links.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Blog
          </a>
          {site.links.cv !== '#' && (
            <a
              href={site.links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
