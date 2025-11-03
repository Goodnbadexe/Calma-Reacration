/**
 * Smoke test: English Home page renders without crashing
 */
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EnglishHome from '@/pages/english/Home/Home'

describe('EnglishHome page', () => {
  it('renders hero content', () => {
    render(
      <MemoryRouter>
        <EnglishHome />
      </MemoryRouter>
    )
    // Assert a known text appears on the page (kept generic)
    // This text is present in the CTA section
    expect(screen.getByText(/Ready to Find Your Dream Home/i)).toBeInTheDocument()
  })
})