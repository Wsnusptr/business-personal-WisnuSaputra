"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WA_NUMBER = '6281281852138';
const WA_MESSAGE = 'Halo! Saya tertarik dengan layanan NaiEasy Digital Business. Bisa konsultasi gratis?';

const RollingAdBanner = () => {
  const [isOpen, setIsOpen] = useState(true); // Mulai dengan terbuka
  const [isVisible, setIsVisible] = useState(false);

  // Delay sedikit untuk smooth initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const toggleBanner = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsAppClick = () => {
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Fixed Container */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-[999] transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Rolling Door Banner */}
        <div
          className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden ${
            isOpen 
              ? 'h-[50vh] md:h-[55vh] lg:h-[60vh]' 
              : 'h-[70px] md:h-[80px]'
          }`}
          style={{
            transformOrigin: 'bottom',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }}
        >
          {/* Main Content - Banner Image Full Display */}
          <div className={`relative h-full w-full transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            {/* Full Banner Image - Cover Full Screen tanpa space */}
            <div className="relative w-full h-full">
              <Image
                src="/images/Iklan-Rolling-Dor.png"
                alt="NaiEasy Digital Business - Iklan Rolling Door"
                fill
                className="object-cover"
                priority
                sizes="100vw"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>

            {/* Floating WhatsApp CTA Button */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-20">
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

            {/* Close Button (X) - Top Right */}
            <button
              onClick={toggleBanner}
              className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-900 text-white p-2.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 z-20 backdrop-blur-sm"
              aria-label="Tutup Iklan"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Collapsed Preview (when closed) */}
          <div className={`absolute inset-0 flex items-center justify-between px-6 transition-opacity duration-500 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 ${
            !isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <div className="flex items-center gap-4">
              {/* Mini Preview Image */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-purple-500/50 shadow-lg shadow-purple-500/30">
                <Image
                  src="/images/Iklan-Rolling-Dor.png"
                  alt="Ad Preview"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              
              {/* Preview Text */}
              <div className="flex flex-col">
                <p className="text-white font-bold text-sm md:text-base flex items-center gap-2">
                  NaiEasy Digital Business
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-500 text-white animate-pulse">
                    PROMO
                  </span>
                </p>
                <p className="text-gray-300 text-xs md:text-sm">
                  🎉 Diskon hingga 50% • Konsultasi Gratis
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Chat WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>

              {/* Expand Button */}
              <button
                onClick={toggleBanner}
                className="bg-purple-600 hover:bg-purple-700 p-2.5 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Buka Iklan"
              >
                <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Toggle Button - Floating Tab (when open) */}
          {isOpen && (
            <button
              onClick={toggleBanner}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-2.5 rounded-t-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
              aria-label="Tutup Iklan"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Tutup</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Spacer to prevent content overlap when banner is open */}
      <div 
        className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isOpen ? 'h-[50vh] md:h-[55vh] lg:h-[60vh]' : 'h-[70px] md:h-[80px]'
        }`}
      />
    </>
  );
};

export default RollingAdBanner;