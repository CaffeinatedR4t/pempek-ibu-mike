import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { StorySection } from "@/components/sections/StorySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ClosingCtaSection } from "@/components/sections/ClosingCtaSection";
import { Footer } from "@/components/sections/Footer";

import { ScallopedDivider } from "@/components/ui/ScallopedDivider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ScallopedDivider className="-mt-6 md:-mt-10 mb-0 relative z-20" />
        <MenuSection />
        <StorySection />
        <ServicesSection />
        <FounderSection />
        <TestimonialSection />
        <ContactSection />
        <ClosingCtaSection />
      </main>
      <Footer />
    </div>
  );
}
