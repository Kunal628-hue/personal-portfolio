export const portfolioPages = [
  { id: 'home', label: 'Home', title: 'Creative Developer', description: 'Kunal Singhi — software, robotics and systems thinking.' },
  { id: 'about', label: 'About', title: 'About & Expertise', description: 'The person, skills and ideas behind the work.' },
  { id: 'work', label: 'Software', title: 'Software Projects', description: 'Web applications, interfaces and practical software solutions.' },
  { id: 'hardware', label: 'Hardware', title: 'Hardware & Robotics', description: 'Arduino, sensors and systems built for the physical world.' },
  { id: 'journey', label: 'Journey', title: 'Journey & Learning', description: 'Experience, education, credentials and life beyond code.' },
  { id: 'trader', label: 'Trader', title: 'Markets & Mindset', description: 'Technical analysis, risk management and market psychology.' },
  { id: 'contact', label: 'Contact', title: 'Let’s Connect', description: 'Reach out for collaboration or a friendly hello.' },
];
const legacyPages = { hero:'home', about:'about', skills:'about', tools:'about', projects:'work', 'problem-solving':'work', 'github-stats':'work', 'hardware-projects':'hardware', experience:'journey', education:'journey', certifications:'journey', activities:'journey', resume:'journey', trading:'trader', contact:'contact' };
export function resolvePortfolioRoute(input) {
  const url = new URL(input, 'https://portfolio.local/');
  const hash = url.hash.slice(1);
  const requested = url.searchParams.get('page');
  const legacy = /^project-[0-6]$/.test(hash) ? (Number(hash.slice(8)) >= 4 ? 'hardware' : 'work') : legacyPages[hash];
  return { page: portfolioPages.some(p => p.id === requested) ? requested : legacy || 'home', hash };
}
export function portfolioHref(page, hash = '') {
  return `?page=${page}${hash ? `#${hash}` : ''}`;
}
