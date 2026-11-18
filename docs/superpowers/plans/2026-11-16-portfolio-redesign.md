# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Recreate the approved reference composition with Kunal's existing portfolio content.
**Architecture:** Keep React/Vite; separate existing content into a data module, rebuild presentation with semantic components and responsive CSS. Use existing motion dependencies only where needed.
**Tech Stack:** React 19, Vite 7, CSS, lucide-react.
**Spec:** docs/superpowers/specs/2026-11-16-portfolio-redesign-design.md

## Global Constraints
Preserve user-modified profile and logo images, portfolio facts, descriptions, and original links. No new hosting or publishing. Support reduced motion and keyboard access.

## Review Focus
- Narrow viewport headings and portrait overlap: inspect responsive CSS and preview if available.
- Every project and external profile remains reachable: compare rendered links with original data.
- Reduced-motion users see all content without animation: CSS fallback and motion preference checks.
- Mobile navigation is operable and closes after selection: semantic controls and event checks.
- No external activity service should hide core content: retain independent profile links.

### Task 1: Content and composition
- [x] Extract original project, skill, experience, certification, coding platform, and stats arrays into src/data/portfolio.js without rewriting values.
- [x] Replace src/App.jsx, src/sections/Hero.jsx and src/components/Navbar.jsx with the approved white hero and semantic content layouts; retain original prose and links.
- [x] Build project illustrations as CSS interface previews rather than fabricated screenshots.

### Task 2: Visual system and behavior
- [x] Replace src/index.css with responsive editorial styling, restrained reveals, focus states and reduced-motion support.
- [x] Match original portrait framing to hero without modifying the original image files.
- [x] Keep all original substantive sections available, including resume and activity links.

### Task 3: Verification
- [x] Run npm run build; verify the production output succeeds.
- [x] Render application markup and audit original strings, links and section IDs.
- [x] Preview if browser infrastructure is available; report any limitation.
- [x] Request independent code review and resolve substantive issues.

## Execution record
Approved design; implementing directly in the user's checkout to retain their local image changes. No commit or publication requested. Visual presentation changes use build/render/content audits rather than tests that mirror CSS implementation.

Verification: production build passed; 26 original data records compared with HEAD unchanged; 73 rendered content assertions passed; project links and section anchors verified. Local preview returned HTTP 200 at http://127.0.0.1:5173/. Connected browser unavailable, so visual viewport verification remains unperformed. Independent review found portrait centering and small-label contrast issues; both corrected. Original profile/logo files were not edited.
