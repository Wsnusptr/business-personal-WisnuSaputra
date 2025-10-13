import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    href: "https://x.com/",
    normalSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6887109d324a49763bf6d40e_Frame%20(22)-44.svg?",
    hoverSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/688710701cc16dfdf01e46f1_Frame%20(21)-43.svg?",
    alt: "Twitter",
  },
  {
    href: "https://www.facebook.com/",
    normalSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af77_Social%20icons%20(7)-46.svg?",
    hoverSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af78_Social%20icons%20(6)-45.svg?",
    alt: "Facebook",
  },
  {
    href: "https://www.linkedin.com/",
    normalSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af76_Social%20icons%20(8)-48.svg?",
    hoverSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af75_Social%20icons%20(9)-47.svg?",
    alt: "LinkedIn",
  },
];

const navLinks = [
  { href: "/#services", text: "LAYANAN" },
  { href: "/#packages", text: "PAKET BUNDLING" },
  { href: "/#testimonials", text: "TESTIMONI" },
  { href: "/#faq", text: "FAQ" },
  { href: "/#contact", text: "KONTAK" },
  { href: "https://wa.me/6281281852138?text=Halo!%20Saya%20ingin%20menghubungi%20Naieasy", text: "HUBUNGI KAMI", external: true },
];

const SocialIcon = ({ href, normalSrc, hoverSrc, alt }: { href: string; normalSrc: string; hoverSrc: string; alt: string }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer" className="group relative h-10 w-10 shrink-0">
    <Image
      src={normalSrc}
      alt={alt}
      width={40}
      height={40}
      className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
    />
    <Image
      src={hoverSrc}
      alt={`${alt} Hover`}
      width={40}
      height={40}
      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
  </Link>
);


const FooterNavLink = ({ href, text, external }: { href: string; text: string; external?: boolean }) => (
  <Link 
    href={href} 
    className="group inline-flex items-center gap-4 text-base font-bold text-foreground transition-colors hover:text-primary"
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
  >
    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 transition-transform group-hover:scale-110">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cf0eda08-9b06-4e30-bf05-e56e6d47d8ce-revento-ecom-webflow-io/assets/svgs/6858db3d92470242cda7af79_arrow-down-sign-to-navigate%201%20(3)-49.svg?"
        alt="Arrow Icon"
        width={32}
        height={32}
        className="transform transition-transform duration-300 group-hover:-rotate-45"
      />
    </div>
    <span className="relative py-1">
      {text}
      <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </span>
  </Link>
);

export default function FooterSection() {
  return (
    <footer className="bg-navy-primary py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start gap-8 lg:col-span-5">
            <Link href="/">
              <h2 className="text-3xl font-bold text-white tracking-tight hover:text-purple-accent transition-colors">
                NaiEasy
              </h2>
            </Link>
            <p className="max-w-md text-base text-muted-foreground">
              Tumbuh bersama strategi digital inovatif yang dirancang untuk menjangkau, menginspirasi, dan menghasilkan dampak.
            </p>
            <div className="flex items-center gap-2">
              {socialIcons.map((icon) => (
                <SocialIcon key={icon.alt} {...icon} />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-5 lg:col-span-3 lg:col-start-7">
            {navLinks.map((link) => (
              <FooterNavLink key={link.text} {...link} />
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:col-span-3 lg:col-start-10"></div>
        </div>

        <div className="mt-20 border-t border-gray-light/20 pt-8 text-center">
          <p className="text-base text-muted">
            Hak Cipta © 2025 NaiEasy.
          </p>
        </div>
      </div>
    </footer>
  );
}