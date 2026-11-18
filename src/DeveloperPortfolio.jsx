import {MotionPausedContext} from './components/motionPreferences';
import { useState } from 'react';
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { IntroLoader, DeveloperCursor, DeveloperNav } from './components/DeveloperEffects';
import SinglePortfolio from './pages/PortfolioPages';
import SectionShortcuts from './components/SectionShortcuts';
import useSinglePageNavigation from './navigation/useSinglePageNavigation';

export default function DeveloperPortfolio() {
  const [ready, setReady] = useState(false);
  const staticMotion = Boolean(useReducedMotion());
  const {category, selectCategory} = useSinglePageNavigation(ready, staticMotion);
  return <MotionConfig reducedMotion={staticMotion ? 'always' : 'never'}>
    <MotionPausedContext.Provider value={staticMotion}>
      <div id="page-top" className={`dp dp-single-page ${ready ? 'dp-ready' : ''} motion-system`}>
        <DeveloperCursor/>
        <AnimatePresence>{!ready && <IntroLoader onComplete={() => setReady(true)}/>}</AnimatePresence>
        <div className="dp-content" inert={!ready}>
          <a href="#main-content" className="dp-skip">Skip to content</a>
          <DeveloperNav/>
          <main id="main-content" tabIndex={-1}>
            <SinglePortfolio ready={ready} category={category} onCategoryChange={selectCategory}/>
          </main>
          <SectionShortcuts ready={ready}/>
          <footer className="dp-footer">
            <a href="#hero" className="signature">Kunal Singhi</a>
            <p>Built using modern web technologies · Kunal Singhi</p>
            <a href="#page-top">BACK TO TOP <ArrowUpRight size={13}/></a>
          </footer>
        </div>
      </div>
    </MotionPausedContext.Provider>
  </MotionConfig>;
}
