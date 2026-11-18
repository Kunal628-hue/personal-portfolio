import {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {ArrowUpRight, Github, X, ArrowRight} from 'lucide-react';
import {allStoryProjects} from '../data/storyProjects';
import {projectStories} from '../data/projectStories';
import {useStaticMotion} from './motionPreferences';

export function ProjectStoryContent({index}) {
  const project = allStoryProjects[index];
  const story = projectStories[index];
  if (!project || !story) return null;
  return <>
    <header className="story-header"><span className="dp-eyebrow">{story.category} / PROJECT STORY</span><h2 id="project-story-title">{project.title}</h2><p>{project.description}</p><div className="dp-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></header>
    <div className="story-facts"><div><span>CONTRIBUTION</span><strong>{story.contribution}</strong></div><div><span>PROJECT TYPE</span><strong>{story.category === 'Hardware' ? 'Physical computing' : 'Web application'}</strong></div></div>
    <section className="story-overview"><div><h3>The problem</h3><p>{story.problem}</p></div><div><h3>My contribution</h3><p>{story.role}</p></div></section>
    <section className="story-implementation"><h3>How it works</h3><p>{story.approach}</p><ol className="story-flow" aria-label="System overview">{story.flow.map((step,i)=><li key={step}><span>0{i+1}</span><strong>{step}</strong>{i<story.flow.length-1&&<ArrowRight size={18} aria-hidden="true"/>}</li>)}</ol>{story.category==='Hardware'&&<p className="story-caption">System overview · Conceptual flow, not a wiring diagram</p>}</section>
    <section className="story-decisions"><h3>Engineering decisions</h3>{story.decisions.map(([title,body],i)=><article key={title}><span>0{i+1}</span><div><h4>{title}</h4><p>{body}</p></div></article>)}</section>
    <section className="story-outcome"><span className="dp-eyebrow">WHAT IT DELIVERS</span><p>{story.result}</p></section>
    {story.evidence.length>0&&<section className="story-evidence"><h3>Explore the implementation</h3><div>{story.evidence.map(([label,href])=><a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={15}/></a>)}</div></section>}
    {project.links&&<div className="story-actions"><a href={project.links.demo} target="_blank" rel="noopener noreferrer">Open live project <ArrowUpRight size={18}/></a><a href={project.links.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> Source code</a></div>}
  </>;
}
export default function ProjectStory({index,onClose}) {
  const dialog = useRef(null);
  const reduced = useStaticMotion();
  useEffect(()=>{
    const element=dialog.current;
    if (!element || index === null) return;
    const overflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    element.showModal();
    return()=>{document.body.style.overflow=overflow;};
  },[index]);
  if (index===null || typeof document==='undefined') return null;
  return createPortal(<dialog ref={dialog} className={`project-story ${reduced?'story-static':''}`} aria-labelledby="project-story-title" onClose={onClose} onClick={event=>{
    if(event.target!==event.currentTarget)return;
    const box=event.currentTarget.getBoundingClientRect();
    if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.current.close();
  }}><div className="story-toolbar"><span>BEHIND THE BUILD</span><button type="button" autoFocus onClick={()=>dialog.current.close()} aria-label="Close project story"><X size={23}/></button></div><div className="story-body"><ProjectStoryContent index={index}/></div></dialog>, document.body);
}
