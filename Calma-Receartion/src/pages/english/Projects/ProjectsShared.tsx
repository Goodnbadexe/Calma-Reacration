import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { FEATURES } from '@/config/features'
import ProjectsLayout from '@/components/pages/projects/ProjectsLayout'

export default function ProjectsShared() {
  const { t } = useLanguage()
  return <ProjectsLayout t={t} dir="ltr" features={{ projectsAdvancedNav: FEATURES.en.projectsAdvancedNav }} />
}

