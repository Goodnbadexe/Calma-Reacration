import ParallaxSlider from '@/components/ui/ParallaxSlider'
import Parallax1Slider from '@/components/ui/Parallax1Slider'
import { resolveAssetUrl, resolveAssetUrls } from '@/utils/assetResolver'
import { ParallaxText, ParallaxContainer, ParallaxListItem, ParallaxReveal, ParallaxBackground, ParallaxGrid } from '@/components/ui/ParallaxElements'
import '../../../styles/smooth-slider.css'

const officeSlides = [
  {
    id: 'one-by-calma-tower',
    title: 'One By Calma Tower',
    subtitle: 'Premium Office Complex',
    description: 'A groundbreaking commercial development strategically positioned in the prestigious Al-Yasmin District, with convenient access to King Salman Road. Features two distinctive towers with 76 premium office spaces designed to meet the evolving needs of modern businesses.',
    image: '/src/assets/Images/About/Asset-1.JPG',
    parallaxElements: [
      { content: 'ONE BY', speed: 0.4, position: { x: 15, y: 25 } },
      { content: 'CALMA', speed: -0.5, position: { x: 80, y: 70 } },
      { content: 'TOWER', speed: 0.6, position: { x: 10, y: 80 } }
    ]
  },
  {
    id: 'business-innovation-hub',
    title: 'Business Innovation Hub',
    subtitle: 'Modern Workspace',
    description: 'An innovative commercial development featuring sustainable architectural design aligned with smart city developments. Designed to foster business growth with multiple and diverse office models in prime locations.',
    image: '/src/assets/Images/About/Asset-3.JPG',
    parallaxElements: [
      { content: 'BUSINESS', speed: 0.5, position: { x: 5, y: 40 } },
      { content: 'INNOVATION', speed: -0.3, position: { x: 75, y: 25 } },
      { content: 'HUB', speed: 0.8, position: { x: 25, y: 75 } }
    ]
  },
  {
    id: 'smart-office-complex',
    title: 'Smart Office Complex',
    subtitle: 'Intelligent Workspace',
    description: 'A sophisticated development featuring smart systems for managing lighting, ventilation, and energy. Creates an integrated environment that meets modern business needs with strategic connectivity to key city destinations.',
    image: '/src/assets/Images/About/Asset-4.JPG',
    parallaxElements: [
      { content: 'SMART', speed: 0.4, position: { x: 60, y: 35 } },
      { content: 'OFFICE', speed: -0.6, position: { x: 15, y: 20 } },
      { content: 'INTELLIGENT', speed: 0.5, position: { x: 80, y: 80 } }
    ]
  },
  {
    id: 'premium-business-center',
    title: 'Premium Business Center',
    subtitle: 'Corporate Excellence',
    description: 'A cutting-edge commercial development designed with spacious layouts and modern design principles. Features prime location advantages with seamless connectivity to Riyadh\'s most iconic landmarks and vital business hubs.',
    image: '/src/assets/Images/About/Asset-5.jpg',
    parallaxElements: [
      { content: 'PREMIUM', speed: 0.6, position: { x: 10, y: 65 } },
      { content: 'BUSINESS', speed: -0.4, position: { x: 70, y: 40 } },
      { content: 'CENTER', speed: 0.3, position: { x: 30, y: 15 } }
    ]
  }
]

export default function Office() {
  return (
    <main className="office-page">
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="w-full">
          <Parallax1Slider
            title="Office Projects"
            description="Discover CALMA's exceptional office developments, strategically positioned in prestigious districts with smart building systems and sustainable design that meets modern business needs."
            features={["Prime Strategic Locations", "Smart Building Systems", "Sustainable Architectural Design", "Modern Business Facilities"]}
            className="w-full"
            slideCount={12}
            enableAutoPlay={true}
            autoPlayDelay={6000}
            images={resolveAssetUrls([
              '/src/assets/Images/About/Asset-1.JPG',
              '/src/assets/Images/About/Asset-2.JPG',
              '/src/assets/Images/About/Asset-3.JPG',
              '/src/assets/Images/About/Asset-4.JPG',
              '/src/assets/Images/About/Asset-5.jpg',
              '/src/assets/Images/About/Asset-6.JPG',
              '/src/assets/Images/About/Hero-1.JPG',
              '/src/assets/Images/About/Hero-2.JPG'
            ])}
          />
        </div>
      </section>

      <ParallaxSlider
        slides={officeSlides.map(s => ({ ...s, image: resolveAssetUrl(s.image) }))}
        autoPlay={true}
        autoPlayDelay={6000}
        infinite={true}
        showControls={true}
        showDots={true}
        className="office-slider"
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
                CALMA Commercial Excellence
              </h2>
            </ParallaxText>
            <ParallaxReveal direction="up" delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                CALMA's commercial developments represent groundbreaking innovation in business environments. 
                From One By Calma Tower in Al-Yasmin District to CALMA Tower in Al-Sahafah, we create 
                premium office spaces with smart building systems and sustainable architectural design 
                that meets the evolving needs of modern businesses in prestigious locations.
              </p>
            </ParallaxReveal>
          </div>
          
          <ParallaxGrid className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.1} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Strategic Locations
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Prime commercial real estate positioned in high-traffic business districts with 
                excellent connectivity and visibility.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.15} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Smart Infrastructure
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                State-of-the-art building systems, high-speed connectivity, and intelligent 
                automation designed for modern business needs.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.2} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Flexible Design
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Adaptable spaces that can be customized to meet diverse business requirements, 
                from corporate offices to retail environments.
              </p>
            </div>
          </ParallaxGrid>
        </ParallaxContainer>
      </section>
    </main>
  )
}
