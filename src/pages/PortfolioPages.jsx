import {useStaticMotion} from '../components/motionPreferences';
import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download, Code2, Cpu, Layers, Sparkles, Database, BrainCircuit, Plus } from "lucide-react";
import { RippleHero, DeveloperHeading, RevealBlock, FloatingTech, WorkBanner, ProjectStack, ExpertiseWorkTransition } from "../components/DeveloperEffects";
import ProjectPreview from "../components/ProjectPreview";
import TraderSection from "../components/TraderSection";
import ProjectStory from "../components/ProjectStory";
import WebProjectBrowser from "../components/WebProjectBrowser";
import {webProjects} from "../data/webProjects";
import { roboticsProjects, skills, experiences, certifications, platforms, stats } from "../data/portfolio";
import { education, activities, resumeHighlights } from "../data/profile";

const external = { target: "_blank", rel: "noopener noreferrer" };
const base = import.meta.env.BASE_URL;
const tools = [
  "VS Code",
  "Git",
  "GitHub",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "Figma",
  "Stitch",
  "Photoshop",
  "After Effects",
  "Canva",
  "Groww",
  "CoinDCX",
];

function SectionLabel({ number, children }) {
  return (
    <div className="dp-section-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}
function Tags({ items }) {
  return (
    <div className="dp-tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function Expertise() {
  const [active, setActive] = useState(null);
  const reduced = useStaticMotion();
  const icons = [Code2, Layers, Database, BrainCircuit, Cpu, Sparkles];
  return (
    <section className="dp-section dp-expertise grid-surface" aria-label="My expertise">
      <SectionLabel number="02">EXPERTISE</SectionLabel>
      <div className="expertise-columns">
        <div className="expertise-intro">
          <DeveloperHeading>
            <span className="muted">MY</span>
            <br />
            EXPERTISE
          </DeveloperHeading>
          <p>
            Mastering the intersection of sophisticated{" "}
            <span className="gold">software and tangible hardware.</span>
          </p>
          <p className="small-copy">
            Solving logical and real-world problems through code and systems
            thinking.
          </p>
          <Tags items={["HTML", "CSS", "JAVASCRIPT", "REACT", "ARDUINO"]} />
          <FloatingTech />
        </div>
        <div className="developer-skills">
          {skills.map((skill, i) => {
            const Icon = icons[i];
            return (
              <article
                className={`developer-skill ${active === i ? "skill-active" : ""}`}
                key={skill.category}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                <span className="skill-index">0{i + 1}</span>
                <span className="skill-icon">
                  <Icon size={21} strokeWidth={1.3} />
                </span>
                <div>
                  <h3>{skill.category}</h3>
                  <Tags items={skill.items} />
                </div>
                <a
                  href={skill.category === "Hardware & IoT" ? "#hardware-projects" : "#software-projects"}
                  aria-label={`Explore ${skill.category} projects`} title="See related projects"
                >
                  <ArrowUpRight size={16} />
                </a>
                <AnimatePresence>
                  {active === i && (
                    <Motion.div
                      className="skill-hover-card"
                      aria-hidden="true"
                      initial={
                        reduced
                          ? false
                          : { opacity: 0, scale: 0.7, rotate: -10 }
                      }
                      animate={{ opacity: 1, scale: 1, rotate: 5 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25 }}
                    >
                      {[Code2, Layers, Cpu, Sparkles].map((Glyph, j) => (
                        <Glyph key={j} size={22} strokeWidth={1.4} />
                      ))}
                    </Motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
      <div className="dp-tools" id="tools">
        <span>THE TECH STACK</span>
        <div>
          {tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeveloperContact() {
  return (
    <section id="contact" className="dp-section dp-contact">
      <SectionLabel number="08">CONTACT</SectionLabel>
      <div className="contact-columns">
        <div>
          <DeveloperHeading>
            Let’s create
            <br />
            <span className="gold">something</span>
            <br />
            meaningful.
          </DeveloperHeading>
          <p>
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
          <div className="contact-link-stack">
            {[
              [
                Mail,
                "Email me",
                "imsinghi2016@gmail.com",
                "mailto:imsinghi2016@gmail.com",
              ],
              [
                Linkedin,
                "Connect",
                "LinkedIn",
                "https://www.linkedin.com/in/kunal-singhi-jain-2b3329386/",
              ],
              [
                Github,
                "Explore my code",
                "GitHub",
                "https://github.com/Kunal628-hue",
              ],
            ].map(([Icon, label, detail, url]) => (
              <a
                href={url}
                key={url}
                {...(url.startsWith("https") ? external : {})}
              >
                <span>
                  <Icon size={20} strokeWidth={1.3} />
                </span>
                <div>
                  <strong>{label}</strong>
                  <small>{detail}</small>
                </div>
                <ArrowUpRight size={17} />
              </a>
            ))}
          </div>
        </div>
        <RevealBlock className="contact-explore">
          <span className="dp-eyebrow">A CLOSER LOOK</span>
          <h3>Start with<br/><span>the work.</span></h3>
          <p>Explore what I build, how I think, and the experience behind it.</p>
          <nav className="contact-explore-links" aria-label="Explore before connecting">
            <a href="#software-projects"><span className="contact-explore-icon"><Code2 size={23} strokeWidth={1.3}/></span><span><strong>Software projects</strong><small>{webProjects.length} projects · Web & applications</small></span><ArrowUpRight size={20}/></a>
            <a href="#hardware-projects"><span className="contact-explore-icon"><Cpu size={23} strokeWidth={1.3}/></span><span><strong>Hardware & robotics</strong><small>{roboticsProjects.length} projects · Sensors & physical systems</small></span><ArrowUpRight size={20}/></a>
            <a href={`${base}resume.html`} {...external}><span className="contact-explore-icon"><Download size={23} strokeWidth={1.3}/></span><span><strong>View my résumé</strong><small>Education, experience & credentials</small></span><ArrowUpRight size={20}/></a>
          </nav>
          <div className="contact-explore-note"><span aria-hidden="true">✦</span><p>Have something in mind? Reach out through the links alongside.</p></div>
        </RevealBlock>
      </div>
    </section>
  );
}


function AboutSection() { return (
            <section id="about" className="dp-section dp-about">
              <div className="about-curved-title">
                <span>01 — THE PERSON BEHIND THE WORK</span>
                <DeveloperHeading>ABOUT ME</DeveloperHeading>
                <svg viewBox="0 0 600 45" aria-hidden="true">
                  <path d="M5 16 Q300 26 595 16" />
                </svg>
              </div>
              <div className="about-developer-layout">
                <RevealBlock className="developer-portrait">
                  <img
                    src={`${base}profile-cutout.png`}
                    alt="Kunal Singhi"
                    width="1120"
                    height="1400"
                    loading="lazy"
                  />
                  <span>KUNAL SINGHI</span>
                  <nav className="portrait-glyphs" aria-label="Explore my work">
                    <a href="#software-projects" aria-label="Software projects"><Code2 size={19}/><span>Software projects</span></a>
                    <a href="#certifications" aria-label="Certifications"><Sparkles size={19}/><span>Certifications</span></a>
                    <a href="#hardware-projects" aria-label="Robotics projects"><Cpu size={19}/><span>Robotics projects</span></a>
                  </nav>
                </RevealBlock>
                <div className="about-developer-copy">
                  <span className="dp-eyebrow">— WHO AM I?</span>
                  <DeveloperHeading>
                    Turning <span className="gold">code into</span>
                    <br />
                    real-world <span className="gold">solutions.</span>
                  </DeveloperHeading>
                  <p className="profile-summary">
                    B.Tech CSE | Admin @ Coder&apos;s OG&apos;s |
                    Aspiring Full Stack Developer · UI/UX & Robotics
                  </p>
                  <p className="about-summary">Based in Bengaluru, India. I build web applications, automations and developer tools with React, Node.js and Python, with an interest in database design, API integration and modular software.</p>
                  <div className="about-copy-columns">
                    <p>
                      I build software with a
                      strong interest in building practical software solutions.
                      My journey into technology started with curiosity about
                      how systems work, which gradually expanded into
                      programming, problem-solving, and robotics.
                    </p>
                    <p>
                      I work with languages and tools like Python, Java, SQL,
                      and modern web technologies, and I enjoy applying logic to
                      real-world challenges—whether through software
                      applications, data-driven systems, or robotics projects. I
                      am continuously learning and experimenting to build a
                      strong foundation for future roles in software and
                      technology.
                    </p>
                  </div>
                  <div className="about-facts">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <span>{stat.label}</span>
                        <strong>{stat.value}</strong>
                      </div>
                    ))}
                    <div>
                      <span>CORE FOCUS</span>
                      <strong>Logic • Systems • AI</strong>
                    </div>
                    <div>
                      <span>EDUCATION</span>
                      <strong>Computer Science · Honors</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

); }

function CodingSection() { return (
            <section
              id="problem-solving"
              className="dp-section dp-coding grid-surface"
            >
              <SectionLabel number="04">CONSISTENCY & CRAFT</SectionLabel>
              <div className="dp-two-column">
                <DeveloperHeading>
                  Practice.
                  <br />
                  <span className="gold">Build.</span>
                  <br />
                  Repeat.
                </DeveloperHeading>
                <div>
                  <p>
                    Mastering algorithms and logic through competitive
                    programming platforms.
                  </p>
                  <div className="developer-platforms">
                    {platforms.map((p) => (
                      <a key={p.name} href={p.url} {...external}>
                        <img
                          src={`${base}${p.image.slice(1)}`}
                          width="30"
                          height="30"
                          alt=""
                        />
                        <span>{p.name}</span>
                        <ArrowUpRight size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="developer-github" id="github-stats">
                <div>
                  <Github size={28} />
                  <span className="dp-eyebrow">GITHUB STATS</span>
                  <h3>Building in the open.</h3>
                  <p>
                    Consistency is key. My open source contributions and coding
                    streak.
                  </p>
                  <a href="https://github.com/Kunal628-hue" {...external}>
                    @Kunal628-hue <ArrowUpRight size={15} />
                  </a>
                </div>
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=Kunal628-hue&bg_color=090909&color=bfb69f&line=c6b580&point=e4d6a5&area=true&hide_border=true&hide_title=true"
                  alt="Kunal Singhi’s GitHub contribution activity graph"
                  loading="lazy"
                />
              </div>
            </section>

); }

function JourneySection() { return (
            <section id="experience" className="dp-section dp-journey">
              <SectionLabel number="05">JOURNEY & MILESTONES</SectionLabel>
              <DeveloperHeading>
                Always learning.
                <br />
                <span className="gold">Always building.</span>
              </DeveloperHeading>
              <div className="developer-timeline">
                {experiences.map((exp) => (
                  <RevealBlock key={exp.role}>
                    <article>
                      <span>{exp.period}</span>
                      <div>
                        <small>{exp.company}</small>
                        <h3>{exp.role}</h3>
                        <p>{exp.description}</p>
                      </div>
                      {exp.logo ? (
                        <img
                          src={`${base}${exp.logo.slice(1)}`}
                          width="52"
                          height="52"
                          alt={exp.company}
                        />
                      ) : (
                        <ArrowUpRight size={23} />
                      )}
                    </article>
                  </RevealBlock>
                ))}
              </div>
              <PortfolioExpander id="education" label="Academic foundation" title="Education" count={`${education.length} records`}>
              <div className="education-title">
                <span className="dp-eyebrow">ACADEMIC FOUNDATION</span>
                <h3>A strong foundation. An open mind.</h3>
                <p>Bridging theoretical concepts with practical application.</p>
              </div>
              <div className="developer-education">
                {education.map(([period, title, school, description, tags]) => (
                  <RevealBlock key={title}>
                    <article>
                      <span className="dp-eyebrow">{period}</span>
                      <h3>{title}</h3>
                      <h4>{school}</h4>
                      <p>{description}</p>
                      <Tags items={tags} />
                    </article>
                  </RevealBlock>
                ))}
              </div>
              </PortfolioExpander>
              <PortfolioExpander id="certifications" label="Learning & credentials" title="Certifications" count={`${certifications.length} credentials`}>
              <div className="developer-certificates">
                <header className="credentials-heading">
                  <div><span className="dp-eyebrow">CERTIFICATIONS</span><h3>Learning, applied.</h3></div>
                  <span className="credentials-count">{String(certifications.length).padStart(2, "0")} / CREDENTIALS</span>
                </header>
                <div className="credentials-grid">
                  {certifications.map((cert, i) => {
                    const Icon = [Code2, Cpu, Layers, Sparkles][i];
                    return <article key={cert.title} className="credential-card">
                      <div className="credential-top"><span className="credential-number">0{i + 1}</span><span className="credential-year">{cert.date}</span></div>
                      <div className="credential-body"><span className="credential-symbol"><Icon size={27} strokeWidth={1.3}/></span><div><h3>{cert.title}</h3><p>{cert.issuer}</p></div></div>
                      <div className="credential-rule" aria-hidden="true"><span/><i>✦</i></div>
                    </article>;
                  })}
                </div>
              </div>
              </PortfolioExpander>
            </section>

); }

function ActivitiesSection() { return (
            <section
              id="activities"
              className="dp-section dp-activities grid-surface"
            >
              <SectionLabel number="06">BEYOND THE CODE</SectionLabel>
              <DeveloperHeading>
                Stay curious.
                <br />
                <span className="gold">Keep exploring.</span>
              </DeveloperHeading>
              <p className="section-intro">
                Whatever makes my heart beat faster.
              </p>
              <div className="developer-activities">
                {activities.map(([title, description, tags], i) => (
                  <RevealBlock key={title}>
                    <article>
                      <span>0{i + 1}</span>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <Tags items={tags} />
                    </article>
                  </RevealBlock>
                ))}
              </div>
              <div className="developer-drivers">
                <span className="dp-eyebrow">WHAT DRIVES ME</span>
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
            </section>

); }

function ResumeSection() { return (
            <section id="resume" className="dp-section dp-resume">
              <div>
                <span className="dp-eyebrow">CURRICULUM VITAE</span>
                <DeveloperHeading>
                  The full
                  <br />
                  <span className="gold">picture.</span>
                </DeveloperHeading>
                <p>
                  A comprehensive overview of my academic background,
                  professional projects, and technical certifications.
                </p>
                <div className="resume-actions">
                  <a href={`${base}resume.html`} {...external}>
                    View Web Resume <ArrowUpRight size={17} />
                  </a>
                  <a href={`${base}resume.html`} {...external}>
                    Print / Save PDF <Download size={16} />
                  </a>
                </div>
              </div>
              <div>
                {resumeHighlights.map(([title, description]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </section>

); }

export function ProjectGallery({category = "software", onCategoryChange}) {
 const hardware = category === "hardware";
 const reduced = useStaticMotion();
 const [storyIndex, setStoryIndex] = useState(null);
 const software = webProjects;
 const selected = hardware ? roboticsProjects : software;
 return (
            <section
              id="projects"
              className="dp-section dp-projects grid-surface"
            >
              <div className="projects-heading">
                <SectionLabel number="03">SELECTED WORK</SectionLabel>
                <DeveloperHeading>MY WORK</DeveloperHeading>
                <p>
                  {hardware ? "Physical systems built with Arduino, sensors, and code." : "Software, AI and developer tools — organized by project scale."}
                </p>
              </div>
              <div className="project-switcher" role="tablist" aria-label="Project category">
                {[['software', 'Software', software.length], ['hardware', 'Hardware', roboticsProjects.length]].map(([value, label, count]) => <button key={value} type="button" role="tab" id={`${value}-projects`} aria-selected={category === value} aria-controls="project-gallery-panel" tabIndex={category === value ? 0 : -1} onClick={() => onCategoryChange?.(value)} onKeyDown={event => {
                  if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
                    event.preventDefault();
                    const next = event.key === 'Home' ? 'software' : event.key === 'End' ? 'hardware' : hardware ? 'software' : 'hardware';
                    onCategoryChange?.(next);
                    document.getElementById(`${next}-projects`)?.focus({preventScroll:true});
                  }
                }}><span>{label}</span><small>{String(count).padStart(2, '0')}</small></button>)}
              </div>
              <Motion.div key={category} id="project-gallery-panel" role="tabpanel" aria-labelledby={`${category}-projects`} initial={reduced ? false : {opacity:0, x:25}} animate={{opacity:1, x:0}} transition={{duration:reduced ? 0 : .4, ease:[.22,1,.36,1]}}>
              {hardware ? <ProjectStack>
                {selected.map((project, localIndex) => {
                  const i = localIndex + 4;
                  return (
                  <RevealBlock
                    key={project.title}
                    id={`project-${i}`}
                    className={`developer-project project-type-${i}`}
                  >
                    <span className="project-preview-label">{hardware ? "SYSTEM CONCEPT" : "INTERFACE CONCEPT"}</span>
                    <div className="project-visual" aria-hidden="true">
                      <ProjectPreview index={i} />
                    </div>
                    <div className="project-shade" />
                    <div className="developer-project-copy">
                      <span className="dp-eyebrow">
                        {i < 4 ? "WEB DEVELOPMENT" : "ROBOTICS & IoT"}{" "}
                        <i>· {String(i + 1).padStart(2, "0")}</i>
                      </span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <Tags items={project.tags} />
                      <button type="button" className="project-story-trigger" onClick={()=>setStoryIndex(i)}>Read project story <ArrowUpRight size={16}/></button>
                      {project.links && (
                        <a
                          className="project-source"
                          href={project.links.github}
                          {...external}
                        >
                          <Github size={14} /> Source code{" "}
                          <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                    {project.links && (
                      <a
                        className="project-live"
                        href={project.links.demo}
                        {...external}
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <svg className="project-ring" viewBox="0 0 120 120" aria-hidden="true"><defs><path id={`project-ring-${i}`} d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" /></defs><text><textPath href={`#project-ring-${i}`}>VIEW LIVE PROJECT · VIEW LIVE PROJECT · </textPath></text></svg>
                        <ArrowUpRight size={30} />
                      </a>
                    )}
                  </RevealBlock>
                ); })}
              </ProjectStack> : <WebProjectBrowser onStory={setStoryIndex}/>}
              </Motion.div>
              <ProjectStory index={storyIndex} onClose={()=>setStoryIndex(null)}/>
            </section>

); }

function PortfolioExpander({id, label, title, count, children}) {
  return <details id={id} className="portfolio-expander" onToggle={() => requestAnimationFrame(() => window.dispatchEvent(new Event('resize')))}>
    <summary><div><span className="dp-eyebrow">{label}</span><h3>{title}</h3></div><span className="expander-count">{count}</span><Plus size={22}/></summary>
    <div className="expander-content">{children}</div>
  </details>;
}
export default function SinglePortfolio({ready, paused, category = 'software', onCategoryChange}) {
  return <>
    <RippleHero ready={ready} paused={paused}/>
    <AboutSection/>
    <ExpertiseWorkTransition><Expertise/><WorkBanner paused={paused}/></ExpertiseWorkTransition>
    <ProjectGallery category={category} onCategoryChange={onCategoryChange}/>
    <CodingSection/>
    <JourneySection/>
    <ActivitiesSection/>
    <section className="dp-section portfolio-secondary"><PortfolioExpander id="market-interests" label="Beyond engineering" title="Markets & mindset" count="Personal interest"><TraderSection/></PortfolioExpander></section>
    <ResumeSection/>
    <DeveloperContact/>
  </>;
}
