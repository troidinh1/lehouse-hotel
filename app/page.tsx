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

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Header />
      <Hero />
      <BookingStrip />
      <WhyChoose />
      <GuestTypes />
      <Rooms />
      <Amenities />
      <Location />
      <Gallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileCTA />
    </main>
  );
}