import {useLayoutEffect,useRef,useState} from 'react';
import {AnimatePresence,motion as Motion} from 'framer-motion';
import {ArrowUp} from 'lucide-react';
import {registerScrollScene} from './scrollMotion';
import {useStaticMotion} from './motionPreferences';
import {sectionShortcuts,currentSection} from '../navigation/sectionTracking';

export default function SectionShortcuts({ready}) {
 const [active,setActive]=useState('hero');
 const [visible,setVisible]=useState(false);
 const previous=useRef({active:'hero',visible:false});
 const reduced=useStaticMotion();
 useLayoutEffect(()=>{
  if(!ready)return;
  const main=document.getElementById('main-content');
  if(!main)return;
  return registerScrollScene(main,()=>{
   const positions=sectionShortcuts.map(({id})=>{
    const target=document.getElementById(id);
    const details=target?.closest('details');
    const element=details&&!details.open?details:target;
    return {id,top:element?.getBoundingClientRect().top};
   });
   const next=currentSection(positions,Math.min(180,window.innerHeight*.25));
   const show=(document.getElementById('hero')?.getBoundingClientRect().bottom??0)<window.innerHeight*.35;
   if(next!==previous.current.active)setActive(next);
   if(show!==previous.current.visible)setVisible(show);
   previous.current={active:next,visible:show};
  });
 },[ready]);
 return <AnimatePresence>{visible&&<Motion.nav className="section-shortcuts" aria-label="Jump to a portfolio section" initial={reduced?false:{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={reduced?{}:{opacity:0,y:15}} transition={{duration:reduced?0:.22}}>
  <a className="section-top" href="#hero" aria-label="Back to top"><ArrowUp size={16}/></a>
  <div>{sectionShortcuts.map(({id,label})=><a key={id} href={`#${id}`} aria-current={active===id?'location':undefined}>{active===id&&<span className="section-current-dot" aria-hidden="true"/>}{label}</a>)}</div>
 </Motion.nav>}</AnimatePresence>;
}
