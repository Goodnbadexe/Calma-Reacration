## Ruthless Assessment
- Mobile navbar: drawer uses mixed timing and inconsistent navigation logic; actions aren’t fully parity-safe across EN/AR; focus/ARIA are weak. This is sloppy.
- EN↔AR parity: some pages diverge in spacing, background colors and section structure. That’s unacceptable — twins must be identical in layout, only content differs.
- Preloader semantics: fixed for desktop, but mobile must follow the same rule: splash shows immediately, route changes, destination signals ready to close.

## Read Targets (for audit before changes)
- Nav logic and drawer: `src/components/ui/NavBar.tsx`, styles in `src/styles/navbar.css`, `src/index.css`
- Projects gallery: `src/components/ui/ProjectGallery.tsx` (image sourcing, cards, accessibility)
- EN/AR pages: Home, About, Projects, News, Register — ensure structure matches: `src/pages/english/*`, `src/pages/arabic/*`
- Design tokens: `src/styles/color-palette.css`

## Mobile Navbar — Concrete Fixes
- Create a unified nav config (labels, paths) used by both desktop and mobile to prevent drift; include language-specific mapping: EN `Contact→/register`, AR `Contact→/ar/contact`.
- Navigation behavior: always call `showSplash()` and navigate immediately; do not wait. Pages signal readiness to close splash.
- Remove drawer `setTimeout` hacks; use direct `navigate()`.
- Accessibility: ensure focus trap in drawer, `aria-expanded` on burger, `role="menu"` with keyboard navigation, and proper `aria-label`s.
- Visuals: normalize padding/gaps/font sizes to match desktop scale on mobile; tighten spacing and align icons; match background glass styles.

## EN↔AR Structural Parity
- Extract shared section components (Hero, Excellence, Leadership, Culture, Stats) under `src/components/sections/*`.
- Use locale content modules: `src/pages/content/home.en.ts` and `home.ar.ts`, similarly `about.*`, `projects.*`, to feed identical markup.
- Apply `dir="rtl"` on AR and ensure RTL-friendly CSS; eliminate emoji; use `.text-on-light/.text-on-dark` utilities for contrast.

## Projects Gallery Improvements
- `ProjectGallery.tsx`: enforce uniform card dimensions, consistent gutters, and keyboard accessibility (tab, enter/space). Add alt text and locale labels.
- Sort image file names deterministically (numeric-aware) to pick stable covers.
- Reuse gallery in EN Projects to guarantee identical layout across languages.

## Design System Alignment
- Standardize background sections using `color-palette.css` tokens; normalize container width/gutters/vertical rhythm.
- Verify navbar transparency/solid switching behaves identically on EN/AR home hero.

## Testing & QA
- Manual checks: mobile drawer open/close, splash timing, route transitions, hero video readiness, section parity, contrast, keyboard navigation in drawer and gallery.
- Devices: iPhone widths (360/390/430), iPad (768/834/1024), 13" (1280/1366/1440).
- Keep dev preflight active to flag missing CSS/content modules.

## Planned Changes (Files)
- Update: `src/components/ui/NavBar.tsx`, `src/styles/navbar.css`, `src/index.css`
- Add: `src/components/sections/*` (shared sections)
- Add/Update: `src/pages/content/{home,about,projects}.{en,ar}.ts`
- Update: EN/AR page components to consume shared sections and content modules
- Update: `src/components/ui/ProjectGallery.tsx` (sorting, accessibility, reuse in EN)

## Deliverables
- Mobile navbar UX fully fixed: consistent behavior, accessibility, and visuals.
- EN and AR pages with identical structures (shared components), only content differs.
- Unified projects gallery used in both languages.
- Verified parity across pages and routes.