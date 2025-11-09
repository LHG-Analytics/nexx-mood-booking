import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CheckAvailability from "@/components/CheckAvailability";
import RoomAmenities from "@/components/RoomAmenities";
import SuiteCarousel from "@/components/SuiteCarousel";
import ADASection from "@/components/ADASection";
import HumanTraffickingSection from "@/components/HumanTraffickingSection";
import ImportantInfo from "@/components/ImportantInfo";
import BookNowCTA from "@/components/BookNowCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero with Check Availability Card */}
      <div className="relative">
        <HeroSection />
        <div className="container mx-auto px-6 -mt-32 relative z-20">
          <CheckAvailability />
        </div>
      </div>

      <RoomAmenities />
      <SuiteCarousel />
      <ADASection />
      <HumanTraffickingSection />
      <ImportantInfo />
      <BookNowCTA />
      <Footer />
    </div>
  );
};

export default Index;
