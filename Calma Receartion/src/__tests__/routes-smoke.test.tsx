/**
 * Route linkage smoke test: basic routes render expected components
 */
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

import EnglishHome from '@/pages/english/Home/Home'
import About from '@/pages/english/About/About'

function TestRouter({ initialPath }: { initialPath: string }) {
  return (
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/" element={<EnglishHome />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('Basic route rendering', () => {
  it('renders Home at /', () => {
    render(<TestRouter initialPath="/" />)
    expect(screen.getByText(/Ready to Find Your Dream Home/i)).toBeInTheDocument()
  })

  it('renders About at /about', () => {
    render(<TestRouter initialPath="/about" />)
    // Check a known section header from About page
    expect(screen.getByText(/Visionary Leadership/i)).toBeInTheDocument()
  })
})