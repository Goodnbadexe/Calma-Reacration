/**
 * CALMA Website Utilities
 * Comprehensive utility functions for animations, DOM manipulation, and common operations
 */

import * as anime from 'animejs';

// ==================== ANIMATION UTILITIES ====================

/**
 * Creates a smooth fade-in animation with optional delay
 * @param {string|Element} target - CSS selector or DOM element
 * @param {number} duration - Animation duration in milliseconds
 * @param {number} delay - Animation delay in milliseconds
 * @param {string} easing - Animation easing function
 */
export const fadeIn = (target, duration = 800, delay = 0, easing = 'easeOutQuart') => {
  return anime.default({
    targets: target,
    opacity: [0, 1],
    translateY: [30, 0],
    duration,
    delay,
    easing
  });
};

/**
 * Creates a smooth fade-out animation
 * @param {string|Element} target - CSS selector or DOM element
 * @param {number} duration - Animation duration in milliseconds
 * @param {string} easing - Animation easing function
 */
export const fadeOut = (target, duration = 600, easing = 'easeInQuart') => {
  return anime.default({
    targets: target,
    opacity: [1, 0],
    translateY: [0, -20],
    duration,
    easing
  });
};

/**
 * Creates a staggered animation for multiple elements
 * @param {string|NodeList} targets - CSS selector or NodeList
 * @param {number} stagger - Delay between each element animation
 * @param {Object} animationProps - Animation properties
 */
export const staggerAnimation = (targets, stagger = 100, animationProps = {}) => {
  const defaultProps = {
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 800,
    easing: 'easeOutExpo'
  };
  
  return anime.default({
    targets,
    ...defaultProps,
    ...animationProps,
    delay: (el, i) => i * stagger
  });
};

/**
 * Creates a luxury hover effect with scale and shadow
 * @param {string|Element} target - CSS selector or DOM element
 */
export const luxuryHover = (target) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  
  if (!element) return;
  
  element.addEventListener('mouseenter', () => {
    anime.default({
      targets: element,
      scale: 1.05,
      boxShadow: '0 20px 60px rgba(7, 30, 31, 0.2)',
      duration: 300,
      easing: 'easeOutQuart'
    });
  });
  
  element.addEventListener('mouseleave', () => {
    anime.default({
      targets: element,
      scale: 1,
      boxShadow: '0 10px 40px rgba(7, 30, 31, 0.15)',
      duration: 300,
      easing: 'easeOutQuart'
    });
  });
};

/**
 * Creates a floating animation for decorative elements
 * @param {string|Element} target - CSS selector or DOM element
 * @param {number} amplitude - Float amplitude in pixels
 * @param {number} duration - Animation duration in milliseconds
 */
export const floatingAnimation = (target, amplitude = 20, duration = 3000) => {
  return anime.default({
    targets: target,
    translateY: [-amplitude, amplitude],
    duration,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });
};

// ==================== DOM UTILITIES ====================

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately
 */
export const debounce = (func, wait, immediate) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @param {number} threshold - Visibility threshold (0-1)
 */
export const isInViewport = (element, threshold = 0.1) => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  
  return (vertInView && horInView);
};

/**
 * Smooth scroll to element
 * @param {string|Element} target - CSS selector or DOM element
 * @param {number} offset - Offset from target in pixels
 * @param {number} duration - Scroll duration in milliseconds
 */
export const smoothScrollTo = (target, offset = 0, duration = 1000) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;
  
  const targetPosition = element.offsetTop - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  
  requestAnimationFrame(animation);
};

// ==================== UTILITY FUNCTIONS ====================

/**
 * Generate random number between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 */
export const randomBetween = (min, max) => {
  return Math.random() * (max - min) + min;
};

/**
 * Clamp number between min and max
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 */
export const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

/**
 * Linear interpolation between two values
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} factor - Interpolation factor (0-1)
 */
export const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

/**
 * Convert hex color to RGB
 * @param {string} hex - Hex color string
 */
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/**
 * Format number with commas
 * @param {number} num - Number to format
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Get CSS custom property value
 * @param {string} property - CSS custom property name
 * @param {Element} element - Element to get property from (defaults to document.documentElement)
 */
export const getCSSCustomProperty = (property, element = document.documentElement) => {
  return getComputedStyle(element).getPropertyValue(property).trim();
};

/**
 * Set CSS custom property value
 * @param {string} property - CSS custom property name
 * @param {string} value - Property value
 * @param {Element} element - Element to set property on (defaults to document.documentElement)
 */
export const setCSSCustomProperty = (property, value, element = document.documentElement) => {
  element.style.setProperty(property, value);
};

// ==================== PERFORMANCE UTILITIES ====================

/**
 * Preload images
 * @param {string[]} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    })
  );
};

/**
 * Lazy load images with intersection observer
 * @param {string} selector - CSS selector for images to lazy load
 * @param {Object} options - Intersection observer options
 */
export const lazyLoadImages = (selector = 'img[data-src]', options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  const observerOptions = { ...defaultOptions, ...options };
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  }, observerOptions);
  
  const images = document.querySelectorAll(selector);
  images.forEach(img => imageObserver.observe(img));
};

export default {
  fadeIn,
  fadeOut,
  staggerAnimation,
  luxuryHover,
  floatingAnimation,
  debounce,
  throttle,
  isInViewport,
  smoothScrollTo,
  randomBetween,
  clamp,
  lerp,
  hexToRgb,
  formatNumber,
  getCSSCustomProperty,
  setCSSCustomProperty,
  preloadImages,
  lazyLoadImages
};