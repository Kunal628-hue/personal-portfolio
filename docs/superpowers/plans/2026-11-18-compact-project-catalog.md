# Compact Project Catalog Implementation Plan

**Goal:** Add the user's software repositories in Large, Mid and Small scale groups without lengthening the page; preserve the hardware presentation.

**Architecture:** A source-grounded catalog holds stable slugs, scale, summaries, stack and optional deployment URLs. A separate React browser renders a maximum of four software cards with category filters, search and pagination. Existing original project-story indices and hardware deep links remain stable.

**Tech Stack:** Existing React, Framer Motion, Lucide and CSS. No dependencies.

- [x] Add 17 unique software entries: 4 Large, 6 Mid, 7 Small (including retained Ghar Khata). Repository metadata/README are evidence; no invented demo URLs or ownership claims.
- [x] Build the compact, responsive software browser with keyboard controls, result counts, empty state and on-demand original project stories.
- [x] Integrate with Software/Hardware tabs, keep hardware indices 4–6 and previews unchanged, retain original software numeric deep links via catalog mapping.
- [x] Update project counts/docs and test category completeness, deduplication, filtering/pagination, links and legacy navigation.
- [x] Build production bundle and check formatting; review browser UI if capture is available.

Published URLs found: Planora, ID Card Generator, Jai Ramdev Timber & Plywood, Personal Portfolio, Personal Finance Manager, Fitora. Existing Global Notes and Ghar Khata links retained. Remaining repositories have no homepage or deployment records in the inspected GitHub metadata.

Validation: production build, 8 Node regression tests and SSR checks passed. Desktop screenshots showed Large and Small collections. Further native UI control stopped with noWindowsAvailable; full interactive/mobile review was not completed.
