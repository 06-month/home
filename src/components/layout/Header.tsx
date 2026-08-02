import { ThemeToggle } from './ThemeToggle';
import { site } from '@/data/content';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#research' },
  { label: 'Notes', href: '#notes' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-white/75 backdrop-blur-md dark:border-neutral-850 dark:bg-[#0b1528]/75 transition-colors duration-300">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-semibold text-neutral-900 dark:text-neutral-50 tracking-[-0.02em] font-sans">
          {site.name}
        </a>
        
        {/* Navigation Items (Hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-1.5 text-[14px] font-medium text-neutral-600 transition hover:text-neutral-900 hover:bg-neutral-100/50 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-white/5"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side: CV CTA + Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-[14px] text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block text-[14px] text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`${import.meta.env.BASE_URL}${site.links.cv}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-[14px] font-medium text-white shadow-sm transition hover:bg-primary-deep active:bg-primary-press"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
