import { useEffect, useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";

export default function SectionWipe() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState("idle");
  const busy = useRef(false);
  useEffect(() => {
    const timers = [];
    const navigate = (event) => {
      const link = event.target.closest?.("a[data-section-transition]");
      if (
        !link ||
        reduced ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const hash = link.getAttribute("href");
      if (!hash?.startsWith("#")) return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      if (busy.current) return;
      busy.current = true;
      setPhase("cover");
      timers.push(
        setTimeout(() => {
          target.scrollIntoView({ behavior: "instant", block: "start" });
          history.pushState(null, "", hash);
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
          setPhase("reveal");
        }, 480),
      );
      timers.push(
        setTimeout(() => {
          setPhase("idle");
          busy.current = false;
        }, 1050),
      );
    };
    document.addEventListener("click", navigate);
    return () => {
      document.removeEventListener("click", navigate);
      timers.forEach(clearTimeout);
      busy.current = false;
    };
  }, [reduced]);
  return (
    <div
      className={`section-wipe ${phase !== "idle" ? "is-active" : ""}`}
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <Motion.span
          key={i}
          initial={false}
          animate={{ scaleY: phase === "cover" ? 1 : 0 }}
          style={{ transformOrigin: phase === "cover" ? "top" : "bottom" }}
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 0.38, delay: i * 0.045, ease: [0.76, 0, 0.24, 1] }
          }
        />
      ))}
    </div>
  );
}
