import ParallaxSlider from '@/components/ui/ParallaxSlider'
import Parallax1Slider from '@/components/ui/Parallax1Slider'
import { resolveAssetUrl, resolveAssetUrls } from '@/utils/assetResolver'
import { 
  ParallaxText, 
  ParallaxContainer, 
  ParallaxListItem, 
  ParallaxReveal, 
  ParallaxBackground,
  ParallaxGrid 
} from '@/components/ui/ParallaxElements'
import '../../../styles/smooth-slider.css'

const residentialSlides = [
  {
    id: 'calma-nr100',
    title: 'CALMA NR100',
    subtitle: 'Premier Residential Landmark',
    description: 'CALMA NR100 stands as a premier residential landmark in the coveted Al-Narjs District, strategically positioned near the easily accessible King Salman Road. This expansive development encompasses 112 residential units that exemplify superior construction quality, precise finishing, and beautiful building fronts.',
    image: '/src/assets/Images/About/Asset-1_1.JPG',
    parallaxElements: [
      { content: 'PREMIER', speed: 0.5, position: { x: 10, y: 20 } },
      { content: 'AL-NARJS', speed: -0.3, position: { x: 85, y: 15 } },
      { content: 'LANDMARK', speed: 0.7, position: { x: 15, y: 80 } }
    ]
  },
  {
    id: 'calma-rm110',
    title: 'CALMA RM110',
    subtitle: 'Exceptional Residential Experience',
    description: 'CALMA RM110 offers an exceptional residential experience in the Al-Rimal District, conveniently located near the accessible Thumama Road. This thoughtfully designed development features 80 residential units that showcase superior construction quality, precise finishing, and beautiful building fronts.',
    image: '/src/assets/Images/About/Asset-2_1.JPG',
    parallaxElements: [
      { content: 'EXCEPTIONAL', speed: 0.4, position: { x: 20, y: 25 } },
      { content: 'AL-RIMAL', speed: -0.6, position: { x: 75, y: 70 } },
      { content: 'QUALITY', speed: 0.8, position: { x: 90, y: 30 } }
    ]
  },
  {
    id: 'calma-jn130',
    title: 'CALMA JN130',
    subtitle: 'Serene Home Living',
    description: 'CALMA JN130 offers an exceptional residential experience in the strategically positioned Al-Janadriyah District, featuring 78 thoughtfully designed residential units that exemplify superior construction quality and precise finishing. This distinguished development showcases beautiful building fronts and has been meticulously crafted to serve as your destination for serene home living.',
    image: '/src/assets/Images/About/Asset-3_1.JPG',
    parallaxElements: [
      { content: 'SERENE', speed: 0.6, position: { x: 5, y: 60 } },
      { content: 'JANADRIYAH', speed: -0.4, position: { x: 80, y: 20 } },
      { content: 'DISTINGUISHED', speed: 0.5, position: { x: 25, y: 85 } }
    ]
  },
  {
    id: 'calma-rm140',
    title: 'CALMA RM140',
    subtitle: 'Elegant Living Experience',
    description: 'CALMA RM140 provides an elegant residential experience in the heart of Al-Rimal District, featuring 30 carefully designed residential units that offer the highest standards of quality and precision in finishing. The project features elegant architectural facades and provides residents with a peaceful environment that exudes sophistication and exceeds expectations.',
    image: '/src/assets/Images/About/Asset-4_1.JPG',
    parallaxElements: [
      { content: 'ELEGANT', speed: 0.3, position: { x: 70, y: 40 } },
      { content: 'SOPHISTICATED', speed: -0.5, position: { x: 15, y: 30 } },
      { content: 'PEACEFUL', speed: 0.7, position: { x: 85, y: 75 } }
    ]
  },
  {
    id: 'calma-nr150',
    title: 'CALMA NR150',
    subtitle: 'Unique Residential Development',
    description: 'CALMA NR150 stands as a unique residential development in the prestigious Al-Narjs District, strategically positioned near easily accessible points to Abu Bakr Al Siddiq Road and King Salman Road. This distinctive project features 12 villas comprising 36 residential units, all distinguished by superior construction quality, precise finishing, and beautiful building fronts.',
    image: '/src/assets/Images/About/Asset-5_1.jpg',
    parallaxElements: [
      { content: 'UNIQUE', speed: 0.4, position: { x: 10, y: 70 } },
      { content: 'VILLAS', speed: -0.3, position: { x: 75, y: 25 } },
      { content: 'PRESTIGIOUS', speed: 0.6, position: { x: 30, y: 15 } }
    ]
  },
  {
    id: 'calma-nr160',
    title: 'CALMA NR160',
    subtitle: 'Luxury Residential Complex',
    description: 'CALMA NR160 represents the pinnacle of luxury residential living in Al-Narjs District. This exclusive development features premium finishes, state-of-the-art amenities, and architectural excellence that sets new standards for sophisticated urban living.',
    image: '/src/assets/Images/About/Asset-5_2.jpg',
    parallaxElements: [
      { content: 'LUXURY', speed: 0.5, position: { x: 20, y: 30 } },
      { content: 'PINNACLE', speed: -0.4, position: { x: 80, y: 60 } },
      { content: 'EXCELLENCE', speed: 0.6, position: { x: 40, y: 85 } }
    ]
  }
]

