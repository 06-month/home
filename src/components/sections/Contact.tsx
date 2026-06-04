import { site } from '@/data/content';

const links: { label: string; href: string; icon: 'mail' | 'phone' | 'github' | 'blog' | 'cv' }[] = [
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
  { label: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}`, icon: 'phone' },
  { label: 'GitHub', href: site.links.github, icon: 'github' },
  { label: 'Blog', href: site.links.blog, icon: 'blog' },
  { label: 'CV', href: `${import.meta.env.BASE_URL}${site.links.cv}`, icon: 'cv' },
];

function Icon({ name }: { name: string }) {
  if (name === 'mail')
    return (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  if (name === 'github')
    return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    );
  if (name === 'blog')
    return (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    );
  if (name === 'phone')
    return (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    );
  if (name === 'cv')
    return (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  return null;
}
export function Contact() {
  return (
    <footer id="contact" className="border-t border-hairline bg-canvas-soft dark:bg-[#071829]/50 px-4 py-16 dark:border-neutral-850 sm:px-6 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Brand Info & Copyright */}
          <div className="md:col-span-4 flex flex-col items-start text-left space-y-3">
            <span className="font-semibold text-[16px] text-ink dark:text-white tracking-tight font-sans">
              {site.name} ({site.nameKo})
            </span>
            <p className="text-[13px] text-ink-mute dark:text-neutral-450 font-light max-w-sm leading-relaxed">
              AI Research Student focused on 3D scene representation, neural rendering, and robust visual perception.
            </p>
            <p className="text-[12px] text-ink-mute dark:text-neutral-500 font-tabular font-light pt-2">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
          </div>

          {/* Right Column: Contact Links */}
          <div className="md:col-span-8 flex flex-col md:items-end space-y-4">
            <span className="text-[11px] uppercase tracking-wider text-ink-mute dark:text-neutral-450 font-bold font-sans">
              Get in Touch
            </span>
            <ul className="flex flex-wrap gap-2 md:justify-end">
              {links.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-2 rounded-full border border-hairline bg-canvas px-4 py-2 text-xs font-medium text-ink-secondary dark:bg-[#0b1528] dark:border-white/10 dark:text-neutral-350 hover:bg-canvas-soft dark:hover:bg-white/5 hover:text-primary dark:hover:text-primary-soft hover:border-primary/50 dark:hover:border-primary-soft/50 shadow-sm transition duration-150"
                  >
                    <Icon name={icon} />
                    <span className={icon === 'phone' ? 'font-tabular' : ''}>{label}</span>
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

