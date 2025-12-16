# Calma Website: Responsive, Bilingual, Production-Ready Blueprint

## Objectives
- Fix responsive breakpoints so desktop renders true multi-column layouts (no mobile stacking).
- Consolidate navigation and page hierarchy; ensure mirrored Arabic/English pages (RTL/LTR).
- Establish a clear design system (tokens, grid, typography, spacing) for consistent implementation.
- Produce a development-ready plan that can be handed to design/engineering or an AI site builder.

## Global Architecture
- Pages (English / Arabic mirror):
  - Home (`/`, `/ar`)
  - About (`/about`, `/ar/about`)
  - Projects hub (`/projects`, `/ar/projects`) + subpages:
    - Commercials (`/projects/commercials`, `/ar/projects/commercials`)
    - Residential (`/projects/residential`, `/ar/projects/residential`)
    - Calma Tower (`/projects/calma-tower`, `/ar/projects/calma-tower`)
  - News (`/news`, `/ar/news`)
  - Register (`/register`, `/ar/التسجيل`)
  - Contact (`/contact`, `/ar/contact`)
- Layout: `AppLayout` with fixed frosted-glass NavBar, content `<Outlet />`, global Footer.
- Language: `LanguageContext` maps routes EN↔AR, sets `html[dir]` and `lang`.

## Design System
- Breakpoints (mobile-first):
  - `xs` ≤ 480
  - `sm` ≤ 640
  - `md` ≥ 768
  - `lg` ≥ 1024
  - `xl` ≥ 1280
  - `2xl` ≥ 1440
  - `ultra` ≥ 1920 (optional)
- Containers:
  - Base max-width escalates by breakpoint: 1100 (md), 1280 (lg), 1440 (xl), 1600 (2xl), 1800 (ultra).
- Grid utilities:
  - Auto-fit grid: `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` for cards.
  - Explicit column utilities for deterministic desktop layouts: `.cols-2`, `.cols-3`, `.cols-4`.
- Typography:
  - Fluid type via `clamp`: titles `clamp(32px, 5vw, 56px)`, body `clamp(16px, 1.8vw, 20px)`.
  - Increase `html` font-size on `ultra` screens for improved readability (already present).
- Spacing scale:
  - Base spacing in `rem`; section padding: 120px desktop, 80px tablet, 40px mobile.
- Media assets:
  - Use responsive images; avoid `background-attachment: fixed` on mobile.
- Motion:
  - IntersectionObserver feature guarded for SSR/tests; reduce animation intensity on mobile.

## Navigation & Header
- NavBar (desktop):
  - Three zones grid: logo | links | actions.
  - Links: Home, About, Projects (dropdown sublinks), News, Contact; Register (CTA) right.
  - Language toggle persists, mirrors route.
- NavBar (tablet/mobile):
  - Burger menu opens a drawer; drawer contains same links and language toggle.
- Accessibility:
  - Focus states, skip-to-content link, ARIA roles for menu and dropdowns.

## Home Page (EN/AR Mirror)
- Hero:
  - Full-bleed video with overlay; centered badge, H1, subtitle, primary CTA.
  - Desktop: large H1 `clamp(48px, 8vw, 96px)`, max content width 1200.
  - Tablet/mobile: scaled `clamp`, buttons stack.
- Panorama Stats:
  - Desktop: 3×2 grid (six stats) with consistent card sizes; grid responsive via auto-fit.
  - Tablet: 2×3 grid; Mobile: 2×3 with reduced padding.
- About teaser:
  - Two-column desktop (text | image); one-column stack on ≤768.
- Excellence content:
  - Two-column desktop with rotating image grid; single-column on tablets/mobile.
- Community & Culture sections:
  - Centered content with stats and CTAs; grids expand on `xl`/`2xl`.
- CEO Message:
  - Two-column layout (text | signature panel) on desktop; stacked on mobile.
- RTL:
  - Arabic page containers set `dir="rtl"`; mirror grid alignments; copy is polished and equivalent.

