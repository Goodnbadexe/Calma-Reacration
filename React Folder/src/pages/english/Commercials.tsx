import React from 'react'
import ParallaxSlider from '../../components/ParallaxSlider'
import Parallax1Slider from '../../components/Parallax1Slider'
import { 
  ParallaxText, 
  ParallaxContainer, 
  ParallaxListItem, 
  ParallaxReveal, 
  ParallaxBackground,
  ParallaxGrid 
} from '../../components/ParallaxElements'
import '../../styles/smooth-slider.css'

const commercialSlides = [
  {
    id: 'corporate-tower',
    title: 'Corporate Tower',
    subtitle: 'Business Excellence Redefined',
    description: 'A landmark commercial tower featuring state-of-the-art office spaces, premium amenities, and sustainable design that sets new standards for corporate environments and business success.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    parallaxElements: [
      { content: 'CORPORATE', speed: 0.4, position: { x: 15, y: 25 } },
      { content: 'TOWER', speed: -0.5, position: { x: 80, y: 70 } },
      { content: 'EXCELLENCE', speed: 0.6, position: { x: 10, y: 80 } }
    ]
  },
  {
    id: 'retail-plaza',
    title: 'Retail Plaza',
    subtitle: 'Premium Shopping Destination',
    description: 'An upscale retail complex designed to create memorable shopping experiences with luxury boutiques, fine dining, and entertainment venues in an architecturally stunning environment.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    parallaxElements: [
      { content: 'RETAIL', speed: 0.3, position: { x: 70, y: 30 } },
      { content: 'PLAZA', speed: -0.4, position: { x: 20, y: 60 } },
      { content: 'PREMIUM', speed: 0.7, position: { x: 85, y: 20 } }
    ]
  },
  {
    id: 'innovation-hub',
    title: 'Innovation Hub',
    subtitle: 'Future of Work Spaces',
    description: 'A cutting-edge workspace designed for the modern economy, featuring flexible layouts, collaborative zones, and technology infrastructure that empowers innovation and creativity.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    parallaxElements: [
      { content: 'INNOVATION', speed: 0.5, position: { x: 5, y: 40 } },
      { content: 'HUB', speed: -0.3, position: { x: 75, y: 25 } },
      { content: 'FUTURE', speed: 0.8, position: { x: 25, y: 75 } }
    ]
  },
  {
    id: 'mixed-use-complex',
    title: 'Mixed-Use Complex',
    subtitle: 'Integrated Urban Living',
    description: 'A sophisticated development combining commercial, residential, and recreational spaces to create a vibrant community where people live, work, and play in perfect harmony.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    parallaxElements: [
      { content: 'MIXED-USE', speed: 0.4, position: { x: 60, y: 35 } },
      { content: 'COMPLEX', speed: -0.6, position: { x: 15, y: 20 } },
      { content: 'INTEGRATED', speed: 0.5, position: { x: 80, y: 80 } }
    ]
  },
  {
    id: 'business-park',
    title: 'Business Park',
    subtitle: 'Corporate Campus Excellence',
    description: 'A prestigious business park offering world-class facilities, landscaped environments, and flexible spaces that adapt to the evolving needs of modern enterprises and their teams.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80',
    parallaxElements: [
      { content: 'BUSINESS', speed: 0.6, position: { x: 10, y: 65 } },
      { content: 'PARK', speed: -0.4, position: { x: 70, y: 40 } },
      { content: 'CAMPUS', speed: 0.3, position: { x: 30, y: 15 } }
    ]
  }
]

export default function Commercials() {
  return (
    <main className="commercials-page">
      <ParallaxSlider
        slides={commercialSlides}
        autoPlay={true}
        autoPlayDelay={6000}
        infinite={true}
        showControls={true}
        showDots={true}
        parallax={true}
        className="commercials-slider"
      />
      
      {/* Parallax1 Component - Title Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <Parallax1Slider
          title="Commercial Projects"
          description="Explore our portfolio of commercial developments and architectural achievements."
          features={["Modern Design", "Sustainable", "Innovative", "Premium"]}
          className="max-w-7xl mx-auto"
          slideCount={12}
          enableAutoPlay={true}
          autoPlayDelay={6000}
          onSlideChange={(index) => {
            console.log('Commercial slide changed to:', index)
          }}
          onError={(error) => {
            console.error('Commercial slider error:', error)
          }}
          images={[
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ]}
        />
      </section>
      
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
                Commercial Excellence
              </h2>
            </ParallaxText>
            <ParallaxReveal direction="up" delay={0.2}>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover our portfolio of exceptional commercial developments, designed to elevate 
                business environments and create lasting impressions.
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
        
        {/* Additional parallax section inspired by smooothy examples */}
        <ParallaxContainer className="mt-20" speed={0.2}>
          <div className="max-w-4xl mx-auto px-8">
            <ParallaxReveal direction="right" delay={0.3}>
              <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-12 border border-white/30">
                <h3 className="text-3xl font-light mb-6 text-slate-800" style={{ fontFamily: 'Bluteau Arabic Sans' }}>
                  Commercial Innovation Features
                </h3>
                <ul className="space-y-4">
                  <ParallaxListItem index={0} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Advanced security systems</span>
                  </ParallaxListItem>
                  <ParallaxListItem index={1} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Energy-efficient HVAC systems</span>
                  </ParallaxListItem>
                  <ParallaxListItem index={2} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Flexible workspace configurations</span>
                  </ParallaxListItem>
                  <ParallaxListItem index={3} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-700">Premium amenities and services</span>
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