import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoomAmenities from "@/components/RoomAmenities";
import SuiteCarousel from "@/components/SuiteCarousel";
import ADASection from "@/components/ADASection";
import HumanTraffickingSection from "@/components/HumanTraffickingSection";
import ImportantInfo from "@/components/ImportantInfo";
import BookNowCTA from "@/components/BookNowCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero with Check Availability Card */}
      <div className="relative">
        <HeroSection />
      </div>

      <RoomAmenities />
      <SuiteCarousel />
      <ImportantInfo />
      <ADASection />
      <HumanTraffickingSection />
      <BookNowCTA />
      <Footer />
    </div>
  );
}
