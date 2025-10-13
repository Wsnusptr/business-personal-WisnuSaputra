"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

const WA_NUMBER = '6281281852138';

interface PackageCardData {
  title: string;
  targetAudience: string;
  price: string;
  priceNumber: number; // Actual price in Rupiah
  packageType: string; // For database
  description: string;
  features: string[];
  bgColor: string;
  borderColor: string;
  popular?: boolean;
}

const packages: PackageCardData[] = [
  {
    title: 'Paket Mahasiswa',
    targetAudience: 'Untuk Mahasiswa & Fresh Graduate',
    price: 'Mulai 150K',
    priceNumber: 150000,
    packageType: 'mahasiswa',
    description: 'Sempurna untuk membangun portofolio dan meningkatkan keterampilan profesional.',
    features: [
      'CV Professional Design',
      'LinkedIn Profile Optimization',
      'Portfolio Website Basic',
      '1x Career Consultation',
      'Interview Tips & Tricks',
    ],
    bgColor: 'bg-white',
    borderColor: 'border-orange-accent',
  },
  {
    title: 'Paket UMKM',
    targetAudience: 'Untuk Bisnis Kecil & Menengah',
    price: 'Mulai 500K',
    priceNumber: 500000,
    packageType: 'umkm',
    description: 'Solusi lengkap untuk mengembangkan bisnis UMKM secara digital.',
    features: [
      'Social Media Management',
      'Logo & Branding Design',
      'Website Toko Online',
      'Digital Marketing Strategy',
      'Monthly Content Creation',
    ],
    bgColor: 'bg-purple-accent',
    borderColor: 'border-purple-accent',
    popular: true,
  },
  {
    title: 'Paket Creator',
    targetAudience: 'Untuk Content Creator & Influencer',
    price: 'Mulai 350K',
    priceNumber: 350000,
    packageType: 'creator',
    description: 'Tingkatkan kualitas konten dan jangkauan audience Anda.',
    features: [
      'Video Editing Professional',
      'Thumbnail & Graphics Design',
      'Content Planning Strategy',
      'Social Media Kit',
      'Analytics & Growth Report',
    ],
    bgColor: 'bg-white',
    borderColor: 'border-coral-accent',
  },
  {
    title: 'Paket Startup',
    targetAudience: 'Untuk Startup & Tech Company',
    price: 'Mulai 2JT',
    priceNumber: 2000000,
    packageType: 'startup',
    description: 'Solusi teknologi dan bisnis menyeluruh untuk startup yang sedang berkembang.',
    features: [
      'Full Website Development',
      'Mobile App Development',
      'Business Plan & Pitch Deck',
      'Branding & Visual Identity',
      'Tech Consultation & Support',
    ],
    bgColor: 'bg-white',
    borderColor: 'border-teal-accent',
  },
];

const PackageCard = ({ pkg }: { pkg: PackageCardData }) => {
  const isPurple = pkg.bgColor === 'bg-purple-accent';
  const textColor = isPurple ? 'text-white' : 'text-navy-primary';
  const priceColor = isPurple ? 'text-white' : 'text-purple-accent';
  const featureColor = isPurple ? 'text-white/90' : 'text-gray-medium';
  const checkBgColor = isPurple ? 'bg-white/20' : 'bg-purple-accent/10';
  const checkIconColor = isPurple ? 'text-white' : 'text-purple-accent';

  // Build WhatsApp message
  const waMessage = `Halo! Saya tertarik dengan *${pkg.title}* (${pkg.price}). Bisa tolong berikan informasi lebih lanjut?`;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className={`relative group rounded-3xl p-8 border-2 ${pkg.borderColor} ${pkg.bgColor} transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl`}>
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-accent text-navy-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
          Paling Populer
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <p className={`text-sm uppercase font-semibold tracking-wider mb-2 ${isPurple ? 'text-white/80' : 'text-gray-medium'}`}>
            {pkg.targetAudience}
          </p>
          <h3 className={`text-3xl lg:text-[36px] font-bold uppercase ${textColor}`}>
            {pkg.title}
          </h3>
          <p className={`text-4xl font-black mt-3 ${priceColor}`}>
            {pkg.price}
          </p>
          <p className={`mt-3 text-base ${featureColor}`}>
            {pkg.description}
          </p>
        </div>

        <div className="flex-1 mb-6">
          <ul className="space-y-3">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className={`flex-shrink-0 w-6 h-6 rounded-full ${checkBgColor} flex items-center justify-center mt-0.5`}>
                  <Check className={`w-4 h-4 ${checkIconColor}`} />
                </div>
                <span className={`text-base ${featureColor}`}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/btn inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 ${
            isPurple 
              ? 'bg-white text-purple-accent hover:shadow-white/40 hover:shadow-[0_8px_24px]' 
              : 'bg-purple-accent text-white hover:shadow-purple-accent/40 hover:shadow-[0_8px_24px]'
          }`}
        >
          <span>Pesan via WhatsApp</span>
          <div className="relative w-5 h-5">
            <div className="absolute inset-0 transition-all duration-300 ease-in-out transform translate-y-full opacity-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
              <Image 
                src={isPurple 
                  ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3b_top%201-3.svg?"
                  : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7afed_top%201%20(3)-2.svg?"
                } 
                alt="Arrow" 
                width={20} 
                height={20}
              />
            </div>
            <div className="absolute inset-0 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100 group-hover/btn:-translate-y-full group-hover/btn:opacity-0">
              <Image 
                src={isPurple 
                  ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3b_top%201-3.svg?"
                  : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7afed_top%201%20(3)-2.svg?"
                } 
                alt="Arrow" 
                width={20} 
                height={20}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 lg:py-[120px] bg-[#0A0F1E] text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h4 className="text-2xl font-bold tracking-wider uppercase text-lime-accent">Paket Bundling!</h4>
          <h2 className="mt-4 text-3xl font-extrabold md:text-[42px] lg:text-[56px] leading-tight lg:leading-[1.1]">
            PILIH PAKET YANG SESUAI KEBUTUHAN ANDA
          </h2>
          <p className="mt-6 text-lg text-off-white max-w-2xl mx-auto">
            Hemat lebih banyak dengan paket bundling kami yang dirancang khusus untuk berbagai profil pengguna.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-off-white mb-6">
            Butuh solusi custom? Kami siap membantu!
          </p>
          <Link
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo! Saya ingin konsultasi untuk solusi custom. Bisa dibantu?')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-navy-primary rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-white/40 hover:shadow-[0_8px_24px]"
          >
            <span>Konsultasi Gratis</span>
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af3b_top%201-3.svg?"
              alt="Arrow" 
              width={20} 
              height={20}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;