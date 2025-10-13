import React from 'react';
import Image from 'next/image';

const StatsMetricsSection = () => {
  return (
    <div className="relative bg-navy-primary text-white-pure pt-28 pb-40 md:pb-56">
      <div className="container mx-auto px-5 md:px-10 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-20 items-end">
          {/* Left Column */}
          <div className="relative">
            <div className="relative h-32 sm:h-36 mb-6">
              <div className="absolute top-0 left-0 bg-orange-accent text-navy-primary text-sm font-bold px-5 py-2.5 rounded-full transform -rotate-6">
                Profesional
              </div>
              <div className="absolute left-4 top-[45%] transform -translate-y-1/2 rotate-6 bg-coral-accent text-white-pure text-xs font-bold px-4 py-2 rounded-full">
                Terpercaya
              </div>
              <div className="absolute bottom-0 left-8 bg-lime-accent text-navy-primary text-sm font-bold px-5 py-2.5 rounded-full transform -rotate-[8deg]">
                One-Stop Solution
              </div>
            </div>
            <h2 className="text-[28px] md:text-[36px] lg:text-[48px] font-extrabold leading-[1.1] tracking-tight">
              500+ Klien Puas dengan Layanan Digital Kami!{' '}
              <span className="text-gray-medium">
                Bergabunglah dengan Ribuan yang Telah Dipercaya Kami.
              </span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-teal-accent text-navy-primary p-7 md:p-10 rounded-tl-[32px] rounded-tr-[32px] rounded-bl-[32px] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-accent/20">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-5xl lg:text-[64px] font-extrabold leading-none">98%</p>
                    <p className="text-sm mt-2">
                      Tingkat Kepuasan Klien dari Semua Layanan
                    </p>
                  </div>
                  <div className="self-end mt-6">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3f_Vector%20(9)-14.svg?"
                      alt="Arrow Icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-lime-accent text-navy-primary p-7 md:p-10 rounded-t-[32px] rounded-bl-[32px] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-lime-accent/20">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-5xl lg:text-[64px] font-extrabold leading-none">24/7</p>
                    <p className="text-sm mt-2">
                      Support dan Konsultasi Gratis Setiap Saat
                    </p>
                  </div>
                  <div className="self-end mt-6">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3f_Vector%20(9)-14.svg?"
                      alt="Arrow Icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-medium mt-[30px] max-w-lg">
              Membantu mahasiswa, UMKM, creator, dan startup berkembang dengan layanan digital profesional yang terjangkau.
            </p>
          </div>
        </div>
      </div>

      {/* Curved Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block fill-white w-[calc(105%_+_1.3px)] h-[100px] md:h-[150px]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default StatsMetricsSection;