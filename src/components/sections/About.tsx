import { aboutParagraphs, researchPhilosophy, education } from '@/data/content';

export function About() {
  return (
    <section id="about" className="border-t border-hairline bg-canvas-soft dark:bg-[#071829]/30 px-4 py-20 dark:border-neutral-850 sm:px-6 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Bio & Philosophy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-soft font-sans">Biography</h2>
              <h3 className="mt-2 text-3xl font-light tracking-[-0.03em] text-ink dark:text-white">About Me</h3>
            </div>
            
            <div className="space-y-4 text-[15px] leading-relaxed text-ink-secondary dark:text-neutral-300 font-light">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Research Philosophy Cream Band Card */}
            <div className="card-cream-band rounded-2xl bg-canvas-cream dark:bg-[#272115] text-[#0d253d] dark:text-[#fbead0] p-8 border border-[#e3d1ba]/60 dark:border-[#4d3a24] shadow-sm transition duration-150 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#9b6829] dark:text-[#e4a853] font-sans">Research Philosophy</h4>
              <p className="mt-3 text-[15px] leading-relaxed font-light italic whitespace-pre-line">
                {researchPhilosophy}
              </p>
            </div>
          </div>

          {/* Right: Education Timeline & GPA */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-soft font-sans">Academia</h2>
              <h3 className="mt-2 text-3xl font-light tracking-[-0.03em] text-ink dark:text-white">Education</h3>
            </div>

            {/* GPA Highlights (Tabular Figures) */}
            <div className="grid grid-cols-2 gap-4 bg-white dark:bg-white/5 border border-hairline dark:border-white/5 rounded-2xl p-5 shadow-sm text-left">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ink-mute dark:text-neutral-400 font-semibold font-sans">Cumulative GPA</span>
                <div className="text-2xl font-light font-tabular text-primary dark:text-primary-soft mt-1">4.03 <span className="text-xs text-ink-mute dark:text-neutral-400">/ 4.5</span></div>
              </div>
              <div className="border-l border-hairline dark:border-white/5 pl-4">
                <span className="text-[10px] uppercase tracking-wider text-ink-mute dark:text-neutral-400 font-semibold font-sans">Major GPA</span>
                <div className="text-2xl font-light font-tabular text-primary dark:text-primary-soft mt-1">4.08 <span className="text-xs text-ink-mute dark:text-neutral-400">/ 4.5</span></div>
              </div>
            </div>

            <div className="space-y-6 text-left">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-hairline dark:border-white/10">
                  <span className="text-[11px] font-medium font-tabular text-ink-mute dark:text-neutral-450 uppercase tracking-wider">{edu.period}</span>
                  <h4 className="mt-1 text-[16px] font-semibold text-ink dark:text-neutral-200">{edu.degree}</h4>
                  <p className="text-[14px] text-ink-secondary dark:text-neutral-300 font-light">{edu.institution}</p>
                  
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-ink-mute dark:text-neutral-400 font-tabular font-light">
                    <span>GPA: {edu.gpa}</span>
                    {edu.majorGpa && (
                      <>
                        <span className="text-hairline dark:text-white/10">|</span>
                        <span>Major: {edu.majorGpa}</span>
                      </>
                    )}
                  </div>
                  {edu.details && (
                    <p className="mt-2 text-[13px] text-primary dark:text-primary-soft font-light">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

