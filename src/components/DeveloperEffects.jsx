import {useStaticMotion} from './motionPreferences';
import { horizontalProgress, registerScrollScene } from "./scrollMotion";
import {
  Children,
  isValidElement,
  useEffect,
  useLayoutEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  motion as Motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Atom,
  Database,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export function IntroLoader({ onComplete }) {
  const reduced = useStaticMotion();
  const [progress, setProgress] = useState(0);
  const skipRef = useRef(null);
  const [phase, setPhase] = useState("loading");
  const complete = useRef(onComplete);
  useEffect(() => { complete.current = onComplete; }, [onComplete]);
  useEffect(() => {
    if (reduced) {
      complete.current();
      return;
    }
    skipRef.current?.focus({ preventScroll: true });
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const value = Math.min(100, Math.round((now - start) / 6));
      setProgress(value);
      if (value < 100) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const timers = [
      setTimeout(() => setPhase("hello"), 750),
      setTimeout(() => setPhase("exit"), 1450),
      setTimeout(() => complete.current(), 2000),
    ];
    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      document.body.style.overflow = previous;
    };
  }, [reduced]);
  return (
    <div
      className={`dp-loader loader-${phase}`}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio introduction"
      onKeyDown={(event) => {
        if (event.key === "Tab") {
          event.preventDefault();
          skipRef.current?.focus();
        }
        if (event.key === "Escape") complete.current();
      }}
    >
      <div className="loader-center">
        {phase === "loading" ? (
          <>
            <strong aria-hidden="true">{progress}%</strong>
            <svg className="loader-pencil" viewBox="0 0 180 180" aria-hidden="true">
              <g className="pencil-turn">
                <path d="M35 53 A64 64 0 1 1 112 150" fill="none" stroke="#a38c50" strokeWidth="26" />
                <path d="M35 50 A64 64 0 1 1 112 147" fill="none" stroke="#d0b574" strokeWidth="21" />
                <path d="M35 47 A64 64 0 1 1 112 144" fill="none" stroke="#f0dfa4" strokeWidth="7" />
                <path d="M29 40 L18 67 L47 59 Z" fill="#c6a961" />
                <path d="M18 67 L24 55 L29 63 Z" fill="#383324" />
                <g transform="translate(113 148) rotate(-22)">
                  <rect x="-3" y="-13" width="21" height="26" rx="2" fill="#ddd9bf" />
                  <path d="M2 -12 V12 M7 -12 V12 M12 -12 V12" stroke="#a6a28a" strokeWidth="2" />
                  <path d="M18 -13 H27 Q33 -13 33 -7 V7 Q33 13 27 13 H18Z" fill="#f1e7bf" />
                </g>
              </g>
              <path className="pencil-trail" d="M110 151 Q80 165 58 151" fill="none" stroke="#e6d9ac" strokeWidth="1.5" />
            </svg>
            <span className="sr-only">Preparing Kunal Singhi’s portfolio</span>
          </>
        ) : (
          <svg
            className="hello-writing"
            viewBox="0 0 300 130"
            role="img"
            aria-label="Hello"
          >
            <path className="hello-stroke" transform="translate(23 0)" pathLength="1" d="M20 99 C36 83 63 29 51 25 C35 19 29 83 26 103 C38 71 61 69 55 91 C50 111 67 108 80 96 C112 72 96 67 84 78 C63 100 91 116 111 95 C128 75 158 22 144 23 C123 24 107 94 119 104 C139 121 183 30 168 25 C151 19 137 94 151 105 C161 114 179 98 187 89 C205 62 223 75 212 96 C202 117 177 108 184 88 C193 68 213 76 211 86 C217 94 227 91 235 83" />
          </svg>
        )}
      </div>
      <button ref={skipRef} className="skip-intro" onClick={() => complete.current()}>
        SKIP INTRO <ArrowUpRight size={13} />
      </button>
    </div>
  );
}

