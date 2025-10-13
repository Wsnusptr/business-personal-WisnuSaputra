"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItemType = {
  value: string;
  question: string;
  answer: string;
};

const faqItems: FaqItemType[] = [
  {
    value: "item-1",
    question: "Apa saja layanan yang tersedia?",
    answer: "Kami menyediakan 5 kategori layanan utama: Career (CV writing, LinkedIn optimization, interview coaching), Business (konsultasi bisnis, branding UMKM), Creative (desain grafis, video editing, content creation), Tech (website & app development, automation), dan Support (customer service, virtual assistant, project management).",
  },
  {
    value: "item-2",
    question: "Berapa lama waktu pengerjaan proyek?",
    answer: "Waktu pengerjaan bervariasi tergantung jenis layanan. CV writing 2-3 hari, desain grafis 3-5 hari, website basic 7-14 hari, dan website/app kompleks 1-3 bulan. Kami akan memberikan timeline detail setelah konsultasi awal.",
  },
  {
    value: "item-3",
    question: "Bagaimana cara memesan jasa?",
    answer: "Sangat mudah! Klik tombol 'Pesan Jasa Sekarang' atau 'Konsultasi Gratis', isi form dengan kebutuhan Anda, atau hubungi kami langsung via WhatsApp. Tim kami akan merespons dalam 1x24 jam untuk diskusi lebih lanjut tentang proyek Anda.",
  },
  {
    value: "item-4",
    question: "Apakah ada garansi revisi?",
    answer: "Ya! Setiap paket dilengkapi dengan garansi revisi. Paket Mahasiswa mendapat 2x revisi, Paket UMKM & Creator 3x revisi, dan Paket Startup unlimited revisi dalam periode tertentu. Kami ingin memastikan Anda 100% puas dengan hasil kerja kami.",
  },
];

const FaqAccordionItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-8 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[18px] font-bold text-navy-primary transition-colors group-hover:text-purple-accent">
          {item.question}
        </span>
        <div className="ml-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy-primary text-white-pure transition-colors group-hover:bg-purple-accent">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>
      <div
        className={`grid overflow-hidden text-gray-medium transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-8 pr-16 text-base">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};


const FaqSection = () => {
    const [openItem, setOpenItem] = useState<string | null>("item-1");

    const handleToggle = (value: string) => {
        setOpenItem(openItem === value ? null : value);
    };

    return (
        <section id="faq" className="bg-white text-navy-primary py-24 md:py-32">
            <div className="container">
                <div className="grid grid-cols-1 items-start gap-y-12 gap-x-24 lg:grid-cols-2">
                    <div>
                        <h4 className="text-small-label mb-4 text-purple-accent">
                            FAQ
                        </h4>
                        <h2 className="text-4xl font-extrabold leading-none tracking-tight text-navy-primary sm:text-5xl lg:text-[56px]">
                            PERTANYAAN<br />YANG SERING<br />DITANYAKAN
                        </h2>
                        <p className="mt-6 text-base text-gray-medium lg:text-lg">
                            Semua yang perlu Anda ketahui tentang layanan kami, dari proses pemesanan hingga garansi hasil kerja.
                        </p>
                    </div>
                    <div className="w-full">
                        {faqItems.map((item) => (
                            <FaqAccordionItem
                                key={item.value}
                                item={item}
                                isOpen={openItem === item.value}
                                onToggle={() => handleToggle(item.value)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;