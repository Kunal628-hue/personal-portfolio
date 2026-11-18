import { useEffect, useState } from 'react';
import { portfolioPages, resolvePortfolioRoute } from './portfolioRoutes';

export default function usePortfolioNavigation(ready) {
  const [route, setRoute] = useState(() => resolvePortfolioRoute(typeof window === 'undefined' ? '/' : window.location.href));
  useEffect(() => {
    const sync = () => setRoute(resolvePortfolioRoute(window.location.href));
    const navigate = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest?.('a[href]');
      if (!link || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.searchParams.has('page')) return;
      event.preventDefault();
      if (url.href !== window.location.href) window.history.pushState({}, '', url);
      sync();
    };
    const restoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    document.addEventListener('click', navigate);
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      document.removeEventListener('click', navigate);
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
      window.history.scrollRestoration = restoration;
    };
  }, []);
  useEffect(() => {
    document.title = `${portfolioPages.find(p => p.id === route.page).title} | Kunal Singhi`;
    if (!ready) return;
    const frame = requestAnimationFrame(() => {
      const target = route.hash && document.getElementById(route.hash);
      const top = target ? target.getBoundingClientRect().top + window.scrollY - 20 : 0;
      // Route jumps are immediate; the new page supplies its own entrance motion.
      window.scrollTo({top, behavior:'instant'});
      document.getElementById('main-content')?.focus({preventScroll:true});
    });
    return () => cancelAnimationFrame(frame);
  }, [route.page, route.hash, ready]);
  return route;
}
