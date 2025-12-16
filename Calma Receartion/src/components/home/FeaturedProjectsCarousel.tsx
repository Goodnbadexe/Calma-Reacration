import { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ProjectCard, { type Project } from '@/components/home/ProjectCard'
import { projectsData } from '@/data/projects.data'

const pickPreviewImage = (glob: string): string => {
  try {
    const allImages = import.meta.glob('/src/assets/Images/Projects/**/*.{png,jpg,jpeg,webp}', { eager: true }) as Record<string, any>
    const rel = glob.startsWith('/src/assets/Images/Projects/')
      ? glob.slice('/src/assets/Images/Projects/'.length)
      : glob
    const starIdx = rel.indexOf('*')
    const baseDirRel = starIdx >= 0 ? rel.slice(0, starIdx) : rel
    const baseDirAbs = `/src/assets/Images/Projects/${baseDirRel}`.replace(/\/+$/, '')
    const entry = Object.entries(allImages).find(([k]) => k.startsWith(baseDirAbs))
    const val = entry ? entry[1] : undefined
    const url = typeof val === 'string' ? val : val?.default
    return url || ''
  } catch {
    return ''
  }
}

const unitLabel: Record<string, string> = {
  villa: 'Residential',
  floor: 'Floors',
  townhouse: 'Townhouse',
  office: 'Office',
}

const slides: Project[] = projectsData.map((p) => ({
  id: p.id,
  title: (p.nameEN || p.id).split('•')[0].trim(),
  subtitle: p.locationEN || '',
  category: unitLabel[p.unitType] || 'Project',
  image: pickPreviewImage(p.assets.imagesGlob),
  href: `/projects`,
  descriptor: p.nameEN,
}))

export default function FeaturedProjectsCarousel() {
  const options = useMemo(
    () =>
      ({
        dragFree: false,
        align: 'start',
        loop: false,
        slidesToScroll: 1,
      } as any),
    []
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const canScrollPrev = emblaApi ? emblaApi.canScrollPrev() : false
  const canScrollNext = emblaApi ? emblaApi.canScrollNext() : false
  const [paused, setPaused] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  // Autoplay every 4.5s, pause on hover/focus
  useEffect(() => {
    if (!emblaApi) return
    const root = document.querySelector('.embla') as HTMLElement | null
    const onEnter = () => setPaused(true)
    const onLeave = () => setPaused(false)
    root?.addEventListener('pointerenter', onEnter)
    root?.addEventListener('pointerleave', onLeave)
    root?.addEventListener('focusin', onEnter)
    root?.addEventListener('focusout', onLeave)
    const id = window.setInterval(() => {
      if (!paused && emblaApi && emblaApi.canScrollNext()) emblaApi.scrollNext()
      else if (!paused && emblaApi && !emblaApi.canScrollNext()) emblaApi.scrollTo(0)
    }, 4500)
    return () => {
      window.clearInterval(id)
      root?.removeEventListener('pointerenter', onEnter)
      root?.removeEventListener('pointerleave', onLeave)
      root?.removeEventListener('focusin', onEnter)
      root?.removeEventListener('focusout', onLeave)
    }
  }, [emblaApi, paused])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!emblaApi) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        emblaApi.scrollNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        emblaApi.scrollPrev()
      }
    }
    const root = document.querySelector('.embla') as HTMLElement | null
    if (root) root.addEventListener('keydown', onKey)
    return () => {
      const el = document.querySelector('.embla') as HTMLElement | null
      if (el) el.removeEventListener('keydown', onKey)
    }
  }, [emblaApi])

  useEffect(() => {
    const toPreload = slides.slice(0, 3)
    toPreload.forEach((s) => {
      if (s.image) {
        const img = new Image()
        img.src = s.image
      }
    })
  }, [])

  return (
    <section
      className="featured-carousel section"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Projects"
    >
      <div className="showcase-header">
        <h2 className="showcase-title">Featured Projects</h2>
        <p className="showcase-subtitle">A glimpse into the places where our vision takes shape.</p>
      </div>

      <div className="embla" ref={emblaRef} tabIndex={0} aria-live="polite" aria-label="Project slider">
        <div className="embla__container">
          {slides.map((item, i) => (
            <div className="embla__slide" key={item.id} role="group" aria-roledescription="slide" aria-label={`Slide ${i + 1} of ${slides.length}`} id={`slide-${i + 1}`}>
              <ProjectCard project={item} active={i === selectedIndex} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className="btn btn-ghost btn-icon"
          aria-label="Previous"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          ‹
        </button>
        <button
          className="btn btn-ghost btn-icon"
          aria-label="Next"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          ›
        </button>
      </div>

      <div className="carousel-pagination" aria-label="Carousel pagination">
        <div className="carousel-dots" role="tablist" aria-orientation="horizontal">
          {slides.map((it, i) => (
            <button
              key={`dot-${it.id}`}
              role="tab"
              aria-selected={i === selectedIndex}
              aria-controls={`slide-${i + 1}`}
              className={`carousel-dot ${i === selectedIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
            />
          ))}
        </div>
        <div className="carousel-count" aria-live="polite">
          {selectedIndex + 1} / {slides.length}
        </div>
      </div>
    </section>
  )
}
