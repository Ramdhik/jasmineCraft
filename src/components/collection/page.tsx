'use client'; // Pastikan ini ada jika menggunakan fitur Client Component Next.js
import Autoplay from "embla-carousel-autoplay"
import React from "react";
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '../ui/dialog'; // Asumsi ini adalah komponen Dialog Shadcn UI atau yang kompatibel
import collectionData from '../../data/collectionData.json'; // Data Anda
import { LogoWhatsapp } from 'react-ionicons'; // Icon Anda
// Import komponen Shadcn UI Carousel
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
// Import komponen Shadcn UI Card
import { Card, CardContent } from '@/components/ui/card';

function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
}

export default function Collection() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div id="collection" className="relative w-full  bg-purple-300 p-10 overflow-hidden flex flex-col justify-center">
      {/* Header section */}
      <div className="text-left ">
        <h2 className="text-3xl md:text-6xl font-bold text-purple-600 leading-tight mb-4">Our Beautiful Collection</h2>
        <hr className="border-t border-purple-500 my-6 w-[65%] mx-auto lg:mx-0" />
        <p className="lg:text-lg text-gray-700 leading-relaxed w-[65%] mb-20">
          Our gardens feature best quality flowers and plants that provided directly from the garden. We continuously maintain in state-of-the-art florist to provide the highest quality of flower to our customers.
        </p>
      </div>

      {/* --- Shadcn UI Carousel Dimulai --- */}
      {/* Tambahkan 'group' class agar tombol navigasi bisa muncul saat hover carousel */}
      {/* opts={{ loop: true }} menambahkan fitur looping */}
      {/* Sesuaikan max-w-screen-xl agar carousel tidak terlalu lebar di layar besar */}
      <Carousel opts={{ loop: true }} plugins={[plugin.current]} className="w-full max-w-screen-xl mx-auto ">
        <CarouselContent className="ml-4">
          {/* Mapping data collectionData untuk membuat setiap item carousel */}
          {collectionData.map((flower, index) => (
            // Setiap item dibungkus dalam CarouselItem
            // pl-4 untuk jarak yang lebih jauh
            // sm:basis-1/2 -> 2 item per view di layar sm
            // md:basis-1/4 lg:basis-1/4 xl:basis-1/4 -> 4 item per view di layar md ke atas
            <CarouselItem key={index} className="p-4 sm:basis-1/2 md:basis-1/3 ">
              <div className="p-1">
                {/* Konten setiap item, termasuk Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    {/* Gunakan Card dan CardContent dari Shadcn UI */}
                    {/* Terapkan style rotasi, hover scale, dan rounded-none (tajam) */}
                    <Card className={`cursor-pointer transition-transform duration-300 hover:scale-105  rounded-none`}>
                      {/* CardContent dengan padding disesuaikan untuk efek polaroid */}
                      <CardContent className="flex flex-col items-center justify-center pt-4 px-4 pb-8">
                        <div className="relative w-full h-92">
                          <Image
                            src={flower.image}
                            alt={flower.name}
                            fill // Mengisi parent div
                            className="object-cover" // Gambar tajam, tidak rounded
                          />
                        </div>
                        <div className="mt-4 text-center w-full">
                          {' '}
                          {/* Container teks */}
                          <h3 className="text-xl font-semibold">{flower.name}</h3>
                          <p className="text-gray-500">{formatRupiah(flower.price)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  {/* DialogContent tetap sama */}
                  <DialogContent>
                    <div className="flex flex-col md:flex-row">
                      <Image src={flower.image} alt={flower.name} width={250} height={250} className="mr-4 object-cover rounded-md mb-4 md:mb-0" /> {/* Sesuaikan ukuran dan style image di dialog */}
                      <div>
                        <DialogTitle>{flower.name} Details</DialogTitle>
                        <div className="p-4">
                          <p className="text-gray-500">{flower.description}</p>
                          <button onClick={() => window.open('https://wa.me/085921673628', '_blank')} className="flex items-center bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600">
                            <LogoWhatsapp color="white" height="20px" width="20px" className="mr-2" />
                            Order via WhatsApp
                          </button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute -top-8 left-0 z-10 disabled:opacity-50" />
        <CarouselNext className="absolute -top-8 right-0 z-10 disabled:opacity-50" />
      </Carousel>
      {/* --- Shadcn UI Carousel Selesai --- */}

      {/* Hapus tombol navigasi manual Anda */}
      {/* <div className="flex justify-end items-center"> ... </div> */}
    </div>
  );
}
