## No-Nonsense Assessment
- Your ask is correct: every Arabic page must be a structural clone of its English counterpart with separate files and identical design. Any deviation is sloppy. We already mirrored most structures, but two things are weak: separate Arabic CSS for pages that still piggyback English styles, and a proper preflight to catch UI/UX mistakes before go‑live.

## Target Folders (AR must mirror EN)
- Arabic pages:
  - `src/pages/arabic/الأخبار` → mirror `english/News` (structure + animations) with its own `الأخبار.css`.
  - `src/pages/arabic/التسجيل` → mirror `english/Register` with its own `التسجيل.css`.
  - `src/pages/arabic/الرئيسية` → mirror `english/Home` (already expanded to match sections).
  - `src/pages/arabic/المشاريع` → mirror `english/Projects` index and have subpages for commercials/residential/tower (already added but will polish).
  - `src/pages/arabic/تواصل معنا` → ensure parity with EN contact/register behavior.
  - `src/pages/arabic/عن كالما` → parity with `english/AboutImproved` (already multi‑section).

## Design System Alignment
- Use `src/styles/color-palette.css` tokens everywhere; apply `.text-on-light/.text-on-dark` utilities to prevent contrast failures.
- No emojis anywhere. Arabic alt/aria labels must exist. Direction must be `dir="rtl"` uniformly.

## Separate CSS per Arabic Page
- Create `الأخبار.css` and `التسجيل.css` in their folders.
- Copy EN page CSS content, adjust selectors minimally for RTL/Arabic headings while preserving identical visual design.
- Import these CSS files in their respective Arabic TSX components (stop reusing EN CSS).

## Projects Gallery Integration
- Build a shared `ProjectGallery` component used by both EN and AR, sourcing from a single data map that points to your image directories:
  - `calma tower`, `GH220 الغدير`, `HT210 حطين`, `HT260 ادوار حطين`, `JN130 الجنادرية`, `One Tower`, `RM240 الرمال`, `SA230 الصفا`, `YS190 اداور الياسمين`, `استراحة الماجد`, `النــخـيل NK250`, `الياسـمين YS200`.
- Uniform card sizing, gutters, and hover states; lazy‑load images and async decode.
- Arabic labels translated; identical layout; keyboard accessible.

## Video & Media Consistency
- Hero video on EN and AR uses dual sources (`webm` + `mp4`), `preload="metadata"`, `poster`, plays via IntersectionObserver.
- Fix any asset path abort warnings by deferring `src` assignment until observed visible (only if warnings persist).

## Navigation & Preloader Discipline
- Preloader remains visible until target page’s critical media is ready; navigation awaits preloader resolution.
- Confirm parity for EN↔AR routes and ensure no route reuses EN components for AR.

## Preflight “Stop” Step (Before Go‑Live)
- Static checks: TypeScript strict, ESLint, stylelint, unused assets/polish.
- Accessibility checks: heading order, aria‑labels/roles, keyboard nav for sliders, color contrast.
- Performance checks: Lighthouse ≥90 perf/accessibility, bundle size sanity, lazy‑loading verified.
- Routing checks: all EN/AR pages render; splash timing consistent.

## Implementation Plan
1. Create Arabic CSS files for News and Register and wire them into their pages.
2. Normalize Arabic Projects index to use the shared `ProjectGallery` with data mapping to your asset folders; mirror EN layout exactly.
3. Audit and fix any residual structure gaps in AR Home/About/Contact to match EN sections and animations.
4. Enforce media practices (dual video sources, posters) on EN/AR heroes.
5. Add preflight scripts/configs (ESLint/TS/stylelint), and an internal preflight function that logs readiness in dev.
6. Run local preview and Lighthouse; fix any regressions.

## Deliverables
- Arabic pages that are true structural clones of English pages, each with its own CSS file.
- Shared projects gallery with uniform design and data‑driven mapping to your image directories.
- Verified navigation/splash parity and media readiness.
- Preflight checks in place to keep you from shipping trash.

Approve this plan to proceed with creating the Arabic CSS, wiring the shared gallery, and locking down preflight checks.