"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const workingSteps = [
  {
    value: "item-1",
    number: "1.",
    title: "Memahami Bisnis Anda",
    description: "Kami memulai dengan mengenal brand, industri, dan audiens Anda. Dengan memahami tantangan, tujuan, dan nilai unik Anda, kami meletakkan fondasi yang kuat.",
  },
  {
    value: "item-2",
    number: "2.",
    title: "Perencanaan Strategis dan Eksekusi Kreatif",
    description: "Berdasarkan riset mendalam dan analisis data, kami menyusun roadmap strategis yang menguraikan tujuan jelas, timeline, dan deliverables kunci.",
  },
  {
    value: "item-3",
    number: "3.",
    title: "Kolaborasi dan Optimasi",
    description: "Kami bekerja sama dengan Anda untuk memastikan setiap langkah sesuai dengan visi Anda. Dengan optimasi berkelanjutan, kami memastikan hasil terbaik.",
  },
  {
    value: "item-4",
    number: "4.",
    title: "Penyampaian dan Pelaporan Hasil",
    description: "Tujuan utama kami adalah kesuksesan Anda. Baik itu meningkatkan traffic, konversi, atau brand awareness, kami fokus pada hasil yang berdampak.",
  },
];

const WorkingMethodSection = () => {
  return (
    <section className="bg-off-white text-navy-primary py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h4 className="text-small-label text-coral-accent">CARA KAMI BEKERJA</h4>
          <h2 className="mt-4">METODE KERJA KAMI</h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {workingSteps.map((step) => (
              <AccordionItem key={step.value} value={step.value} className="border-b border-gray-light last:border-b-0">
                <AccordionTrigger className="group w-full text-left py-6 hover:no-underline transition-colors hover:bg-white/50">
                  <div className="flex items-center justify-between w-full gap-x-4">
                    <div className="flex items-center gap-x-6 sm:gap-x-8 md:gap-x-12">
                      <span className="text-7xl lg:text-9xl font-black text-navy-primary">{step.number}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-navy-primary uppercase leading-tight text-left">
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-navy-primary rounded-full flex items-center justify-center transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pt-2 pb-6 pl-28 md:pl-32 lg:pl-44">
                    <p className="text-gray-medium max-w-2xl text-base leading-7">
                      {step.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WorkingMethodSection;