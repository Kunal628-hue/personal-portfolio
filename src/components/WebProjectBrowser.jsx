import {useEffect, useId, useState} from 'react';
import {AnimatePresence, motion as Motion} from 'framer-motion';
import {ArrowUpRight, ArrowLeft, ArrowRight, Github, Search, Layers, Code2, Sparkles} from 'lucide-react';
import {webProjects, projectScales, selectWebProjects, webProjectPage} from '../data/webProjects';
import {useStaticMotion} from './motionPreferences';
const external={target:'_blank',rel:'noopener noreferrer'};
const icons={large:Layers,mid:Code2,small:Sparkles};
export default function WebProjectBrowser({onStory}) {
 const [scale,setScale]=useState('large');
 const [query,setQuery]=useState('');
 const [page,setPage]=useState(0);
 const reduced=useStaticMotion();
 const filterId=useId();
 const filtered=selectWebProjects(scale,query);
 const current=webProjectPage(filtered,page);
 useEffect(()=>{
  const reveal=()=>{
   const target=webProjects.find(project=>project.legacyAnchor===window.location.hash.slice(1));
   if(!target)return;
   setScale(target.scale);setQuery('');
   setPage(Math.floor(selectWebProjects(target.scale).findIndex(p=>p.id===target.id)/4));
  };
  reveal();window.addEventListener('hashchange',reveal);window.addEventListener('popstate',reveal);window.addEventListener('portfolio:anchor',reveal);
  return()=>{window.removeEventListener('hashchange',reveal);window.removeEventListener('popstate',reveal);window.removeEventListener('portfolio:anchor',reveal);};
 },[]);
 return <div className="web-browser">
  <div className="web-browser-toolbar">
   <div className="web-scale-filters" role="group" aria-label="Software project scale">{projectScales.map(item=><button key={item.id} type="button" aria-pressed={scale===item.id} onClick={()=>{setScale(item.id);setQuery('');setPage(0);}}>{item.id===scale&&<Motion.i className="web-filter-highlight" layoutId={reduced?undefined:filterId} transition={{type:"spring",stiffness:420,damping:36}} aria-hidden="true"/>}<b>{item.label}</b><span>{webProjects.filter(p=>p.scale===item.id).length.toString().padStart(2,'0')}</span></button>)}</div>
   <label className="web-search"><Search size={16} aria-hidden="true"/><span className="web-sr-only">Search {projectScales.find(s=>s.id===scale).label} projects</span><input type="search" aria-label={`Search ${projectScales.find(s=>s.id===scale).label} projects`} value={query} placeholder="Find a project or skill" onChange={event=>{setQuery(event.target.value);setPage(0);}}/></label>
  </div>
  <div className="web-browser-caption"><span>{projectScales.find(s=>s.id===scale).label} / SOFTWARE COLLECTION</span><span role="status" aria-live="polite">{filtered.length ? `${current.page*4+1}–${Math.min((current.page+1)*4,filtered.length)} of ${filtered.length} projects`:'No matching projects'}</span></div>
  <AnimatePresence mode="wait" initial={false}><Motion.div key={`${scale}:${query}:${current.page}`} className="web-project-grid" initial={reduced?false:{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={reduced?{}:{opacity:0,y:-6}} transition={{duration:reduced?0:.18}}>
   {current.items.map((project,index)=>{const Icon=icons[project.scale];return <Motion.article className="web-project-card" initial={reduced?false:{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.3,delay:reduced?0:index*.045,ease:[.22,1,.36,1]}} key={project.id} id={project.legacyAnchor||`web-${project.id}`}>
    <div className="web-project-top"><span>{project.kind}</span><Icon size={23} strokeWidth={1.2} aria-hidden="true"/></div>
    <h3>{project.title}</h3><p>{project.description}</p>
    <div className="web-project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
    <div className="web-project-links"><a href={project.github} {...external} aria-label={`${project.title} on GitHub`}><Github size={15}/>GitHub<ArrowUpRight size={13}/></a>{project.demo&&<a className="web-project-demo" href={project.demo} {...external} aria-label={`Open ${project.title} deployed project`}>View live<ArrowUpRight size={15}/></a>}{project.storyIndex!==undefined&&<button type="button" onClick={()=>onStory(project.storyIndex)}>Project story<ArrowUpRight size={13}/></button>}</div>
   </Motion.article>;})}
   {!filtered.length&&<div className="web-empty"><Search size={25}/><h3>No projects found</h3><p>Try another title or technology in this collection.</p><button type="button" onClick={()=>{setQuery('');setPage(0);}}>Clear search</button></div>}
  </Motion.div></AnimatePresence>
  <div className="web-pagination"><span>{webProjects.length} software projects · 3 scale categories</span><div><button type="button" aria-label="Previous project page" disabled={current.page===0} onClick={()=>setPage(current.page-1)}><ArrowLeft size={16}/></button><span>Page {current.page+1} / {current.pageCount}</span><button type="button" aria-label="Next project page" disabled={current.page+1>=current.pageCount} onClick={()=>setPage(current.page+1)}><ArrowRight size={16}/></button></div></div>
 </div>;
}
