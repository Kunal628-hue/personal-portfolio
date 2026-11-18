import test from 'node:test';
import assert from 'node:assert/strict';
import {singlePageAnchor, categoryForAnchor} from './singlePageNavigation.js';

test('legacy page URLs map to sections of one continuous page', () => {
  for (const [page,anchor] of Object.entries({home:'hero',about:'about',work:'software-projects',hardware:'hardware-projects',journey:'experience',trader:'trading',contact:'contact'})) assert.equal(singlePageAnchor(`/?page=${page}`),anchor);
  assert.equal(singlePageAnchor('/?page=journey#certifications'),'certifications');
});
test('hardware deep links reveal the hardware tab', () => {
  for(const anchor of ['hardware-projects','project-4','project-5','project-6']) assert.equal(categoryForAnchor(anchor),'hardware');
});
test('software deep links reveal software and ordinary anchors preserve the selected tab', () => {
  for(const anchor of ['software-projects','project-0','project-1','project-2','project-3']) assert.equal(categoryForAnchor(anchor,'hardware'),'software');
  assert.equal(categoryForAnchor('projects','hardware'),'hardware');
  assert.equal(categoryForAnchor('certifications','hardware'),'hardware');
  assert.equal(singlePageAnchor('/'),'');
});
