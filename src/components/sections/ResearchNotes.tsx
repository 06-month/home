import { noteArchive, articles } from '@/data/content';
import { SectionHead } from '@/components/ui/SectionHead';
import type { ArticleItem } from '@/types';

function ArticleRow({ article }: { article: ArticleItem }) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-row group items-center"
    >
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <span className="meta w-[74px] shrink-0">{article.date}</span>
        <span className="pill shrink-0 text-[10.5px]">{article.tag}</span>
        <span className="text-[15px] font-semibold leading-snug text-ink">{article.title}</span>
      </div>
      <span
        className="mt-1 shrink-0 text-[13px] text-ink-3 transition duration-150 group-hover:translate-x-0.5 group-hover:text-ink sm:mt-0"
        aria-hidden
      >
        →
      </span>
    </a>
  );
}

export function ResearchNotes() {
  const recent = articles.filter((a) => !a.earlier);
  const earlier = articles.filter((a) => a.earlier);

  return (
    <section id="notes" className="shell py-16">
      <SectionHead label="Paper Reviews" trailing={`${articles.length} articles`} />

      <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-ink-2">{noteArchive.blurb}</p>

      <div className="card mt-8 px-7 py-3">
        <div>
          {recent.map((article) => (
            <ArticleRow key={article.href} article={article} />
          ))}
        </div>

        {earlier.length > 0 && (
          <details className="group border-t border-line-soft">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4">
              <span className="label">Earlier reviews — Hand Pose Estimation</span>
              <span className="meta">
                {earlier.length}
                <span className="ml-2 inline-block transition-transform duration-150 group-open:rotate-90">
                  ›
                </span>
              </span>
            </summary>
            <div className="pb-1">
              {earlier.map((article) => (
                <ArticleRow key={article.href} article={article} />
              ))}
            </div>
          </details>
        )}
      </div>

      <div className="card mt-5 flex flex-wrap items-center justify-between gap-5 border-transparent bg-inverse px-8 py-7">
        <p className="max-w-lg text-[15px] leading-relaxed text-on-inverse opacity-85">
          개념 정리, 구현 기록, 연구 아이디어를 서로 연결해 다음 공부의 출발점으로 만듭니다.
        </p>
        <a
          href={noteArchive.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-surface px-5 py-2.5 text-[13px] font-semibold text-ink transition duration-150 hover:opacity-85"
        >
          Explore the archive →
        </a>
      </div>
    </section>
  );
}
