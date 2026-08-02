import { noteArchive, researchNotes } from '@/data/content';
import { SectionHead } from '@/components/ui/SectionHead';

export function ResearchNotes() {
  return (
    <section id="notes" className="shell py-16">
      <SectionHead label="Research Notes" trailing={`${noteArchive.total} notes`} />

      <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-ink-2">{noteArchive.blurb}</p>

      <div className="card mt-8 px-7 py-3">
        <ul>
          {researchNotes.map((note) => (
            <li key={note.href} className="last:border-b-0">
              <a href={note.href} target="_blank" rel="noopener noreferrer" className="link-row group">
                <div className="min-w-0">
                  <span className="text-[15px] font-semibold text-ink">{note.title}</span>
                  <p className="mt-1 text-[13px] text-ink-2">{note.summary}</p>
                </div>
                <span
                  className="mt-1 shrink-0 text-[13px] text-ink-3 transition duration-150 group-hover:translate-x-0.5 group-hover:text-ink"
                  aria-hidden
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
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
