import Image from 'next/image';

export default function About() {
  return (
    <div className="relative w-full h-[90vh] bg-purple-100">
      <div className="relative z-20 flex items-center justify-center h-full ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-12">
          {/* Left Side: Grid of Images */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 pr-0 lg:pr-12 order-1 lg:order-none">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <Image src="/flower.png" alt="Flower" width={250} height={50} className="border-4 border-white m-2" />
                <Image src="/flower.png" alt="Flower" width={150} height={150} className="border-4 border-white m-2 ml-26" />
              </div>
              <div className="flex flex-col">
                <Image src="/flower.png" alt="Flower" width={150} height={150} className="border-4 border-white m-2" />
                <Image src="/flower.png" alt="Flower" width={250} height={250} className="border-4 border-white m-2" />
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 pr-0 lg:pr-12">
            <h2 className="text-5xl md:text-6xl font-bold text-purple-500 leading-tight mb-4">
              The Art of Storytelling
              <br />
              Through Arrangement.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Since 2025, we began our journey with limited resources but ambitious dreams. We take pride in crafting floral arrangements that reflect simplicity and thoughtful detail. With continuous improvements in our products and
              services, our custom bouquets are ideal for all kinds of events from celebrations and graduations and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
