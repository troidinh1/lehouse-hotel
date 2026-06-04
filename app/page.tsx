import Header from "@/components/hotel/Header";
import Hero from "@/components/hotel/Hero";
import BookingStrip from "@/components/hotel/BookingStrip";
import WhyChoose from "@/components/hotel/WhyChoose";
import GuestTypes from "@/components/hotel/GuestTypes";
import Rooms from "@/components/hotel/Rooms";
import Amenities from "@/components/hotel/Amenities";
import Location from "@/components/hotel/Location";
import Gallery from "@/components/hotel/Gallery";
import Testimonials from "@/components/hotel/Testimonials";
import FAQ from "@/components/hotel/FAQ";
import FinalCTA from "@/components/hotel/FinalCTA";
import Footer from "@/components/hotel/Footer";
import MobileCTA from "@/components/hotel/MobileCTA";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-[72px] pb-20 md:pb-0">
      <Header />

      <Hero />

      <ScrollReveal variant="zoom" delay={100}>
        <BookingStrip />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={100}>
        <WhyChoose />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={120}>
        <GuestTypes />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={140}>
        <Rooms />
      </ScrollReveal>

      <ScrollReveal variant="fade-right" delay={120}>
        <Amenities />
      </ScrollReveal>

      <ScrollReveal variant="fade-left" delay={120}>
        <Location />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={120}>
        <Gallery />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={120}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal variant="fade-up" delay={120}>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal variant="zoom" delay={120}>
        <FinalCTA />
      </ScrollReveal>

      <Footer />
      <MobileCTA />
    </main>
  );
}