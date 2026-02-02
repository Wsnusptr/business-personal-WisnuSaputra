"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transformations
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const y4 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const y5 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const y6 = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section ref={targetRef} className="relative bg-[#0A0F1E] font-sans text-white pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-24 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <div className="flex flex-col items-center text-center">

          <div className="flex items-center justify-center gap-3">
            <div className="w-[18px] h-[18px] rounded-full bg-destructive animate-pulse" />
            <p className="font-anton text-sm uppercase tracking-wide">#1 Hub Layanan Digital</p>
          </div>

          <div className="relative mt-4 w-full">
            <motion.div style={{ y: y1 }} className="absolute z-20 top-[12%] left-[34%] xl:left-[calc(50%-230px)] lg:left-[calc(50%-180px)] md:left-[calc(50%-140px)] w-7 md:w-10">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af38_Vector%20(5)-5.svg?" alt="Orange Star" width={40} height={40} />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute z-20 top-[-10%] right-[calc(50%-330px)] md:right-[26%] w-10 md:w-16 transform rotate-20">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af34_Layer_2-6.svg?" alt="Orange Spiral" width={60} height={60} className="w-full h-auto" />
            </motion.div>
            <motion.div style={{ y: y3 }} className="absolute z-20 bottom-[42%] left-[calc(50%-380px)] md:left-[16%] w-7 md:w-10 transform rotate-20">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af36_Vector%20(3)-7.svg?" alt="Purple Star" width={40} height={40} className="w-full h-auto" />
            </motion.div>
            <motion.div style={{ y: y4 }} className="absolute z-20 top-[50%] right-[calc(50%-350px)] md:right-[24%] w-4 md:w-6">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af37_Vector%20(4)-9.svg?" alt="Green Plus" width={24} height={24} className="w-full h-auto" />
            </motion.div>
            <motion.div style={{ y: y5 }} className="absolute z-20 bottom-[0%] right-[calc(50%-300px)] md:right-[29%] w-4 md:w-6">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7aff6_Vector%20(28)-13.svg?" alt="Crown" width={24} height={24} className="w-full h-auto" />
            </motion.div>
            <motion.div style={{ y: y6 }} className="absolute z-20 bottom-[8%] left-[calc(50%-350px)] md:left-[24%] w-8 md:w-12">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3a_Vector%20(7)-10.svg?" alt="Snowflake" width={50} height={50} className="w-full h-auto" />
            </motion.div>
            <motion.div style={{ y: y1 }} className="absolute z-20 top-[82%] right-[46%] w-5 md:w-8 transform rotate-15">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af39_Vector%20(6)-11.svg?" alt="Crown" width={30} height={30} className="w-full h-auto" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute z-20 top-0 right-[10%] w-[100px] md:w-[130px] lg:w-[150px] transform rotate-15 lg:right-[10%] md:right-0">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7aff4_Glossy_Sticker_037%201-2.png?" alt="Sticker" width={150} height={150} className="w-full h-auto" />
            </motion.div>
            <motion.div style={{ y: y3 }} className="absolute z-20 top-[52%] left-[15%] w-[70px] md:w-[100px]">
              <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7aff5_Helix%20(1)-12.svg?" alt="Helix" width={100} height={100} />
            </motion.div>

            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center">
                <h1 className="font-anton uppercase text-[45px] leading-[1.1] sm:text-[60px] md:text-[90px] xl:text-[120px] tracking-tight" style={{ lineHeight: '0.9em' }}>Satu Hub Untuk</h1>
              </div>
              <div className="flex justify-center items-center flex-wrap">
                <h1 className="font-anton uppercase bg-gradient-to-r from-purple-accent to-orange-accent text-transparent bg-clip-text text-[45px] leading-[1.1] sm:text-[60px] md:text-[90px] xl:text-[120px] tracking-tight" style={{ lineHeight: '0.9em' }}>
                  Semua
                </h1>
                <div className="relative mx-2 sm:mx-5 w-[90px] h-[120px] sm:w-[120px] sm:h-[150px] xl:w-[140px] xl:h-[180px] transform -rotate-12 flex-shrink-0">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7af32_Graphics-1.png?" alt="Layanan Digital" fill sizes="(max-width: 640px) 90px, (max-width: 1280px) 120px, 140px" className="rounded-2xl object-cover" />
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af35_Layer-8.svg?" alt="" width={220} height={220} className="absolute -left-6 -top-8 sm:-left-8 sm:-top-10 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] -z-10" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <h1 className="font-anton uppercase text-[45px] leading-[1.1] sm:text-[60px] md:text-[90px] xl:text-[120px] tracking-tight" style={{ lineHeight: '0.9em' }}>Kebutuhan Digital</h1>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 max-w-2xl mx-auto">
            <a href="https://portofolio-wisnu-saputra-terbaru202.vercel.app/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 px-10 py-6 bg-white text-[#051a2f] rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-accent/40 hover:shadow-[0_8px_24px]">
              <span>Kembali ke Portofolio</span>
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 transition-all duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7afed_top%201%20(3)-2.svg?" alt="Button Icon Hover" width={20} height={20} />
                </div>
                <div className="absolute inset-0 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3b_top%201-3.svg?" alt="Button Icon Normal" width={20} height={20} />
                </div>
              </div>
            </a>
            <Link href="https://wa.me/6281281852138?text=hai%20aku%20ingin%20menanyakan%20terkait%20layanan%20di%20portofolio%20mu" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 px-10 py-6 bg-purple-accent text-white rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-purple-accent/40 hover:shadow-[0_8px_24px]">
              <span>Konsultasi Gratis</span>
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 transition-all duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7afed_top%201%20(3)-2.svg?" alt="Button Icon Hover" width={20} height={20} />
                </div>
                <div className="absolute inset-0 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100 group-hover:-translate-y-full group-hover:opacity-0">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3b_top%201-3.svg?" alt="Button Icon Normal" width={20} height={20} />
                </div>
              </div>
            </Link>
          </div>

          <p className="mt-6 text-lg md:text-xl text-off-white max-w-xl">
            Solusi lengkap untuk karir, bisnis, kreativitas, teknologi, dan dukungan profesional Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;