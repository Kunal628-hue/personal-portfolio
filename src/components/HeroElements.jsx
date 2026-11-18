import { motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Asterisk } from "lucide-react";
import ProjectPreview from "./ProjectPreview";

export function AmbientRibbons() {
  return (
    <div className="ambient-ribbons" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export function RegistrationGrid() {
  return (
    <div className="hero-grid" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span className={`grid-rail rail-${i}`} key={i}>
          {[0, 1, 2, 3].map((j) => (
            <i key={j} style={{ top: `${j * 33}%` }}>
              +
            </i>
          ))}
        </span>
      ))}
    </div>
  );
}

export function AnimatedName() {
  return (
    <h1 className="hero-name" aria-label="Kunal Singhi">
      <span className="name-letters" aria-hidden="true">
        {Array.from("KUNAL").map((letter, i) => (
          <span key={i} style={{ "--letter-index": i }}>
            {letter}
          </span>
        ))}
      </span>
    </h1>
  );
}

export function FeaturedWorkCard({ x, y, rotateX, rotateY }) {
  const reduced = useReducedMotion();
  return (
    <Motion.a
      className="hero-feature"
      href="https://global-notes-workspace.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      style={
        reduced ? {} : { x, y, rotateX, rotateY, transformPerspective: 1000 }
      }
      whileHover={reduced ? {} : { scale: 1.045, rotateZ: -2 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      aria-label="View Global Notes Workspace live project"
    >
      <ProjectPreview index={0} />
      <div>
        <Asterisk size={17} />
        <span>Global Notes</span>
        <small>/ Web</small>
      </div>
    </Motion.a>
  );
}

export function HeroContactCard() {
  return (
    <a className="hero-talk" href="mailto:imsinghi2016@gmail.com">
      <span className="talk-portrait">
        <img
          src={`${import.meta.env.BASE_URL}profile-cutout.png`}
          width="85"
          height="100"
          alt=""
        />
      </span>
      <div>
        <span>Let’s Talk</span>
        <strong>Kunal Singhi</strong>
        <small>Software & Robotics</small>
      </div>
      <Asterisk className="talk-star" size={20} />
      <span className="talk-arrow">
        <ArrowUpRight size={25} />
      </span>
    </a>
  );
}
