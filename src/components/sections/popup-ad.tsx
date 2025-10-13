"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WA_NUMBER = '6281281852138';
const WA_MESSAGE = 'Halo! Saya tertarik dengan layanan NaiEasy Digital Business. Bisa konsultasi gratis?';

const PopupAd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Muncul pertama kali setelah 2 detik (saat halaman di-render)
    const initialTimer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 50);
    }, 2000);

    // Muncul setiap 5 menit (300000 ms)
    const intervalTimer = setInterval(() => {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 50);
    }, 300000); // 5 menit = 300000 ms

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // Delay untuk animasi smooth
  };

  const handleWhatsAppClick = () => {
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay Background - Semi Transparent */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closePopup}
      />

      {/* Popup Container */}
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 gap-4 transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Popup Box - Pas dengan gambar */}
        <div
          className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-[90vw] max-h-[75vh] w-auto h-auto"
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
        >
          {/* Close Button - Top Right */}
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 z-10 bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="Tutup Iklan"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Image Container - Maintain aspect ratio */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative max-w-full max-h-[75vh]">
              <Image
                src="/images/Wisnu Saputra.png"
                alt="NaiEasy Digital Business - Wisnu Saputra"
                width={1587}
                height={2245}
                className="w-auto h-auto max-w-full max-h-[75vh] object-contain"
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>

          {/* Decorative Border */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl border-4 border-purple-500/20" />
        </div>

        {/* WhatsApp CTA Button - Di Bawah Popup Box */}
        <div className="w-full max-w-md px-6" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={handleWhatsAppClick}
            className="group relative w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icon & Text */}
            <FaWhatsapp className="relative w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative text-lg font-extrabold tracking-wide">
              Konsultasi Gratis Sekarang!
            </span>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </button>
        </div>
      </div>
    </>
  );
};

export default PopupAd;