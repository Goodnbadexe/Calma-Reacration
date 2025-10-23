import React, { useEffect, useRef, useState, useCallback } from 'react'
import Core from 'smooothy'

interface Parallax1SliderProps {
  title?: string
  description?: string
  features?: string[]
  images?: string[]
  className?: string
  slideCount?: number
  enableAutoPlay?: boolean
  autoPlayDelay?: number
  onSlideChange?: (index: number) => void
  onError?: (error: Error) => void
}

const Parallax1Slider: React.FC<Parallax1SliderProps> = ({
  title = "Parallax.",
  description = "Weird parallax effect but kinda exemplifies why you might want it.",
  features = ["Infinite", "Snap", "Parallax", "current"],
  images = [],
  className = "",
  slideCount = 18,
  enableAutoPlay = false,
  autoPlayDelay = 5000,
  onSlideChange,
  onError
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const sliderInstanceRef = useRef<Core | null>(null)
  const parallaxElementsRef = useRef<HTMLElement[]>([])
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isActive, setIsActive] = useState(false)

  // Default images if none provided
  const defaultImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ]

  const slideImages = images.length > 0 ? images : defaultImages
  const slides = Array.from({ length: Math.min(slideCount, slideImages.length) }, (_, i) => ({
    id: i,
    image: slideImages[i % slideImages.length]
  }))

  // Custom slider class extending Core
  class ControlsSlider extends Core {
    parallaxy: HTMLElement[]
    onSlideChangeCallback?: (current: number, previous: number) => void

    constructor(container: HTMLElement, onSlideChangeCallback?: (current: number, previous: number) => void) {
      super(container)

      this.parallaxy = [...container.querySelectorAll("[data-p]")] as HTMLElement[]
      this.onSlideChangeCallback = onSlideChangeCallback
      this.onSlideChange(0, 0)
    }

    onSlideChange = (current: number, previous: number) => {
      // Remove active class from previous slide
      if (this.items[previous]) {
        this.items[previous].children[0]?.classList.remove("active")
      }
      // Add active class to current slide
      if (this.items[current]) {
        this.items[current].children[0]?.classList.add("active")
      }
      
      // Call external callback
      this.onSlideChangeCallback?.(current, previous)
    }

    onUpdate = ({ parallaxValues }: { parallaxValues: number[] }) => {
      this.parallaxy.forEach((p, i) => {
        if (p && parallaxValues[i] !== undefined) {
          p.style.transform = `translateY(${Math.sin(parallaxValues[i] * 1.5) * 10}%)`
        }
      })
    }
  }

  // Initialize slider
  useEffect(() => {
    if (!sliderRef.current || !containerRef.current) return

    try {
      const slider = new ControlsSlider(
        sliderRef.current,
        (current, previous) => {
          setCurrentSlide(current)
          onSlideChange?.(current)
        }
      )

      sliderInstanceRef.current = slider
      setIsActive(true)

      // Animation loop using requestAnimationFrame (similar to gsap.ticker)
      const animate = () => {
        if (sliderInstanceRef.current) {
          sliderInstanceRef.current.update()
        }
        animationFrameRef.current = requestAnimationFrame(animate)
      }
      animate()

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        if (sliderInstanceRef.current && typeof sliderInstanceRef.current.destroy === 'function') {
          sliderInstanceRef.current.destroy()
        }
      }
    } catch (error) {
      console.error('Slider initialization error:', error)
      onError?.(error as Error)
    }
  }, [slides.length, onSlideChange, onError])

  // Auto-play functionality
  useEffect(() => {
    if (!enableAutoPlay || !sliderInstanceRef.current) return

    const startAutoPlay = () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
      
      autoPlayTimerRef.current = setInterval(() => {
        if (sliderInstanceRef.current) {
          sliderInstanceRef.current.goToNext()
        }
      }, autoPlayDelay)
    }

    startAutoPlay()

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [enableAutoPlay, autoPlayDelay])

  // Navigation functions
  const goToNext = useCallback(() => {
    sliderInstanceRef.current?.goToNext()
  }, [])

  const goToPrev = useCallback(() => {
    sliderInstanceRef.current?.goToPrev()
  }, [])

  const goToSlide = useCallback((index: number) => {
    sliderInstanceRef.current?.goToIndex(index)
  }, [])

  return (
    <div ref={containerRef} className={`parallax1-slider ${className}`}>
      {/* Header */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-4">{description}</p>
        <div className="flex justify-center gap-4 mb-4">
          {features.map((feature, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              {feature}
            </span>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm text-gray-600">
            {isActive ? 'Slider Active' : 'Slider Inactive'}
          </span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={goToPrev}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          aria-label="Previous slide"
        >
          ← Previous
        </button>
        <button
          onClick={goToNext}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
          aria-label="Next slide"
        >
          Next →
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mb-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-gray-800 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider */}
       <div 
         ref={sliderRef}
         data-slider
         className="flex w-screen overflow-x-hidden px-[calc(50%-40vw)] md:px-[calc(50%-15vw)] py-8 focus:outline-none"
         tabIndex={0}
       >
        {slides.map((slide, i) => (
          <div 
            key={slide.id}
            className="flex aspect-[3/4] w-[80vw] md:w-[30vw] shrink-0 items-center justify-center p-1"
          >
            <div className="relative h-full w-full p-8 border-2 border-gray-800 bg-white">
              <div
                 data-p
                 ref={el => {
                   if (el) parallaxElementsRef.current[i] = el
                 }}
                 className="flex h-full w-full items-center justify-center border-2 border-gray-600 overflow-hidden bg-gray-50"
               >
                 <div className="overflow-hidden">
                   <p className="text-black text-2xl font-bold">
                     {i}
                   </p>
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .parallax1-slider [data-p] > div > p {
          transform: translateY(120%);
          transition: transform 0.5s ease-out;
          transition-delay: 0.1s;
        }

        .parallax1-slider .active > [data-p] > div > p {
          transform: translateY(0%);
          transition: transform 0.5s ease-out;
          transition-delay: 0.3s;
        }

        .parallax1-slider .active {
          background-color: rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  )
}

export default Parallax1Slider