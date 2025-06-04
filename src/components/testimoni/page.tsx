import Marquee from "../marquee/page";

export default function Testimoni() {
  return (
    <div className="relative w-full h-auto bg-gradient-to-br from-purple-50 to-purple-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 leading-tight mb-6">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Discover what makes our customers happy. Read their authentic experiences and testimonials about our beautiful floral collections and exceptional service.
          </p>
        </div>
        
        {/* Marquee Component */}
        <div className="mt-8">
          <Marquee />
        </div>
      </div>
    </div>
  );
}
