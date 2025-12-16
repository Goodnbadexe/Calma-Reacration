import '@testing-library/jest-dom'
import { vi } from 'vitest'

class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-ignore
global.IntersectionObserver = MockIntersectionObserver as any

// Minimal localStorage mock for tests
const storage: Record<string, string> = {}
// @ts-ignore
global.localStorage = {
  getItem: (key: string) => (key in storage ? storage[key] : null),
  setItem: (key: string, value: string) => { storage[key] = value },
  removeItem: (key: string) => { delete storage[key] },
  clear: () => { Object.keys(storage).forEach((k) => delete storage[k]) }
} as any

class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
// @ts-ignore
global.ResizeObserver = MockResizeObserver as any

// Mock modules that are not available in test environment
vi.mock('embla-carousel-react', () => {
  return {
    default: () => [null, {}]
  }
})
