"use client"

import * as React from "react"
import Image from "next/image"
import { type CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Transformasi CV Mahasiswa",
    description: "Desain CV profesional untuk fresh graduate yang berhasil diterima di perusahaan multinasional.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7b02a_Designer%20at%20Work_%20Planning%20and%20Palette%20Selection%20in%20a%20Professional%20Studio-4.png?",
    link: "#portfolio",
  },
  {
    title: "Website Toko Online UMKM",
    description: "Platform e-commerce modern untuk UMKM fashion lokal dengan peningkatan penjualan 300%.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7b029_The%20Designers%20Evening%20Workflow-5.png?",
    link: "#portfolio",
  },
  {
    title: "Konten Creator Viral",
    description: "Video editing & branding untuk content creator yang mencapai 5M views.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7b028_Modern%20Creative%20Workspace-6.png?",
    link: "#portfolio",
  },
  {
    title: "Aplikasi Mobile Startup",
    description: "Pengembangan aplikasi fintech untuk startup yang berhasil mendapat pendanaan Series A.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/images/6858db3d92470242cda7b027_Serene%20Workspace%20with%20Natural%20Light-7.png?",
    link: "#portfolio",
  },
]

export default function FeaturedProjectsSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="portfolio" className="bg-off-white text-navy-primary py-24 sm:py-32">
      <div className="container">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-8 md:mb-0">
              <h4 className="text-small-label text-accent mb-4">PORTFOLIO KAMI</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Hasil Kerja & Testimoni
              </h2>
            </div>
            <div className="flex items-center gap-3 self-start md:self-auto">
              <CarouselPrevious className="relative -left-0 -top-0 translate-y-0 w-16 h-16 rounded-full bg-gray-light border-none text-navy-primary hover:bg-gray-200 transition-colors" />
              <CarouselNext className="relative -right-0 -top-0 translate-y-0 w-16 h-16 rounded-full bg-gray-light border-none text-navy-primary hover:bg-gray-200 transition-colors" />
            </div>
          </div>
          <CarouselContent className="-ml-8">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                <a href={project.link} className="group block">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={573}
                      height={430}
                      className="w-full h-auto object-cover aspect-[4/3] rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-secondary/10 transition-colors group-hover:bg-navy-secondary/30"></div>
                     <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af5a_Vector%206%20(2)-37.svg?"
                      alt=""
                      width={81}
                      height={81}
                      className="absolute top-0 right-0 z-10 w-[81px] h-auto"
                    />
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af5b_Vector%206%20(4)-36.svg?"
                      alt=""
                      width={81}
                      height={81}
                      className="absolute bottom-0 left-0 z-10 w-[81px] h-auto"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-medium">
                      {project.description}
                    </p>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center items-center gap-2 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors",
                "bg-gray-300",
                { "bg-accent": index === current }
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}