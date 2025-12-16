export type FeatureFlags = {
  aboutImproved: boolean
  projectsAdvancedNav: boolean
}

export const FEATURES: Record<'en' | 'ar', FeatureFlags> = {
  en: {
    aboutImproved: true,
    projectsAdvancedNav: true,
  },
  ar: {
    aboutImproved: false,
    projectsAdvancedNav: false,
  },
}

