// Vitest setup file
// - Extends Jest DOM matchers for Testing Library
// - Configures any global test utilities

import '@testing-library/jest-dom'

// If needed, add global mocks here (e.g., window.matchMedia)
// Example:
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})

// Basic IntersectionObserver mock for framer-motion
class MockIntersectionObserver {
  constructor(_callback: any, _options?: any) {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
(window as any).IntersectionObserver = MockIntersectionObserver as any

// requestAnimationFrame polyfill using setTimeout
if (typeof window.requestAnimationFrame === 'undefined') {
  (window as any).requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(() => cb(Date.now()), 16)
  ;(window as any).cancelAnimationFrame = (id: any) => clearTimeout(id)
}