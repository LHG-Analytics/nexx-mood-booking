"use client";

import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CheckAvailability = () => {
  const [userAddress, setUserAddress] = useState("");
  const motelLatLng = "25.8788039,-80.1682156";

  const handleGetDirections = () => {
    if (userAddress.trim()) {
      // Using Google Maps directions with coordinates for better reliability
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(userAddress)}&destination=${motelLatLng}&destination_place_id=ChIJo6O4g4Ob2YgR6E04Q-eZOkM`;
      window.open(directionsUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl md:p-8 lg:mx-0"
    >
      {/* User Address Input */}
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-foreground">
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
      <Button onClick={handleGetDirections} disabled={!userAddress.trim()} className="mb-6 w-full">
        <Navigation className="mr-2 h-4 w-4" />
        Get Directions
      </Button>

      {/* Mini Map */}
      <div className="pointer-events-none relative mb-4 h-64 overflow-hidden rounded-xl bg-secondary/30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.364!2d-80.1683391!3d25.8784223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b21383ba37a3%3A0x433a99e8738d4de8!2s11102%20Biscayne%20Blvd%2C%20Miami%2C%20FL%2033181!5e0!3m2!1sen!2sus!4v1234567890&disableDefaultUI=1"
          className="pointer-events-auto h-full w-full border-0"
          loading="lazy"
          title="Mood Motel Location"
        />
      </div>
    </motion.div>
  );
};

export default CheckAvailability;
