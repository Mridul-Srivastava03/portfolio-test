import { useEffect } from 'react';

// Background
import GlowOrbs from './components/background/GlowOrbs';
import CursorGlow from './components/background/CursorGlow';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Sections
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import EducationAchievements from './sections/EducationAchievements';
import Contact from './sections/Contact';

export default function App() {
  // Scroll reveal — observe all .fade-in elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll('.fade-in');
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlowOrbs />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <EducationAchievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
