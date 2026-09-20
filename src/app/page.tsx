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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
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
