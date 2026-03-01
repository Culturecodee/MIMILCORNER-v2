import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
