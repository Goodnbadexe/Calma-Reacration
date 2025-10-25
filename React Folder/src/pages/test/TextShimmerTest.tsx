import { TextShimmer } from '@/components/ui/text-shimmer';
import { TextShimmerBasic } from '@/components/TextShimmerBasic';

export default function TextShimmerTest() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">TextShimmer Component Test</h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Basic Example</h2>
            <TextShimmerBasic />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Custom Duration (3s)</h2>
            <TextShimmer className="text-lg font-bold text-blue-600" duration={3}>
              Loading your amazing content...
            </TextShimmer>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Large Text</h2>
            <TextShimmer className="text-2xl font-bold text-purple-600" duration={2}>
              Welcome to Calma Real Estate
            </TextShimmer>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Fast Animation (0.5s)</h2>
            <TextShimmer className="text-sm text-green-600" duration={0.5}>
              Quick shimmer effect
            </TextShimmer>
          </div>
        </div>
      </div>
    </div>
  );
}