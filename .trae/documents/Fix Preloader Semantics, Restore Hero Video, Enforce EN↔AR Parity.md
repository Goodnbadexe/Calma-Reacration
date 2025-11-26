## Problems to Kill
- Preloader flashes or doesn’t show during nav; it must show immediately and stay until destination content is ready.
- Hero video intermittently disappears; src gating is too aggressive. Keep poster and source stable; control only playback.
- EN↔AR layouts drift (background colors, spacing, alignment); both pages must share structure and tokens.

## Reference Content Alignment
- Use the site copy from:
  - Home: https://www.calma.sa
  - About: https://www.calma.sa/about.html
  - Projects: https://www.calma.sa/projects.html
- Mirror this content on both EN and AR pages with identical section structures, using `src/pages/content/*` modules for locale-specific text.

## Implementation Plan
1. Preloader Semantics
- `SplashProvider.tsx`: switch from fixed timers to event-driven close. Open overlay on route start; close only when destination signals readiness (video `loadeddata`, images `onload`). Keep a 4–5s safety timeout.
- `NavBar.tsx`: trigger splash, then navigate immediately while splash is visible; do NOT await splash resolve before navigating.
- Add `usePageReady()` hook (context) so each page can report readiness. Use in home, about, projects pages.

2. Hero Video Reliability (EN & AR)
- Revert removing `src`; keep `src` stable with `preload="metadata"` and a `poster`. Control playback via IntersectionObserver.
- Close splash after `loadeddata` and a short fade (300–500ms) for cohesion.
- Optionally add dual sources: `webm` (preferred) + `mp4` fallback.

3. EN↔AR Structural Parity
- Extract shared section components (Hero, Excellence, Leadership, Culture, Stats) used by EN and AR. Keep identical markup and class names; only content changes.
- Source text from `src/pages/content/home.en.ts` and `home.ar.ts`, similarly `about.en.ts` / `about.ar.ts`, `projects.en.ts` / `projects.ar.ts`.
- Apply `dir="rtl"` for AR and ensure RTL-friendly CSS. No emojis.

4. Design System & Alignment
- Normalize layout containers: shared max-width, gutters, vertical rhythm.
- Enforce background/text contrast using `color-palette.css` tokens and `.text-on-light/.text-on-dark` utilities.
- Ensure Navbar/CTA spacing and sizes match in EN/AR. Keep “Register” mapping consistent: EN → `/register`, AR → `/ar/التسجيل`; “Contact” maps to `/register` in EN and `/ar/contact` in AR by design.

5. Projects Page
- Use shared `ProjectGallery` for both EN and AR, pulling covers from your image directories. Keep uniform card sizes, hover state, and keyboard accessibility.
- Add localized labels and section headers from content modules.

6. QA & Preflight
- Dev-only preflight logs if required CSS/content modules are missing.
- Manual checks: splash timing, video playback, EN↔AR parity, contrast, keyboard nav.
- Optional Lighthouse run to confirm perf and accessibility aren’t trash.

## Files to Update
- `src/components/system/SplashProvider.tsx`: event-driven splash close
- `src/components/ui/NavBar.tsx`: navigate while splash is visible
- `src/pages/english/Home/Home.tsx` & `src/pages/arabic/الرئيسية/الرئيسية.tsx`: hero video playback consistency
- `src/pages/content/*`: add `home.ar.ts`, `about.*`, `projects.*`
- Shared sections: new small components under `src/components/sections/*`
- `src/pages/english/Projects/Projects.tsx` & `src/pages/arabic/المشاريع/عرض المشاريع.tsx`: use `ProjectGallery`

## Deliverables
- Preloader that behaves correctly: shows immediately on nav and closes only when destination is ready.
- Hero video reliably loads (poster first, plays on visibility), no disappearing.
- EN and AR pages share identical structures; only content changes.
- Projects gallery unified and accessible.
- Verified parity across pages and routes.