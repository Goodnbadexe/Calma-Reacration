import ParallaxSlider from '@/components/ui/ParallaxSlider'
import Parallax1Slider from '@/components/ui/Parallax1Slider'
import { resolveAssetUrl, resolveAssetUrls } from '@/utils/assetResolver'
import { ParallaxText, ParallaxContainer, ParallaxListItem, ParallaxReveal, ParallaxBackground, ParallaxGrid } from '@/components/ui/ParallaxElements'

const floorSlides = [
  {
    id: 'ys200',
    title: 'YS200 • Al Yasmin',
    subtitle: 'Optimized Floor Plans',
    description: 'Thoughtfully optimized floor plans delivering efficient layouts and premium finishing.',
    image: '/src/assets/Images/About/Asset-2.JPG',
    parallaxElements: [
      { content: 'AL-YASMIN', speed: 0.4, position: { x: 20, y: 25 } },
      { content: 'FLOOR', speed: -0.6, position: { x: 75, y: 70 } },
      { content: 'OPTIMIZED', speed: 0.8, position: { x: 90, y: 30 } }
    ]
  }
]

export default function Floor() {
  return (
    <main className="floor-page">
      <section className="w-full">
        <Parallax1Slider 
          title="Floor Plans"
          description="Discover CALMA floor plan projects with optimized layouts and premium finishing across Riyadh's signature developments."
          features={["Optimized Layouts", "Premium Finishing", "Efficient Space Design"]}
          className="min-h-screen flex flex-col justify-center"
          slideCount={6}
          enableAutoPlay={true}
          autoPlayDelay={6000}
          images={resolveAssetUrls([
            '/src/assets/Images/About/Asset-2.JPG',
            '/src/assets/Images/About/Asset-3.JPG',
            '/src/assets/Images/About/Hero-1.JPG',
            '/src/assets/Images/About/Hero-2.JPG'
          ])}
        />
      </section>

      <ParallaxSlider
        slides={floorSlides.map(s => ({ ...s, image: resolveAssetUrl(s.image) }))}
        autoPlay={true}
        autoPlayDelay={6000}
        infinite={true}
        showControls={true}
        showDots={true}
        className="floor-slider"
      />

      <section className="py-20 relative overflow-hidden">
        <ParallaxBackground 
          speed={0.5} 
          className="bg-gradient-to-br from-slate-50 via-white to-slate-100"
        >
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}></div>
        </ParallaxBackground>
        
        <ParallaxContainer className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <ParallaxText speed={0.3} className="block mb-6">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800" style={{ fontFamily: 'Bluteau Arabic Sans' }}>
                CALMA Floor Plan Excellence
              </h2>
            </ParallaxText>
            <ParallaxReveal direction="up" delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                Efficient space design, premium materials, and modern functionality define CALMA's floor plan projects across the Kingdom.
              </p>
            </ParallaxReveal>
          </div>
          
          <ParallaxGrid className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.1} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Efficient Design
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Optimized layouts balancing comfort, utility, and style.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.15} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Premium Finish
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                High-quality materials and meticulous craftsmanship.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.2} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Modern Functionality
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Smart integrations that enhance everyday living.
              </p>
            </div>
          </ParallaxGrid>
        </ParallaxContainer>
      </section>
    </main>
  )
}
