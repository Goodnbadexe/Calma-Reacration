import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useMemo, useState } from 'react'

const testimonials = [
  {
    name: 'A. Al-Faisal',
    role: 'Homeowner, Riyadh',
    quote: 'Calma delivered more than a residence — it delivered a feeling of belonging.',
    project: 'NR100'
  },
  {
    name: 'N. Al-Saud',
    role: 'Investor, Jeddah',
    quote: 'Precision and trust at every milestone. The experience felt premium and effortless.',
    project: 'YS200'
  },
  {
    name: 'R. Al-Harbi',
    role: 'Resident, KSA',
    quote: 'Thoughtful spaces, timeless details, and a community that truly feels alive.',
    project: 'ONE Tower'
  },
]

export default function TestimonialsBand() {
  const options = useMemo(() => ({ align: 'start', dragFree: true } as any), [])
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <section className="section showcase-strips" aria-label="Testimonials">
      <div className="section-inner luxury-section-inner">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stories From Our Community
        </motion.h2>
        <div className="embla" ref={emblaRef} aria-label="Testimonials slider" style={{ marginTop: 12 }}>
          <div className="embla__container" style={{ display: 'flex', gap: 16 }}>
            {testimonials.map((t) => {
              const initial = t.name.trim().charAt(0).toUpperCase()
              return (
                <div className="embla__slide" key={t.name} style={{ flex: '0 0 320px' }}>
                  <motion.figure 
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(7,30,31,0.1)',
                      borderRadius: 12,
                      padding: '24px',
                      boxShadow: '0 8px 24px rgba(7,30,31,0.08)',
                      height: '100%'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div aria-hidden="true" style={{ width: 36, height: 36, borderRadius: '50%', background: '#64523D', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                        {initial}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#8b7355', fontWeight: 600 }}>
                        {t.project}
                      </div>
                    </div>
                    <blockquote style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(7,30,31,0.85)', marginBottom: 12 }}>
                      “{t.quote}”
                    </blockquote>
                    <figcaption style={{ fontSize: '0.95rem', color: '#63523d', fontWeight: 600 }}>
                      {t.name} · <span style={{ fontWeight: 500, color: '#8b7355' }}>{t.role}</span>
                    </figcaption>
                  </motion.figure>
                </div>
              )
            })}
          </div>
        </div>
        <div className="carousel-pagination" aria-label="Testimonials pagination" style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
          {testimonials.map((_, i) => (
            <button
              key={`dot-t-${i}`}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`carousel-dot ${i === selectedIndex ? 'active' : ''}`}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                border: '1px solid rgba(7,30,31,0.2)',
                background: i === selectedIndex ? '#64523D' : '#fff'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
