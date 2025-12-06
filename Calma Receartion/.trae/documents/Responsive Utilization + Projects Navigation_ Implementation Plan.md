# Responsive Utilization + Projects Navigation: Implementation Plan

## Goals
- Ensure `div.container` and `main.main-content` fully utilize available width across all breakpoints without unnecessary whitespace.
- Implement precise layout diagnostics (dimensions, constraints) and visual debugging.
- Future-proof responsive architecture using scalable containers, grids, and variables.
- Structure Projects navigation: compact, usable dropdown grouped by unit type (villa, floor, town house, office) with bilingual parity and asset utilization (images + PDFs).

## Layout Diagnostics
- Add a lightweight diagnostics hook that logs, on mount and resize:
  - `getBoundingClientRect()` for `.container` and `main.main-content`.
  - Computed styles: `max-width`, `width`, `padding`, `margin`, `box-sizing`.
  - Viewport size (`window.innerWidth/innerHeight`).
  - Calculated available space (viewport minus container margins/padding).
- Attach temporary 2px dashed borders and semi-transparent backgrounds to debug utilization on:
  - `.container`, `.luxury-section-inner`, `.content-grid`, `.projects-grid`.
- Console grouping by breakpoint buckets: xs, sm, md, lg, xl, 2xl, ultra.

## Responsive Architecture
- Containers:
  - `container` (general content): max-width scales by breakpoint (md 1100, lg 1280, xl 1440, 2xl 1600, ultra 1800).
  - `container-wide` (high-density sections: stats/projects): xl 1600, 2xl 1800, ultra 1920.
  - `container-full` (hero/panorama): full-bleed; inner text wrapper with `--max-content-width` (1000–1200px) for readable lines.
- Grids:
  - Auto-fit cards/grids: `repeat(auto-fit, minmax(var(--grid-min), 1fr))` with `--grid-min` scaling per breakpoint (md 320, lg 360, xl 400, 2xl 420, ultra 480).
  - Explicit desktop utilities: `.cols-2`, `.cols-3`, `.cols-4` applied at ≥lg to avoid accidental single-column collapse on wide screens.
- Typography & spacing:
  - Titles: `clamp(32px, 5vw, 56px)`; body: `clamp(16px, 1.6vw, 20px)`.
  - Section padding: desktop 120px, tablet 80px, mobile 40px.
- Full-bleed sections:
  - Remove fixed background attachments except where strictly needed; reduce hard-coded extreme heights; ensure overlay content uses `max-content-width`.
- Variables:
  - Introduce `--element-padding`, `--element-margin`, `--max-content-width`, `--grid-min`, `--container-max` with breakpoint-specific overrides.

## Implementation Targets
- `src/styles/fluid-grid.css` and `src/index.css`:
  - Scale `--container-max`, add `container-wide`, `container-full` patterns, and increase `--grid-min` at desktop+.
  - Add media queries for xl (≥1280), 2xl (≥1440), ultra (≥1920).
- Section wrappers (Home/About/Projects/Culture/CEO):
  - Wrap bounded content in `container` or `container-wide` as appropriate.
  - Ensure grids render multi-column at desktop (≥1024) and expand at xl/2xl/ultra.
- Panorama/Hero:
  - Convert fixed heights to responsive (vh-based + min-height) and use `background-attachment: scroll` for performance.
  - Inner text wrapper uses `--max-content-width` to prevent narrow content on wide screens.

## Visual Debugging
- Temporary CSS utilities:
  - `.debug-outline-1/2` with dashed borders and semi-transparent backgrounds.
  - Environment-guarded logging: only active in development.
- Console logging:
  - Dimensions of `.container` and `main.main-content`.
  - Viewport width/height and effective content width (container max minus padding).
  - Current breakpoint bucket label.

## Projects Navigation & Data
- Data source:
  - Create a structured `projects.data.ts` with bilingual labels and mapping to asset directories:
    - Each entry: `{ id, nameEN, nameAR, unitType: 'villa'|'floor'|'townhouse'|'office', locationEN, locationAR, slugEN, slugAR, assets: { imagesGlob, pdfs: [{labelEN,labelAR,path}] } }`.
  - Use the provided directories and PDF files (e.g., HT210 profiles and prices) to populate the `assets`.
- Dropdown redesign (desktop):
  - Compact glass dropdown (max-height ~320px; width ~320–420px).
  - Grouped by unit type with headers: Villa, Floor, Town House, Office.
  - Each item: `Location • Project Name` (bilingual), clicking navigates to its page.
  - Provide “All Projects” at top and “View by Category” quick links.
  - Scroll when overflow; smooth entrance animation; close on outside click.
- Mobile drawer:
  - Section “Projects” lists categories first, then featured items with truncation; navigates to hub or detail.
- Routes/pages:
  - Projects hub (`/projects`, `/ar/projects`) lists all entries grouped by unit type.
  - Detail pages for the listed projects (EN/AR slugs), each with:
    - Hero image, location, unit type, description.
    - Asset gallery (images via glob) and a PDF preview component (inline `<embed>` or `<object>` with download fallback).

## Bilingual & RTL
- Maintain parity across EN/AR with mirrored structure and content.
- Use `LanguageContext` for `lang`/`dir` and route mapping.
- Ensure dropdown group headers and items translate (`Villa • فلل`, `Floor • أدوار`, `Town House • تاون هاوس`, `Office • مكتبي`).

## Testing Protocol
- Cross-resolution validation: 720p, 1080p, 1440p, 4K, 5K+, up to 8K.
- Browsers: Chrome, Firefox, Safari, Edge.
- Device classes: mobile, tablet, desktop, DeX-like large displays.
- Orientation checks.
- Performance: confirm no layout shifts on resize; verify reduced fixed backgrounds; measure First Paint stability.

## Success Criteria
- Containers and sections utilize ≥95% of available width at desktop and above.
- No unnecessary whitespace; readable line lengths with `--max-content-width`.
- Media maintains aspect ratios.
- Smooth responsive behavior across all breakpoints.
- Console diagnostics available; visual debug removable.
- Dropdown compact, usable, and bilingual; project pages render images and PDFs.

## Rollout Steps
1. Add diagnostics hook and debug CSS utilities.
2. Update container/grid variables and media queries; apply to key sections.
3. Refine hero/panorama heights/attachments.
4. Build `projects.data.ts` using provided directories and PDFs; add routes.
5. Redesign desktop dropdown and mobile drawer Projects section.
6. Implement PDF preview component and gallery per project.
7. Bilingual copy and RTL verification.
8. QA across target resolutions and browsers; finalize by removing debug outlines.

## Notes
- Asset imports will respect filename casing for CI.
- PDFs are previewed inline with fallbacks; links to download preserved.
- If you have exact breakpoint width preferences or unit-type tags, I’ll incorporate them during implementation.
