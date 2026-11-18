import { useRef } from "react";
import {
  motion as Motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  RegistrationGrid,
  AnimatedName,
  FeaturedWorkCard,
  HeroContactCard,
} from "../components/HeroElements";

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 65, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 65, damping: 24 });
  const cardX = useTransform(x, (v) => -v * 0.65);
  const cardY = useTransform(y, (v) => -v * 0.65);
  const rotateX = useTransform(y, [-9, 9], [5, -5]);
  const rotateY = useTransform(x, [-13, 13], [-7, 7]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitScroll = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const titleScroll = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const move = (event) => {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 26);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 18);
  };
  return (
    <section
      id="hero"
      ref={ref}
      className="hero orange-hero"
      onPointerMove={move}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <RegistrationGrid />
      <Motion.div
        className="hero-ghost"
        aria-hidden="true"
        style={reduced ? {} : { y: titleScroll }}
      >
        KUNAL
      </Motion.div>
      <Motion.div
        className="hero-cutout-wrap has-cutout"
        style={reduced ? {} : { y: portraitScroll }}
      >
        <Motion.div className="hero-cutout" style={reduced ? {} : { x, y }}>
          <img
            src={`${import.meta.env.BASE_URL}profile-cutout.png`}
            alt="Kunal Singhi"
            fetchPriority="high"
            width="1120"
            height="1400"
          />
        </Motion.div>
      </Motion.div>
      <div className="hero-intro">
        <h2>
          Turning code into
          <br />
          real-world
          <br />
          solutions.
        </h2>
      </div>
      <FeaturedWorkCard
        x={cardX}
        y={cardY}
        rotateX={rotateX}
        rotateY={rotateY}
      />
      <span className="hero-year">©{new Date().getFullYear()}</span>
      <AnimatedName />
      <HeroContactCard />
      <div className="hero-bottom">
        <span>SOFTWARE · ROBOTICS · PROBLEM SOLVING</span>
        <a href="#projects">
          Scroll to explore <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
