import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import LenisScroll from './components/LenisScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <LenisScroll>
        <div className="font-sans antialiased text-slate-900 dark:text-slate-50 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Achievements />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </LenisScroll>
    </ThemeProvider>
  );
}

export default App;
