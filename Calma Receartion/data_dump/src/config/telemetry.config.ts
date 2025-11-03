/**
 * Telemetry Configuration
 * Supreme Design System - Universal Edition
 * 
 * Centralized configuration for user interaction tracking,
 * performance monitoring, and analytics collection.
 */

export interface TelemetryConfig {
  enabled: boolean;
  endpoint: string;
  batchSize: number;
  flushInterval: number;
  sessionTimeout: number;
  enablePerformanceTracking: boolean;
  enableErrorTracking: boolean;
  enableUserJourneyTracking: boolean;
  enableHeatmapData: boolean;
  enableA11yTracking: boolean;
  privacyMode: 'strict' | 'balanced' | 'full';
  excludeSelectors: string[];
  includeUserAgent: boolean;
  includeViewportData: boolean;
  enableDebugMode: boolean;
}

export const telemetryConfig: TelemetryConfig = {
  // Core settings
  enabled: process.env.NODE_ENV === 'production',
  endpoint: process.env.REACT_APP_TELEMETRY_ENDPOINT || '/api/telemetry',
  batchSize: 10,
  flushInterval: 5000, // 5 seconds
  sessionTimeout: 30 * 60 * 1000, // 30 minutes

  // Feature flags
  enablePerformanceTracking: true,
  enableErrorTracking: true,
  enableUserJourneyTracking: true,
  enableHeatmapData: true,
  enableA11yTracking: true,

  // Privacy settings
  privacyMode: 'balanced', // Respects user preferences
  includeUserAgent: false, // GDPR compliance
  includeViewportData: true,

  // Filtering
  excludeSelectors: [
    '[data-telemetry-exclude]',
    '.telemetry-exclude',
    'input[type="password"]',
    '[data-sensitive]'
  ],

  // Development
  enableDebugMode: process.env.NODE_ENV === 'development'
};

/**
 * Event priority levels for telemetry data
 */
export enum TelemetryPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

/**
 * Predefined event categories for consistent tracking
 */
export const EventCategories = {
  NAVIGATION: 'navigation',
  INTERACTION: 'interaction',
  PERFORMANCE: 'performance',
  ERROR: 'error',
  CONVERSION: 'conversion',
  ACCESSIBILITY: 'accessibility',
  ENGAGEMENT: 'engagement',
  FORM: 'form',
  MEDIA: 'media',
  SEARCH: 'search'
} as const;

/**
 * Common event actions for standardized tracking
 */
export const EventActions = {
  CLICK: 'click',
  HOVER: 'hover',
  SCROLL: 'scroll',
  VIEW: 'view',
  SUBMIT: 'submit',
  FOCUS: 'focus',
  BLUR: 'blur',
  LOAD: 'load',
  ERROR: 'error',
  COMPLETE: 'complete'
} as const;

/**
 * Performance thresholds for monitoring
 */
export const PerformanceThresholds = {
  FIRST_CONTENTFUL_PAINT: 1800, // ms
  LARGEST_CONTENTFUL_PAINT: 2500, // ms
  FIRST_INPUT_DELAY: 100, // ms
  CUMULATIVE_LAYOUT_SHIFT: 0.1, // score
  TIME_TO_INTERACTIVE: 3800, // ms
  TOTAL_BLOCKING_TIME: 200 // ms
};

/**
 * Accessibility tracking configuration
 */
export const A11yTrackingConfig = {
  trackKeyboardNavigation: true,
  trackScreenReaderUsage: true,
  trackFocusManagement: true,
  trackColorContrastIssues: true,
  trackARIAUsage: true,
  trackTabOrder: true
};

/**
 * GDPR and privacy compliance settings
 */
export const PrivacyConfig = {
  respectDoNotTrack: true,
  respectReducedMotion: true,
  anonymizeIPs: true,
  enableConsentManagement: true,
  dataRetentionDays: 90,
  enableDataExport: true,
  enableDataDeletion: true
};

export default telemetryConfig;