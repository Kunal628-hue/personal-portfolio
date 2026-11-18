# Portfolio pages

User request: shorten the single long portfolio by splitting content into pages, keep hardware separate, retain data and motion.

Architecture: small query-URL router (?page=...), compatible with current static hosting and no new dependencies. Shared navigation, cursor, motion settings and initial loader remain mounted. Route content enters with a short fade/slide; browser back/forward, deep section anchors, titles and focus are supported. Legacy section-only URLs map to their new page.

Pages:
- Home: existing hero and compact page directory.
- About: original biography/portrait and Expertise → horizontal WORK transition, with a software gallery link.
- Software: four software projects and original coding platforms/GitHub section.
- Hardware: original three hardware projects, using the same project previews and stack motion.
- Journey: experience, education, certifications, activities and resume.
- Trader: original trader section.
- Contact: original contact links/form.

Checks: build; render each page to verify all original records and project URLs; hardware/software separation; route and legacy anchor resolution; browser back/forward and route transitions if native browser is available without ongoing input interference.
