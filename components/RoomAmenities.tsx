"use client";
import { motion } from "framer-motion";
import { Shield, Home, Tv, Wifi, Snowflake, Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RoomAmenities = () => {
  const { t } = useLanguage();

  const amenities = [
    {
      icon: Shield,
      title: t.roomAmenities.housekeeping.title,
      description: t.roomAmenities.housekeeping.description,
    },
    {
      icon: Home,
      title: t.roomAmenities.checkInOut.title,
      description: t.roomAmenities.checkInOut.description,
    },
    {
      icon: Tv,
      title: t.roomAmenities.smartTv.title,
      description: t.roomAmenities.smartTv.description,
    },
    {
      icon: Wifi,
      title: t.roomAmenities.wifi.title,
      description: t.roomAmenities.wifi.description,
    },
    {
      icon: Snowflake,
      title: t.roomAmenities.climate.title,
      description: t.roomAmenities.climate.description,
    },
    {
      icon: Coffee,
      title: t.roomAmenities.miniBar.title,
      description: t.roomAmenities.miniBar.description,
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
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.roomAmenities.title}</h2>
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
