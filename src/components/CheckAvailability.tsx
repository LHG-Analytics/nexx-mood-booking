import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CheckAvailability = () => {
  const [userAddress, setUserAddress] = useState("");
  const motelAddress = "11102 Biscayne Blvd, Miami, FL 33181";
  const motelLatLng = "25.8788039,-80.1682156";
  
  const handleGetDirections = () => {
    if (userAddress.trim()) {
      // Using Google Maps directions with coordinates for better reliability
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(userAddress)}&destination=${motelLatLng}&destination_place_id=ChIJo6O4g4Ob2YgR6E04Q-eZOkM`;
      window.open(directionsUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-3xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:mx-0 border border-border"
    >
      {/* User Address Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-2">
          Your Current Location
        </label>
        <Input
          type="text"
          placeholder="Enter your address..."
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Get Directions Button */}
      <Button 
        onClick={handleGetDirections}
        disabled={!userAddress.trim()}
        className="w-full mb-6"
      >
        <Navigation className="w-4 h-4 mr-2" />
        Get Directions
      </Button>

      {/* Mini Map */}
      <div className="relative bg-secondary/30 rounded-xl overflow-hidden h-64 mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.364!2d-80.1683391!3d25.8784223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b21383ba37a3%3A0x433a99e8738d4de8!2s11102%20Biscayne%20Blvd%2C%20Miami%2C%20FL%2033181!5e0!3m2!1sen!2sus!4v1234567890"
          className="w-full h-full border-0"
          loading="lazy"
          title="Mood Motel Location"
        />
        <div className="absolute bottom-3 left-3 bg-card rounded-xl px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs font-medium text-foreground">Mood Motel</p>
              <p className="text-xs text-muted-foreground">{motelAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckAvailability;
