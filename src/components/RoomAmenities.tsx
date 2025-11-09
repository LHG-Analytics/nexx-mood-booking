import { motion } from "framer-motion";
import {
  Shield,
  Home,
  Tv,
  Wifi,
  Snowflake,
  Coffee,
  MoreHorizontal,
} from "lucide-react";

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
    <section className="py-20 px-6" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Room Amenities
            </h2>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
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
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {amenity.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {amenity.description}
                      </p>
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
