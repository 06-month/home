import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-md dark:border-neutral-800/60 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-medium text-neutral-900 dark:text-neutral-50">
          Jun
        </a>
        <nav className="flex items-center gap-1">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-3 py-2 text-sm text-neutral-600 transition hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800/50"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
