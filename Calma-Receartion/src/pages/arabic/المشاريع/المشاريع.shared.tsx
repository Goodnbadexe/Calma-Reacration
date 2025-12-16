import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { FEATURES } from '@/config/features'
import ProjectsLayout from '@/components/pages/projects/ProjectsLayout'

export default function ArabicProjectsShared() {
  const { t } = useLanguage()
  return <ProjectsLayout t={t} dir="rtl" features={{ projectsAdvancedNav: FEATURES.ar.projectsAdvancedNav }} />
}

