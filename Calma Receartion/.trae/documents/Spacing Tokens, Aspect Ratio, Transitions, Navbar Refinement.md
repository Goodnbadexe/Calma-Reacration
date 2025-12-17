# Calma Website – Production Readiness & Cleanup (MD Copy)

> **Purpose**\
> This document defines the *final* steps required to take the Calma website from "visually polished" to **production‑ready**.\
> Focus: cleanup, consistency, missing pages (News / Contact), form integration, performance, and deployment hygiene.

***

## 1. Content & Layout Deduplication (High Priority)

### Impact by the Numbers – Single Source of Truth

**Keep ONLY one block** of statistics across the entire site.

✅ **Final approved set:**

* 28 — Landmark Projects
* 77,097 — Total Land Area (m²)
* 130,000+ — Built Area (m²)
* 700+ — Units Delivered

❌ **Remove entirely:**

* Any secondary cards with subtitles like:
  * "Delivered across KSA"
  * "Measured precision"
  * "Crafted with intent"
  * "Families served"

**Action:**

* Create a single reusable component: `ImpactStats.tsx`
* Import it wherever needed (Home only, ideally)
* Delete duplicated markup from About / Home sections

***

## 2. Missing CSS – News & Contact Pages

### News Page

**Problems observed:**

* No spacing tokens
* Raw typography
* Cards not aligned with global rhythm

**Fix:**

* Apply `.section` wrapper
* Use spacing tokens only
* Enforce image ratios for thumbnails (16:9)

**Minimum rules:**

```
.news-grid {
  gap: var(--spacing-32);
}

.news-card {
  padding: var(--spacing-24);
  border-radius: var(--radius-lg);
}

```

***

### Contact Page (Currently Broken / Unstyled)

**Required:** Full responsive layout + form styling

#### Layout Structure

* Left: Contact info / intro copy
* Right: Form card

```
<section className="section">
  <div className="contact-grid">
    <ContactInfo />
    <ContactForm />
  </div>
</section>

```

```
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-48);
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

```

***

## 3. Zoho Form Integration (Recommended Approach)

### Fields Required

Arabic labels supported; internal keys remain English.

* first\_name
* last\_name
* phone
* email
* project\_interest
* unit\_type
* city
* purchase\_method
* lead\_source
* message

### Presentation Strategy

**DO NOT embed raw Zoho iframe.**

✅ Instead:

* Build a **custom styled form** (React)
* Submit to Zoho via:
  * Zoho Forms POST endpoint **or**
  * Webhook → Zoho Flow

**Benefits:**

* Full control over desktop/mobile UX
* Dark mode support
* Matches Calma brand

### UX Rules

* Inputs height = `--control-h-md`
* Labels above inputs
* Required fields marked subtly
* Success state replaces form (no alert popups)

***

## 4. Responsive Form Design Rules

### Desktop

* Two-column grid where possible
* Long fields full-width

### Mobile

* Single column only
* Minimum tap height: 44px

```
.form-field input,
.form-field select,
.form-field textarea {
  min-height: var(--control-h-md);
}

```

***

## 5. Codebase Cleanup (TRAE Task)

### Remove Unused Code

Using Coverage tab as reference:

**Safe to delete:**

* Unused `.tsx` components not imported anywhere
* Old experimental layouts
* Duplicate CSS files

**Always keep:**

* Images
* Videos
* Fonts
* Active UI components

### Folder Hygiene

**Target structure:**

```
src/
 ├─ components/
 ├─ pages/
 ├─ styles/
 ├─ layouts/
 ├─ utils/

```

❌ No orphan folders\
❌ No unused TS/TSX files

***

## 6. Performance & Production Checks

### Mandatory Before Deploy

* `npm run build` with **zero warnings**
* No `console.log`
* No React hydration errors
* No layout shift on image load

### CSS Audit

* ❌ `transition: all`
* ❌ animating layout properties
* ✅ only `opacity` + `transform`

***

## 7. Final Deployment Readiness

### Environment

* `.env` cleaned
* Only production keys present
* No dev-only flags

### SEO / Meta

* Unique meta title per page
* Meta description set
* OpenGraph image defined

***

## 8. Definition of Done

The website is considered **production-ready** when:

* No duplicated content exists
* Contact page is styled and responsive
* Zoho form works on desktop & mobile
* Coverage shows no unused critical code
* CLS visually eliminated
* Navbar and spacing feel consistent across pages

***

