# Expertise, portrait controls and certifications refinement

Implement the user's requested fixes in the existing approved design.
- Replace decorative portrait glyphs with labelled, keyboard-accessible links to software projects, certifications, and robotics projects. Keep controls visible on touch and keyboard focus.
- Place Expertise and WORK beside one another inside a viewport pinned during desktop scrolling. Drive right-to-left translation from section scroll distance; reverse when scrolling up. Use ordinary vertical sections for reduced motion, mobile, and short viewports.
- Redesign certifications as a two-column numbered credential layout with original titles, dates and issuer labels. Do not fabricate certificate URLs or view actions.
- Verify horizontal progress clamping/reverse behavior, all three anchor targets, original certificate records, build, and browser scroll interaction.

Implemented all three refinements. Verification: production build and diff whitespace checks pass; horizontal progress tests cover start/end holds, midpoint, reverse scrolling and invalid dimensions. Server-rendered output confirms all three shortcut destinations exist, original credential records remain, Expertise has one anchor, and trader content remains. Browser accessibility output confirmed the updated links and credential layout loaded; live visual scroll verification was interrupted by ongoing browser activity and remains incomplete.
