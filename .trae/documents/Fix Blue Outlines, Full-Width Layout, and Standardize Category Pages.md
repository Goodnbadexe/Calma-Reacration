# Fix Blue Outlines, Full-Width Layout, and Standardize Category Pages

## Remove Debug Outlines
- Disable diagnostics hook added to `AppLayout` and remove `debug.css` import from `src/index.css`.
- This stops the dashed blue outlines and restores normal visuals.

## Correct SVG Data URI
- In category pages (e.g., Office/TownHouse), fix the inline SVG background:
  - Replace the backticked namespace with a proper XML namespace: `xmlns='http://www.w3.org/2000/svg'`.
  - Ensure the data URI string is correctly escaped or base64-encoded to avoid rendering artifacts.

## Full-Width Container Usage
- Ensure sections use `.section-inner` (max-width 1440) and `.container-wide` for dense grids.
- Apply consistent padding/margins across hero, grids, and content blocks so the page uses the full width cleanly without side gaps.

## Standardize Category Layouts
- Update `Villa.tsx` and `Floor.tsx` to follow the same layout pattern as the provided Office (Commercials) page:
  - Top `Parallax1Slider` hero with features and auto-play images.
  - `ParallaxSlider` for slides with `resolveAssetUrl`.
  - Two supporting sections: feature grid and a list with `ParallaxListItem`.
- Align `TownHouse.tsx` to the same structure for visual parity.

## Navigation and Styling Consistency
- Keep the Projects dropdown compact and clickable; category links point to `/projects/villa`, `/projects/floor`, `/projects/townhouse`, `/projects/office`.
- Confirm active states, hover styles, and color palette are consistent with the site.

## Validation
- Preview EN pages (hub and all categories) after fixes.
- Verify no remaining outlines; confirm containers fill width appropriately.
- Ensure no broken imports or links; test navigation flows.

If approved, I will implement these edits immediately and verify the result in the local preview.