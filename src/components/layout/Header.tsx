import { ThemeToggle } from './ThemeToggle';
import { site } from '@/data/content';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Notes', href: '#notes' },
  { label: 'Experience', href: '#experience' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between">
        <a href="#" className="text-[15px] font-extrabold tracking-[-0.02em] text-ink">
          {site.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-ink-2 transition duration-150 hover:bg-surface hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`${import.meta.env.BASE_URL}${site.links.cv}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid px-4 py-1.5 text-[12px]"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
