'use client'
import testimoniData from '@/data/testimoniData.json';

interface TestimonialItem {
  name: string;
  image: string;
  jobTitle: string;
  testimonial: string;
}

const TestimonialCard = ({ item, index }: { item: TestimonialItem; index: number }) => (
  <div 
    className="flex-shrink-0 bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative"
    style={{ minWidth: '320px', maxWidth: '320px' }}
  >
    <img 
      src="/petik.png" 
      alt="Quote" 
      className="absolute top-1 left-4 w-8 h-8"
    />
    <div className="flex items-center mb-4 mt-4">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-purple-200" 
      />
      <div>
        <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
        <p className="text-xs text-purple-600 font-medium">{item.jobTitle}</p>
      </div>
    </div>
    <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
      "{item.testimonial}"
    </p>
    
  </div>
);

export default function Marquee() {
  // Create a lot of copies for seamless infinite scrolling
  const infiniteData = Array(12).fill(testimoniData).flat();
  
  return (
    <div className="overflow-hidden relative w-full">
      <div 
        className="flex gap-6"
        style={{
          width: 'max-content',
          animation: 'marquee 300s linear infinite'
        } as React.CSSProperties}
      >
        {infiniteData.map((item: TestimonialItem, index: number) => (
          <TestimonialCard key={`testimonial-${index}`} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
