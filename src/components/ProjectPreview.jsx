import {
  ArrowUpRight,
  FileText,
  Plus,
  Search,
  Sprout,
  Bot,
  Flame,
  Wallet,
} from "lucide-react";

export default function ProjectPreview({ index }) {
  if (index === 0)
    return (
      <div className="project-art notes-art" aria-hidden="true">
        <div className="mock-window">
          <aside>
            <strong>✳ workspace</strong>
            <span>All notes</span>
            <span>Favorites</span>
            <span>My collections</span>
            <small>PERSONAL SPACE</small>
            <span>Ideas & inspiration</span>
            <span>Projects</span>
          </aside>
          <div className="mock-main">
            <div className="mock-top">
              My workspace <Plus size={13} />
            </div>
            <h4>
              A little space for
              <br />
              your next big idea.
            </h4>
            <div className="mock-search">
              <Search size={12} /> Search your notes...
            </div>
            <div className="mock-notes">
              {[
                "Ideas worth keeping",
                "Make something great",
                "A fresh perspective",
              ].map((t, i) => (
                <div key={t}>
                  <FileText size={15} />
                  <strong>{t}</strong>
                  <span>{["IDEAS", "PROJECTS", "PERSONAL"][i]}</span>
                  <i />
                  <i />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  if (index === 1)
    return (
      <div className="project-art portfolio-art" aria-hidden="true">
        <div className="mini-portfolio">
          <div className="mini-nav">
            <span>KS.</span>
            <span>Work About Contact ↗</span>
          </div>
          <h4>
            <span>KUNAL</span> SINGHI
          </h4>
          <div className="mini-hero">
            <p>
              Turning code into
              <br />
              <b>real-world solutions.</b>
              <em>Explore my work ↗</em>
            </p>
            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="" />
            <ArrowUpRight size={25} />
          </div>
        </div>
      </div>
    );
  if (index < 4)
    return (
      <div
        className={`project-art finance-art finance-${index}`}
        aria-hidden="true"
      >
        <div className="finance-window">
          <div className="mock-top">
            <strong>
              <Wallet size={15} />{" "}
              {index === 2 ? "Singhi Ghar Khata" : "Personal Finance"}
            </strong>
            <span>Overview ↗</span>
          </div>
          <small>YOUR MONEY, AT A GLANCE</small>
          <h4>
            Every little detail.
            <br />A clearer picture.
          </h4>
          <div className="finance-panels">
            <div>
              <span>Expense overview</span>
              <div className="bar-chart">
                {[38, 65, 44, 85, 58, 95, 72, 50, 78, 62].map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="donut-chart" />
          </div>
        </div>
      </div>
    );
  const Icon = [Sprout, Bot, Flame][index - 4];
  return (
    <div className={`robotics-art robotics-${index}`} aria-hidden="true">
      <span>HARDWARE × SOFTWARE</span>
      <Icon size={65} strokeWidth={1} />
      <div className="circuit-line" />
      <small>ARDUINO / REAL-WORLD SYSTEMS</small>
    </div>
  );
}
