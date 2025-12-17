## Assumptions & Mapping
- `div.dual-split-grid`, `h2.dual-split-title`, `p.dual-split-description` belong to the Home hero’s “Redefining Luxury Living” split block in `src/pages/english/Home/Home.tsx`.
- Image trio `.image-grid > .grid-image.{primary,secondary,tertiary}` appears in Home content (`src/index.css:1236–1269`) and About CEO area variants.
- `span.highlight-number` used in project/KPI cards in `src/index.css:2257` and KPI modules.
- KPI grid: `.kpi-grid` defined in `src/index.css:2468`.
- Mission & Vision component exists as `src/components/home/MissionVision.tsx`; Calma Way likely corresponds to `src/components/home/Pillars.tsx`.
- Video reference is the Home hero video (`.hero-video`) in `src/pages/english/Home/Home.tsx:185`.

## Deliverables
- Desktop/tablet/mobile mockups (wireframe spec) for: Home split block, KPI line, Mission & Vision placement, image grids/cards, CEO section.
- Implementation plan aligning with design tokens (spacing, rhythm, motion) and transform/opacity-only transitions.

## Mockups (Wireframe Specs)
### 1) Split Block (Home)
- Desktop: two-column grid (text 5/12, image 7/12), gutters `var(--gap-xl)`, container padding `var(--spacing-xl)`.
- Tablet: single column, image stacked below text; gaps `var(--gap-lg)`.
- Mobile: single column; text center aligned; button full-width.

### 2) KPI Single Line
- Desktop: single row, `grid-auto-flow: column`, equal item width; overflow hidden.
- Tablet: wraps into 2 rows; mobile: single column.

### 3) Mission & Vision Placement
- Order: Hero → Split Block → The Calma Way → Mission & Vision → KPI → Projects.
- Headings left-aligned; consistent section rhythm.

### 4) Image Grid Shuffle
- Primary large tile (top row, spans 2 cols); two small side tiles below; optional shuffle toggles order per page load with stable seed.

### 5) CEO Section
- Portrait left, copy right; metallic border on portrait; no text overlay on images.

### 6) Cards (4-up)
- One emphasized card (larger type and area) + three compact cards; side cards smaller thumbnail, concise text.

## Implementation Plan
### A. Layout & Spacing Adjustments
1. Update `.dual-split-grid` container paddings/margins to ensure elements aren’t stuck to edges; use `padding-inline: var(--spacing-xl)`.
2. Ensure `.dual-split-title` and `.dual-split-description` have consistent margins (`margin-bottom: var(--spacing-md|lg)`).
3. Implement shuffle:
   - Add a small utility `shuffle<T>(arr, seed)`; apply to `image-grid` order in Home/About components via prop `shuffle`.
   - Default off; enable where requested for `div`, `img`, `${__web-element-7__}`, `${__web-element-8__}`.

### B. Number Formatting
1. In components rendering `highlight-number`, use `Intl.NumberFormat('en-US').format(2000)` and prefix with `+`.
2. CSS: set `letter-spacing: normal; font-variant-numeric: tabular-nums;` to avoid gaps.

### C. KPI Display (Single Line)
1. `.kpi-grid` (desktop): `display:grid; grid-auto-flow:column; grid-auto-columns:1fr; gap: var(--spacing-lg);`
2. Tablet/mobile breakpoints fall back to current grid definitions.
3. Standardize vertical alignment of `${__web-element-11__}`, `${__web-element-12__}`, `${__web-element-13__}`, `${__web-element-14__}` with `align-items:center` and consistent inner padding.

### D. Content Organization
1. Hide `${__web-element-15__}` on Home via conditional render or `.hidden` class.
2. Reorder JSX in `Home.tsx` to place `MissionVision` below `Pillars`.

### E. Size Adjustments
1. Increase `${__web-element-17__}` height to match `.hero-video` using `min-height` and aspect-ratio tokens; ensure responsive clamp.

### F. Card Layout Redesign (4-up)
1. Create a new grid template with areas: `primary` (spans 2 cols, large type), `side-1/2/3` compact.
2. Typography: larger headings (`var(--font-size-2xl)`+), reduced side card text using `var(--font-size-base)` with tighter line-height.

### G. White Space Optimization
1. Reduce excessive white space in `${__web-element-22__}` and `${__web-element-23__}` by:
   - Constraining `max-width` to 1200–1400px with auto margins
   - Using `gap: var(--gap-lg)` instead of arbitrary px/rem
   - Removing extra `margin-top/bottom` duplicates.

### H. Content Display Cleanup
1. For `${__web-element-24__}`: move any overlay text into adjacent content block; images use `.media-cover` only.
2. Redesign `${__web-element-25__}`:
   - Split into two distinct columns/sections: “VISION & VISIONARY” and “PROGRESSIVE LEADERSHIP”
   - Add headings/subcopy blocks; image galleries below each; no text overlays.

## Verification
- Run dev and verify no PostCSS errors, no hydration warnings.
- Check desktop/tablet/mobile layouts; confirm KPI single-line behavior and number formatting.
- Confirm shuffle toggles for target elements.

## Approval Request
- Confirm these mockup specs and ordering changes. After approval, I will implement the CSS/JS updates and integrate shuffle, KPI line layout, and reordering, keeping responsiveness and token consistency.
