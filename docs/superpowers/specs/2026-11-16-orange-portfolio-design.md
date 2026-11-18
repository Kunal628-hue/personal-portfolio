# Orange portfolio reference update

The user replaces the previous reference with https://dribbble.com/shots/27497608-Personal-Portfolio-Framer-Website and requests matching animations while preserving original data.

Inspected source: full-resolution PNG at https://cdn.dribbble.com/userupload/48159247/file/6d14f29793ef0675ffce0ceea1e81047.png. Orange-red hero, thin grid and registration crosses, enormous low-opacity background name, foreground name at bottom, central portrait cutout, right floating work card and black contact card. Match these in the existing React site with Kunal's identity. Preserve all existing sections, project descriptions, statistics, profile URLs, education, experience and resume assets.

The reference supplies a static PNG, not a playable animation or source website. Exact original movement cannot be verified. Implement coordinated staggered text entrances, portrait entry, spring-smoothed pointer parallax, scroll depth, card hover lift, section reveals and a rotating decorative asterisk. Respect reduced motion and disable pointer parallax on touch. Do not claim verified animation equivalence.

Continue local React/Vite implementation. No publication or commit. Create a non-destructive portrait cutout if image tooling supports it; retain original photo. Extend the same dark/orange visual system to all content below the supplied hero.

## Supplied video supersedes static-only assumptions
The user supplied https://cdn.dribbble.com/userupload/48159250/file/34c4b27d882164f1bd0b21afed382cfe.mp4. Inspected the full 105.87-second, 30fps, 1440×810 video using extracted frames every two seconds.

Observed: hero builds within approximately two seconds; large translucent dark menu overlay at 5–7s; white content below the hero at 8s onward; headings blur into focus as they enter; image-led service rows at 11–14s; staggered project gallery at 15–19s; black four-card row at 20s; tabbed black information cards at 28–32s; illustrated contact form and large-name footer at 34–38s; horizontal gallery at 40–43s; black achievements at 44–48s; FAQ accordion at 58–61s; three-column vertical page wipe at 74–76s.

Implemented these visual component types using Kunal's existing portfolio facts. Service rows use original skill categories, black information cards and tabs use actual skills/projects, achievements use original certifications, and FAQ answers use original study/projects/profile/resume information. No fictional client testimonials, prices, awards, blog posts, or subscriber system. The contact form opens an explicitly disclosed email draft addressed to the original contact email. Route-style wipes navigate to existing sections in the current single-page portfolio. Preserve reduced-motion and keyboard support.
