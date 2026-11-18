import { Children, isValidElement, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion as Motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Asterisk, Plus, Github, Linkedin } from "lucide-react";
import ProjectPreview from "./ProjectPreview";
import {
  skills,
  largeScaleProjects,
  smallScaleProjects,
  roboticsProjects,
} from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

function words(children, key = "word") {
  return Children.toArray(children).flatMap((child, index) => {
    const id = `${key}-${index}`;
    if (typeof child === "string" || typeof child === "number")
      return String(child)
        .split(/(\s+)/)
        .map((word, i) =>
          /^\s+$/.test(word) ? (
            word
          ) : (
            <Motion.span
              aria-hidden="true"
              className="heading-word"
              key={`${id}-${i}`}
              variants={{
                hidden: { opacity: 0, filter: "blur(9px)", y: 16 },
                visible: { opacity: 1, filter: "blur(0px)", y: 0 },
              }}
              transition={{ duration: 0.7, ease }}
            >
              {word}
            </Motion.span>
          ),
        );
    if (isValidElement(child) && child.type === "br") return <br key={id} />;
    if (isValidElement(child)) return words(child.props.children, id);
    return [];
  });
}
function plainText(children) {
  return Children.toArray(children)
    .map((child) =>
      typeof child === "string" || typeof child === "number"
        ? child
        : isValidElement(child)
          ? child.type === "br"
            ? " "
            : plainText(child.props.children)
          : "",
    )
    .join("");
}
export function MotionHeading({ children }) {
  const reduced = useReducedMotion();
  return (
    <Motion.h2
      aria-label={plainText(children).replace(/\s+/g, " ").trim()}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.065 } } }}
    >
      {reduced ? children : words(children)}
    </Motion.h2>
  );
}

export function StatCounter({ value }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (!visible || reduced) return;
    const target = parseInt(value, 10);
    if (!Number.isFinite(target)) return;
    const suffix = value.replace(/^\d+/, "");
    const controls = animate(0, target, {
      duration: 1.5,
      ease,
      onUpdate: (n) => setDisplay(`${Math.round(n)}${suffix}`),
    });
    return () => controls.stop();
  }, [visible, reduced, value]);
  return (
    <strong ref={ref} aria-label={value}>
      <span aria-hidden="true">{display}</span>
    </strong>
  );
}

export function ExpertiseRows() {
  const [active, setActive] = useState(null);
  return (
    <div className="reference-services">
      {skills.map((skill, i) => (
        <Motion.article
          className={`service-row ${active === i ? "is-active" : ""}`}
          key={skill.category}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease }}
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(i)}
          onBlur={() => setActive(null)}
        >
          <span className="service-number">
            <span />
            {String(i + 1).padStart(3, "0")}
          </span>
          <div className="service-copy">
            <h3>{skill.category}</h3>
            <div className="tags">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className="reference-link"
              href={i === 2 ? "#project-4" : "#projects"}
            >
              VIEW PROJECTS <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="service-preview">
            <ProjectPreview index={[0, 3, 5, 1][i]} />
            <span className="preview-indicator">
              <i className={active === i ? "active" : ""} />
              <i />
            </span>
          </div>
        </Motion.article>
      ))}
    </div>
  );
}

