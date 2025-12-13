export type ProjectSlug = 'villa' | 'floor' | 'townhouse' | 'office'

export type ProjectFeature = {
  icon: string
  title: string
  description: string
}

export type Project = {
  slug: ProjectSlug
  title: string
  subtitle: string
  description: string
  heroImage: string
  gallery: string[]
  features: ProjectFeature[]
  highlights: string[]
  ctaText: string
}

export const projects: Record<ProjectSlug, Project> = {
  villa: {
    slug: 'villa',
    title: 'Signature Villas',
    subtitle: 'Crafted luxury living',
    description:
      'Besoke villa residences with precision finishes, timeless facades and elevated spatial flow across prime Riyadh districts.',
    heroImage: '/src/assets/Images/About/Hero-1.JPG',
    gallery: [
      '/src/assets/Images/About/Asset-1.JPG',
      '/src/assets/Images/About/Asset-2.JPG',
      '/src/assets/Images/About/Hero-2.JPG',
      '/src/assets/Images/About/Asset-3.JPG'
    ],
    features: [
      { icon: '/src/assets/Icons/Asset-12-1.svg', title: 'Precision Craft', description: 'Detail‑led workmanship in every surface.' },
      { icon: '/src/assets/Icons/Vector-2.png', title: 'Prime Districts', description: 'Locations selected for lifestyle and value.' },
      { icon: '/src/assets/Icons/Vector-3.png', title: 'Sustainable Comfort', description: 'Efficient systems with enduring materials.' }
    ],
    highlights: [
      'Grand entries with layered light',
      'Flexible living cores',
      'Facade articulation with premium materials'
    ],
    ctaText: 'Request villa details'
  },
  floor: {
    slug: 'floor',
    title: 'Modern Floor Homes',
    subtitle: 'Efficient, elegant living',
    description:
      'Smartly planned floor apartments with generous daylight, refined finishes and elegant circulation.',
    heroImage: '/src/assets/Images/About/Asset-14.jpg',
    gallery: [
      '/src/assets/Images/About/Asset-14_2.jpg',
      '/src/assets/Images/About/Asset-14_3.jpg',
      '/src/assets/Images/About/Asset-5.jpg'
    ],
    features: [
      { icon: '/src/assets/Icons/Vector.png', title: 'Optimized Plans', description: 'Efficient layouts with clear zoning.' },
      { icon: '/src/assets/Icons/Rectangle-34.png', title: 'Refined Finishes', description: 'Materials that age gracefully.' },
      { icon: '/src/assets/Icons/Rectangle-35.png', title: 'Comfort Systems', description: 'Acoustic and thermal calm.' }
    ],
    highlights: [
      'Balanced proportions',
      'Daylight‑first planning',
      'Durable specification '
    ],
    ctaText: 'Request floor homes brochure'
  },
  townhouse: {
    slug: 'townhouse',
    title: 'Townhouse Collection',
    subtitle: 'Connected, elevated living',
    description:
      'Well‑scaled townhouses blending privacy and connection with layered outdoor rooms and crafted facades.',
    heroImage: '/src/assets/Images/About/Asset-2.JPG',
    gallery: [
      '/src/assets/Images/About/Asset-3.JPG',
      '/src/assets/Images/About/Asset-2_2.JPG',
      '/src/assets/Images/About/Asset-2_3.JPG'
    ],
    features: [
      { icon: '/src/assets/Icons/Rectangle-36.png', title: 'Layered Outdoor', description: 'Courts and terraces for climate and privacy.' },
      { icon: '/src/assets/Icons/Rectangle-33.png', title: 'Facade Rhythm', description: 'Timeless composition and detail.' },
      { icon: '/src/assets/Icons/Asset-12-2.png', title: 'Adaptable Plans', description: 'Family‑friendly modular cores.' }
    ],
    highlights: [
      'Dual‑aspect living areas',
      'Intuitive circulation',
      'Material palette for longevity'
    ],
    ctaText: 'Explore townhouse availability'
  },
  office: {
    slug: 'office',
    title: 'Office Spaces',
    subtitle: 'Designed for focus and flow',
    description:
      'Elegant office environments with clear navigation, acoustic calm and flexible collaboration zones.',
    heroImage: '/src/assets/Images/Home/CTA.JPG',
    gallery: [
      '/src/assets/Images/About/CTA.JPG',
      '/src/assets/Images/About/CTA_1.JPG',
      '/src/assets/Images/About/Asset-5_1.jpg'
    ],
    features: [
      { icon: '/src/assets/Icons/Masterful-precision-in-everything-we-do..png', title: 'Acoustic Comfort', description: 'Quiet cores with smart materials.' },
      { icon: '/src/assets/Icons/Asset-12-3.png', title: 'Flexible Modules', description: 'Spaces that adapt to teams.' },
      { icon: '/src/assets/Icons/Exceptional-experiences-lasting-relationships..png', title: 'Wayfinding Clarity', description: 'Intuitive movement through space.' }
    ],
    highlights: [
      'Natural light prioritized',
      'High‑quality finishes',
      'Clear signage and flow'
    ],
    ctaText: 'Get office leasing details'
  }
}

export function getProject(slug: string) {
  const s = slug as ProjectSlug
  return projects[s]
}

