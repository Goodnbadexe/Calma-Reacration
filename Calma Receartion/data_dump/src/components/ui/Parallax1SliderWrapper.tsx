import React, { useEffect, useRef } from 'react'

interface Parallax1SliderWrapperProps {
  title?: string
  description?: string
  features?: string[]
  images?: string[]
  className?: string
  slideCount?: number
  enableAutoPlay?: boolean
  autoPlayDelay?: number
  onSlideChange?: (index: number) => void
  onError?: (error: string) => void
}

/**
 * React wrapper component that provides a bridge between React and Astro components
 * This allows for seamless integration while maintaining the benefits of both frameworks
 */
export const Parallax1SliderWrapper: React.FC<Parallax1SliderWrapperProps> = ({
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
  const astroComponentRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Initialize the Astro component functionality
    const initializeAstroComponent = async () => {
      try {
        if (containerRef.current) {
          // Create a custom element that mimics the Astro component behavior
          const astroElement = document.createElement('div')
          astroElement.className = `parallax1-slider-astro ${className}`
          
          // Set up the component with the provided props
          astroElement.setAttribute('data-title', title)
          astroElement.setAttribute('data-description', description)
          astroElement.setAttribute('data-features', JSON.stringify(features))
          astroElement.setAttribute('data-images', JSON.stringify(images))
          astroElement.setAttribute('data-slide-count', slideCount.toString())
          astroElement.setAttribute('data-enable-auto-play', enableAutoPlay.toString())
          astroElement.setAttribute('data-auto-play-delay', autoPlayDelay.toString())

          // Append to container
          containerRef.current.appendChild(astroElement)
          astroComponentRef.current = astroElement

          // Initialize the slider functionality
          await initializeSlider(astroElement)
        }
      } catch (error) {
        console.error('Failed to initialize Astro component:', error)
        onError?.(`Failed to initialize slider: ${error}`)
      }
    }

    initializeAstroComponent()

    return () => {
      // Cleanup
      if (astroComponentRef.current && containerRef.current) {
        containerRef.current.removeChild(astroComponentRef.current)
      }
    }
  }, [title, description, features, images, className, slideCount, enableAutoPlay, autoPlayDelay])

  const initializeSlider = async (element: HTMLElement) => {
    // Default high-quality images from local assets
    const defaultImages = [
      '/src/assets/Images/About/Asset-1.JPG',
      '/src/assets/Images/About/Asset-2.JPG',
      '/src/assets/Images/About/Asset-3.JPG',
      '/src/assets/Images/About/Asset-4.JPG',
      '/src/assets/Images/About/Asset-5.jpg',
      '/src/assets/Images/About/Asset-6.JPG',
      '/src/assets/Images/About/Asset-9.JPG',
      '/src/assets/Images/About/Asset-12.jpg',
      '/src/assets/Images/About/Asset-14.jpg',
      '/src/assets/Images/About/Hero-1.JPG',
      '/src/assets/Images/About/Hero-2.JPG',
      '/src/assets/Images/About/Commercial-BG.jpg',
      '/src/assets/Images/About/Asset-1_1.JPG',
      '/src/assets/Images/About/Asset-2_1.JPG',
      '/src/assets/Images/About/Asset-3_1.JPG',
      '/src/assets/Images/About/Asset-4_1.JPG',
      '/src/assets/Images/About/Asset-5_1.jpg',
      '/src/assets/Images/About/Asset-5_2.jpg'
    ]

    const slideImages = images.length > 0 ? images : defaultImages
    const actualSlideCount = Math.min(slideCount, slideImages.length)

    // Create the HTML structure
    element.innerHTML = `
      <div class="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <!-- Header Section -->
        <div class="text-center mb-6 md:mb-8 px-4 pt-8">
          <h2 class="header-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-slate-800" style="font-family: 'Bluteau Arabic Sans'">
            ${title}
          </h2>
          <p class="header-description text-base sm:text-lg md:text-xl text-slate-600 mb-4 max-w-2xl mx-auto px-4">
            ${description}
          </p>
        </div>

        <!-- Slider Container -->
        <div class="slider-container flex w-screen overflow-hidden cursor-grab active:cursor-grabbing select-none" 
             style="padding-left: calc(50% - 40vw); padding-right: calc(50% - 40vw);">
          ${Array.from({ length: actualSlideCount }, (_, i) => `
            <div class="slide-item flex-shrink-0 w-80 h-96 mx-4 relative overflow-hidden rounded-lg shadow-lg bg-white">
              <div class="loading-spinner absolute inset-0 flex items-center justify-center bg-slate-100">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600"></div>
              </div>
              <img 
                src="${slideImages[i % slideImages.length]}" 
                alt="Slide ${i + 1}"
                class="slide-image w-full h-full object-cover opacity-0 transition-opacity duration-300"
                loading="lazy"
                onload="this.style.opacity='1'; this.parentElement.querySelector('.loading-spinner').style.display='none';"
                onerror="this.style.display='none'; this.parentElement.querySelector('.error-placeholder').style.display='flex';"
              />
              <div class="error-placeholder absolute inset-0 flex-col items-center justify-center bg-slate-200 text-slate-500 hidden">
                <svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span class="text-sm">Failed to load image</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Navigation Controls -->
        <div class="absolute top-1/2 left-2 right-2 sm:left-4 sm:right-4 z-20 flex justify-between pointer-events-none">
          <button class="nav-prev navigation-button pointer-events-auto bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 touch-manipulation" aria-label="Previous slide">
            <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button class="nav-next navigation-button pointer-events-auto bg-white/80 hover:bg-white text-slate-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 touch-manipulation" aria-label="Next slide">
            <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Slide Indicators -->
        <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1 sm:space-x-2">
          ${Array.from({ length: actualSlideCount }, (_, i) => `
            <button class="slide-indicator w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 touch-manipulation ${i === 0 ? 'bg-slate-800 scale-125' : 'bg-slate-400 hover:bg-slate-600'}" 
                    data-slide="${i}" aria-label="Go to slide ${i + 1}"></button>
          `).join('')}
        </div>
      </div>
    `

    // Initialize slider functionality
    const slider = element.querySelector('.slider-container') as HTMLElement
    const prevBtn = element.querySelector('.nav-prev') as HTMLButtonElement
    const nextBtn = element.querySelector('.nav-next') as HTMLButtonElement
    const indicators = element.querySelectorAll('.slide-indicator') as NodeListOf<HTMLButtonElement>

    let currentSlide = 0
    let autoPlayTimer: number | null = null

    const updateSlider = () => {
      if (slider) {
        const slideWidth = 320 // 80 * 4 (w-80 + margin)
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`
        
        // Update indicators
        indicators.forEach((indicator, index) => {
          if (index === currentSlide) {
            indicator.className = indicator.className.replace('bg-slate-400', 'bg-slate-800 scale-125')
          } else {
            indicator.className = indicator.className.replace('bg-slate-800 scale-125', 'bg-slate-400')
          }
        })

        // Trigger callback
        onSlideChange?.(currentSlide)
      }
    }

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % actualSlideCount
      updateSlider()
    }

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + actualSlideCount) % actualSlideCount
      updateSlider()
    }

    const goToSlide = (index: number) => {
      currentSlide = index
      updateSlider()
    }

    const startAutoPlay = () => {
      if (enableAutoPlay && !autoPlayTimer) {
        autoPlayTimer = setInterval(nextSlide, autoPlayDelay)
      }
    }

    const stopAutoPlay = () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer)
        autoPlayTimer = null
      }
    }

    // Event listeners
    prevBtn?.addEventListener('click', prevSlide)
    nextBtn?.addEventListener('click', nextSlide)
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index))
    })

    // Auto-play functionality
    if (enableAutoPlay) {
      startAutoPlay()
      
      // Pause on hover
      element.addEventListener('mouseenter', stopAutoPlay)
      element.addEventListener('mouseleave', startAutoPlay)
    }

    // Touch/drag functionality
    let isDragging = false
    let startX = 0
    let currentX = 0

    const handleTouchStart = (e: TouchEvent | MouseEvent) => {
      isDragging = true
      startX = 'touches' in e ? e.touches[0].clientX : e.clientX
      stopAutoPlay()
    }

    const handleTouchMove = (e: TouchEvent | MouseEvent) => {
      if (!isDragging) return
      currentX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const diff = startX - currentX
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
        isDragging = false
      }
    }

    const handleTouchEnd = () => {
      isDragging = false
      if (enableAutoPlay) {
        startAutoPlay()
      }
    }

    slider?.addEventListener('touchstart', handleTouchStart)
    slider?.addEventListener('mousedown', handleTouchStart)
    slider?.addEventListener('touchmove', handleTouchMove)
    slider?.addEventListener('mousemove', handleTouchMove)
    slider?.addEventListener('touchend', handleTouchEnd)
    slider?.addEventListener('mouseup', handleTouchEnd)
    slider?.addEventListener('mouseleave', handleTouchEnd)

    // Initialize
    updateSlider()
  }

  return (
    <div 
      ref={containerRef} 
      className={`parallax1-slider-wrapper ${className}`}
      style={{ width: '100%', height: '100vh' }}
    />
  )
}

export default Parallax1SliderWrapper