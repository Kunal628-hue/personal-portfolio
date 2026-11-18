// Keep bookmarks from the former page layout working in the continuous portfolio.
const pageAnchors = {home:'hero',about:'about',work:'software-projects',hardware:'hardware-projects',journey:'experience',trader:'trading',contact:'contact'};
export function singlePageAnchor(input) {
  const url = new URL(input, 'https://portfolio.local/');
  return url.hash.slice(1) || pageAnchors[url.searchParams.get('page')] || '';
}
export function categoryForAnchor(anchor, current = 'software') {
  if (anchor === 'hardware-projects' || /^project-[4-6]$/.test(anchor)) return 'hardware';
  if (anchor === 'software-projects' || /^project-[0-3]$/.test(anchor)) return 'software';
  return current;
}
