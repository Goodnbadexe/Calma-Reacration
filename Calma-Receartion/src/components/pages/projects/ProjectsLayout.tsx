import React from 'react'
import ProjectsGrid from '@/pages/english/Projects/ProjectsGrid'
import RealEstateShowcase from '@/pages/english/Projects/Projects'

type ProjectsLayoutProps = {
  t?: (key: string) => string
  dir?: 'ltr' | 'rtl'
  features?: {
    projectsAdvancedNav?: boolean
  }
}

export default function ProjectsLayout({ t, dir = 'ltr', features }: ProjectsLayoutProps) {
  const useAdvanced = !!features?.projectsAdvancedNav
  if (useAdvanced) {
    return <RealEstateShowcase />
  }
  return (
    <div className={dir === 'rtl' ? 'rtl' : 'ltr'}>
      <ProjectsGrid />
    </div>
  )
}