const navLinks = [["HOME", "#hero"], ["ABOUT", "#about"], ["EXPERTISE", "#skills"], ["WORK", "#projects"], ["JOURNEY", "#experience"], ["TRADER", "#trading"], ["CONTACT", "#contact"]];
export function DeveloperNav() {
  return <header className="dp-nav">
    <a className="signature" href="#hero" aria-label="Kunal Singhi home">Kunal</a>
    <nav aria-label="Main navigation">
      {navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
    </nav>
  </header>;
}

export function RippleHero({ ready, paused = false }) {
  const id = useId().replace(/:/g, "");
  const displacement = useRef(null);
  const amount = useMotionValue(0);
  const spring = useSpring(amount, { stiffness: 110, damping: 12 });
  const reduced = useStaticMotion();
  useEffect(
    () =>
      spring.on("change", (v) =>
        displacement.current?.setAttribute("scale", String(v)),
      ),
    [spring],
  );
  const ripple = () => {
    if (!reduced && !paused) amount.set(48);
  };
  return (
    <section id="hero" className={`dp-hero ${ready ? "hero-ready" : ""}`}>
      <svg className="effect-definitions" aria-hidden="true">
        <defs>
          <filter
            id={`ripple-${id}`}
            x="-15%"
            y="-15%"
            width="130%"
            height="130%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.001 0.022"
              numOctaves="1"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              ref={displacement}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <p className="hero-professional-intro"><span>Kunal Singhi · Bengaluru, India</span><span>B.Tech CSE · Aspiring Full Stack Developer</span></p>
      <div
        className="creative-stage"
        onPointerEnter={ripple}
        onPointerLeave={() => amount.set(0)}
        onPointerMove={(e) => {
          if (!reduced && !paused && e.pointerType === "mouse")
            amount.set(Math.min(55, 28 + Math.abs(e.movementX || 0) * 1.5));
        }}
      >
        <h1
          aria-label="Kunal Singhi — Creative Developer"
          className="creative-word"
          style={reduced || paused ? {} : { filter: `url(#ripple-${id})` }}
        >
          <span aria-hidden="true">
            {Array.from("CREATIVE").map((letter, i) => (
              <span className="hero-letter" key={i} style={{ "--letter": i }}>
                {letter}
              </span>
            ))}
          </span>
        </h1>
      </div>
      <div className="developer-line">DEVELOPER</div>
      <div className="hero-disciplines">
        <span>VISUALS</span>
        <i />
        <span>CODE</span>
        <i />
        <span>EXPERIENCE</span>
      </div>
      <div className="dp-hero-footer">
        <span>
          ©{new Date().getFullYear()}{" "}
          <span className="signature">Kunal Singhi</span>
          <a className="hero-resume" href={`${import.meta.env.BASE_URL}resume.html`} target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={12}/></a>
        </span>
        <a href="#software-projects" className="hero-scroll">
          VIEW PROJECTS
          <span />
          <ArrowDown size={12} />
        </a>
        <a
          href="#contact"
          className="work-seal"
          aria-label="Let’s work together"
        >
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path
                id={`seal-${id}`}
                d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
              />
            </defs>
            <text>
              <textPath href={`#seal-${id}`}>
                LET’S WORK TOGETHER · LET’S WORK TOGETHER ·{" "}
              </textPath>
            </text>
          </svg>
          <ArrowUpRight size={22} />
        </a>
      </div>
    </section>
  );
}

function splitWords(children, key = "word") {
  return Children.toArray(children).flatMap((child,index) => {
    if (typeof child === "string") return child.split(/(\s+)/).map((word,i) => /^\s+$/.test(word) ? word : <span className="scroll-word" key={`${key}-${index}-${i}`}>{word}</span>);
    if (isValidElement(child) && child.type === "br") return <br key={`${key}-${index}`}/>;
    if (isValidElement(child)) return <span className={child.props.className} key={`${key}-${index}`}>{splitWords(child.props.children,`${key}-${index}`)}</span>;
    return child;
  });
}
export function DeveloperHeading({children,className=""}) {
  const reduced=useStaticMotion();const ref=useRef(null);
  useLayoutEffect(() => {
    const element=ref.current;if(!element)return;
    const words=[...element.querySelectorAll('.scroll-word')];
    if(reduced){words.forEach(word=>word.removeAttribute('style'));return;}
    return registerScrollScene(element,p=>{
      const spread=Math.min(.3,words.length*.025);
      words.forEach((word,i)=>{
        const q=Math.max(0,Math.min(1,(p-i/Math.max(1,words.length-1)*spread)/(1-spread)));
        const ease=1-Math.pow(1-q,3);
        word.style.opacity=String(.15+.85*ease);word.style.transform=`translateY(${(1-ease)*24}px)`;word.style.filter=`blur(${(1-ease)*7}px)`;
      });
    });
  },[reduced,children]);
  return <h2 ref={ref} className={className}>{splitWords(children)}</h2>;
}
export function RevealBlock({children,className="",id}) {
  const reduced=useStaticMotion();const ref=useRef(null);
  useLayoutEffect(()=>{
    const el=ref.current;if(!el)return;
    if(reduced){el.style.opacity='1';el.style.transform='none';el.style.clipPath='none';el.querySelector('.project-visual')?.style.removeProperty('transform');return;}
    return registerScrollScene(el,p=>{
      const ease=1-Math.pow(1-p,3);el.style.opacity=String(.12+.88*ease);el.style.transform=`translateY(${(1-ease)*45}px)`;
      const image=el.querySelector('.project-visual');if(image)image.style.transform=`translateY(${(1-p)*25}px) scale(1.04)`;
    });
  },[reduced]);
  return <div ref={ref} id={id} className={`scroll-reveal ${className}`}>{children}</div>;
}

export function ProjectStack({ children }) {
  const ref = useRef(null);
  const reduced = useStaticMotion();
  useLayoutEffect(() => {
    const shells = [...ref.current.children];
    if (reduced) { shells.forEach(shell => { shell.style.removeProperty('--cover'); shell.querySelector('.developer-project').style.scale = '1'; }); return; }
    const stops = shells.map((shell, i) => registerScrollScene(shell, (_, rect, height) => {
      const next = shells[i + 1];
      const cover = next ? Math.min(1, Math.max(0, (height * .9 - next.getBoundingClientRect().top) / (height * .78))) : 0;
      shell.style.setProperty('--cover', cover);
      shell.querySelector('.developer-project').style.scale = String(1 - cover * .055);
    }));
    return () => stops.forEach(stop => stop());
  }, [reduced]);
  return <div className="developer-project-list" ref={ref}>{Children.toArray(children).map((child, i) => <div className="project-stack-layer" key={child.key} style={{zIndex:i + 1}}>{child}</div>)}</div>;
}

export function FloatingTech() {
  const symbols = [
    ["js", "JS"],
    ["react", "react"],
    ["python", "Py"],
    ["html", "5"],
    ["code", "</>"],
    ["iot", "IoT"],
    ["go", "Go"],
    ["database", "database"],
  ];
  return (
    <div className="floating-tech" aria-hidden="true">
      {symbols.map(([name, label], i) => (
        <span className={`tech-${name}`} style={{ "--symbol": i }} key={name}>
          {name === "database" ? <Database size={28} strokeWidth={1.2}/> : name === "react" ? <Atom size={45} strokeWidth={1.3} /> : name === "js" || name === "html" ? <svg viewBox="0 0 50 58" width="46" height="53"><path d="M3 3 H47 L42 48 L25 55 L8 48Z" fill="none" stroke="currentColor" strokeWidth="4"/><text x="25" y="39" textAnchor="middle" fill="currentColor" fontFamily="Arial" fontWeight="900" fontSize={name === "js" ? 27 : 37}>{name === "js" ? "JS" : "5"}</text></svg> : label}
        </span>
      ))}
    </div>
  );
}

export function ExpertiseWorkTransition({ children }) {
  const ref = useRef(null);
  const track = useRef(null);
  const reduced = useStaticMotion();
  const [desktop, setDesktop] = useState(false);
  const enabled = desktop && !reduced;
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1000px) and (min-height: 650px)');
    const update = () => setDesktop(media.matches);
    update(); media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useLayoutEffect(() => {
    const scene = ref.current;
    const rail = track.current;
    if (!enabled) { rail.style.removeProperty('transform'); return; }
    return registerScrollScene(scene, (_, rect, viewport) => {
      const progress = horizontalProgress(rect.top, rect.height, viewport);
      rail.style.transform = `translate3d(${-50 * progress}%, 0, 0)`;
    });
  }, [enabled]);
  return <div ref={ref} id="skills" className={`expertise-work-scene ${enabled ? 'horizontal-enabled' : ''}`}>
    <div className="expertise-work-viewport"><div ref={track} className="expertise-work-track">{children}</div></div>
  </div>;
}

