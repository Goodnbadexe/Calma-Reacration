## Goal
Replicate the structure of each English page in the Arabic section as separate files, keeping layout/animations identical and translating only the content. Ensure RTL, correct routes, and no emojis.

## Pages to Mirror
- Home: EN `src/pages/english/Home/Home.tsx` → AR `src/pages/arabic/الرئيسية/الرئيسية.tsx`
- About: EN `src/pages/english/About/AboutImproved.tsx` → AR `src/pages/arabic/عن كالما/عن كالما.tsx`
- Projects (index): EN `src/pages/english/Projects/Projects.tsx` → AR `src/pages/arabic/المشاريع/المشاريع.tsx`
- Projects subpages: EN `Commercials.tsx`, `Residential.tsx`, `CalmaTower.tsx` → add AR equivalents under `src/pages/arabic/المشاريع/`
- News: EN `src/pages/english/News/News.tsx` → create AR `src/pages/arabic/الأخبار/الأخبار.tsx` (translate content, RTL)
- Contact/Register: EN `src/pages/english/Register/Register.tsx` → create AR `src/pages/arabic/التسجيل/التسجيل.tsx` mirroring the EN form; keep existing `تواصل معنا` as the info-contact page

## Implementation Steps
1. Home:
- Copy EN hero/video/sections and framer-motion structure into AR home file.
- Translate headings, paragraphs, badges, CTAs; keep counters and grids identical (RTL-aware).
- Maintain the same media and posters with Arabic alt text; respect `.hero-video` optimizations already in place.

2. About:
- Mirror EN layout: content-grid, showcase images, motion variants, leadership/culture/values blocks.
- Translate all text nodes; ensure RTL and Arabic fonts.
- Keep animations and sections order consistent with EN.

3. Projects:
- Mirror EN projects page structure and sectioning.
- Create AR subpages to match EN routes: `/ar/projects/commercials`, `/ar/projects/residential`, `/ar/projects/calma-tower` with translated content.
- Update Arabic router entries to point to these new files and keep aliases for Arabic slugs.

4. News:
- Create a dedicated AR news page by copying EN `News.tsx` structure; translate copy; apply RTL.
- Update router to use AR news component for `/ar/news`.

5. Contact/Register:
- Copy EN `Register.tsx` structure into a new AR registration page; translate labels, placeholders, validation messages.
- Keep current AR `تواصل معنا` page as contact-info; ensure navbar maps AR Contact to `/ar/contact` and AR Register to `/ar/التسجيل`.

6. Shared Considerations:
- Maintain identical class names and motion variants for parity.
- Ensure `dir="rtl"` and Arabic alt/aria labels.
- No emojis; keep color contrast utilities (`.text-on-light/.text-on-dark`).
- Verify navigation + splash behavior remains consistent.

## Routing Updates
- Add AR subroutes for projects and registration.
- Ensure `/ar` counterparts map to the new AR pages while keeping existing Arabic-slug aliases.

## Acceptance Criteria
- Arabic pages look and behave like the English ones (same structure, sections, animations), with fully translated content.
- Navigation between EN/AR shows the same preloader timing and section readiness.
- All pages render correctly RTL with no layout drift.

## Deliverables
- New/updated AR page files mirroring EN structures.
- Router updates for AR subpages and `/ar/التسجيل`.
- Brief verification notes and paths after implementation.