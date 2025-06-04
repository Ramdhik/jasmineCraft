'use client';
import React from 'react';
import { LogoInstagram, LogoWhatsapp } from 'react-ionicons';
import { Stalemate } from 'next/font/google';

// Konfigurasi font Stalemate
const stalemate = Stalemate({
  weight: '400',
  variable: '--font-stalemate',
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer() {
  return (
    <footer className="bg-purple-500 text-white p-8">
      <div className="container mx-auto flex lg:flex-row gap-6 items-center justify-center flex-col">
        <div className={`lg:text-6xl text-3xl ${stalemate.variable}`} style={{ fontFamily: 'var(--font-stalemate)' }}>
          Jasmine Craft
        </div>
        <div className="flex sm:flex-row gap-2">
          <a target="_blank" href="https://www.instagram.com/jasmineid.craft?igsh=MXJ4a2o0aHdsNnJpOA==" className="hover:text-gray-300 flex flex-row items-center gap-2">
            <LogoInstagram color="white" height="50px" width="50px" />
            Instagram
          </a>
          <a target="_blank" href="https://wa.me/6285921673628" className="hover:text-gray-300 flex flex-row items-center gap-2">
            <LogoWhatsapp color="white" height="50px" width="50px" />
            Whatsapp
          </a>
        </div>
      </div>
    </footer>
  );
}
