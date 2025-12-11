import { useMemo } from 'react'
import SmoothCarousel from '@/components/carousel/SmoothCarousel'
import ProjectCard, { type Project } from '@/components/home/ProjectCard'
import asset1Image from '@/assets/Images/About/Asset-1.JPG'
import asset2Image from '@/assets/Images/About/Asset-2.JPG'
import asset3Image from '@/assets/Images/About/Asset-3.JPG'

const slides: Project[] = [
  { id: 'ys190', title: 'YS190', subtitle: 'Delivered in Riyadh', category: 'Residential', image: asset1Image, href: '/projects/ys190', descriptor: 'Sophisticated living set in crafted balance.' },
  { id: 'gh220', title: 'GH220', subtitle: 'Landmark Development', category: 'Mixed-Use', image: asset2Image, href: '/projects/gh220', descriptor: 'Material clarity meets urban grace.' },
  { id: 'calma-tower', title: 'Calma Tower', subtitle: 'Future Icon', category: 'Tower', image: asset3Image, href: '/projects/calma-tower', descriptor: 'Elevated architecture with quiet confidence.' },
]

export default function FeaturedProjects() {
  const config = useMemo(
    () => ({
      snap: false,
      dragSpeed: 1,
      damp: 0.92,
      lerp: 0.12,
      infinite: false,
      moveByVW: 0.85,
    }),
    []
  )

  return (
    <SmoothCarousel
      items={slides}
      config={config}
      ariaLabel="Featured Projects"
      renderItem={(item, { active }) => <ProjectCard project={item} active={active} />}
    />
  )
}
