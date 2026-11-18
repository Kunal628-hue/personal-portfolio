# Kunal Singhi — Software & Robotics Portfolio

A single-page React portfolio with separate software and hardware project galleries, engineering stories, education, community work and direct contact links. The cream/black/gold visual design includes a short introduction, responsive typography and an Expertise → WORK scroll transition.

## Run locally

Use a Node.js release supported by the installed Vite version, then:

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
node --test src/navigation/singlePageNavigation.test.js src/data/webProjects.test.js
```

The production output is `dist/`. `vite.config.js` currently uses `/` as the base; set a deployment-specific base before hosting under a subdirectory. No API keys or server are required for the portfolio.

## Active architecture

- `src/main.jsx` loads `DeveloperPortfolio.jsx` and `developer-portfolio.css`.
- `src/pages/PortfolioPages.jsx` composes the continuous page and project-category tabs.
- `src/data/webProjects.js` holds the active software catalog: 4 Large, 6 Mid and 7 Small scale projects. A maximum of four cards is shown at a time, with search and pagination.
- `src/data/portfolio.js` retains original story project records, hardware projects, skills, platforms and credentials.
- `src/data/profile.js` holds education and résumé content.
- `src/data/projectStories.js` holds engineering narratives and implementation evidence, in the original seven-project order, independent of software catalog sorting. New catalog entries link directly to their repository and optional deployment.
- `src/components/ProjectStory.jsx` uses a native modal dialog for project stories. Escape, the close control and a backdrop click dismiss it; the browser contains keyboard focus while it is open.
- `src/components/DeveloperEffects.jsx` and `scrollMotion.js` implement motion and a shared scroll scheduler. Operating-system reduced-motion preferences are respected automatically.
- `src/navigation/` handles section anchors, category deep links, disclosure opening and legacy page URLs.
- `public/resume.html` is a self-contained printable résumé. Its print button opens the browser's print dialog; no generated PDF is required.

Old section/theme files remain in the repository but are not the active entry point.

## Content and evidence

Keep original story indices stable; the active software catalog uses stable IDs and explicit optional story indices. Include the problem, actual contribution, implementation decisions, outcome and supporting source links. Global Notes Workspace's complete implementation credit was confirmed by the owner. Additional claims come from existing portfolio descriptions and linked source files, not invented usage or performance figures.

Gallery previews are code-rendered interface/system concepts, labelled accordingly. Hardware flows describe conceptual sensing/control/output stages and are not wiring diagrams. No verified hardware photos, demo recordings or measured project outcomes were available during this update. See `docs/project-evidence.md` before adding them.

Contact actions open email or existing public profiles. The résumé and external project links open in new tabs. Trading remains a secondary, expandable interest. Fonts and their license files are kept in `public/fonts/`.

## Verification

Navigation regression tests cover software/hardware deep links and legacy page mapping. A production build checks all active components. Manual browser review should also cover story open/close/Escape/focus restoration, both project tabs, portrait keyboard shortcuts, the pinned scroll transition, mobile layouts, reduced motion and résumé printing. A build alone does not verify visual fidelity or external demo availability.

Source-grounded README drafts for the separate expense-app repositories are in `docs/project-readmes/`; these files have not been published to those repositories.