## About Page
- Hero with layered gallery; fluid background elements.
- Vision section: centered content + CTA; desktop width constraints.
- CEO section: two-column grid; signature block.
- Leadership pillars: 4-card grid (`cols-4` desktop → `cols-2` tablet → `cols-1` mobile).
- Brand values: image cards with overlay text; responsive grid.

## Projects Hub & Subpages
- Projects Hub:
  - Intro header, card grid using auto-fit minmax(380px, 1fr); ensure 2–3 columns on desktop.
  - Each card: image, category, short copy, stats; hover overlay.
- Commercials & Residential:
  - Parallax sliders (smooothy-based) with accessible controls; autoplay pause on interaction.
  - Content sections with benefits/features; RTL mirrored in Arabic.
- Calma Tower:
  - Gallery, key stats, location map snippet, CTA to register or contact.

## News
- List view: responsive grid for articles (auto-fit 320px min); detail page optional for initial version.

## Register
- Multi-field form (names, contact, preferences, timeline, message, consent).
- Desktop: two-column form rows; tablet/mobile: single column.
- Validation and UX: loading state, required indicators, privacy acknowledgment.

## Contact
- Contact details, map, simple contact form; ensure responsive two-column → single column.

## Footer
- Company info, links, social; language switch duplicated; copyright.

## CTA Placement & Page Flow
- Primary CTAs:
  - Home hero: Explore Projects.
  - About sections: Discover Vision / Meet Leadership.
  - Projects: View details / Register Interest.
  - Register: Submit; News: Read more; Contact: Get in touch.
- Secondary CTAs: language toggle, contact, register, view culture.

## Bilingual Integrity (Arabic & English)
- Maintain content parity across EN/AR; only text differs.
- Set `lang` attribute (`en`/`ar`) and `dir` (`ltr`/`rtl`) per page via context.
- RTL styles: rely on `[dir="rtl"]` selectors; ensure grid and logical properties (margin/padding start/end) respect RTL.

## Breakpoint Corrections (Concrete)
- Containers:
  - `--container-max`: md 1100, lg 1280, xl 1440, 2xl 1600, ultra 1800.
- Grids:
  - Use explicit multi-column utilities on desktop when auto-fit produces narrow single columns.
  - Stats grids: desktop 3×2; tablet 2×3; mobile 2×3 with reduced gap.
- Hero/video and panorama:
  - Disable fixed attachments on ≤768; scale overlay padding with breakpoints.
- Typography & spacing:
  - Use consistent `clamp` for titles and labels; increase spacing on ≥1440.

## Gaps & Corrections
- Case sensitivity in asset filenames: ensure imports match casing for CI.
- Large min-height values (e.g., `height: 400vh`): reduce for desktop where appropriate; avoid mobile parallax fixed backgrounds.
- Mobile-first overrides: ensure desktop CSS defines explicit columns to avoid auto-fit collapsing into mobile-like stacks on wide displays.
- Reduce animation intensity on mobile; guard IntersectionObserver in non-browser environments.

## Implementation Outline (No Code Yet)
1. Audit responsive CSS across key pages; consolidate grid utilities and container widths.
2. Apply breakpoint matrix per section:
   - Hero, Stats, Content grids, Sliders, Cards, Maps.
3. Align Arabic components with RTL selectors; verify mirrored layouts.
4. Validate routes, toggles, CTAs; ensure consistent navigation.
5. QA on 1440, 1920, 2560 widths; 1024, 768, 480 widths; fix stacking and spacing.
6. CI readiness: confirm asset path case, Node version, build output.

## Deliverables
- Updated responsive CSS tokens and utilities.
- Page-specific breakpoint rules ensuring desktop multi-column layouts.
- Polished bilingual content blocks (headings, descriptions, CTAs) reflecting parity.
- Navigation/route map and CTA hierarchy for immediate build.

## Confirmation
- If approved, I will implement the breakpoint corrections section-by-section, verify on target dimensions (you can provide specific break screen sizes), mirror Arabic layouts, and deliver a production-ready build with live deploy verification on Vercel and GitHub.
