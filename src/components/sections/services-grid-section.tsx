"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Briefcase, TrendingUp, Palette, Code, Headphones } from 'lucide-react';

const WA_URL = 'https://wa.me/6281281852138?text=hai%20aku%20ingin%20menanyakan%20terkait%20layanan%20di%20portofolio%20mu';

interface ServiceCardData {
  title: string;
  description: string;
  bgColor: string;
  iconUrl: string;
  icon: React.ReactNode;
  link: string;
}

const services: ServiceCardData[] = [
  {
    title: 'Career',
    description: 'Layanan pengembangan karir profesional: CV writing, LinkedIn optimization, interview coaching, dan career consulting.',
    bgColor: 'bg-orange-accent',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7afb0_right-up%201-15.svg?',
    icon: <Briefcase className="w-10 h-10" />,
    link: '#services',
  },
  {
    title: 'Business',
    description: 'Solusi bisnis digital: konsultasi strategi, business plan, market research, dan branding untuk UMKM dan startup.',
    bgColor: 'bg-purple-accent',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7afce_right-up%201%20(1)-16.svg?',
    icon: <TrendingUp className="w-10 h-10" />,
    link: '#services',
  },
  {
    title: 'Creative',
    description: 'Jasa kreatif profesional: desain grafis, video editing, content creation, social media design, dan branding visual.',
    bgColor: 'bg-coral-accent',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7afe7_right-up%201%20(2)-17.svg?',
    icon: <Palette className="w-10 h-10" />,
    link: '#services',
  },
  {
    title: 'Tech',
    description: 'Layanan teknologi: website development, mobile app, automation, AI integration, dan technical consulting.',
    bgColor: 'bg-teal-accent',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7b019_right-up%201%20(4)-19.svg?',
    icon: <Code className="w-10 h-10" />,
    link: '#services',
  },
  {
    title: 'Support',
    description: 'Dukungan profesional 24/7: customer service, admin support, virtual assistant, dan project management.',
    bgColor: 'bg-navy-secondary',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7b022_right-up%201%20(5)-20.svg?',
    icon: <Headphones className="w-10 h-10" />,
    link: '#services',
  },
];

const ServiceCard = ({ service }: { service: ServiceCardData }) => {
  const isNavyCard = service.bgColor === 'bg-navy-secondary';
  const isTealCard = service.bgColor === 'bg-teal-accent';
  const textColor = (isNavyCard || isTealCard) ? 'text-white' : 'text-white';
  const buttonBgColor = 'bg-white';

  return (
    <Link
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative block group rounded-3xl p-8 overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl ${service.bgColor} ${textColor}`}
    >
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-off-white" style={{ borderTopRightRadius: '24px' }}></div>
      <div className="relative z-10 flex flex-col justify-between min-h-[320px] md:min-h-[360px]">
        <div>
          <div className="mb-4 text-white/90">
            {service.icon}
          </div>
          <h3 className="text-3xl lg:text-[32px] font-bold uppercase leading-tight">{service.title}</h3>
          <p className="mt-4 text-base font-normal opacity-90">{service.description}</p>
        </div>
        <div className="self-end mt-4">
          <div className={`relative flex items-center justify-center w-20 h-20 overflow-hidden rounded-full ${buttonBgColor}`}>
            <Image
              src={service.iconUrl}
              alt="Arrow"
              width={40}
              height={40}
              className="transition-transform duration-300 ease-in-out group-hover:-translate-x-20"
            />
            <Image
              src={service.iconUrl}
              alt="Arrow"
              width={40}
              height={40}
              className="absolute transition-transform duration-300 ease-in-out translate-x-20 group-hover:translate-x-0"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};


const ServicesGridSection = () => {
    return (
        <section id="services" className="py-24 lg:py-[120px] bg-off-white">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
            <div className="flex flex-col items-start justify-between mb-16 lg:flex-row">
              <div className="w-full lg:max-w-[640px]">
                <h4 className="text-2xl font-bold tracking-wider uppercase text-coral-accent">Layanan Kami!</h4>
                <h2 className="mt-4 text-3xl font-extrabold text-navy-primary md:text-[42px] lg:text-[56px] leading-tight lg:leading-[1.1]">5 KATEGORI LAYANAN DIGITAL PROFESIONAL</h2>
              </div>
              <p className="mt-6 text-lg text-gray-medium lg:mt-12 lg:max-w-sm lg:pl-4">Dari karir hingga teknologi, kami siap membantu semua kebutuhan digital Anda dengan solusi terpadu dan profesional.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>
    );
}

export default ServicesGridSection;