export default function Residential() {
  return (
    <main className="residential-page">
      {/* Parallax1 Component - Title Section */}
      <section className="w-full">
        <Parallax1Slider 
          title="Residential Projects"
          description="Discover CALMA's exceptional residential developments across prestigious districts in Riyadh, featuring superior construction quality and thoughtful design."
          features={["Superior Construction Quality", "Precise Finishing Standards", "Beautiful Building Fronts", "Strategic District Locations", "Accessible Road Networks", "Thoughtfully Designed Units"]}
          className="min-h-screen flex flex-col justify-center"
          slideCount={12}
          enableAutoPlay={true}
          autoPlayDelay={6000}
          onSlideChange={(index: number) => {
            console.log('Residential slide changed to:', index)
          }}
          onError={(error: Error) => {
            console.error('Residential slider error:', error)
          }}
          images={resolveAssetUrls([
            '/src/assets/Images/About/Asset-1_1.JPG',
            '/src/assets/Images/About/Asset-2_1.JPG',
            '/src/assets/Images/About/Asset-3_1.JPG',
            '/src/assets/Images/About/Asset-4_1.JPG',
            '/src/assets/Images/About/Asset-5_1.jpg',
            '/src/assets/Images/About/Asset-5_2.jpg',
            '/src/assets/Images/About/Asset-2_2.JPG',
            '/src/assets/Images/About/Asset-2_3.JPG',
            '/src/assets/Images/About/Asset-3_2.JPG',
            '/src/assets/Images/About/Asset-5_3.JPG',
            '/src/assets/Images/About/Hero-1.JPG',
            '/src/assets/Images/About/Hero-2.JPG'
          ])}
        />
      </section>
      
      {/* Enhanced Parallax Slider */}
      <ParallaxSlider
        slides={residentialSlides.map(s => ({ ...s, image: resolveAssetUrl(s.image) }))}
        autoPlay={true}
        autoPlayDelay={6000}
        infinite={true}
        showControls={true}
        showDots={true}
        className="residential-slider"
      />
      

      
      {/* Additional content section with parallax elements */}
      <section className="py-20 relative overflow-hidden">
        <ParallaxBackground 
          speed={0.5} 
          className="bg-gradient-to-br from-slate-50 via-white to-slate-100"
        >
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </ParallaxBackground>
        
        <ParallaxContainer className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-16">
            <ParallaxText speed={0.3} className="block mb-6">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800" style={{ fontFamily: 'Bluteau Arabic Sans' }}>
                CALMA Residential Excellence
              </h2>
            </ParallaxText>
            <ParallaxReveal direction="up" delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                CALMA's residential developments represent the pinnacle of quality construction across Riyadh's most prestigious districts. Each project showcases superior construction standards, precise finishing, and beautiful architectural fronts, creating homes that serve as landmarks of excellence in their respective neighborhoods.
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
                Every residence is meticulously crafted with custom finishes and personalized touches 
                that reflect your unique lifestyle and preferences.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.15} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Prime Locations
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Strategically positioned in the most coveted neighborhoods, offering proximity to 
                cultural landmarks, fine dining, and exclusive amenities.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all duration-500 group">
              <ParallaxText speed={0.2} className="block mb-4">
                <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  Sustainable Luxury
                </h3>
              </ParallaxText>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                Environmentally conscious design featuring energy-efficient systems, sustainable materials, 
                and innovative technologies that reduce environmental impact.
              </p>
            </div>
          </ParallaxGrid>
        </ParallaxContainer>
        
        {/* Additional parallax section inspired by smooothy examples */}
        <ParallaxContainer className="mt-20" speed={0.2}>
          <div className="max-w-4xl mx-auto px-8">
            <ParallaxReveal direction="right" delay={0.3}>
              <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-12 border border-white/30">
                <h3 className="text-3xl font-light mb-6 text-slate-800" style={{ fontFamily: 'Bluteau Arabic Sans' }}>
                  CALMA Residential Development Features
                </h3>
                <ul className="space-y-4">
                  <ParallaxListItem index={0} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Strategic district locations in Al-Narjs, Al-Rimal, and Al-Janadriyah</span>
                  </ParallaxListItem>
                  <ParallaxListItem index={1} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Superior construction quality and durability standards</span>
                  </ParallaxListItem>
                  <ParallaxListItem index={2} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Precise finishing and meticulous attention to detail</span>
                  </ParallaxListItem>
                  <ParallaxListItem index={3} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Beautiful architectural facades and building fronts</span>
                  </ParallaxListItem>
                </ul>
              </div>
            </ParallaxReveal>
          </div>
        </ParallaxContainer>
      </section>
    </main>
  )
}