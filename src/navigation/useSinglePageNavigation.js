import {useEffect, useRef, useState} from 'react';
import {singlePageAnchor, categoryForAnchor} from './singlePageNavigation';

export default function useSinglePageNavigation(ready, staticMotion = false) {
  const initial = typeof window === 'undefined' ? '' : singlePageAnchor(window.location.href);
  const focusOnNavigate = useRef(true);
  const scrollMode = useRef('instant');
  const motionIsStatic = useRef(staticMotion);
  useEffect(() => { motionIsStatic.current = staticMotion; }, [staticMotion]);
  const [anchor, setAnchor] = useState(initial);
  const [category, setCategory] = useState(() => categoryForAnchor(initial));
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    document.title = 'Kunal Singhi | Software & Robotics Portfolio';
    const canonicalize = () => {
      const url = new URL(window.location.href);
      const next = singlePageAnchor(url.href);
      if (url.searchParams.has('page')) {
        url.searchParams.delete('page'); url.hash = next;
        window.history.replaceState({}, '', url);
      }
      return next;
    };
    const sync = () => {
      focusOnNavigate.current = true;
      scrollMode.current = 'instant';
      const next = canonicalize();
      setCategory(current => categoryForAnchor(next, current));
      setAnchor(next); setRevision(value => value + 1);
    };
    const click = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href]');
      if (!link || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || (!url.hash && !url.searchParams.has('page'))) return;
      event.preventDefault();
      focusOnNavigate.current = true;
      scrollMode.current = 'smooth';
      const next = singlePageAnchor(url.href);
      url.searchParams.delete('page'); url.hash = next;
      window.history.pushState({}, '', url);
      setCategory(current => categoryForAnchor(next, current));
      setAnchor(next); setRevision(value => value + 1);
    };
    canonicalize();
    document.addEventListener('click', click);
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      document.removeEventListener('click', click);
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);
  useEffect(() => {
    if (!ready || !anchor) return;
    window.dispatchEvent(new Event('portfolio:anchor'));
    let second;
    const first = requestAnimationFrame(() => {
      const target = document.getElementById(anchor);
      const details = target?.closest('details');
      if (details) details.open = true;
      second = requestAnimationFrame(() => {
        const destination = document.getElementById(anchor);
        destination?.scrollIntoView({behavior:motionIsStatic.current ? 'instant' : scrollMode.current, block:'start'});
        if (focusOnNavigate.current) document.getElementById('main-content')?.focus({preventScroll:true});
        window.dispatchEvent(new Event('resize'));
      });
    });
    return () => {cancelAnimationFrame(first);cancelAnimationFrame(second);};
  }, [anchor, category, ready, revision]);
  const selectCategory = next => {
    focusOnNavigate.current = false;
    scrollMode.current = 'instant';
    setCategory(next);
    const nextAnchor = `${next}-projects`;
    window.history.pushState({}, '', `#${nextAnchor}`);
    setAnchor(nextAnchor); setRevision(value => value + 1);
  };
  return {anchor, category, selectCategory};
}
