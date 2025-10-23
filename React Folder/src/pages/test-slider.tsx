import React from 'react'
import Parallax1Slider from '../components/Parallax1Slider'

const TestSlider: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center py-8 text-gray-800">
        Parallax1Slider Test Page
      </h1>
      
      <div className="max-w-6xl mx-auto px-4">
        <Parallax1Slider
          title="Test Slider"
          description="This is a test page to verify the Parallax1Slider component is working correctly."
          features={["Test", "Debug", "Verify", "Working"]}
          slideCount={6}
          enableAutoPlay={true}
          autoPlayDelay={3000}
          onSlideChange={(index) => {
            console.log('Test slider changed to slide:', index)
          }}
          onError={(error) => {
            console.error('Test slider error:', error)
          }}
          images={[
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ]}
        />
      </div>
      
      <div className="text-center py-8">
        <p className="text-gray-600">
          If you can see this text and the green "Slider Active" indicator above, 
          the component is rendering correctly!
        </p>
      </div>
    </div>
  )
}

export default TestSlider