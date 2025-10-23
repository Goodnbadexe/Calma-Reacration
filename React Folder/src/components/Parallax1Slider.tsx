import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
// import { gsap } from 'gsap'

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

interface SlideData {
  id: number
  image: string
  title: string
}

interface AnimationState {
  current: number
  target: number
  speed: number
  isAnimating: boolean
  parallaxValues: number[]
  isDragging: boolean
  startX: number
  currentX: number
  velocity: number
  lastTime: number
  lastX: number
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
  const parallaxElementsRef = useRef<HTMLElement[]>([])
  const sliderRef = useRef<HTMLDivElement>(null)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  
  const [slides, setSlides] = useState<SlideData[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageLoadStates, setImageLoadStates] = useState<Record<number, 'loading' | 'loaded' | 'error'>>({})
  
  // Animation state
  const animationRef = useRef<AnimationState>({
    current: 0,
    target: 0,
    speed: 0,
    isAnimating: false,
    parallaxValues: [],
    isDragging: false,
    startX: 0,
    currentX: 0,
    velocity: 0,
    lastTime: 0,
    lastX: 0
  })

  // Memoized default images for performance
  const defaultImages = useMemo(() => [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ], [])

  // Error handling utility
  const handleError = useCallback((error: Error, context: string) => {
    console.error(`Parallax1Slider Error (${context}):`, error)
    setError(`${context}: ${error.message}`)
    onError?.(error)
  }, [onError])

  // Image loading handler
  const handleImageLoad = useCallback((slideId: number, status: 'loaded' | 'error') => {
    setImageLoadStates(prev => ({
      ...prev,
      [slideId]: status
    }))
  }, [])

