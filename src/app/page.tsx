import NavigationHeader from "@/components/sections/navigation-header";
import HeroSection from "@/components/sections/hero-section";
import StatsMetricsSection from "@/components/sections/stats-metrics-section";
import ServicesGridSection from "@/components/sections/services-grid-section";
import PackagesSection from "@/components/sections/packages-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us-section";
import WorkingMethodSection from "@/components/sections/working-method-section";
import ImpactBannerSection from "@/components/sections/impact-banner-section";
import FeaturedProjectsSection from "@/components/sections/featured-projects-section";
import TestimonialSection from "@/components/sections/testimonial-section";
import FaqSection from "@/components/sections/faq-section";
import CtaBannerSection from "@/components/sections/cta-banner-section";
import FooterSection from "@/components/sections/footer-section";
import RollingAdBanner from "@/components/sections/rolling-ad-banner";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white font-sans antialiased">
      <NavigationHeader />
      <main className="w-full">
        <HeroSection />
        <StatsMetricsSection />
        <ServicesGridSection />
        <PackagesSection />
        <WhyChooseUsSection />
        <WorkingMethodSection />
        <ImpactBannerSection />
        <FeaturedProjectsSection />
        <TestimonialSection />
        <FaqSection />
        <CtaBannerSection />
      </main>
      <FooterSection />
      
      {/* Rolling Ad Banner - Fixed at bottom */}
      <RollingAdBanner />
    </div>
  );
}