"use client";

import { motion } from "framer-motion";
import { Star, ArrowLeft, Tv, Radio, Droplets, Wine, Users, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";

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
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openModal = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Header with Back Button */}
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link href="/#rooms">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 text-sm text-foreground transition-colors hover:text-primary sm:gap-2 sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden xs:inline">{t.suiteDetails.backToSuites}</span>
              <span className="xs:hidden">{t.suiteDetails.back}</span>
            </motion.button>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">${suite.price}</span>
            <span className="text-xs text-muted-foreground sm:text-sm md:text-base">{t.suiteDetails.startingFrom}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="overflow-x-hidden px-4 pb-12 pt-20 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="container mx-auto">
          {/* Suite Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center sm:mb-8 md:mb-12"
          >
            <h1 className="mb-2 text-3xl font-bold text-foreground sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl">{suite.name}</h1>
            <p className="mx-auto mb-3 max-w-2xl text-sm text-muted-foreground sm:mb-4 sm:text-base md:mb-6 md:text-lg">
              {suite.description}
            </p>
            <div className="flex items-center justify-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary sm:h-5 sm:w-5 md:h-6 md:w-6" />
              ))}
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-8 overflow-hidden sm:mb-12 md:mb-16"
          >
            <div className="overflow-visible" ref={emblaRef}>
              <div className="flex">
                {suite.images.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-0 flex-[0_0_100%] px-1 sm:flex-[0_0_50%] sm:px-2 md:flex-[0_0_33.333%]"
                  >
                    <div
                      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl"
                      onClick={() => openModal(index)}
                    >
                      <img
                        src={image}
                        alt={`${suite.name} view ${index + 1}`}
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-80 md:h-96"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="rounded-full bg-primary/90 p-3 sm:p-4">
                          <span className="text-xs font-medium text-primary-foreground sm:text-sm">
                            {t.suiteDetails.clickToView}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:left-4 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:right-4 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </motion.div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2">
            {/* Left Column - Details */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl border border-border bg-card p-4 shadow-xl sm:rounded-3xl sm:p-6 md:p-8"
              >
                <h2 className="mb-2 text-xl font-bold text-foreground sm:mb-3 sm:text-2xl md:mb-4 md:text-3xl">{t.suiteDetails.location}</h2>
                <p className="text-sm text-muted-foreground sm:text-base md:text-lg">{suite.address}</p>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl border border-border bg-card p-4 shadow-xl sm:rounded-3xl sm:p-6 md:p-8"
              >
                <h2 className="mb-2 text-xl font-bold text-foreground sm:mb-3 sm:text-2xl md:mb-4 md:text-3xl">{t.suiteDetails.hours}</h2>
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-sm text-muted-foreground sm:text-base md:text-lg">{suite.hours.weekdays}</p>
                  <p className="text-sm text-muted-foreground sm:text-base md:text-lg">{suite.hours.weekend}</p>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="rounded-2xl border border-border bg-card p-4 shadow-xl sm:rounded-3xl sm:p-6"
              >
                <h2 className="mb-2 text-xl font-bold text-foreground sm:mb-3 sm:text-2xl md:mb-4 md:text-3xl">{t.suiteDetails.amenities}</h2>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                  {suite.amenities.map((amenity, index) => {
                    const Icon = amenityIcons[amenity] || Tv;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-xl bg-secondary/50 p-2.5 sm:gap-3 sm:p-3"
                      >
                        <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                        <span className="text-sm font-medium text-foreground sm:text-base">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Pricing */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {/* Weekday Pricing */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl border border-border bg-card p-4 shadow-xl sm:rounded-3xl sm:p-6 md:p-8"
              >
                <h2 className="mb-1 text-xl font-bold text-foreground sm:mb-2 sm:text-2xl md:text-3xl">{t.suiteDetails.weekdayPricing}</h2>
                <p className="mb-4 text-xs text-muted-foreground sm:mb-5 sm:text-sm md:mb-6 md:text-base">{suite.hours.weekdays}</p>
                <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{t.suiteDetails.fractionalRate}</span>
                    <span className="text-lg font-bold text-primary sm:text-xl md:text-2xl">
                      ${suite.pricing.weekdays.fractional}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{t.suiteDetails.dailyRate}</span>
                    <span className="text-lg font-bold text-primary sm:text-xl md:text-2xl">
                      ${suite.pricing.weekdays.daily}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{t.suiteDetails.overnightWeekday}</span>
                    <span className="text-lg font-bold text-primary sm:text-xl md:text-2xl">
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
                className="rounded-2xl border border-border bg-card p-4 shadow-xl sm:rounded-3xl sm:p-6 md:p-8"
              >
                <h2 className="mb-1 text-xl font-bold text-foreground sm:mb-2 sm:text-2xl md:text-3xl">{t.suiteDetails.weekendPricing}</h2>
                <p className="mb-4 text-xs text-muted-foreground sm:mb-5 sm:text-sm md:mb-6 md:text-base">{suite.hours.weekend}</p>
                <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{t.suiteDetails.fractionalRate}</span>
                    <span className="text-lg font-bold text-primary sm:text-xl md:text-2xl">
                      ${suite.pricing.weekend.fractional}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{t.suiteDetails.dailyRate}</span>
                    <span className="text-lg font-bold text-primary sm:text-xl md:text-2xl">
                      ${suite.pricing.weekend.daily}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{t.suiteDetails.overnightWeekend}</span>
                    <span className="text-lg font-bold text-primary sm:text-xl md:text-2xl">
                      ${suite.pricing.weekend.overnight}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Book Now CTA - Commented out until booking link is ready */}
              {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="rounded-2xl border border-primary bg-gradient-to-br from-primary/10 to-primary/5 p-4 text-center shadow-xl sm:rounded-3xl sm:p-5 md:p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-foreground sm:mb-3 sm:text-xl">{t.suiteDetails.readyToBook}</h3>
                <p className="mb-3 text-xs text-muted-foreground sm:mb-4 sm:text-sm">{t.suiteDetails.reserveNow}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // TODO: Add booking link when ready
                    alert('Booking system coming soon! Please call (305) 555-0123 to reserve.');
                  }}
                  className="w-full rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
                >
                  {t.suiteDetails.bookNow}
                </motion.button>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative h-full w-full max-w-7xl px-4 py-20" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-full w-full">
              <img
                src={suite.images[selectedImageIndex]}
                alt={`${suite.name} view ${selectedImageIndex + 1}`}
                className="h-full w-full object-contain"
              />

              {/* Modal Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollPrev();
                  setSelectedImageIndex((prev) => (prev === 0 ? suite.images.length - 1 : prev - 1));
                }}
                className="absolute left-4 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  scrollNext();
                  setSelectedImageIndex((prev) => (prev === suite.images.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-4 top-1/2 z-10 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-card/90 px-6 py-2 backdrop-blur-sm">
                <span className="text-sm font-medium text-foreground">
                  {selectedImageIndex + 1} / {suite.images.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
