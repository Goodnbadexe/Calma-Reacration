# Parallax1Slider Integration Guide

This guide explains how to use the enhanced Parallax1Slider components across different frameworks and scenarios.

## Available Components

### 1. Parallax1Slider.tsx (Enhanced React Component)
- **Location**: `src/components/Parallax1Slider.tsx`
- **Use Case**: Direct React integration with full TypeScript support
- **Features**: Complete functionality, error handling, responsive design, auto-play

### 2. Parallax1SliderAstro.astro (Astro Component)
- **Location**: `src/components/Parallax1SliderAstro.astro`
- **Use Case**: Astro pages and components, server-side rendering
- **Features**: Optimized for Astro, independent editing, performance-focused

### 3. Parallax1SliderWrapper.tsx (Bridge Component)
- **Location**: `src/components/Parallax1SliderWrapper.tsx`
- **Use Case**: React components that need Astro-like functionality
- **Features**: Combines React flexibility with Astro performance

## Usage Examples

### React Components (Commercials.tsx, Residential.tsx)

```tsx
import { Parallax1Slider } from '../components/Parallax1Slider'

// Enhanced React component with full functionality
<Parallax1Slider
  title="Commercial Projects"
  description="Explore our commercial portfolio"
  images={commercialImages}
  slideCount={12}
  enableAutoPlay={true}
  autoPlayDelay={4000}
  onSlideChange={(index) => console.log('Slide changed to:', index)}
  onError={(error) => console.error('Slider error:', error)}
  className="commercial-slider"
/>
```

### Astro Pages

```astro
---
import Parallax1SliderAstro from '../components/Parallax1SliderAstro.astro'
---

<Parallax1SliderAstro
  title="Portfolio"
  description="Our latest projects"
  images={projectImages}
  slideCount={15}
  enableAutoPlay={true}
  className="portfolio-slider"
/>
```

### React with Astro-like Performance

```tsx
import { Parallax1SliderWrapper } from '../components/Parallax1SliderWrapper'

// Bridge component for React apps needing Astro performance
<Parallax1SliderWrapper
  title="Hybrid Slider"
  description="Best of both worlds"
  images={hybridImages}
  slideCount={10}
  enableAutoPlay={false}
  onSlideChange={handleSlideChange}
  onError={handleError}
/>
```

## Props Interface

All components share the same props interface for consistency:

```typescript
interface Props {
  title?: string              // Slider title
  description?: string        // Slider description
  features?: string[]         // Feature list (legacy support)
  images?: string[]          // Custom image URLs
  className?: string         // Additional CSS classes
  slideCount?: number        // Number of slides (max 18)
  enableAutoPlay?: boolean   // Enable automatic sliding
  autoPlayDelay?: number     // Delay between auto slides (ms)
  onSlideChange?: (index: number) => void  // Slide change callback
  onError?: (error: string) => void        // Error handling callback
}
```

## Default Values

- **title**: "Parallax."
- **description**: "Weird parallax effect but kinda exemplifies why you might want it."
- **slideCount**: 18
- **enableAutoPlay**: false
- **autoPlayDelay**: 5000ms
- **images**: High-quality Unsplash architecture images

## Responsive Breakpoints

The components are fully responsive with these breakpoints:

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px
- **Extra Large**: > 1280px

## Error Handling

All components include comprehensive error handling:

- Image loading failures show placeholder with retry option
- Network errors are gracefully handled
- Invalid props are validated and corrected
- Loading states provide user feedback

## Performance Optimizations

- Lazy loading for images
- Intersection Observer for visibility
- ResizeObserver for responsive updates
- Debounced event handlers
- Memoized calculations
- Efficient DOM updates

## Accessibility Features

- ARIA labels for all interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Reduced motion support
- High contrast support

## Migration Guide

### From Original Parallax1Slider

1. Replace import:
   ```tsx
   // Old
   import { Parallax1Slider } from '../components/Parallax1Slider'
   
   // New
   import { Parallax1Slider } from '../components/Parallax1Slider'
   ```

2. Add new props:
   ```tsx
   <Parallax1Slider
     // ... existing props
     slideCount={12}
     enableAutoPlay={true}
     onSlideChange={handleSlideChange}
     onError={handleError}
   />
   ```

### To Astro Component

1. Create Astro page/component
2. Import Astro component
3. Use same props interface
4. Remove React-specific callbacks

## Best Practices

1. **Image Optimization**: Use optimized images (WebP, proper sizing)
2. **Performance**: Limit slideCount to reasonable numbers (< 20)
3. **Accessibility**: Always provide meaningful titles and descriptions
4. **Error Handling**: Implement onError callbacks for production
5. **Testing**: Test across different devices and browsers
6. **Loading States**: Handle loading states gracefully

## Troubleshooting

### Common Issues

1. **Images not loading**: Check image URLs and CORS policies
2. **Performance issues**: Reduce slideCount or optimize images
3. **Touch not working**: Ensure touch-action CSS is not blocking
4. **Auto-play not stopping**: Check event listeners for hover/focus

### Debug Mode

Enable debug logging by setting:
```javascript
window.PARALLAX_DEBUG = true
```

## Support

For issues or questions:
1. Check the console for error messages
2. Verify props are correctly typed
3. Test with default images first
4. Check responsive behavior across devices