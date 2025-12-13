import { useCallback, useEffect, useMemo, useState } from 'react'
import useEmblaCarousel, { type EmblaOptionsType } from 'embla-carousel-react'
import ProjectCard, { type Project } from '@/components/home/ProjectCard'
import { projectsData } from '@/data/projects.data'

const pickPreviewImage = (glob: string): string => {
  try {
    const mods = import.meta.glob('/src/assets/Images/Projects/**/*.{png,jpg,jpeg,webp}', { eager: true }) as Record<string, any>
    const match = Object.entries(mods).find(([k]) => k.includes(glob.split('/src/assets/Images/Projects/')[1] || ''))
    const url = match ? (typeof match[1] === 'string' ? match[1] : match[1]?.default) : undefined
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
  const options: EmblaOptionsType = useMemo(
    () => ({
      dragFree: false,
      align: 'start',
      loop: false,
      slidesToScroll: 1,
    }),
    []
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const canScrollPrev = emblaApi ? emblaApi.canScrollPrev() : false
  const canScrollNext = emblaApi ? emblaApi.canScrollNext() : false

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

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
    const root = emblaRef.current as unknown as HTMLElement | null
    if (root) root.addEventListener('keydown', onKey)
    return () => root && root.removeEventListener('keydown', onKey)
  }, [emblaApi, emblaRef])

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

