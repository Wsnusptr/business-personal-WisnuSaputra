"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress of section visibility (0 to 1 as it passes through viewport)
        const progress = Math.min(Math.max((windowHeight - top) / (windowHeight + height), 0), 1);
        
        if (!isNaN(progress)) {
          const parallaxOffset = (progress - 0.5) * -100; // Adjust factor for desired speed
          setTranslateY(parallaxOffset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call to set position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F5F6FA] py-24 lg:py-32 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 xl:px-20">
        <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <h4 className="text-destructive text-sm font-semibold uppercase tracking-wider mb-4">
            Mengapa Memilih Kami!
          </h4>
          <h2 className="text-background text-4xl md:text-[56px] font-extrabold leading-tight tracking-[-0.01em]">
            Mengapa NaiEasy Adalah Pilihan Terpercaya
          </h2>
          <p className="mt-6 text-lg text-muted">
            Raih kesuksesan dengan strategi merek kreatif yang dibangun untuk terhubung, melibatkan, dan mengonversi pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
          <div>
            <div style={{ transform: `translateY(${translateY}px)` }} className="will-change-transform transition-transform duration-300 ease-out">
              <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7af58_Group%2015-3.png?"
                  alt="Choose Us Image"
                  width={530}
                  height={795}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Block 1: Proven Expertise */}
            <div>
              <h4 className="text-background text-2xl font-bold mb-3">Keahlian Terbukti</h4>
              <p className="text-base text-muted mb-6">
                Dengan pengalaman bertahun-tahun dan rekam jejak dalam memberikan hasil yang terukur, kami menciptakan strategi yang berhasil.
              </p>
              <div className="relative overflow-hidden bg-primary/90 backdrop-blur-sm rounded-[32px] p-8 text-primary-foreground">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-6xl font-black">300+</p>
                    <p className="mt-2 text-sm leading-snug max-w-[200px]">Kampanye Sukses Diluncurkan di Berbagai Industri</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af46_Vector%20(11)-21.svg?"
                      alt="Arrow icon"
                      width={48}
                      height={48}
                      className="brightness-0 invert"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -left-1 w-12 h-12 bg-[#F5F6FA] rounded-tr-[32px]"></div>
              </div>
            </div>

            {/* Block 2: Data-Driven Approach */}
            <div>
              <h4 className="text-background text-2xl font-bold mb-3">Pendekatan Berbasis Data</h4>
              <p className="text-base text-muted mb-6">
                Menggunakan teknik yang terbukti, kami membangun strategi yang menghasilkan hasil yang terukur.
              </p>
              <div className="relative overflow-hidden bg-destructive/90 backdrop-blur-sm rounded-[32px] p-8 text-destructive-foreground">
                 <div className="absolute -top-1 -left-1 w-12 h-12 bg-[#F5F6FA] rounded-br-[32px]"></div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-6xl font-black">200%</p>
                    <p className="mt-2 text-sm leading-snug max-w-[200px]">Pertumbuhan Tingkat Konversi Rata-rata</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af46_Vector%20(11)-21.svg?"
                      alt="Arrow icon"
                      width={48}
                      height={48}
                      className="brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;