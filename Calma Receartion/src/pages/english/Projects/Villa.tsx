import ParallaxSlider from '@/components/ui/ParallaxSlider'
import Parallax1Slider from '@/components/ui/Parallax1Slider'
import { resolveAssetUrl, resolveAssetUrls } from '@/utils/assetResolver'
import { ParallaxText, ParallaxContainer, ParallaxListItem, ParallaxReveal, ParallaxBackground, ParallaxGrid } from '@/components/ui/ParallaxElements'

const villaSlides = [
  {
    id: 'ys190',
    title: 'YS190 • Al Yasmin',
    subtitle: 'Distinctive Villas',
    description: 'Premium villas in Al Yasmin crafted with precision finishing and iconic facades.',
    image: '/src/assets/Images/About/Asset-1.JPG',
    parallaxElements: [
      { content: 'AL-YASMIN', speed: 0.4, position: { x: 20, y: 25 } },
      { content: 'VILLAS', speed: -0.6, position: { x: 75, y: 70 } },
      { content: 'QUALITY', speed: 0.8, position: { x: 90, y: 30 } }
    ]
  }
]

export default function Villa() {
  return (
    <main className="villa-page">
      <section className="w-full">
        <Parallax1Slider 
          title="Villa Projects"
          description="Explore CALMA's distinctive villas crafted with precision and luxury across Riyadh's prestigious districts."
          features={["Precision Finishing", "Iconic Facades", "Premium Materials"]}
          className="min-h-screen flex flex-col justify-center"
          slideCount={6}
          enableAutoPlay={true}
          autoPlayDelay={6000}
          images={resolveAssetUrls([
            '/src/assets/Images/About/Asset-1.JPG',
            '/src/assets/Images/About/Asset-2.JPG',
            '/src/assets/Images/About/Hero-1.JPG',
            '/src/assets/Images/About/Hero-2.JPG'
          ])}
        />
      </section>

      <ParallaxSlider
        slides={villaSlides.map(s => ({ ...s, image: resolveAssetUrl(s.image) }))}
        autoPlay={true}
        autoPlayDelay={6000}
        infinite={true}
        showControls={true}
        showDots={true}
        className="villa-slider"
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
                CALMA Villa Excellence
              </h2>
            </ParallaxText>
            <ParallaxReveal direction="up" delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                CALMA's villa developments combine bespoke architecture with premium materials and precision finishing across Riyadh's most sought-after neighborhoods.
              </p>
            </ParallaxReveal>
          </div>
          
          <ParallaxGrid className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.1} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Bespoke Design
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Tailored layouts with elevated craftsmanship and detail.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.15} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Prime Locations
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Strategically positioned in Riyadh's coveted districts.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.2} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Sustainable Luxury
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Energy-efficient systems and innovative technologies.
              </p>
            </div>
          </ParallaxGrid>
        </ParallaxContainer>
      </section>
    </main>
  )
}
