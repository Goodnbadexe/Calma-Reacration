/**
 * React Hook for Telemetry Tracking
 * Supreme Design System - Analytics Integration
 */

import React, { useCallback, useRef } from 'react';

interface TelemetryHookOptions {
  componentName?: string;
  trackClicks?: boolean;
  trackHovers?: boolean;
  trackFormInteractions?: boolean;
  trackPerformance?: boolean;
}

export const useTelemetryTracking = (options: TelemetryHookOptions = {}) => {
  const {
    componentName = 'unknown',
    trackClicks = true,
    trackHovers = false
  } = options;

  // Refs for tracking
  const componentRef = useRef<HTMLDivElement>(null);

  // Click tracking
  const trackClick = useCallback((event: React.MouseEvent<HTMLElement>, customData: any = {}) => {
    if (trackClicks) {
      console.log('Click tracked:', {
        component: componentName,
        element: (event.target as HTMLElement).tagName.toLowerCase(),
        timestamp: new Date().toISOString(),
        ...customData
      });
    }
  }, [trackClicks, componentName]);

  // Hover tracking
  const trackHover = useCallback((event: React.MouseEvent<HTMLElement>, data: any = {}) => {
    if (trackHovers) {
      console.log('Hover tracked:', {
        component: componentName,
        element: (event.target as HTMLElement).tagName.toLowerCase(),
        timestamp: new Date().toISOString(),
        ...data
      });
    }
  }, [trackHovers, componentName]);

  // Return tracking utilities and event handlers
  return {
    // Ref for component tracking
    componentRef,
    
    // Event handlers
    trackClick,
    trackHover,
    
    // Simple event handlers for direct use
    onClick: trackClick,
    onMouseEnter: trackHover,
    onMouseLeave: () => {},
    
    // Utility functions
    isTrackingEnabled: true
  };
};

// Higher-order component for automatic telemetry tracking
export const withTelemetry = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: TelemetryHookOptions = {}
) => {
  const TelemetryWrappedComponent = (props: P) => {
    const {
      componentRef,
      onClick,
      onMouseEnter,
      onMouseLeave
    } = useTelemetryTracking({
      componentName: WrappedComponent.displayName || WrappedComponent.name,
      ...options
    });

    return (
      <div
        ref={componentRef}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

  TelemetryWrappedComponent.displayName = `withTelemetry(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return TelemetryWrappedComponent;
};

export default useTelemetryTracking;