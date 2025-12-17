# Fix Navigation, Layout Fill, Bilingual About, LinkedIn News, and CTA Sizing

## Navigation & Language
- Audit LanguageContext route mapping and `dir/lang` updates to ensure every nav item switches correctly between EN/AR (Home, About, Projects, News, Contact).
- Refactor NavBar alignment:
  - Use 3-zone grid: logo | links | actions with balanced spacing.
  - Adjust gaps so items aren’t crowded; set min widths per item for readability.
- Projects dropdown: confirm compact, clickable buttons; cap height and width; ensure items work with keyboard and pointer.

## Layout Fill (Empty Spaces)
- Standardize containers across pages:
  - `container` for general content; `container-wide` for dense sections; `container-full` for full-bleed hero.
  - Scale max-width at xl/2xl/ultra; increase `--grid-min` so desktop shows true multi-column.
- Apply to all pages (Home, About, Projects, News, Register, Contact) so content fills horizontally without left/right gaps while preserving readable line lengths.

## Bilingual About Parity
- Mirror English About to Arabic About with identical layout structure:
  - Two-column sections (text | media), feature lists, leadership/brand values blocks.
  - Shared component wrappers; copy differs only by language.
- Ensure no overlap; use consistent grid and spacing; verify RTL margins/padding.

## News with LinkedIn
- Add a "View on LinkedIn" CTA button that routes to your LinkedIn company page.
- Implement a news provider interface:
  - Client reads from a configurable endpoint (serverless function) for LinkedIn updates.
  - Fallback: local JSON shows recent posts; when credentials are provided, feed auto-updates.
- Provide endpoints and env variable placeholders for LinkedIn API keys; handle CORS via serverless.

## Register CTA Sizing
- Ensure “Register Your Interest” renders as a single-line sentence:
  - Adjust padding, line-height, min-width; set font-size responsive.
  - Confirm consistent size across breakpoints; avoid overly small/large rendering.

## NavBar Distribution & Density
- Reduce excessive spacing; balance logo, links, actions.
- Keep frosted style; refine padding and grid columns.
- Ensure language toggle and burger/menu do not crowd action area.

## Implementation Steps
1. Navigation: validate route toggling and `dir/lang`; correct any mismaps.
2. Containers: apply standardized containers to all top-level sections; raise grid mins at desktop and ultra-wide.
3. About pages: extract shared section components; mirror structure in Arabic.
4. News: add LinkedIn CTA and provider; stub serverless fetch; fallback to local.
5. CTA: update button sizing rules; enforce single-line display.
6. NavBar: tune grid and spacing; test at key breakpoints.
7. QA: verify desktop/tablet/mobile; check ultra-wide screens; confirm RTL mirroring.

## Success Criteria
- Language switches correctly and positions look consistent.
- No left/right empty gaps; content fills containers while staying readable.
- English/Arabic About pages match in structure/layout.
- News button points to LinkedIn; feed auto-refresh works when configured.
- Register CTA is single-line, well-sized; NavBar spacing is balanced.

## Needed Inputs (Optional)
- LinkedIn company URL and (later) API credentials for auto-updates.
- Any preferred exact container widths for DeX/ultra screens.

If approved, I will implement these changes across the codebase and verify in the local preview before handing off.