import { Stalemate } from 'next/font/google'; // Import font Stalemate dari layout.tsx

// Konfigurasi font Stalemate
const stalemate = Stalemate({
  weight: '400',
  variable: '--font-stalemate',
  subsets: ['latin'],
  display: 'swap',
});

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center py-4 bg-white shadow-lg sticky top-0 z-999">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <div className="w-24 h-px bg-purple-300 mr-4"></div> {/* Garis kiri */}
          <h1 className={`${stalemate.variable} lg:text-4xl text-3xl text-purple-500`} style={{ fontFamily: 'var(--font-stalemate)' }}>
            Jasmine Craft
          </h1>
          <div className="w-24 h-px bg-purple-300 ml-4"></div> {/* Garis kanan */}
        </div>
        <p className="lg:text-sm text-sm text-purple-500 mt-1">Artificial Flowers, Snack, Money, Graduation, Bouquet, etc</p>
      </div>
    </nav>
  );
}
