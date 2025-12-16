import ParallaxSlider from '@/components/ui/ParallaxSlider'
import Parallax1Slider from '@/components/ui/Parallax1Slider'
import { resolveAssetUrl, resolveAssetUrls } from '@/utils/assetResolver'
import { ParallaxText, ParallaxContainer, ParallaxListItem, ParallaxReveal, ParallaxBackground, ParallaxGrid } from '@/components/ui/ParallaxElements'
import '../../../styles/smooth-slider.css'

const townhouseSlides = [
  {
    id: 'gh220',
    title: 'GH220 • Al Ghadir',
    subtitle: 'Town House & Floors',
    description: 'Distinct town house living in Al-Ghadir with thoughtful layouts and premium finishing across diverse unit types.',
    image: '/src/assets/Images/About/Asset-2_1.JPG',
    parallaxElements: [
      { content: 'AL-GHADIR', speed: 0.4, position: { x: 20, y: 25 } },
      { content: 'TOWNHOUSE', speed: -0.6, position: { x: 75, y: 70 } },
      { content: 'QUALITY', speed: 0.8, position: { x: 90, y: 30 } }
    ]
  }
]

export default function TownHouse() {
  return (
    <main className="townhouse-page">
      <section className="w-full">
        <Parallax1Slider 
          title="Town House Projects"
          description="Explore CALMA's town house developments across Riyadh's prestigious districts, featuring superior construction quality and thoughtful design."
          features={["Superior Construction Quality", "Precise Finishing Standards", "Beautiful Building Fronts"]}
          className="min-h-screen flex flex-col justify-center"
          slideCount={6}
          enableAutoPlay={true}
          autoPlayDelay={6000}
          images={resolveAssetUrls([
            '/src/assets/Images/About/Asset-1_1.JPG',
            '/src/assets/Images/About/Asset-2_1.JPG',
            '/src/assets/Images/About/Asset-3_1.JPG',
            '/src/assets/Images/About/Hero-1.JPG',
            '/src/assets/Images/About/Hero-2.JPG'
          ])}
        />
      </section>

      <ParallaxSlider
        slides={townhouseSlides.map(s => ({ ...s, image: resolveAssetUrl(s.image) }))}
        autoPlay={true}
        autoPlayDelay={6000}
        infinite={true}
        showControls={true}
        showDots={true}
        className="townhouse-slider"
      />

      {/* Additional content section with parallax elements */}
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
                CALMA Town House Excellence
              </h2>
            </ParallaxText>
            <ParallaxReveal direction="up" delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                CALMA's town house developments blend bespoke design with prime locations. 
                Thoughtful layouts, premium finishing, and sustainable touches deliver elevated living across Riyadh's most coveted districts.
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
                Custom finishes and personalized touches reflecting modern Saudi living.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.15} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Prime Locations
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Strategically positioned in the most coveted neighborhoods.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.2} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Sustainable Luxury
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Energy-efficient systems, sustainable materials, and innovative technology.
              </p>
            </div>
          </ParallaxGrid>
        </ParallaxContainer>
      </section>
    </main>
  )
}

