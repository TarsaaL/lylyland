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
        {/* Hero: bg cream (#FFF8F0) */}
        <HeroSection />
        <SectionDivider fromColor="#FFF8F0" toColor="#FFF1E0" />
        {/* Flavors: bg cream-dark (#FFF1E0) */}
        <FlavorsSection />
        <SectionDivider fromColor="#FFF1E0" toColor="#FFF8F0" />
        {/* Creations: bg cream (#FFF8F0) */}
        <CreationsSection />
        <SectionDivider fromColor="#FFF8F0" toColor="#FFF1E0" />
        {/* Epicerie: bg cream-dark (#FFF1E0) */}
        <EpicerieSection />
        <SectionDivider fromColor="#FFF1E0" toColor="#FFF8F0" />
        {/* Story: bg cream (#FFF8F0) */}
        <StorySection />
        <SectionDivider fromColor="#FFF8F0" toColor="#FFF1E0" />
        {/* Services: bg cream-dark (#FFF1E0) */}
        <ServicesSection />
        <SectionDivider fromColor="#FFF1E0" toColor="#FFF8F0" />
        {/* Contact: bg cream (#FFF8F0) */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
