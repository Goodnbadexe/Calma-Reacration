import '@testing-library/jest-dom'

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
