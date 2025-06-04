'use client';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '../ui/dialog';
import collectionData from '../../data/collectionData.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { LogoWhatsapp } from 'react-ionicons';

function formatRupiah(value: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);
}

export default function Collection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? collectionData.length - itemsPerPage : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === collectionData.length - itemsPerPage ? 0 : prevIndex + 1));
  };

  return (
    <div id="collection" className="relative w-full h-[100vh] bg-purple-300 p-10 overflow-hidden">
      <div className="text-left ">
        <h2 className="text-5xl md:text-6xl font-bold text-purple-600 leading-tight mb-4">Our Beautiful Collection</h2>
        <hr className="border-t border-purple-500 my-6 w-[65%] mx-auto lg:mx-0" />
        <p className="text-lg text-gray-700 mb-8 leading-relaxed w-[65%]">
          Our gardens feature best quality flowers and plants that provided directly from the garden. We continuously maintain in state-of-the-art florist to provide the highest quality of flower to our customers.
        </p>
      </div>
      <div className="flex justify-end items-center">
        <button onClick={handlePrev} className="p-2 transition-transform duration-300 hover:scale-110 cursor-pointer">
          <ChevronLeft size={24} />
        </button>
        <button onClick={handleNext} className="p-2 transition-transform duration-300 hover:scale-110 cursor-pointer">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="overflow-hidden p-6">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}>
          {collectionData.concat(collectionData).map((flower, index) => (
            <div key={index} className="min-w-1/4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className={`bg-white p-6 shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer ${index % 2 === 0 ? 'rotate-4' : '-rotate-2'} mx-10`}>
                    <div className="relative w-full h-60">
                      {' '}
                      {/* Contoh: Lebar 100%, tinggi 48 (192px) */}
                      <Image
                        src={flower.image}
                        alt={flower.name}
                        fill // Mengisi parent div
                        className="object-cover" // Memastikan gambar mengisi tanpa terdistorsi
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">{flower.name}</h3>
                      <p className="text-gray-500">{formatRupiah(flower.price)}</p>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <div className="flex ">
                    <Image src={flower.image} alt={flower.name} width={250} height={250} className="mr-4" />
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
          ))}
        </div>
      </div>
    </div>
  );
}
