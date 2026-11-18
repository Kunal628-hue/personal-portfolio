import test from 'node:test';
import assert from 'node:assert/strict';
import {currentSection,sectionShortcuts} from './sectionTracking.js';
test('section shortcuts point to the existing sections in reading order',()=>{
 assert.deepEqual(sectionShortcuts.map(s=>s.id),['about','skills','projects','experience','trading','contact']);
 assert.equal(new Set(sectionShortcuts.map(s=>s.id)).size,6);
});
test('current section changes after a section crosses the reading threshold',()=>{
 const positions=[{id:'about',top:-1000},{id:'skills',top:-400},{id:'projects',top:120},{id:'experience',top:1100}];
 assert.equal(currentSection(positions,140),'projects');
 assert.equal(currentSection(positions,100),'skills');
});
test('missing or not-yet-reached sections do not activate navigation',()=>{
 assert.equal(currentSection([{id:'about',top:600},{id:'skills',top:undefined}]),'hero');
 assert.equal(currentSection([{id:'projects',top:-30},{id:'contact',top:NaN}]),'projects');
});
