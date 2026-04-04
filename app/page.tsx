import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionDivider } from "@/components/layout/SectionDivider";
import { HeroSection } from "@/components/sections/HeroSection";
import { FlavorsSection } from "@/components/sections/FlavorsSection";
import { CreationsSection } from "@/components/sections/CreationsSection";
import { EpicerieSection } from "@/components/sections/EpicerieSection";
import { StorySection } from "@/components/sections/StorySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider dripColor="#E8D5C0" bgColor="#FFF1E0" />
        <FlavorsSection />
        <SectionDivider dripColor="#E8C9A8" bgColor="#FFF8F0" />
        <CreationsSection />
        <SectionDivider dripColor="#E8D5C0" bgColor="#FFF1E0" />
        <EpicerieSection />
        <SectionDivider dripColor="#E8C9A8" bgColor="#FFF8F0" />
        <StorySection />
        <SectionDivider dripColor="#E8D5C0" bgColor="#FFF1E0" />
        <ServicesSection />
        <SectionDivider dripColor="#E8C9A8" bgColor="#FFF8F0" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
