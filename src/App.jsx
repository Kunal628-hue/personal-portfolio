import { useEffect, useRef } from "react";
import { MotionConfig } from "framer-motion";
import {
  MotionHeading,
  StatCounter,
  ExpertiseRows,
  FocusCards,
  ProjectModes,
  PortfolioFAQ,
  ContactPanel,
  PortfolioGallery,
} from "./components/ReferenceSections";
import SectionWipe from "./components/SectionWipe";
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Download,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProjectPreview from "./components/ProjectPreview";
import {
  largeScaleProjects,
  smallScaleProjects,
  roboticsProjects,
  experiences,
  certifications,
  platforms,
  stats,
} from "./data/portfolio";

const projects = [
  ...largeScaleProjects,
  ...smallScaleProjects,
  ...roboticsProjects,
];
const external = { target: "_blank", rel: "noopener noreferrer" };
const base = import.meta.env.BASE_URL;

function SectionHeading({ number, label, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-label">
        <span className="section-dot" />
        {label}
        <sup>/{number}</sup>
      </div>
      <div>
        <MotionHeading>{title}</MotionHeading>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (
      !el ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    el.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("reveal-pending");
          observer.unobserve(el);
        }
      },
      { threshold: 0.06 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.classList.remove("reveal-pending");
    };
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="portfolio-shell video-reference">
        <SectionWipe />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <div className="reference-tool-strip">
            <span>
              THE TOOLS
              <br />
              BEHIND THE WORK
            </span>
            <div>
              {["React", "Python", "Arduino", "GitHub", "Figma"].map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
          <section className="section about-section" id="about">
            <Reveal>
              <SectionHeading
                number="02"
                label="A LITTLE ABOUT ME"
                title={
                  <>
                    Curiosity is where
                    <br />
                    it all starts.
                  </>
                }
              />
              <PortfolioGallery />
              <div className="about-body">
                <div className="about-profile">
                  <img
                    src={`${base}profile.jpg`}
                    alt="Kunal Singhi at a technology event"
                    width="768"
                    height="1024"
                    loading="lazy"
                  />
                  <span aria-hidden="true">+</span>
                </div>
                <div>
                  <p className="profile-summary">
                    B.Tech CSE | Admin @ Coder's OG's | Software &
                    Robotics Enthusiast building real-world solutions
                  </p>
                  <p className="large-copy">
                    I build software with a
                    strong interest in building practical software solutions. My
                    journey into technology started with curiosity about how
                    systems work, which gradually expanded into programming,
                    problem-solving, and robotics.
                  </p>
                  <p>
                    I work with languages and tools like Python, Java, SQL, and
                    modern web technologies, and I enjoy applying logic to
                    real-world challenges—whether through software applications,
                    data-driven systems, or robotics projects. I am continuously
                    learning and experimenting to build a strong foundation for
                    future roles in software and technology.
                  </p>
                  <div className="about-tags">
                    <span>Computer Science · Honors</span>
                    <span>Core Focus · Logic • Systems • AI</span>
                  </div>
                </div>
              </div>
              <div className="stats-row">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <StatCounter value={stat.value} />
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="drivers">
                <span>WHAT DRIVES ME</span>
                <p>
                  Solving logical and real-world problems through code and
                  systems thinking
                </p>
                <p>
                  Building software, robotics projects, and experiments that
                  connect theory with practice
                </p>
                <p>
                  Exploring technology, markets, and data to understand how
                  systems behave and evolve
                </p>
              </div>
            </Reveal>
          </section>
          <section className="section" id="skills">
            <SectionHeading
              number="03"
              label="EXPERTISE"
              title={
                <>
                  A versatile toolkit.
                  <br />
                  An engineer’s mindset.
                </>
              }
              description="Mastering the intersection of sophisticated software and tangible hardware."
            />
            <ExpertiseRows />
            <div className="tools-block" id="tools">
              <span className="eyebrow">THE TECH STACK</span>
              <p>
                Frontend • Backend • IoT • UI/UX — Premium tools for building
                premium experiences.
              </p>
              <div className="tools-list">
                {[
                  "VS Code",
                  "Git",
                  "GitHub",
                  "PostgreSQL",
                  "MySQL",
                  "Supabase",
                  "Figma",
                  "Photoshop",
                  "After Effects",
                  "Canva",
                  "Groww",
                  "CoinDCX",
                ].map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </section>
          <section className="section work-section" id="projects">
            <SectionHeading
              number="01"
              label="SELECTED WORK"
              title={
                <>
                  Ideas, brought
                  <br />
                  to life.
                </>
              }
              description="Engineering digital solutions at the intersection of design and functionality."
            />
            <div className="project-grid">
              {projects.map((project, i) => (
                <Reveal
                  key={project.title}
                  className={`project-card ${i > 3 ? "robotics-card" : ""}`}
                >
                  <ProjectPreview index={i} />
                  <div className="project-meta" id={`project-${i}`}>
                    <span>
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {i < 4 ? "WEB DEVELOPMENT" : "ROBOTICS & IoT"}
                    </span>
                    {project.links && (
                      <a
                        href={project.links.demo}
                        {...external}
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <ArrowUpRight size={22} />
                      </a>
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {project.links && (
                      <a
                        className="source-link"
                        href={project.links.github}
                        {...external}
                        aria-label={`${project.title} source code`}
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
          <FocusCards />
          <section className="section coding-section" id="problem-solving">
            <SectionHeading
              number="04"
              label="CONSISTENCY & CRAFT"
              title={
                <>
                  A little better.
                  <br />
                  Every single day.
                </>
              }
              description="Mastering algorithms and logic through competitive programming platforms."
            />
            <div className="platforms">
              {platforms.map((p) => (
                <a key={p.name} href={p.url} {...external}>
                  <img
                    src={`${base}${p.image.replace(/^\//, "")}`}
                    alt=""
                    width="32"
                    height="32"
                  />
                  <span>{p.name}</span>
                  <ArrowUpRight size={20} />
                </a>
              ))}
            </div>
            <div className="github-panel" id="github-stats">
              <div>
                <Github size={30} strokeWidth={1.3} />
                <span className="eyebrow">GITHUB STATS</span>
                <h3>Building in the open.</h3>
                <p>
                  Consistency is key. My open source contributions and coding
                  streak.
                </p>
                <a
                  className="text-link"
                  href="https://github.com/Kunal628-hue"
                  {...external}
                >
                  @Kunal628-hue <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="github-graph">
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=Kunal628-hue&bg_color=f6f5f2&color=555555&line=5e3a30&point=9c6455&area=true&hide_border=true&hide_title=true"
                  alt="Kunal Singhi’s GitHub contribution activity graph"
                  loading="lazy"
                />
                <a
                  href="https://github.com/Kunal628-hue?tab=overview"
                  {...external}
                >
                  View contribution history <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </section>
          <section className="section" id="experience">
            <SectionHeading
              number="05"
              label="THE JOURNEY"
              title={
                <>
                  Learning by doing.
                  <br />
                  Growing along the way.
                </>
              }
              description="A timeline of professional experiences and specialized training."
            />
            <div className="timeline">
              {experiences.map((exp, i) => (
                <Reveal key={exp.role}>
                  <article className="timeline-row">
                    <span className="timeline-date">{exp.period}</span>
                    <div>
                      <span className="eyebrow">{exp.company}</span>
                      <h3>{exp.role}</h3>
                      <p>{exp.description}</p>
                    </div>
                    {exp.logo ? (
                      <img
                        src={`${base}${exp.logo.slice(1)}`}
                        alt={exp.company}
                        width="50"
                        height="50"
                      />
                    ) : (
                      <span className="timeline-number">0{i + 1}</span>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
          <section className="section education-section" id="education">
            <SectionHeading
              number="06"
              label="EDUCATION"
              title={
                <>
                  A strong foundation.
                  <br />
                  An open mind.
                </>
              }
              description="Bridging theoretical concepts with practical application."
            />
            <div className="education-list">
              {[
                [
                  "2025 - Present",
                  "B.Tech Computer Science",
                  "Polaris School of Technology",
                  "Building a robust foundation in high-performance computing, distributed systems, and modern software engineering.",
                  [],
                ],
                [
                  "Science Stream",
                  "Senior Secondary (XI–XII)",
                  "St. Mary’s Junior College, Hyderabad",
                  "Specialized in core physical sciences and mathematics with an emphasis on analytical logic.",
                  ["PCM", "Advanced Calculus"],
                ],
                [
                  "Academic Discipline",
                  "JEE Specialized Prep",
                  "Physics Wallah (PW)",
                  "Rigorous problem-solving training focusing on competitive engineering standards.",
                  ["Problem Solving", "Conceptual Depth"],
                ],
              ].map(([date, title, school, description, tags]) => (
                <Reveal key={title}>
                  <article className="education-row">
                    <span className="eyebrow">{date}</span>
                    <div>
                      <h3>{title}</h3>
                      <h4>{school}</h4>
                      <p>{description}</p>
                      <div className="tags">
                        {tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight size={23} />
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="certifications" id="certifications">
              <div className="subsection-title">
                <h3>Always learning.</h3>
                <span className="eyebrow">CERTIFICATIONS [04]</span>
              </div>
              <div className="certificate-grid">
                {certifications.map((cert) => (
                  <article key={cert.title}>
                    <span className="certificate-symbol">✳</span>
                    <span className="eyebrow">{cert.date}</span>
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section" id="activities">
            <SectionHeading
              number="07"
              label="BEYOND THE CODE"
              title={
                <>
                  The things that
                  <br />
                  keep me curious.
                </>
              }
              description="Whatever makes my heart beat faster."
            />
            <div className="activity-grid">
              {[
                [
                  "Hackathons",
                  "Thriving in high-pressure environments to build rapid prototypes. I love the chaos of innovation and the satisfaction of a working demo after 24 hours.",
                  ["Innovation", "Rapid Prototyping", "Teamwork"],
                ],
                [
                  "Tech Communities",
                  "Admin at Coder's OG's. Active participant in dev communities, sharing knowledge and learning from peers.",
                  ["Community Lead", "Networking", "Mentorship"],
                ],
                [
                  "Market Markets",
                  "Exploring financial markets through a technical lens. Learning chart patterns and market psychology as a personal interest.",
                  ["Technical Analysis", "Learning", "Economics"],
                ],
                [
                  "Leadership",
                  "Taking initiative in clubs and project teams. I believe in leading by example and empowering others.",
                  ["Team Lead", "Organizer", "Initiative"],
                ],
                [
                  "Sports",
                  "Maintaining a competitive spirit and physical discipline on the field.",
                  ["Cricket", "Football", "Badminton"],
                ],
              ].map(([title, description, tags], i) => (
                <Reveal key={title}>
                  <article className="activity-card">
                    <span className="activity-number">0{i + 1} /</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="tags">
                      {tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="trading-panel" id="trading">
                <div>
                  <span className="eyebrow">
                    PATTERNS. DISCIPLINE. PERSPECTIVE.
                  </span>
                  <h3>Active Trader</h3>
                  <p>
                    Beyond code, I navigate the financial markets. I apply the
                    same analytical rigor from engineering to identify patterns,
                    manage risk, and execute trades with discipline.
                  </p>
                </div>
                <div>
                  {[
                    [
                      "Technical Analysis",
                      "Charting market structure and price action.",
                    ],
                    [
                      "Risk Management",
                      "Calculated position sizing and portfolio balance.",
                    ],
                    [
                      "Market Psychology",
                      "Understanding sentiment and behavioral economics.",
                    ],
                  ].map(([t, d]) => (
                    <div className="trading-item" key={t}>
                      <h4>{t}</h4>
                      <p>{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
          <section className="section resume-section" id="resume">
            <SectionHeading
              number="08"
              label="CURRICULUM VITAE"
              title={
                <>
                  The complete
                  <br />
                  picture.
                </>
              }
              description="A comprehensive overview of my academic background, professional projects, and technical certifications."
            />
            <div className="resume-layout">
              <div className="resume-highlights">
                {[
                  [
                    "Academic Foundation",
                    "B.Tech in Computer Science at Polaris School of Technology (2025 - 2029). Focusing on foundational CS concepts and modern software engineering practices.",
                  ],
                  [
                    "Project Portfolio",
                    "Built production-grade applications like Global Notes Workspace and Planora Smart Event OS, demonstrating full-stack capabilities and system architecture skills.",
                  ],
                  [
                    "Certifications",
                    "Certified in Data Science, Machine Learning (Wayspire) and Robotics Engineering (Leep Robotics), bridging the gap between software and hardware.",
                  ],
                ].map(([t, d]) => (
                  <div key={t}>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                ))}
              </div>
              <div className="resume-card">
                <span className="eyebrow">KUNAL SINGHI / RESUME</span>
                <div className="resume-paper">
                  <span>KS.</span>
                  <strong>Kunal Singhi</strong>
                  <small>SOFTWARE · ROBOTICS · PROBLEM SOLVING</small>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <p>
                  Explore the detailed web version of my professional journey,
                  skills, and accomplishments.
                </p>
                <a
                  className="button dark"
                  href={`${base}resume.html`}
                  {...external}
                >
                  View Web Resume <ArrowUpRight size={17} />
                </a>
                <a className="text-link" href={`${base}resume.pdf`} download>
                  Download PDF <Download size={15} />
                </a>
              </div>
            </div>
          </section>
          <ProjectModes />
          <PortfolioFAQ />
          <ContactPanel />
        </main>
        <footer className="site-footer">
          <div className="footer-navigation">
            <div>
              <span className="eyebrow">NAVIGATION</span>
              {[
                ["Home", "#hero"],
                ["About", "#about"],
                ["Expertise", "#skills"],
                ["Work", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={href} href={href} data-section-transition>
                  {label}
                </a>
              ))}
            </div>
            <div>
              <span className="eyebrow">SOCIAL</span>
              <a href="https://github.com/Kunal628-hue" {...external}>
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/kunal-singhi-jain-2b3329386/"
                {...external}
              >
                LinkedIn ↗
              </a>
              <a href="mailto:imsinghi2016@gmail.com">Email ↗</a>
            </div>
          </div>
          <a href="#hero" className="footer-wordmark" data-section-transition>
            Kunal<span>®</span>
          </a>
          <div>
            <span>Built using modern web technologies · Kunal Singhi</span>
            <a href="#hero">
              Back to top <ArrowDown size={14} />
            </a>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
