# Interaction and typography polish

User requests: fix the three trading cards, remove motion setting buttons and hamburger, reveal only the name/three portrait shortcuts on hover, and use Limelight, Audiowide and DynaPuff professionally.

Implemented:
- Trading cards are native exclusive details/summary controls with focus topics, visible action hints, keyboard operation and animated expansion.
- Removed the hamburger and its unused navigation overlay from the active component. Section links stay available in a mobile scroll row.
- Removed both footer motion buttons and their state; existing full-motion behavior remains the default.
- Portrait name, shading and shortcut pill reveal only on hover or focus within; extra visual tooltips removed while accessible labels remain.
- Locally hosted, licensed Limelight for selected display headings, Audiowide for technical labels/name/cards, and DynaPuff for small category counts. Original CREATIVE/WORK lettering and readable body copy retained.

Verification: production build and whitespace check; single-page anchor/tab regression tests; server rendering confirms three native trading controls, all seven section links, absence of unwanted controls, and preservation of both project families/portrait destinations. TrueType assets verified and licenses retained.

Limits: native browser preview failed with ScreenCaptureKit capture error. The saved local reference video and extracted frames no longer exist, so a fresh video comparison could not be completed; prior screenshots/reference observations informed these refinements.
