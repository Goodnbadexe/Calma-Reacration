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
            '/src/assets/Images/About/Asset-1.JPG',
            '/src/assets/Images/About/Asset-2.JPG',
            '/src/assets/Images/About/Asset-3.JPG',
            '/src/assets/Images/About/Asset-4.JPG',
            '/src/assets/Images/About/Asset-5.jpg',
            '/src/assets/Images/About/Asset-6.JPG'
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