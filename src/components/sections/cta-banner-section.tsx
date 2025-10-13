import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CtaBannerSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(var(--tw-rotate)); }
            50% { transform: translateY(-15px) rotate(var(--tw-rotate)); }
            100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
           @keyframes float-alt {
            0% { transform: translateY(0px) rotate(var(--tw-rotate)); }
            50% { transform: translateY(10px) rotate(var(--tw-rotate)); }
            100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          }
          .animate-float-alt {
            animation: float-alt 8s ease-in-out infinite;
          }
        `}
      </style>
      <section id="contact" className="py-10 md:py-14 lg:py-20">
        <div className="container mx-auto px-5 sm:px-10 lg:px-20">
          <div className="relative bg-[#0A0F1E] rounded-[40px] py-[80px] md:py-[100px] lg:py-[140px] px-6 text-center">
            {/* Decorations */}
            <div className="absolute -top-10 right-[15%] md:right-[20%] animate-float" style={{'--tw-rotate': '-15deg'} as React.CSSProperties}>
              <div className="flex items-center gap-2.5 bg-[#D8FF3D] rounded-full py-3 px-5  transform -rotate-[15deg]">
                <p className="text-sm font-semibold uppercase text-navy-primary">Metrik Kinerja</p>
                <div className="relative w-5 h-5">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af63_Vector%20(12)-40.svg?" alt="Crown Icon" width={20} height={20} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-12 left-[10%] md:left-[15%] animate-float-alt" style={{'--tw-rotate': '15deg'} as React.CSSProperties}>
              <div className="flex items-center gap-2.5 bg-[#FF5757] rounded-full py-3 px-5 transform rotate-[15deg]">
                <p className="text-sm font-semibold uppercase text-white">Strategi Merek</p>
                <div className="relative w-4 h-4">
                  <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af64_Vector%20(13)-41.svg?" alt="Plus Icon" width={16} height={16} className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7af61_Helix-9.png?"
              alt="Helix Shape"
              width={160}
              height={160}
              className="absolute top-1/2 -translate-y-1/2 -left-10 md:-left-5 w-28 h-28 md:w-40 md:h-40 object-contain animate-float"
              style={{'--tw-rotate': '0deg'} as React.CSSProperties}
            />

            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3a_Vector%20(7)-10.svg?"
              alt="Star Shape"
              width={50}
              height={50}
              className="absolute bottom-1/4 left-4 md:left-12 w-8 h-8 md:w-12 md:h-12 object-contain animate-float-alt"
              style={{'--tw-rotate': '0deg'} as React.CSSProperties}
            />
            
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7af62_Group-10.png?"
              alt="Sticker"
              width={140}
              height={140}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-24 h-24 md:w-36 md:h-36 object-contain animate-float-alt transform rotate-[15deg]"
              style={{'--tw-rotate': '15deg'} as React.CSSProperties}
            />
            
            <div className="absolute top-[60%] right-[5%] md:right-[10%] w-6 h-6 md:w-8 md:h-8 text-[#D8FF3D]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M24,10.16h-9.84V0H13.8v10.16H4v2.72h9.8v11.12h2.72V12.88H24Z"/></svg>
            </div>


            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="max-w-[860px] text-white font-black text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] uppercase">
                SIAP BERMITRA DENGAN NAIEASY &amp; MAKSIMALKAN POTENSI BISNIS ANDA?
              </h2>

              <Link
                href="https://wa.me/6281281852138?text=hai%20aku%20ingin%20menanyakan%20terkait%20layanan%20di%20portofolio%20mu"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 inline-flex items-center justify-center gap-3 bg-white text-navy-primary font-bold py-5 px-10 rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.3)]"
              >
                <span className="text-base uppercase tracking-wider">Hubungi Kami</span>
                <div className="relative h-4 w-4">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7afed_top%201%20(3)-2.svg?"
                    alt="Button Icon"
                    width={16}
                    height={16}
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 object-contain"
                  />
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3b_top%201-3.svg?"
                    alt="Button Icon"
                    width={16}
                    height={16}
                    className="absolute inset-0 w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaBannerSection;