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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/90 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-medium text-zinc-900 dark:text-zinc-100">
          Jun
        </a>
        <nav className="flex items-center gap-1">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
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
