import { aboutParagraphs } from '@/data/content';

export function About() {
  return (
    <section id="about" className="border-t border-zinc-200 px-4 py-16 dark:border-zinc-800 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">About Me</h2>
        <div className="mt-6 space-y-5 text-zinc-600 dark:text-zinc-400">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