export function FocusCards() {
  return (
    <section className="section focus-section" id="focus">
      <div className="center-heading">
        <span className="section-label">
          <span className="section-dot" />
          HOW I BUILD
        </span>
        <MotionHeading>
          A versatile toolkit.
          <br />
          Real-world solutions.
        </MotionHeading>
      </div>
      <div className="focus-cards">
        {skills.map((s, i) => (
          <Motion.article
            key={s.category}
            initial={{ opacity: 0, y: 55, rotate: i % 2 ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: i * 0.09, ease }}
          >
            <Asterisk size={25} />
            <span className="eyebrow">0{i + 1}</span>
            <h3>{s.category}</h3>
            <p>{s.items.join(" · ")}</p>
            <a href="#skills" aria-label={`Explore ${s.category} expertise`}>
              <ArrowUpRight size={18} />
            </a>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}

export function ProjectModes() {
  const [mode, setMode] = useState("web");
  const all =
    mode === "web"
      ? [...largeScaleProjects, ...smallScaleProjects]
      : roboticsProjects;
  const [first] = all;
  return (
    <section className="section project-modes" id="project-disciplines">
      <div className="section-heading">
        <span className="section-label">
          <span className="section-dot" />
          EXPLORE MY WORK
        </span>
        <MotionHeading>
          Practical projects.
          <br />
          Across disciplines.
        </MotionHeading>
      </div>
      <div
        className="mode-tabs"
        role="tablist"
        aria-label="Project disciplines"
      >
        {[
          ["web", "WEB DEVELOPMENT"],
          ["robotics", "ROBOTICS & IoT"],
        ].map(([value, label]) => (
          <button
            key={value}
            id={`tab-${value}`}
            role="tab"
            aria-selected={mode === value}
            aria-controls={`panel-${value}`}
            tabIndex={mode === value ? 0 : -1}
            onClick={() => setMode(value)}
            onKeyDown={(e) => {
              if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const next =
                  e.key === "Home"
                    ? "web"
                    : e.key === "End"
                      ? "robotics"
                      : mode === "web"
                        ? "robotics"
                        : "web";
                setMode(next);
                document.getElementById(`tab-${next}`)?.focus();
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        id={`panel-${mode}`}
        role="tabpanel"
        aria-labelledby={`tab-${mode}`}
        tabIndex={0}
      >
        <AnimatePresence mode="wait" initial={false}>
          <Motion.div
            className="mode-panels"
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mode-summary">
              <span className="eyebrow">
                {mode === "web"
                  ? "SOFTWARE APPLICATIONS"
                  : "HARDWARE & SOFTWARE"}
              </span>
              <strong>
                {String(all.length).padStart(2, "0")}
                <small> / PROJECTS</small>
              </strong>
              <h3>{mode === "web" ? "Web development" : "Robotics & IoT"}</h3>
              <Asterisk size={23} />
              <p>
                {mode === "web"
                  ? "Engineering digital solutions at the intersection of design and functionality."
                  : "Building software, robotics projects, and experiments that connect theory with practice"}
              </p>
            </div>
            <div className="mode-detail">
              <div>
                <h3>{first.title}</h3>
                <p>{first.description}</p>
              </div>
              <ul>
                {all.map((p) => (
                  <li key={p.title}>{p.title}</li>
                ))}
              </ul>
              <a
                className="reference-link"
                href={mode === "web" ? "#projects" : "#project-4"}
              >
                EXPLORE PROJECTS <ArrowUpRight size={16} />
              </a>
            </div>
          </Motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

const faq = [
  [
    "What are you studying?",
    <>
      B.Tech Computer Science at Polaris School of Technology (2025 – Present).
    </>,
  ],
  [
    "What technologies do you work with?",
    <>
      React, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript, Python, Java,
      Node.js, Firebase, Arduino, Robotics, Sensors, and Circuit Design.
    </>,
  ],
  [
    "Where can I see your code?",
    <>
      Explore my projects and open-source work on{" "}
      <a
        href="https://github.com/Kunal628-hue"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
      .
    </>,
  ],
  [
    "Do you build robotics projects?",
    <>
      Yes — Automatic Plant Watering System, Obstacle Avoiding Robot, and Fire
      Safety System. <a href="#project-4">Explore the projects ↗</a>
    </>,
  ],
  [
    "Where can I view your resume?",
    <>
      <a
        href={`${import.meta.env.BASE_URL}resume.html`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View my web resume ↗
      </a>{" "}
      or{" "}
      <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
        download the PDF
      </a>
      .
    </>,
  ],
  [
    "How can I get in touch?",
    <>
      Email <a href="mailto:imsinghi2016@gmail.com">imsinghi2016@gmail.com</a>{" "}
      for collaborations or just a friendly hello.
    </>,
  ],
];
export function PortfolioFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq-section" id="faq">
      <div>
        <span className="section-label">
          <span className="section-dot" />
          FAQ
        </span>
        <MotionHeading>
          Frequent
          <br />
          questions.
        </MotionHeading>
      </div>
      <div className="faq-items">
        {faq.map(([q, a], i) => (
          <div className={`faq-item ${open === i ? "is-open" : ""}`} key={q}>
            <h3>
              <button
                id={`faq-question-${i}`}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>
                  {i + 1}. {q}
                </span>
                <Plus size={15} />
              </button>
            </h3>
            <div
              className="faq-answer"
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              inert={open !== i}
            >
              <div>{a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactPanel() {
  const [status, setStatus] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${form.get("name")}`;
    const body = `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`;
    window.location.href = `mailto:imsinghi2016@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Your email app will open with this draft. You can also email imsinghi2016@gmail.com directly.",
    );
  };
  return (
    <section className="reference-contact" id="contact">
      <div className="contact-art">
        <form className="contact-form" onSubmit={submit}>
          <div className="form-brand">
            Kunal Singhi<sup>®</sup>
          </div>
          <h3>Reach Out to Me</h3>
          <label>
            Name
            <input
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              maxLength={120}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              maxLength={254}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={3}
              maxLength={5000}
            />
          </label>
          <button type="submit">
            YOUR MESSAGE <ArrowUpRight size={15} />
          </button>
          <small>Opens a draft in your email app.</small>
          <p role="status">{status}</p>
        </form>
        <div className="contact-art-copy">
          <span className="section-label">
            <span className="section-dot" />
            GET IN TOUCH
          </span>
          <MotionHeading>
            Let’s create
            <br />
            together.
          </MotionHeading>
          <Asterisk size={30} />
          <p>
            Feel free to reach out for collaborations
            <br />
            or just a friendly hello.
          </p>
        </div>
      </div>
      <div className="contact-details">
        <p>
          Turning code into real-world solutions.
          <br />
          <a href="mailto:imsinghi2016@gmail.com">imsinghi2016@gmail.com</a>
        </p>
        <div>
          <a
            href="https://github.com/Kunal628-hue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            GitHub <ArrowUpRight size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-singhi-jain-2b3329386/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function PortfolioGallery() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -140]);
  return (
    <div
      className="portfolio-gallery"
      ref={ref}
      aria-label="Software, robotics, and community gallery"
    >
      <Motion.div className="gallery-track" style={reduced ? {} : { x }}>
        <figure>
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Kunal Singhi at a technology event"
            loading="lazy"
          />
          <figcaption>Kunal Singhi / Developer</figcaption>
        </figure>
        <figure>
          <ProjectPreview index={0} />
          <figcaption>Global Notes Workspace / Software</figcaption>
        </figure>
        <figure>
          <ProjectPreview index={5} />
          <figcaption>Obstacle Avoiding Robot / Robotics</figcaption>
        </figure>
        <figure className="community-gallery">
          <img
            src={`${import.meta.env.BASE_URL}coders_og_logo.png`}
            alt="Coder's OG's community"
            loading="lazy"
          />
          <figcaption>Coder’s OG’s / Community</figcaption>
        </figure>
      </Motion.div>
    </div>
  );
}
