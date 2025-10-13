import React from 'react';
import Image from 'next/image';

const keyframes = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
  }
`;

const FloatingBadge = ({
  text,
  bgColor,
  textColor,
  className,
  rotation,
  animationDelay,
}: {
  text: string;
  bgColor: string;
  textColor: string;
  className: string;
  rotation: string;
  animationDelay: string;
}) => (
  <div
    className={`absolute ${className} ${rotation} rounded-full px-5 py-2 whitespace-nowrap`}
    style={{
      backgroundColor: bgColor,
      color: textColor,
      animation: `float 6s ease-in-out infinite`,
      animationDelay: animationDelay,
    }}
  >
    <p className="font-semibold text-sm uppercase tracking-wider">{text}</p>
  </div>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <div className={`absolute ${className}`}>
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 0.5V20.5" stroke="white" strokeWidth="2"/>
      <path d="M20.5 10.5L0.5 10.5" stroke="white" strokeWidth="2"/>
    </svg>
  </div>
);


const ImpactBannerSection = () => {
  return (
    <>
      <style>{keyframes}</style>
      <section className="bg-navy-primary py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          <div className="relative rounded-[40px] bg-gradient-to-br from-primary to-[#9D7FFF] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9D7FFF] to-[#AF99FF] rounded-[40px]" />
            
            {/* Notches - a simplified representation using circles to create cutouts */}
            <div className="absolute w-32 h-32 bg-navy-primary rounded-full bottom-[-80px] left-[15%] transform -translate-x-1/2"></div>
            <div className="absolute w-32 h-32 bg-navy-primary rounded-full bottom-[-80px] right-[15%] transform translate-x-1/2"></div>
            
            <div className="relative flex flex-col items-center justify-center py-24 sm:py-28 md:py-32 lg:py-40 px-6 text-center">
              
              {/* Decorative elements & Badges */}
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af57_Logo%20(3)-35.svg?"
                alt="NaiEasy Logo Watermark"
                width={200}
                height={40}
                className="absolute inset-0 m-auto opacity-10"
              />
              
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7aff7_Vector%20(29)-34.svg?"
                alt="Star Shape"
                width={50}
                height={50}
                className="absolute top-12 right-24 sm:top-16 sm:right-32 w-10 h-10 sm:w-12 sm:h-12"
              />
              <PlusIcon className="top-24 left-20 sm:top-28 sm:left-32" />
              <PlusIcon className="bottom-16 right-12 sm:bottom-20 sm:right-24 h-4 w-4" />

              <FloatingBadge
                text="Karir Profesional"
                bgColor="#FF8B3D"
                textColor="#FFFFFF"
                className="top-8 left-[15%] sm:top-12 sm:left-[20%]"
                rotation="-rotate-12"
                animationDelay="0s"
              />
              <FloatingBadge
                text="Bisnis Digital"
                bgColor="#3DD9A8"
                textColor="#FFFFFF"
                className="top-1/3 left-[5%] sm:top-1/3 sm:left-[10%]"
                rotation="rotate-12"
                animationDelay="0.5s"
              />
              <FloatingBadge
                text="Kreatif & Inovatif"
                bgColor="#FF5757"
                textColor="#FFFFFF"
                className="top-1/2 right-[5%] sm:top-1/2 sm:right-[8%]"
                rotation="-rotate-6"
                animationDelay="1s"
              />
              <FloatingBadge
                text="Solusi Teknologi"
                bgColor="#D8FF3D"
                textColor="#0A1F2E"
                className="bottom-10 right-[15%] sm:bottom-16 sm:right-[18%]"
                rotation="rotate-12"
                animationDelay="1.5s"
              />
              
              <h2 className="relative font-black text-white uppercase text-[40px] leading-tight sm:text-[56px] md:text-[72px] md:leading-[1.1] max-w-6xl mx-auto">
                Wujudkan Impian Digital Anda Bersama Kami dengan Layanan Terpadu yang Profesional!
              </h2>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactBannerSection;