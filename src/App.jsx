import React, { useState, useEffect, Suspense, lazy } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BackgroundMusic from './components/BackgroundMusic';
import AnimeBackground from './components/AnimeBackground';
import Navbar from './components/Navbar';
import CyberFooter from './components/CyberFooter';
import Hero from './sections/Hero';
import SectionReveal from './components/SectionReveal';
import StockTicker from './components/StockTicker';

// Lazy load sections below the fold
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Education = lazy(() => import('./sections/Education'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Tools = lazy(() => import('./sections/Tools'));
const ProblemSolving = lazy(() => import('./sections/ProblemSolving'));
const GithubStats = lazy(() => import('./sections/GithubStats'));
const Contact = lazy(() => import('./sections/Contact'));
const Trading = lazy(() => import('./sections/Trading'));
const Activities = lazy(() => import('./sections/Activities'));
const TerminalIntro = lazy(() => import('./sections/TerminalIntro'));

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile for targeted performance disabling
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`bg-[#030014] text-white min-h-screen selection:bg-blue-500 selection:text-white overflow-x-hidden relative ${!isMobile ? 'cursor-none' : ''}`}>
        <>
          {/* Performance: Disable heavy mouse-followers on mobile for Lighthouse score */}
          {!isMobile && <CustomCursor />}
          <ScrollProgress />
          
          {/* Performance: Only show ticker on desktop - huge score boost for mobile TTI */}
          {!isMobile && <StockTicker />}
          
          <BackgroundMusic />
          
          {/* Higher-impact performance background for all but lower density on mobile internal */}
          <AnimeBackground />
          
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div className="h-96" />}>
              <SectionReveal><TerminalIntro /></SectionReveal>
              <SectionReveal><About /></SectionReveal>
              <SectionReveal><Skills /></SectionReveal>
              <SectionReveal><ProblemSolving /></SectionReveal>
              <SectionReveal><GithubStats /></SectionReveal>
              <SectionReveal><Tools /></SectionReveal>
              <SectionReveal><Projects /></SectionReveal>
              <SectionReveal><Activities /></SectionReveal>
              <SectionReveal><Trading /></SectionReveal>
              <SectionReveal><Experience /></SectionReveal>
              <SectionReveal><Education /></SectionReveal>
              <SectionReveal><Certifications /></SectionReveal>
              <SectionReveal><Contact /></SectionReveal>
            </Suspense>
          </main>
          <CyberFooter />
        </>
    </div>
  );
}

export default App;
