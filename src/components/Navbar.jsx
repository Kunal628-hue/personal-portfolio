import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Plus, Github, Linkedin } from "lucide-react";
const links = [
  ["Home", "#hero"],
  ["About", "#about"],
  ["Expertise", "#skills"],
  ["Work", "#projects"],
  ["Contact", "#contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null),
    toggleRef = useRef(null);
  const reduced = useReducedMotion();
  const closeMenu = () => {
    setOpen(false);
    toggleRef.current?.focus({ preventScroll: true });
  };
  useEffect(() => {
    if (!open) return;
    const main = document.getElementById("main-content");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    overlayRef.current?.querySelector("a")?.focus({ preventScroll: true });
    const keyboard = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus({ preventScroll: true });
      }
      if (event.key !== "Tab") return;
      const controls = overlayRef.current?.querySelectorAll("a[href],button");
      if (!controls?.length) return;
      const first = controls[0],
        last = controls[controls.length - 1];
      if (
        event.shiftKey &&
        (document.activeElement === first ||
          !overlayRef.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        last.focus();
      }
      if (
        !event.shiftKey &&
        (document.activeElement === last ||
          !overlayRef.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", keyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = false;
      window.removeEventListener("keydown", keyboard);
    };
  }, [open]);
  return (
    <>
      <header className="site-header">
        <a
          className="site-logo"
          data-section-transition
          href="#hero"
          aria-label="Kunal Singhi home"
        >
          Kunal<span>®</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} data-section-transition>
              {label}
            </a>
          ))}
        </nav>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="menu-lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <Motion.div
            className="navigation-overlay"
            ref={overlayRef}
            id="main-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={
              reduced ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
            }
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
            }
            transition={{
              duration: reduced ? 0 : 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="overlay-top">
              <a
                className="site-logo"
                href="#hero"
                onClick={closeMenu}
                data-section-transition
              >
                Kunal<span>®</span>
              </a>
              <button
                className="overlay-close"
                aria-label="Close navigation"
                onClick={closeMenu}
              >
                ×
              </button>
            </div>
            <div className="overlay-body">
              <nav aria-label="Expanded navigation">
                {links.map(([label, href], i) => (
                  <Motion.a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    data-section-transition
                    initial={reduced ? false : { opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: reduced ? 0 : 0.15 + i * 0.055,
                    }}
                  >
                    {label}
                    <Plus size={23} />
                  </Motion.a>
                ))}
              </nav>
              <div className="overlay-details">
                <span className="eyebrow">GET IN TOUCH</span>
                <a href="mailto:imsinghi2016@gmail.com">
                  imsinghi2016@gmail.com <ArrowUpRight size={15} />
                </a>
                <span className="eyebrow">SOFTWARE & ROBOTICS</span>
                <p>
                  B.Tech CSE
                  <br />
                  Admin @ Coder&apos;s OG&apos;s
                </p>
                <div>
                  <a
                    href="https://github.com/Kunal628-hue"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={19} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kunal-singhi-jain-2b3329386/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={19} />
                  </a>
                </div>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
