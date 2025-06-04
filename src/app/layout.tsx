import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Stalemate, Poly } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar/page';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const stalemate = Stalemate({
  weight: '400',
  variable: '--font-stalemate',
  subsets: ['latin'],
  display: 'swap',
});

const poly = Poly({
  weight: ['400', '400'],
  style: ['normal', 'italic'],
  variable: '--font-poly',
  subsets: ['latin'],
  display: 'swap',
});

// >>> INI ADALAH TEMPAT UNTUK MENGUBAH TITLE DAN DESCRIPTION GLOBAL <<<
export const metadata: Metadata = {
  title: 'Jasmine Craft', // Ubah di sini!
  icons: {
    icon: '/flower.png', // Pastikan ini mengarah ke file favicon Anda di app/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${stalemate.variable} ${poly.variable} antialiased`} style={{ fontFamily: 'var(--font-poly)' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
