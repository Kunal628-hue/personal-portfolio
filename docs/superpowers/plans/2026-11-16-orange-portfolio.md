# Orange Portfolio Implementation Plan

> Implement inline using the existing approved preservation requirements and new user-selected reference.

Goal: reproduce the new orange/grid/portrait hero with Kunal's original content, coordinated motion and responsive accessibility.

- [x] Inspect the exact full-resolution reference and document animation-source limitations.
- [x] Rebuild Navbar and Hero with original identity, work and contact destinations.
- [x] Apply orange hero / dark editorial system to existing substantive content sections.
- [x] Integrate a portrait cutout if available without altering original files.
- [x] Verify production build, preserved records/links, navigation and reduced motion.
- [x] Independent review and fix substantive findings.

Browser visual verification depends on connected browser availability. The source is a static PNG, so original animation parity remains unverified.

Verified: production build passed; 26 original data records compared unchanged with HEAD; 73 rendered-content checks passed, including original project/profile links and all anchor targets. Desktop preview inspected through native Brave UI. Full browser automation and mobile viewport checks unavailable. Independent reviewer found keyboard menu focus handling; fixed initial menu focus and Escape focus restoration. Original photo retained, transparent derived portrait added separately. Small navigation/contact text contrast improved by darkening orange behind it. Exact reference animation timing remains unverified because only a static PNG is supplied.

## Component and motion refinement
- Added reusable AnimatedName, RegistrationGrid, FeaturedWorkCard, HeroContactCard, and AmbientRibbons components in HeroElements.jsx.
- Matched the reference's close-up portrait scale, foreground first-name size, minimal left statement, and two-line menu icon.
- Added staggered letter entrances, grid draw-in, independent card float/tilt, moving backdrop ribbons, animated menu and arrow transitions. Reduced-motion and touch fallbacks retained.
- Moved the full original hero introduction visibly into About; original name remains on contact card and in the main heading's accessible label.
- Original-data audit passes: 26 records unchanged, 73 rendered-content assertions, original project links and all section anchors. Independent review confirmed no runtime/transform conflicts. Added body isolation so background ribbons have deterministic stacking.
- Latest native browser refresh did not provide a usable screenshot; final viewport/animation playback inspection remains limited. Exact source animation parity needs a live Framer URL or video, requested from the user.

## Video-based implementation completed
- Inspected full supplied 105.87s video; documented timestamps and observed component/motion behavior in the design spec.
- Added ReferenceSections.jsx: blur/stagger MotionHeading, count-up stats, illustrated expertise rows, horizontal gallery, four dark focus cards, Web/Robotics tabs, FAQ, and email-draft contact form.
- Replaced compact menu with a large dark overlay, focus containment, Escape closing, main-content inert state and scroll locking. Added three-column navigation wipe with history and focus handling.
- Added video-reference.css for white lower sections, orange hero/header, image-led rows, staggered project layout, black certification cards, contact artwork and footer. Existing data and links retained.
- DOM interaction checks passed for FAQ state/inert behavior, tab switching/arrow focus, menu focus/isolation/Escape, contact validation/disclosure, and wipe cover/navigation/history/focus/release.
- Data/render audit passed: 26 original records unchanged, 73 content assertions, all project URLs and section anchors retained. Production build and git diff --check passed.
- Independent review found an inaccessible mobile gallery; enabled horizontal swiping and disabled its conflicting transform on narrow screens. Fixed count-up numeral styling to inherit the original large type.
- Final native browser capture returned a blank image, so final visual playback/viewport verification remains limited. Local preview remains available at http://127.0.0.1:5173/.
