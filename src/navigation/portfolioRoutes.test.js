import test from 'node:test';
import assert from 'node:assert/strict';
import { portfolioPages, portfolioHref, resolvePortfolioRoute } from './portfolioRoutes.js';

test('every page has a shareable URL that round-trips', () => {
  for (const {id} of portfolioPages) assert.deepEqual(resolvePortfolioRoute(portfolioHref(id)), {page:id, hash:''});
});
test('hardware and software project bookmarks stay separated', () => {
  for (let i = 0; i < 7; i++) assert.equal(resolvePortfolioRoute(`/#project-${i}`).page, i >= 4 ? 'hardware' : 'work');
});
test('existing section bookmarks resolve to their new pages', () => {
  for (const [hash,page] of Object.entries({about:'about',skills:'about',tools:'about',projects:'work',experience:'journey',education:'journey',certifications:'journey',activities:'journey',resume:'journey',trading:'trader',contact:'contact'})) {
    assert.deepEqual(resolvePortfolioRoute(`/?preview=old#${hash}`), {page,hash});
  }
});
test('explicit page routes and deep anchors are preserved', () => {
  assert.deepEqual(resolvePortfolioRoute('/?page=journey#certifications'), {page:'journey',hash:'certifications'});
  assert.equal(resolvePortfolioRoute('/?page=unknown').page, 'home');
  assert.equal(resolvePortfolioRoute('/?page=unknown#skills').page, 'about');
});