export function WorkBanner({ paused = false }) {
  const ref = useRef(null);
  const reduced = useStaticMotion();
  const scale=useMotionValue(1);
  useLayoutEffect(()=>{
    if(reduced||paused){scale.set(1);return;}
    if(!ref.current)return;
    return registerScrollScene(ref.current,p=>scale.set(.72+.28*p));
  },[reduced,paused,scale]);
  return (
    <section
      ref={ref}
      className="dp-work-banner grid-surface"
      aria-label="Selected work introduction"
    >
      <svg className="effect-definitions" aria-hidden="true"><defs><filter id="dp-gold-goo" x="-10%" y="-20%" width="120%" height="150%"><feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/><feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10" result="goo"/><feComposite in="SourceGraphic" in2="goo" operator="atop"/></filter></defs></svg><p>SCROLL TO EXPLORE MY</p>
      <span className="gold-stem" />
      <Motion.div
        style={reduced || paused ? {} : { scale }}
        className="work-liquid"
      >
        <svg className="liquid-wordmark" viewBox="0 0 1040 390" role="img" aria-label="WORK">
          <defs><mask id="work-cutouts"><rect width="1040" height="390" fill="white" />
            <g fill="black" className="liquid-notches"><circle cx="153" cy="212" r="7"/><circle cx="161" cy="223" r="7"/><circle cx="898" cy="241" r="8"/><circle cx="905" cy="251" r="8"/></g>
          </mask></defs>
          <g fill="currentColor" mask="url(#work-cutouts)">
            <text x="17" y="280" textLength="1005" lengthAdjust="spacingAndGlyphs" fontFamily="Arial Black, Arial, sans-serif" fontSize="310" fontWeight="900" letterSpacing="-20">WORK</text>
            <circle cx="429" cy="232" r="7"/><circle cx="441" cy="232" r="8"/><circle cx="452" cy="233" r="7"/><circle cx="361" cy="277" r="7"/><circle cx="885" cy="279" r="6"/>
          </g>
          {[ [202,302,5],[294,254,10],[381,332,5],[418,298,7],[470,319,5],[531,315,6],[595,305,10],[771,310,8],[893,294,6],[919,302,3],[243,346,4] ].map(([cx,cy,r],i)=><circle className="liquid-bead" key={i} cx={cx} cy={cy} r={r} fill="currentColor" style={{"--bead":i}} />)}
        </svg>
      </Motion.div>
      <div className="work-marquee">
        <div>
          {[0, 1].map((i) => (
            <span key={i} aria-hidden={i === 1}>
              SOFTWARE DEVELOPMENT <b>✦</b> ROBOTICS <b>✦</b> PROBLEM SOLVING{" "}
              <b>✦</b> WEB EXPERIENCES <b>✦</b>{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeveloperCursor({ paused = false }) {
  const reduced = useStaticMotion();
  const [fine, setFine] = useState(false),
    [visible, setVisible] = useState(false),
    [hovered, setHovered] = useState(false);
  const pointerX = useMotionValue(-100),
    pointerY = useMotionValue(-100);
  const x = useSpring(pointerX, { stiffness: 650, damping: 38 }),
    y = useSpring(pointerY, { stiffness: 650, damping: 38 });
  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const update = () => setFine(query.matches);
    update();
    query.addEventListener("change", update);
    if (reduced || paused)
      return () => query.removeEventListener("change", update);
    const move = (event) => {
      if (event.pointerType !== "mouse") return;
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setVisible(true);
      setHovered(Boolean(event.target.closest?.("a,button")));
    };
    const leave = (event) => {
      if (!event.relatedTarget) setVisible(false);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerout", leave);
    return () => {
      query.removeEventListener("change", update);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", leave);
    };
  }, [paused, reduced, pointerX, pointerY]);
  if (!fine || reduced || paused) return null;
  return (
    <Motion.div
      className={`dp-cursor ${hovered ? "cursor-hover" : ""}`}
      aria-hidden="true"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    />
  );
}
