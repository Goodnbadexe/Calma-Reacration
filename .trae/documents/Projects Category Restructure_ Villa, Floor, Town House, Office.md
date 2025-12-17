# Projects Category Restructure: Villa, Floor, Town House, Office

## New Structure (English)
- Keep `src/pages/english/Projects/Projects.tsx` as All Projects hub
- Rename/move:
  - `CalmaTower.tsx` → `Villa.tsx` (Villa category page)
  - `Commercials.tsx` → `Office.tsx` (Office category page)
  - `Residential.tsx` → `TownHouse.tsx` (Town House category page)
- Add new file: `Floor.tsx` (Floor plans category page)
- Optional folders for clarity:
  - `src/pages/english/Projects/categories/` with the four pages above
  - `src/pages/english/Projects/index.ts` exporting all category pages (for clean imports)

## Routes & Navigation
- Update `src/main.tsx` routes:
  - `/projects` → `Projects` hub
  - `/projects/villa` → `Villa`
  - `/projects/floor` → `Floor`
  - `/projects/townhouse` → `TownHouse`
  - `/projects/office` → `Office`
- Arabic parity (if currently mirrored):
  - `/ar/projects` hub, `/ar/projects/villa`, `/ar/projects/floor`, `/ar/projects/townhouse`, `/ar/projects/office`
- NavBar dropdown links change to these routes; keep All Projects on top, followed by four category items

## Category Implementation
- All Projects hub:
  - Grid of cards grouped by unit type (Villa, Floor, Town House, Office)
  - Each card links to the relevant category page
- Category pages:
  - Reuse existing content from `CalmaTower`, `Commercials`, and `Residential` with adjusted copy + headings
  - Floor page uses a simplified layout highlighting floor-plan projects; slot existing data or placeholders

## Visual Consistency
- Containers:
  - Use `.container`/`.container-wide` consistently; center content and ensure max-width alignment (≥1440)
- Spacing:
  - Standardize section padding (desktop 120px, tablet 80px, mobile 40px)
  - Normalize inner grid gaps (desktop 32px, tablet 24px, mobile 16px)
- Colors:
  - Apply site palette variables (neutral/sage) for headings, borders, and buttons
- Active/inactive states:
  - In hub and dropdown, highlight the active category; subdued hover and focus outlines for accessibility

## File & Import Updates
- Update imports anywhere referencing the renamed files:
  - Replace `Projects/Commercials` → `Projects/Office`
  - Replace `Projects/Residential` → `Projects/TownHouse`
  - Replace `Projects/CalmaTower` → `Projects/Villa`
- If using `categories/` subfolder, update imports to `Projects/categories/...`
- Export convenience barrel at `Projects/index.ts` (optional) for cleaner imports

## Validation & QA
- Build: ensure no broken imports after renames
- Grep for old import paths and replace
- Run local preview; verify hub and category routes render
- Check dropdown: items are clickable and navigate correctly (EN/AR)
- Responsive QA across breakpoints (≥1920, ≥1440, ≥1280, ≥1024, ≥768, ≤640, ≤480)
- Accessibility: focus states on category links and buttons

## Arabic Parity (Optional Follow-up)
- Mirror categories under `src/pages/arabic/المشاريع/` with equivalent layout
- Update Arabic routes and NavBar dropdown for `/ar/projects/...`

## Deliverables
- Renamed category files + optional `categories/` subfolder
- Updated routes and NavBar dropdown
- Visually consistent containers, spacing, and states across hub and category pages
- Validation: no broken links or imports; successful navigation; consistent EN/AR behavior