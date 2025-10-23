import SmoothSlider from '../../components/SmoothSlider'
import ParallaxSlider from '../../components/ParallaxSlider'
import { 
  ParallaxText, 
  ParallaxContainer, 
  ParallaxListItem, 
  ParallaxReveal, 
  ParallaxBackground,
  ParallaxGrid 
} from '../../components/ParallaxElements'
import '../../styles/smooth-slider.css'

const residentialSlides = [
  {
    id: 'villa-serenity',
    title: 'Villa Serenity',
    subtitle: 'Luxury Waterfront Living',
    description: 'Experience unparalleled elegance in this stunning waterfront villa featuring panoramic ocean views, infinity pools, and meticulously designed interiors that blend modern sophistication with timeless comfort.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    parallaxElements: [
      { content: 'LUXURY', speed: 0.5, position: { x: 10, y: 20 } },
      { content: 'WATERFRONT', speed: -0.3, position: { x: 85, y: 15 } },
      { content: 'SERENITY', speed: 0.7, position: { x: 15, y: 80 } }
    ]
  },
  {
    id: 'penthouse-elite',
    title: 'Penthouse Elite',
    subtitle: 'Sky-High Sophistication',
    description: 'Ascend to new heights of luxury in this exclusive penthouse offering 360-degree city views, private terraces, and bespoke finishes that define contemporary urban living at its finest.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    parallaxElements: [
      { content: 'ELITE', speed: 0.4, position: { x: 20, y: 25 } },
      { content: 'PENTHOUSE', speed: -0.6, position: { x: 75, y: 70 } },
      { content: 'VIEWS', speed: 0.8, position: { x: 90, y: 30 } }
    ]
  },
  {
    id: 'garden-estate',
    title: 'Garden Estate',
    subtitle: 'Private Sanctuary',
    description: 'Retreat to your own private sanctuary where lush gardens meet architectural excellence. This estate offers expansive grounds, wellness facilities, and spaces designed for both intimate gatherings and grand celebrations.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    parallaxElements: [
      { content: 'GARDEN', speed: 0.6, position: { x: 5, y: 60 } },
      { content: 'ESTATE', speed: -0.4, position: { x: 80, y: 20 } },
      { content: 'SANCTUARY', speed: 0.5, position: { x: 25, y: 85 } }
    ]
  },
  {
    id: 'modern-minimalist',
    title: 'Modern Minimalist',
    subtitle: 'Pure Design Philosophy',
    description: 'Embrace the beauty of simplicity in this architecturally stunning home where clean lines, natural materials, and thoughtful design create spaces that inspire tranquility and focus.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
    parallaxElements: [
      { content: 'MINIMAL', speed: 0.3, position: { x: 70, y: 40 } },
      { content: 'DESIGN', speed: -0.5, position: { x: 15, y: 30 } },
      { content: 'PURE', speed: 0.7, position: { x: 85, y: 75 } }
    ]
  },
  {
    id: 'heritage-manor',
    title: 'Heritage Manor',
    subtitle: 'Timeless Elegance',
    description: 'Step into a world where classical architecture meets modern amenities. This restored manor preserves historical charm while offering contemporary luxury and comfort for the discerning homeowner.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    parallaxElements: [
      { content: 'HERITAGE', speed: 0.4, position: { x: 10, y: 70 } },
      { content: 'MANOR', speed: -0.3, position: { x: 75, y: 25 } },
      { content: 'TIMELESS', speed: 0.6, position: { x: 30, y: 15 } }
    ]
  }
]

export default function Residential() {
  return (
    <main className="residential-page">
      {/* Enhanced Parallax Slider */}
      <ParallaxSlider
        slides={residentialSlides}
        autoPlay={true}
        autoPlayDelay={6000}
        infinite={true}
        showControls={true}
        showDots={true}
        className="residential-slider"
      />
      
      {/* Parallax Background Section */}
      <ParallaxBackground
        imageUrl="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
        speed={0.3}
        className="h-96 flex items-center justify-center"
        overlay={true}
        overlayOpacity={0.6}
      >
        <ParallaxText speed={0.5} className="text-white text-6xl font-light tracking-wider">
          LUXURY LIVING
        </ParallaxText>
      </ParallaxBackground>
      
      {/* Enhanced content section with parallax elements */}
      <section className="residential-details bg-gradient-to-br from-slate-50 to-stone-100 py-20 relative overflow-hidden">
        {/* Parallax background text */}
        <ParallaxText 
          speed={-0.2} 
          className="absolute top-10 right-10 text-9xl font-bold text-slate-200/20 select-none pointer-events-none"
          style={{ fontFamily: 'Bluteau Arabic Sans' }}
        >
          RESIDENTIAL
        </ParallaxText>
        
        <ParallaxContainer className="max-w-6xl mx-auto px-8" speed={0.1}>
          <ParallaxReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-800" style={{ fontFamily: 'Bluteau Arabic Sans' }}>
                Residential Excellence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Each Calma residential property represents the pinnacle of luxury living, 
                where architectural innovation meets uncompromising quality and attention to detail.
              </p>
            </div>
          </ParallaxReveal>
          
          {/* Enhanced grid with parallax effects */}
          <ParallaxGrid columns={3} gap="2rem" staggerDelay={0.15}>
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
            <ParallaxReveal direction="left" delay={0.3}>
              <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-12 border border-white/30">
                <h3 className="text-3xl font-light mb-6 text-slate-800" style={{ fontFamily: 'Bluteau Arabic Sans' }}>
                  Experience Residential Excellence
                </h3>
                <ul className="space-y-4">
                  <ParallaxListItem index={0} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Personalized design consultations</span>
                  </ParallaxListItem>
                  <ParallaxListItem index={1} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Premium material selections</span>
                  </ParallaxListItem>
                  <ParallaxListItem index={2} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Smart home integration</span>
                  </ParallaxListItem>
                  <ParallaxListItem index={3} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Concierge services</span>
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