  // Debounced resize handler for performance
  const debouncedResize = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }
    debounceTimerRef.current = setTimeout(() => {
      // Trigger re-render for responsive updates
      if (containerRef.current) {
        const event = new CustomEvent('resize')
        window.dispatchEvent(event)
      }
    }, 150)
  }, [])

  // Intersection observer for visibility-based optimizations
  const setupIntersectionObserver = useCallback(() => {
    if (!containerRef.current || !('IntersectionObserver' in window)) return

    intersectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Component is visible, enable auto-play if configured
            if (enableAutoPlay && !autoPlayTimerRef.current) {
              startAutoPlay()
            }
          } else {
            // Component is not visible, pause auto-play to save resources
            stopAutoPlay()
          }
        })
      },
      { threshold: 0.1 }
    )

    intersectionObserverRef.current.observe(containerRef.current)
  }, [enableAutoPlay])

  // Optimized animation frame handler
  const scheduleAnimationFrame = useCallback((callback: () => void) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    animationFrameRef.current = requestAnimationFrame(callback)
  }, [])

  // Auto-play controls
  const startAutoPlay = useCallback(() => {
    if (!enableAutoPlay) return
    
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
    }
    
    autoPlayTimerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, autoPlayDelay)
  }, [enableAutoPlay, autoPlayDelay, slides.length])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current)
      autoPlayTimerRef.current = null
    }
  }, [])

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length && index !== currentSlide) {
      setCurrentSlide(index)
      onSlideChange?.(index)
    }
  }, [currentSlide, slides.length, onSlideChange])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, slides.length, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
  }, [currentSlide, slides.length, goToSlide])

  // Initialize slides
  useEffect(() => {
    try {
      setIsLoading(true)
      setError(null)
      
      const slideImages = images.length > 0 ? images : defaultImages
      const totalSlides = Math.min(slideCount || 18, slideImages.length) // Use slideCount prop or default to 18
      
      const generatedSlides: SlideData[] = Array.from({ length: totalSlides }, (_, i) => ({
        id: i,
        image: slideImages[i % slideImages.length],
        title: `Project ${i + 1}`
      }))
      
      setSlides(generatedSlides)
      animationRef.current.parallaxValues = new Array(totalSlides).fill(0)
      
      // Initialize image load states
      const initialLoadStates: Record<number, 'loading' | 'loaded' | 'error'> = {}
      generatedSlides.forEach((_, index) => {
        initialLoadStates[index] = 'loading'
      })
      setImageLoadStates(initialLoadStates)
      
      setIsLoading(false)
    } catch (error) {
      handleError(error as Error, 'Slide initialization')
      setIsLoading(false)
    }
  }, [images, slideCount, defaultImages, handleError])

  // Core slider functionality with smooth drag
  useEffect(() => {
    if (!sliderRef.current || slides.length === 0) return

    const slider = sliderRef.current
    let isDragging = false
    let startX = 0
    let currentX = 0
    let velocity = 0
    let lastTime = Date.now()
    let lastX = 0
    let dragOffset = 0

    // Mouse and touch event handlers
    const handleStart = (e: MouseEvent | TouchEvent) => {
      isDragging = true
      startX = 'touches' in e ? e.touches[0].clientX : e.clientX
      lastX = startX
      lastTime = Date.now()
      velocity = 0
      dragOffset = 0
      
      // Pause auto-play during interaction
      stopAutoPlay()
      
      slider.style.cursor = 'grabbing'
      slider.style.transition = 'none' // Disable transition during drag
    }

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return
      
      e.preventDefault()
      currentX = 'touches' in e ? e.touches[0].clientX : e.clientX
      
      // Calculate drag offset
      dragOffset = currentX - startX
      
      // Apply real-time visual feedback
      const slideWidth = slider.children[0]?.getBoundingClientRect().width || 0
      const baseTransform = -currentSlide * slideWidth
      const currentTransform = baseTransform + dragOffset
      
      slider.style.transform = `translateX(${currentTransform}px)`
      
      // Calculate velocity for momentum
      const now = Date.now()
      const deltaTime = now - lastTime
      const deltaX = currentX - lastX
      
      if (deltaTime > 0) {
        velocity = deltaX / deltaTime
      }
      
      lastX = currentX
      lastTime = now
    }

    const handleEnd = () => {
      if (!isDragging) return
      
      isDragging = false
      slider.style.cursor = 'grab'
      slider.style.transition = 'transform 0.3s ease-out' // Re-enable transition
      
      const deltaX = startX - currentX
      const threshold = 50
      
      // Use velocity for more responsive navigation
      if (Math.abs(deltaX) > threshold || Math.abs(velocity) > 0.5) {
        if (deltaX > 0 || velocity < -0.5) {
          nextSlide()
        } else if (deltaX < 0 || velocity > 0.5) {
          prevSlide()
        }
      } else {
        // Snap back to current slide if drag wasn't significant
        const slideWidth = slider.children[0]?.getBoundingClientRect().width || 0
        const baseTransform = -currentSlide * slideWidth
        slider.style.transform = `translateX(${baseTransform}px)`
      }
      
      // Resume auto-play after interaction
      if (enableAutoPlay) {
        setTimeout(startAutoPlay, 1000)
      }
    }

    // Add event listeners
    slider.addEventListener('mousedown', handleStart)
    slider.addEventListener('touchstart', handleStart, { passive: false })
    slider.addEventListener('mousemove', handleMove)
    slider.addEventListener('touchmove', handleMove, { passive: false })
    slider.addEventListener('mouseup', handleEnd)
    slider.addEventListener('touchend', handleEnd)
    slider.addEventListener('mouseleave', handleEnd)

    // Animation loop removed to prevent stack overflow

    return () => {
      slider.removeEventListener('mousedown', handleStart)
      slider.removeEventListener('touchstart', handleStart)
      slider.removeEventListener('mousemove', handleMove)
      slider.removeEventListener('touchmove', handleMove)
      slider.removeEventListener('mouseup', handleEnd)
      slider.removeEventListener('touchend', handleEnd)
      slider.removeEventListener('mouseleave', handleEnd)
    }
  }, [slides, nextSlide, prevSlide, enableAutoPlay, startAutoPlay, stopAutoPlay, scheduleAnimationFrame])

  // Handle slide transitions
  useEffect(() => {
    if (!sliderRef.current || slides.length === 0) return
    
    const slider = sliderRef.current
    const slideWidth = slider.children[0]?.getBoundingClientRect().width || 0
    
    // Apply transform for current slide
    if (slideWidth > 0) {
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`
    }
  }, [currentSlide, slides.length])

  // Setup intersection observer for visibility-based optimizations
  useEffect(() => {
    setupIntersectionObserver()
    
    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect()
      }
    }
  }, [setupIntersectionObserver])

  // Comprehensive cleanup on unmount
  useEffect(() => {
    return () => {
      // Clear all timers
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
      
      // Cancel animation frames
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      
      // Disconnect observers
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect()
      }
    }
  }, [])

  // Error state
  if (error) {
    return (
      <div className={`parallax1-slider relative ${className}`} ref={containerRef}>
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Slider Error
            </h3>
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => {
                setError(null)
                setIsLoading(true)
                // Retry initialization
                window.location.reload()
              }}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Loading state
  if (isLoading) {
    return (
      <div className={`parallax1-slider relative ${className}`} ref={containerRef}>
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mb-4"></div>
          <p className="text-slate-600">Loading slider...</p>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`parallax1-slider relative h-screen w-full overflow-hidden bg-slate-100 ${className}`}
      style={{ fontFamily: 'Bluteau Arabic Sans' }}
    >


      {/* Error State */}
      {error && (
        <div className="absolute inset-0 bg-red-50 flex items-center justify-center z-50">
          <div className="text-center p-8">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-800 mb-2">Slider Error</h3>
            <p className="text-red-600 mb-4">{error.message}</p>
            <button 
              onClick={() => setError(null)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-50 flex items-center justify-center z-40">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-slate-600 mx-auto mb-4"></div>
            <p className="text-slate-600 text-lg">Loading slider...</p>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="text-center mb-6 md:mb-8 px-4">
        <h2 className="header-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-slate-800" style={{ fontFamily: 'Bluteau Arabic Sans' }}>
          {title}
        </h2>
        <p className="header-description text-base sm:text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto px-4">
          {description}
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {slides.length > 1 && (
        <div className="absolute top-1/2 left-2 right-2 sm:left-4 sm:right-4 z-20 flex justify-between pointer-events-none">
          <button
            onClick={prevSlide}
            className="navigation-button pointer-events-auto bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 touch-manipulation"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="navigation-button pointer-events-auto bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 touch-manipulation"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1 sm:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`slide-indicator w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 touch-manipulation ${
                index === currentSlide 
                  ? 'bg-slate-800 scale-125' 
                  : 'bg-slate-400 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slider */}
      <div 
        ref={sliderRef}
        className="slider-container flex w-full overflow-visible cursor-grab active:cursor-grabbing select-none transition-transform duration-300 ease-out"
        style={{
          paddingLeft: 'calc(50% - 40vw)',
          paddingRight: 'calc(50% - 40vw)',
          minWidth: '100vw',
        }}
      >
        {slides.map((slide, i) => (
          <div 
            key={slide.id}
            className="flex aspect-[3/4] w-[80vw] md:w-[30vw] shrink-0 items-center justify-center p-1"
          >
            <div className="relative h-full w-full p-8 border-2 border-slate-800 bg-white">
              <div
                ref={el => {
                  if (el) parallaxElementsRef.current[i] = el
                }}
                className="flex h-full w-full items-center justify-center border-2 border-slate-600 overflow-hidden bg-slate-50"
              >
                <div className="overflow-hidden w-full h-full relative">
                  {imageLoadStates[i] === 'loading' && (
                    <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600"></div>
                    </div>
                  )}
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      imageLoadStates[i] === 'loaded' ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoad(i, 'loaded')}
                    onError={(e) => {
                      handleImageLoad(i, 'error')
                      // Fallback to a placeholder if image fails to load
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#f1f5f9"/>
                          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#64748b" font-family="Arial, sans-serif" font-size="16">
                            ${slide.title}
                          </text>
                        </svg>
                      `)}`
                    }}
                    style={{
                      willChange: 'opacity, transform'
                    }}
                  />
                  {imageLoadStates[i] === 'error' && (
                    <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                      <div className="text-center text-slate-500">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <p className="text-sm">Failed to load</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <p className="text-white font-medium text-lg transform translate-y-full transition-transform duration-500 ease-out delay-100 group-[.active]:translate-y-0 group-[.active]:delay-300">
                      {i}
                    </p>
                  </div>
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

        /* Responsive improvements */
        @media (max-width: 768px) {
          .parallax1-slider .slider-container {
            padding-left: calc(50% - 45vw);
            padding-right: calc(50% - 45vw);
          }
          
          .parallax1-slider .slide-item {
            width: 90vw;
            aspect-ratio: 3/4;
          }
          
          .parallax1-slider .slide-content {
            padding: 1rem;
          }
          
          .parallax1-slider .navigation-button {
            padding: 0.5rem;
            width: 2.5rem;
            height: 2.5rem;
          }
          
          .parallax1-slider .navigation-button svg {
            width: 1rem;
            height: 1rem;
          }
        }

        @media (max-width: 480px) {
          .parallax1-slider .slider-container {
            padding-left: calc(50% - 47.5vw);
            padding-right: calc(50% - 47.5vw);
          }
          
          .parallax1-slider .slide-item {
            width: 95vw;
          }
          
          .parallax1-slider .slide-content {
            padding: 0.5rem;
          }
          
          .parallax1-slider .header-title {
            font-size: 2rem;
          }
          
          .parallax1-slider .header-description {
            font-size: 1rem;
          }
        }

        @media (min-width: 1024px) {
          .parallax1-slider .slide-item {
            width: 25vw;
          }
        }

        @media (min-width: 1280px) {
          .parallax1-slider .slide-item {
            width: 22vw;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .parallax1-slider .navigation-button {
            opacity: 0.8;
            transform: scale(1.1);
          }
          
          .parallax1-slider .slide-indicator {
            width: 1rem;
            height: 1rem;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .parallax1-slider * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Parallax1Slider