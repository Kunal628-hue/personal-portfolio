import React from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import CyberFooter from './components/CyberFooter';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Trading from './sections/Trading';
import Activities from './sections/Activities';
import StockTicker from './components/StockTicker';

function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-500 selection:text-white overflow-hidden relative cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <StockTicker />
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Activities />
        <Trading />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <CyberFooter />
    </div>
  );
}

export default App;
