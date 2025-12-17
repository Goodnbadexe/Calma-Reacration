# Calma Website – Visual & Layout Refinement Master Document

## Purpose

This document captures **every known visual, layout, and rendering issue** (including minor or "ugly" spacing problems) across the Calma website. It also defines **clear fixes, design intent, and verification steps** so nothing slips through during iteration.

This is a **living document** and should be updated as new issues are discovered.

***

## 1. First-Load White Space / Blank Screen Issue

### Observed Behavior

* On initial load, the page sometimes appears mostly white with missing sections.
* When switching to another browser tab and returning, the content snaps into place and renders correctly.
* This is most noticeable on pages with large hero or stacked image sections.

### Root Cause

* Large images do not reserve layout space before loading.
* Fonts and images cause layout shifts after the first paint.
* Sections rely on content height rather than predefined structure.

### Fix Strategy

* Reserve space for all major visual sections:
  * Use `aspect-ratio` or fixed `min-height` for hero and showcase sections.
  * Avoid letting images define section height dynamically.
* Ensure critical layout styles load before content paint.

### Design Intent

The page should feel **stable and intentional from the first frame**, with no flashes of white or content jumping.

### Verification

* Hard refresh the page
* Switch browser tabs and return
* Test on slow network throttling

***

## 2. Section Cohesion & Visual Rhythm

### Observed Issues

* Some sections feel visually disconnected from the rest of the page.
* Spacing between sections is inconsistent (some too tight, others too loose).
* Image-heavy sections feel heavier than text-led sections, breaking flow.

### Fix Strategy

* Standardize vertical spacing across all sections.
* Align text widths and content columns consistently.
* Ensure each section visually relates to the next.

### Design Intent

The site should feel like **one continuous story**, not a stack of unrelated blocks.

***

## 3. About Page – CEO Section

### Observed Issues

* CEO image previously overlapped text due to shared global styles.
* Text appeared invisible due to white text on a light background.

### Root Cause

* CEO image inherited `grid-image primary` absolute positioning from Home page.
* Text colors were not adapted to the About page background.

### Fix Strategy

* Remove global grid-image classes from CEO image.
* Force static positioning for CEO images.
* Update text colors to theme-safe dark variants.

### Design Intent

This section should feel **editorial and calm**, with clear hierarchy and no visual aggression.

***

## 4. KPI / Impact By The Numbers Section

### Observed Issues

* On small screens, KPIs collapse into a single vertical column too early.
* This weakens the visual impact of the statistics.

### Fix Strategy

* Use responsive grid rules:
  * Desktop: 4 columns
  * Tablet/Mobile: 2 columns
  * Very small screens: 1 column

### Design Intent

Numbers should feel **confident, balanced, and scannable** at all screen sizes.

***

## 5. Excellence / Masterfully Crafted Section (Mobile)

### Observed Issues

* Images appear before text on mobile, disrupting narrative flow.
* Content feels image-led rather than message-led.

### Fix Strategy

* On mobile:
  * Text first
  * Images second

### Design Intent

On mobile, **clarity beats spectacle**. Images should support the message, not interrupt it.

***

## 6. Image Style Bleed Across Pages

### Observed Issues

* Home page image positioning rules affect About page images.
* Causes unintended overlaps and layering problems.

### Fix Strategy

* Scope absolute image positioning strictly to Home → Excellence section.
* Keep About page images simple and static.

### Design Intent

Each page should be visually independent while sharing a common design language.

***

## 7. Minor Spacing & Alignment Issues (Audit List)

### Areas to Watch

* Extra vertical gaps above and below section headers
* Uneven padding inside cards
* Misaligned buttons relative to text blocks
* Inconsistent margins between stacked sections

### Fix Strategy

* Perform a full spacing audit:
  * Normalize padding values
  * Align buttons consistently
  * Remove redundant margins

### Design Intent

No section should feel "floaty" or accidentally spaced.

***

## 8. Navigation Consistency

### Observed State

* Navbar behavior is consistent and functional.
* Transparency vs solid states need contrast validation.

### Fix Strategy

* Keep current logic intact.
* Validate contrast over light and dark backgrounds.
* Prepare structure for future burger menu design swap.

### Design Intent

Navigation should feel **effortless, predictable, and premium**.

***

## 9. Final Design Principles (Guiding Rules)

* Stability over animation
* Text clarity over imagery
* Consistent rhythm over visual novelty
* Calm confidence over visual noise

***

## 10. Final Verification Checklist

* No white flashes on load
* No layout shifts after first paint
* Mobile flow reads naturally
* Images never overlap text unintentionally
* All spacing feels deliberate

***

## Status

* Initial fixes identified
* Implementation in progress
* Pending full spacing and cohesion audit

