import Image from 'next/image';
import Link from 'next/link';
import { Poly } from 'next/font/google'; // Import font Poly
import { ChevronRight } from 'lucide-react';
// Import ikon ArrowRight dari lucid-react

// Konfigurasi font Poly (Pastikan sama dengan di layout.tsx)
const poly = Poly({
  weight: ['400'],
  style: ['normal'],
  variable: '--font-poly',
  subsets: ['latin'],
  display: 'swap',
});

export default function Hero() {
  return (
    <div className="relative w-full h-[90vh]">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Magical Gifts"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0" // Z-index 0 untuk memastikan gambar di belakang konten
      />

      <div className="relative z-20 flex items-center justify-center ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-10 mt-24">
          {/* Left Side: Text Content */}
          <div className={`lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 pr-0 lg:pr-12 ${poly.variable}`} style={{ fontFamily: 'var(--font-poly)' }}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Magical <span className="text-purple-500">Gifts</span>
              <br />
              Made with <span className="text-purple-500">Love</span>
            </h2>
            <hr className="border-t border-purple-500 my-6 w-[65%] mx-auto lg:mx-0" /> 
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Each gift we create is more than just a bouquet — it's a heartfelt expression wrapped in petals and colors. Born from passion, crafted with care, and touched with a hint of magic, our floral creations are made to spark joy,
              stir emotions, and turn ordinary moments into lasting memories. At the heart of every arrangement lies our love pure, thoughtful, and genuine — because we believe that the most magical gifts are those made with love.
            </p>
            <Link href="#collection">
              <button className="inline-flex items-center px-8 py-4 text-white bg-purple-500 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out shadow-lg">
                Our Beautiful Collection
                {/* Ganti SVG dengan komponen ArrowRight dari Lucid React */}
                <ChevronRight className="ml-2 -mr-1 w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* Right Side: Image (This space will be occupied by the background image) */}
          <div className="lg:w-1/2 flex justify-center items-center">
            {/* The background image covers this area visually */}
            {/* You could optionally add a placeholder or overlay here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}
