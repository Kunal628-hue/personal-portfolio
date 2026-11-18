import test from 'node:test';
import assert from 'node:assert/strict';
import {webProjects,selectWebProjects,webProjectPage,WEB_PAGE_SIZE} from './webProjects.js';
const expected={
 large:['Puchoo.ai','EduAdmin-Pro','planora-smart-event-os-OJT2','Global_Notes-workspace'],
 mid:['AI-Investment-Advisor','id-card-generator','savora_bot','Jai-Ramdev-Timber-and-Plywood','Prepora','personal-portfolio'],
 small:['personal-finance-manager','AirTouch','flight_delay-prediction','AI-Assessment-Creator','ReconFlow-OpenEnv','Fitora','Singhi-GharKhata'],
};
const repositoryName=p=>new URL(p.github).pathname.split('/').at(-1).replace(/\.git$/i,'').toLowerCase();
test('every requested repository appears once in its assigned scale, with Ghar Khata retained',()=>{
 assert.equal(webProjects.length,17);
 assert.equal(new Set(webProjects.map(repositoryName)).size,17);
 assert.equal(new Set(webProjects.map(p=>p.id)).size,17);
 for(const [scale,names] of Object.entries(expected))assert.deepEqual(selectWebProjects(scale).map(repositoryName).sort(),names.map(s=>s.toLowerCase()).sort());
});
test('published links are optional HTTPS URLs; missing deployments do not create demo links',()=>{
 for(const p of webProjects){assert.equal(new URL(p.github).hostname,'github.com');if(p.demo)assert.equal(new URL(p.demo).protocol,'https:');}
 assert.equal(webProjects.filter(p=>p.demo).length,8);
 for(const id of ['puchoo','eduadmin','airtouch','reconflow'])assert.equal(webProjects.find(p=>p.id===id).demo,undefined);
});
test('pagination exposes every project once while limiting the rendered collection to four',()=>{
 for(const scale of Object.keys(expected)){
  const projects=selectWebProjects(scale);const ids=[];
  for(let page=0;page<Math.ceil(projects.length/WEB_PAGE_SIZE);page++){
   const view=webProjectPage(projects,page);assert.ok(view.items.length<=4);ids.push(...view.items.map(p=>p.id));
  }
  assert.deepEqual(ids,projects.map(p=>p.id));
 }
 assert.equal(webProjectPage(selectWebProjects('small'),999).page,1);
});
test('search matches technologies and titles without mixing scales; empty results reset pagination',()=>{
 assert.deepEqual(selectWebProjects('mid','  PREPORA ').map(p=>p.id),['prepora']);
 assert.ok(selectWebProjects('small','python').some(p=>p.id==='airtouch'));
 assert.equal(selectWebProjects('large','Prepora').length,0);
 assert.deepEqual(webProjectPage(selectWebProjects('mid','no-such-project'),4),{items:[],page:0,pageCount:1});
});
test('original project anchors and story indices retain their existing meanings',()=>{
 const map={'project-0':0,'project-1':1,'project-2':2,'project-3':3};
 for(const [anchor,index] of Object.entries(map))assert.equal(webProjects.find(p=>p.legacyAnchor===anchor).storyIndex,index);
});
