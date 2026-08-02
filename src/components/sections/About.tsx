import { aboutParagraphs, researchPhilosophy, education, coursework } from '@/data/content';
import { SectionHead } from '@/components/ui/SectionHead';

export function About() {
  return (
    <section id="about" className="shell py-16">
      <SectionHead label="About" />

      <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Bio + philosophy */}
        <div className="lg:col-span-7">
          <div className="card p-8">
            <div className="space-y-4 text-[15px] leading-relaxed text-ink-2">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="card mt-6 border-transparent bg-inverse p-8">
            <span className="label text-ink-3">Research Philosophy</span>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-on-inverse opacity-85">
              {researchPhilosophy}
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="lg:col-span-5">
          <div className="card p-8">
            <span className="label">Education</span>

            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              <div className="bg-surface-2 px-4 py-3">
                <span className="label text-[10px]">Cumulative</span>
                <div className="mt-1 font-mono text-[20px] font-semibold text-ink font-tabular">
                  4.02 <span className="text-[11px] text-ink-3">/ 4.5</span>
                </div>
              </div>
              <div className="bg-surface-2 px-4 py-3">
                <span className="label text-[10px]">Major</span>
                <div className="mt-1 font-mono text-[20px] font-semibold text-ink font-tabular">
                  4.07 <span className="text-[11px] text-ink-3">/ 4.5</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-line pl-4">
                  <span className="meta uppercase">{edu.period}</span>
                  <h4 className="mt-1 text-[15px] font-semibold text-ink">{edu.degree}</h4>
                  <p className="text-[13px] text-ink-2">{edu.institution}</p>
                  <p className="meta mt-1.5">
                    GPA {edu.gpa}
                    {edu.majorGpa && ` · Major ${edu.majorGpa}`}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-line-soft pt-5">
              <span className="label text-[10px]">Relevant Coursework</span>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {coursework.map((c) => (
                  <span key={c} className="pill text-[11px]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
