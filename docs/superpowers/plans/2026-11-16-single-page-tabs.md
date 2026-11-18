# Selected option 1: single page with project tabs

The user selected the single-page alternative after rejecting the separate-page layout.

Implemented:
- Continuous hero → biography → Expertise/WORK → project gallery → coding → journey → activities → trader → resume → contact.
- One gallery with Software (4) / Hardware (3) tabs; original project data, previews, links and scroll stack retained.
- Animated category entry, keyboard arrow/Home/End controls, accessible tab/panel relationships and preserved tab focus.
- Native expandable education and certifications, closed initially. Direct shortcuts open the relevant disclosure.
- Smooth section navigation and compatibility with old page URLs and hardware deep links; reduced/paused motion respected.
- Existing name typography, hover-only portrait shortcuts, floating technology icons, horizontal WORK transition and motion settings retained.

Verification: build and whitespace checks pass; single-page navigation tests pass; server rendering validates both gallery states, original descriptions/links/skills/certifications and disclosures. Browser confirms Hardware selection (three hardware projects), arrow-key return to Software, and expanded four-card certifications via shortcut.

This supersedes the seven-page composition in 2026-11-16-portfolio-pages.md.
