# Portfolio redesign

## Intent
Recreate the visual direction of the supplied Dymas Alfin portfolio reference using Kunal Singhi's original portfolio data. Work in the existing local React/Vite repository.

## Visual design
Use a white canvas, charcoal typography, thin gray rules, generous spacing, black pill buttons, and oversized uppercase type. The hero reads KUNAL SINGHI, with KUNAL outlined and SINGHI solid. Center the original profile photograph underneath the name, with the original developer identity and introduction on the left and existing social links on the right. Adapt portrait framing to the supplied photograph; do not substitute the reference subject or invent a new portrait.

Follow with selected work, introduction and statistics, skills and tools, coding profiles and GitHub activity, experience, education, certifications, activities, markets interests, resume, and contact. Apply the same restrained visual system to every section. Preserve original descriptions and URLs, including all seven software/robotics projects, community role, training, academic records, certifications, and resume content. Retain the current resume files.

## Approaches
The recommended approach is to redesign the existing React components and styles: this preserves the current data and deployment setup while allowing a cohesive result. A separate website would duplicate content and complicate maintenance. A superficial theme override would retain the old layout and heavy graphics, failing to match the reference. The user's request selects the reference appearance; the existing-stack implementation is the proposed technical choice.

## Behavior
Keep navigation, project demos and repositories, external social/coding profiles, email contact, and resume access working. Use understated entrance and scroll reveals, gentle image movement and button hover transitions. Support reduced-motion preferences and keyboard navigation. Replace the current decorative neon/3D presentation with the reference's restrained motion language. Do not remove substantive portfolio information.

## Responsive design
On desktop preserve the reference's name/portrait composition. On narrow screens scale the name, stack biography and portrait, wrap social links and navigation, and use single-column project cards. Avoid clipped headings and horizontal page overflow.

## Constraints
Keep existing user edits to public/profile.jpg and public/coders_og_logo.png. Do not invent availability claims, client counts, testimonials, or professional experience. Reference animation timings have not been inspected; derive motion conservatively from the supplied composition and animation brief. No new hosting service or publication is part of this local repository change.

## Verification
Build with npm run build. Check content and original link preservation, navigation targets, responsive layout, focus states and reduced motion. Browser QA depends on availability of a connected browser; report any limitation explicitly.

## Builder discretion
Choose section spacing, typographic sizes, card layouts, breakpoints, and reveal timing consistent with the reference. Preserve the user's identity as a software/robotics enthusiast rather than using the reference designer's occupation.
