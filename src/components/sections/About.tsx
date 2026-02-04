import { aboutParagraphs, researchPhilosophy } from '@/data/content';

export function About() {
  return (
    <section id="about" className="border-t border-neutral-200 px-4 py-16 dark:border-neutral-800 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-50">About Me</h2>
        <div className="mt-6 space-y-5 text-neutral-600 dark:text-neutral-400">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <h3 className="mt-8 font-medium text-neutral-900 dark:text-neutral-100">Research Philosophy</h3>
        <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-400">
          {researchPhilosophy}
        </p>
      </div>
    </section>
  );
}
