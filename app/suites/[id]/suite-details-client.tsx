"use client";

import { motion } from "framer-motion";
import { Star, ArrowLeft, Tv, Radio, Droplets, Wine, Users } from "lucide-react";
import Link from "next/link";

interface Suite {
  id: string;
  name: string;
  price: number;
  address: string;
  hours: {
    weekdays: string;
    weekend: string;
  };
  pricing: {
    weekdays: {
      fractional: number;
      daily: number;
      overnight: number;
    };
    weekend: {
      fractional: number;
      daily: number;
      overnight: number;
    };
  };
  amenities: string[];
  images: string[];
  description: string;
}

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  TV: Tv,
  RADIO: Radio,
  "SINGLE SHOWER": Droplets,
  "DOUBLE SHOWER": Droplets,
  "DOUBLE CRYSTAL SHOWER": Droplets,
  "MINI BAR": Wine,
  POLE: Users,
  JACUZZI: Droplets,
  "SPA BATHTUP": Droplets,
};

export default function SuiteDetailsClient({ suite }: { suite: Suite }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/#rooms">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Suites
            </motion.button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-foreground">${suite.price}</span>
            <span className="text-muted-foreground">Starting From</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-20 pt-32">
        <div className="container mx-auto">
          {/* Suite Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-6xl font-bold text-foreground md:text-7xl">{suite.name}</h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-muted-foreground">
              {suite.description}
            </p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 grid gap-4 md:grid-cols-3"
          >
            {suite.images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={image}
                  alt={`${suite.name} view ${index + 1}`}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Details */}
            <div className="space-y-8">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-xl"
              >
                <h2 className="mb-4 text-3xl font-bold text-foreground">Location</h2>
                <p className="text-lg text-muted-foreground">{suite.address}</p>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-xl"
              >
                <h2 className="mb-4 text-3xl font-bold text-foreground">Hours</h2>
                <div className="space-y-3">
                  <p className="text-lg text-muted-foreground">{suite.hours.weekdays}</p>
                  <p className="text-lg text-muted-foreground">{suite.hours.weekend}</p>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-xl"
              >
                <h2 className="mb-6 text-3xl font-bold text-foreground">Amenities</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {suite.amenities.map((amenity, index) => {
                    const Icon = amenityIcons[amenity] || Tv;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-xl bg-secondary/50 p-4"
                      >
                        <Icon className="h-6 w-6 text-primary" />
                        <span className="font-medium text-foreground">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Pricing */}
            <div className="space-y-8">
              {/* Weekday Pricing */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-xl"
              >
                <h2 className="mb-2 text-3xl font-bold text-foreground">Weekday Pricing</h2>
                <p className="mb-6 text-muted-foreground">{suite.hours.weekdays}</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-4">
                    <span className="font-medium text-foreground">Fractional Rate</span>
                    <span className="text-2xl font-bold text-primary">
                      ${suite.pricing.weekdays.fractional}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-4">
                    <span className="font-medium text-foreground">Daily Rate (3PM to 11AM)</span>
                    <span className="text-2xl font-bold text-primary">
                      ${suite.pricing.weekdays.daily}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-4">
                    <span className="font-medium text-foreground">Overnight (11PM to 11AM)</span>
                    <span className="text-2xl font-bold text-primary">
                      ${suite.pricing.weekdays.overnight}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Weekend Pricing */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-xl"
              >
                <h2 className="mb-2 text-3xl font-bold text-foreground">Weekend Pricing</h2>
                <p className="mb-6 text-muted-foreground">{suite.hours.weekend}</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-4">
                    <span className="font-medium text-foreground">Fractional Rate</span>
                    <span className="text-2xl font-bold text-primary">
                      ${suite.pricing.weekend.fractional}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-4">
                    <span className="font-medium text-foreground">Daily Rate (3PM to 11AM)</span>
                    <span className="text-2xl font-bold text-primary">
                      ${suite.pricing.weekend.daily}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-4">
                    <span className="font-medium text-foreground">Overnight (2AM to 11AM)</span>
                    <span className="text-2xl font-bold text-primary">
                      ${suite.pricing.weekend.overnight}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Book Now CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="rounded-3xl border border-primary bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center shadow-xl"
              >
                <h3 className="mb-4 text-2xl font-bold text-foreground">Ready to Book?</h3>
                <p className="mb-6 text-muted-foreground">Contact us to reserve this suite</p>
                <a href="tel:+13055550123">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
                  >
                    Call Now: (305) 555-0123
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
