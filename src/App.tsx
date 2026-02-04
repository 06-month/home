import { useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Research } from '@/components/sections/Research';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

export default function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
