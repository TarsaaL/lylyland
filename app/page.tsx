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
        <SectionDivider dripColor="#E8B87A" bgColor="#FFF1E0" />
        <FlavorsSection />
        <SectionDivider dripColor="#E8789A" bgColor="#FFF8F0" />
        <CreationsSection />
        <SectionDivider dripColor="#DBA05C" bgColor="#FFF1E0" />
        <EpicerieSection />
        <SectionDivider dripColor="#7B6BA0" bgColor="#FFF8F0" />
        <StorySection />
        <SectionDivider dripColor="#E8B87A" bgColor="#FFF1E0" />
        <ServicesSection />
        <SectionDivider dripColor="#A5D46A" bgColor="#FFF8F0" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
