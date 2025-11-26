## Objectives
- Integrate the provided Arabic homepage content cleanly with correct RTL layout, no emojis, and strong color contrast.
- Make navigation transitions consistent: preloader shows during route changes and closes when content (incl. video) is truly ready.
- Optimize hero/background video loading for reliability and speed across devices.
- Reduce navbar visual size while preserving all actions/buttons and alignment.
- Ensure responsive behavior for iPhone, iPad, and 13" laptop breakpoints with polished layout.

## Current Architecture (What we’ll work with)
- Routing and layout: `src/main.tsx`, `src/layouts/AppLayout.tsx` (React Router + Helmet + Language + Splash providers).
- Navigation: `src/components/ui/NavBar.tsx` (anime.js, RTL-aware, uses `useSplash` before `navigate`).
- Preloader: `src/components/system/SplashProvider.tsx`, styles in `src/styles/splash.css` and `src/index.css`.
- Home pages: Arabic `src/pages/arabic/الرئيسية/الرئيسية.tsx` (+ `.css`), English `src/pages/english/Home/Home.tsx` (+ `.css`).
- Video: English hero uses `@/assets/Videos/Calma_TV.mp4`; type support in `src/vite-env.d.ts`.
- Colors: theme tokens in `src/styles/color-palette.css`.

## Homepage Content Integration (Arabic)
- Map your content into structured sections in `src/pages/arabic/الرئيسية/الرئيسية.tsx`:
  - Hero: "نخلق مساحات هادفة…" with background video (see Video Optimization) and CTA "تعرف على كالما".
  - Featured slider: "المشروع الأبرز" entries YS190, YS200, برج كالما (Slide 2 of 4 support).
  - Stats: "٢٨ مشروع مُنجز" + counters (رياض/جدة، مساحة الأرض، مساحة بناء، الوحدات). Use animated counters.
  - Vision: paragraph + CTA "تعرف على رؤيتنا".
  - Ongoing projects: grid/slider of project cards (Slide 2 of 10 support) matching provided list (type + name + district).
  - Culture teaser: "نبني مجتمعات الغد" + CTA "تعرف على ثقافتنا".
- Ensure `dir="rtl"`, semantic tags, and accessible headings structure (`h1`/`h2`).
- Remove any emojis and keep typographic punctuation consistent.

## Navigation & Preloader Consistency
- In `NavBar.tsx`, keep calling `showSplash()` before `navigate()`, but:
  - Ensure the preloader remains visible until the destination route’s critical content (hero video metadata or images) reports ready.
- In `SplashProvider.tsx`:
  - Replace fixed 1s overlay with lifecycle tied to content readiness:
    - If splash shows a video, wait for `loadeddata` or `readyState >= 2` plus a minimum 300–500ms for animation cohesion.
    - If splash shows an image, wait for `onload`.
  - Add safety timeout fallback (e.g., 3–4s) to avoid hanging.
  - Respect `prefers-reduced-motion` by shortening duration and skipping heavy transitions.
- Keep visual and timing parity between English and Arabic routes.

## Video Loading Optimization
- In the hero components (`Home.tsx` and Arabic home):
  - Use `<video playsInline muted preload="metadata" poster={poster}>`.
  - Delay `autoPlay` until IntersectionObserver confirms visibility.
  - Add `.ready` class only after `loadedmetadata` to avoid white flash or stalled frames.
  - Provide dual sources: `source type="video/webm"` then `mp4` fallback for broader support.
- Provide posters for instant first paint.
- Ensure `controlsList="nodownload"` and `disablePictureInPicture` (if applicable) for UX.

## Navbar Resize & Alignment
- In `src/components/ui/NavBar.tsx` + `src/styles/navbar.css`:
  - Reduce overall height: adjust container padding (e.g., `py-12` → `py-8`), logo size, and font sizes.
  - Preserve all buttons: reflow with flex/grid, ensure equal spacing and alignment; keep RTL/LTR symmetry.
  - Tighten mobile drawer spacing and hit targets.
  - Keep transparent/solid state switching when overlapping hero (`#panorama`/`.hero`).

## Responsiveness & Breakpoints
- Establish unified tokens (in global CSS):
  - `sm: 360–430` (phones), `md: 768–834` (iPad portrait/landscape), `lg: 1024–1280` (13" laptops), `xl: 1440+`.
- Audit and adjust media queries in homepage and navbar CSS to:
  - Stack sections vertically on `sm`, introduce two-column grids on `md`, and full hero + sidebar layouts on `lg`.
  - Ensure sliders use responsive item counts (e.g., 1 on mobile, 2–3 on tablet, 4+ on desktop).
  - Fix any overflow/clipping on narrow Arabic text.

## Color & Typography
- Use theme tokens in `src/styles/color-palette.css` with clear on-light/on-dark utilities:
  - If background is light (`--color-neutral-100`), text uses `--color-neutral-900`.
  - If background is dark, text uses `--color-neutral-100`.
- Add utility classes `.text-on-light` and `.text-on-dark` applied per section to prevent white-on-white issues.
- Confirm minimum 4.5:1 contrast for body text.
- Use a legible Arabic typeface with proper weights and kerning; ensure consistent line-height.

## Layout & Alignment Polish
- Normalize section containers to a max-width and consistent gutters.
- Use logical order for tab navigation and ARIA labels on interactive elements.
- Ensure sliders are keyboard navigable and announce slide positions (e.g., "Slide 2 of 10").

## Performance Improvements
- Lazy-load heavy sections and sliders via dynamic import.
- Defer non-critical JS; ensure images use `loading="lazy"`.
- Cache-bust assets via build but leverage browser caching on videos/images.
- Consider transcoding hero video to efficient `webm` alongside existing `mp4`.

## Testing & Verification
- Manual QA script covering:
  - Route changes show splash, then content becomes interactive; video doesn’t stutter.
  - Navbar alignment and actions intact across RTL/LTR and breakpoints.
  - Contrast checks for all sections (no white text on white backgrounds).
  - Sliders announce current slide and respond to keyboard.
- Device matrix: iPhone (375/414/430), iPad (768/1024), laptop 13" (1280/1366/1440).
- Optional Lighthouse runs for performance and accessibility.

## Deliverables
- Updated Arabic homepage with provided content structured into hero, featured slider, stats, vision, projects, and culture.
- Consistent preloaders tied to content readiness.
- Optimized hero video behavior and sources with posters.
- Slimmer navbar maintaining all buttons and perfect alignment.
- Responsive, contrast-safe layouts across target devices.

Once approved, I will implement these changes in the referenced files, verify behavior, and share results with paths and before/after notes.