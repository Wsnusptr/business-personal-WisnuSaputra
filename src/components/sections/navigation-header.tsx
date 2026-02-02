"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const navLinks = [
  { href: "/#services", label: "Layanan" },
  { href: "/#packages", label: "Paket" },
  { href: "/#testimonials", label: "Testimoni" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Kontak" },
];

const NavigationHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `sticky top-0 z-[1000] w-full transition-colors duration-300 ${isScrolled ? "bg-[#0A0F1E]/95 backdrop-blur-md" : "bg-[#0A0F1E]"
    }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-[94px] items-center justify-between">
        <Link href="/" className="shrink-0">
          <h1 className="text-xl font-semibold text-white tracking-tight hover:text-purple-accent transition-colors uppercase">
            NaiEasy
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-x-10 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-1 p-2 text-sm font-semibold uppercase text-white hover:bg-transparent hover:text-purple-accent"
              >
                Semua Halaman
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-gray-medium bg-navy-secondary text-white">
              <DropdownMenuItem className="hover:!bg-purple-accent/20">
                <Link href="/" className="w-full">Beranda</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:!bg-purple-accent/20">
                <Link href="/#services" className="w-full">Layanan</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:!bg-purple-accent/20">
                <Link href="/#packages" className="w-full">Paket</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:!bg-purple-accent/20">
                <Link href="/#testimonials" className="w-full">Testimoni</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:!bg-purple-accent/20">
                <Link href="/#faq" className="w-full">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:!bg-purple-accent/20">
                <Link href="/#contact" className="w-full">Kontak</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase text-white transition-colors hover:text-purple-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Controls - Portfolio Button */}
        <div className="hidden items-center gap-x-5 lg:flex">
          <Button
            asChild
            className="bg-purple-accent hover:bg-purple-accent/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <a
              href="https://portofolio-wisnu-saputra-terbaru202.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Portofolio
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l-0 bg-[#0A0F1E] p-0 text-white">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <SheetDescription className="sr-only">
                Menu navigasi untuk mengakses halaman-halaman di website
              </SheetDescription>
              <div className="flex h-full flex-col items-center justify-center gap-y-8">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 text-xl font-semibold uppercase text-white outline-none">
                    Semua Halaman <ChevronDown className="h-5 w-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="border-gray-medium bg-navy-secondary text-white">
                    <DropdownMenuItem className="hover:!bg-purple-accent/20">
                      <Link href="/" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:!bg-purple-accent/20">
                      <Link href="/#services" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Layanan</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:!bg-purple-accent/20">
                      <Link href="/#packages" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Paket</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:!bg-purple-accent/20">
                      <Link href="/#testimonials" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Testimoni</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:!bg-purple-accent/20">
                      <Link href="/#faq" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:!bg-purple-accent/20">
                      <Link href="/#contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>Kontak</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xl font-semibold uppercase text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Portfolio Button */}
                <Button
                  asChild
                  className="bg-purple-accent hover:bg-purple-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 mt-4"
                >
                  <a
                    href="https://portofolio-wisnu-saputra-terbaru202.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Kembali ke Portofolio
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;