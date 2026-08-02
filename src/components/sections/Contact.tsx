import { site, researchStatement } from '@/data/content';

// Phone number intentionally omitted — it stays on the CV PDF, not on a public page.
const links = [
  { label: 'Email', href: `mailto:${site.email}` },
  { label: 'GitHub', href: site.links.github },
  { label: 'LinkedIn', href: site.links.linkedin },
  { label: 'Research Notes', href: site.links.blog },
  { label: 'CV', href: `${import.meta.env.BASE_URL}${site.links.cv}` },
];

export function Contact() {
  return (
    <footer id="contact" className="mt-8 border-t border-line bg-surface">
      <div className="shell py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <span className="text-[15px] font-extrabold tracking-[-0.02em] text-ink">
              {site.name} ({site.nameKo})
            </span>
            <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{researchStatement}</p>
            <p className="meta mt-5">
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>

          <div className="md:text-right">
            <span className="label">Get in Touch</span>
            <ul className="mt-4 flex flex-wrap gap-2 md:justify-end">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="btn px-4 py-2 text-[12px]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
