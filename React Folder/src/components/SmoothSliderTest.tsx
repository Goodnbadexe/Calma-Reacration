import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SlideData {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  parallaxElements?: Array<{
    id: string
    content: string
    x: number
    y: number
    scale?: number
    rotation?: number
  }>
}

interface SmoothSliderTestProps {
  slides: SlideData[]
  infinite?: boolean
  autoPlay?: boolean
  autoPlayDelay?: number
}

export const SmoothSliderTest: React.FC<SmoothSliderTestProps> = ({
  slides,
  infinite = true,
  autoPlay = false,
  autoPlayDelay = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  // Motion values
  const x = useMotionValue(0)
  const progress = useTransform(x, [-100 * slides.length, 0], [0, 100])
  
  const goToNext = () => {
    if (infinite) {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1))
    }
  }
  
  const goToPrev = () => {
    if (infinite) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }
  }
  
  // Update x position when currentIndex changes
  useEffect(() => {
    x.set(-currentIndex * 100)
  }, [currentIndex, x])
  
  // Auto-play
  useEffect(() => {
    if (!autoPlay || !isVisible) return
    
    const interval = setInterval(goToNext, autoPlayDelay)
    return () => clearInterval(interval)
  }, [autoPlay, autoPlayDelay, isVisible])
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Main slider container */}
      <motion.div
        className="flex h-full"
        style={{ x }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative flex-shrink-0 w-full h-full"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Content overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-8">
                <h1 className="text-6xl font-bold mb-4">{slide.title}</h1>
                <h2 className="text-2xl mb-6 opacity-80">{slide.subtitle}</h2>
                <p className="text-lg opacity-70">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Navigation */}
      <button
        onClick={goToPrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      
      {/* Progress bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          style={{ scaleX: progress }}
          transformOrigin="left"
        />
      </div>
      
      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}