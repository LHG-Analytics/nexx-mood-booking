"use client";
import { motion } from "framer-motion";
import { Shield, Home, Tv, Wifi, Snowflake, Coffee, MoreHorizontal } from "lucide-react";

const RoomAmenities = () => {
  const amenities = [
    {
      icon: Shield,
      title: "Free Housekeeping Services",
      description: "Daily cleaning and fresh linens",
    },
    {
      icon: Home,
      title: "Electronic Check-In Check-out Services",
      description: "Contactless and convenient",
    },
    {
      icon: Tv,
      title: "Smart TV",
      description: "Streaming services available",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary internet access",
    },
    {
      icon: Snowflake,
      title: "Climate Control",
      description: "Individual AC/Heating",
    },
    {
      icon: Coffee,
      title: "Mini Bar",
      description: "Refreshments in room",
    },
  ];

  return (
    <section className="px-6 py-20" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-3xl bg-secondary/30 p-8 md:p-12"
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Room Amenities</h2>
            <button className="text-muted-foreground transition-colors hover:text-foreground">
              <MoreHorizontal className="h-6 w-6" />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-foreground">
                      <Icon className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-foreground">{amenity.title}</h3>
                      <p className="text-sm text-muted-foreground">{amenity.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomAmenities;
