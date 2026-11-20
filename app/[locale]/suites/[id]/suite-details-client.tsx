"use client";

import { motion } from "framer-motion";
import { Star, ArrowLeft, Tv, Radio, Droplets, Wine, Users, Sofa, Bath, Frame, Cross, ZoomIn, ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useLanguage, translateWithVars } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import { PhotoLightbox } from "@/components/PhotoLightbox";
import { getImageAlt } from "@/lib/imageAlt";
import { useUnit } from "@/contexts/UnitContext";

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
  unitId?: string;
  unitName?: string; // e.g. "Nexx Motel Homestead", for motels with several units
  phone: string;
  overnightWeekendLabel: string; // Weekend overnight starts at 11PM or 2AM depending on the unit
  fractionalBookingWindows?: string; // Already formatted, e.g. "8 AM–11 AM, 4 PM–7 PM and 11 PM–2 AM"
}

// Unmapped amenities fall back to the TV icon below, which is silently wrong,
// so every label used in motels.config.ts needs an entry here.
const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  TV: Tv,
  RADIO: Radio,
  "MINI BAR": Wine,
  "LOVE SEAT": Sofa,
  SHOWER: Droplets,
  "SINGLE SHOWER": Droplets,
  "DOUBLE SHOWER": Droplets,
  "CRYSTAL SHOWER": Droplets,
  "SINGLE CRYSTAL SHOWER": Droplets,
  "DOUBLE CRYSTAL SHOWER": Droplets,
  "ONE SHOWER": Droplets,
  POLE: Users,
  "POLE DANCE": Users,
  JACUZZI: Droplets,
  "SPA BATHTUB": Bath,
  "MIRRORED CEILING": Frame,
  "BONDAGE CROSS": Cross,
  "MOOD LIGHTING": Lightbulb,
};

export default function SuiteDetailsClient({ suite }: { suite: Suite }) {
  const { t, locale, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { setUnitId } = useUnit();

  // Opening a Homestead suite makes Homestead the visitor's unit, so going
  // back to the home page shows the same location
  useEffect(() => {
    if (suite.unitId) setUnitId(suite.unitId);
  }, [suite.unitId, setUnitId]);

  const totalImages = suite.images.length;
  const imageAlts = suite.images.map((src, index) =>
    getImageAlt(
      src,
      language,
      translateWithVars(t.suiteDetails.photoAlt, {
        suiteName: suite.name,
        n: String(index + 1),
        total: String(totalImages),
      })
    )
  );

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

  const changeModalImage = useCallback((index: number) => {
    setSelectedImageIndex(index);
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Return focus to the thumbnail of the photo last shown, not the one that
  // opened the dialog, so keyboard users continue from where they were
  const returnFocusToThumbnail = useCallback((event: Event) => {
    event.preventDefault();
    thumbnailRefs.current[selectedImageIndex]?.focus();
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      {/* Header with Back Button */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          {/* One link: it used to wrap a <button>, two nested controls
              that took two Tab stops for one action */}
          <Link
            href={`/${locale}#rooms`}
            className="flex items-center gap-1 rounded-md text-sm text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-2 sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            <span className="hidden xs:inline">{t.suiteDetails.backToSuites}</span>
            <span className="xs:hidden">{t.suiteDetails.back}</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">${suite.price}</span>
            <span className="text-xs text-muted-foreground sm:text-sm md:text-base">{t.suiteDetails.startingFrom}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="overflow-x-hidden px-4 pb-12 pt-20 outline-none sm:px-6 sm:pb-20 sm:pt-32">
        <div className="container mx-auto">
          {/* Suite Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center sm:mb-8 md:mb-12"
          >
            <h1 className="mb-2 text-3xl font-bold text-foreground sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl">{suite.name}</h1>
            {suite.unitName && (
              <p className="mb-2 text-base font-semibold text-foreground sm:mb-3 sm:text-lg">{suite.unitName}</p>
            )}
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
                    {/* A real button: the clickable div it replaced could not
                        be reached or opened from the keyboard (WCAG 2.1.1) */}
                    <button
                      type="button"
                      ref={(el) => { thumbnailRefs.current[index] = el; }}
                      onClick={() => openModal(index)}
                      className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl text-left shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:rounded-3xl"
                    >
                      <span className="sr-only">
                        {translateWithVars(t.suiteDetails.enlargePhoto, {
                          n: String(index + 1),
                          total: String(totalImages),
                        })}
                        {": "}
                      </span>
                      <div className="relative h-64 w-full sm:h-80 md:h-96">
                        <Image
                          src={image}
                          alt={imageAlts[index]}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          priority={index < 2}
                          loading={index < 2 ? undefined : "lazy"}
                          fetchPriority={index === 0 ? "high" : index === 1 ? "high" : "low"}
                          quality={85}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      {/* An icon rather than "Click to view": visible text that
                          isn't part of the button's name breaks WCAG 2.5.3 */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                      >
                        <div className="rounded-full bg-primary/90 p-3 sm:p-4">
                          <ZoomIn className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              type="button"
              onClick={scrollPrev}
              aria-label={t.suiteDetails.previousPhoto}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:left-4 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label={t.suiteDetails.nextPhoto}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:right-4 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
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
                <a
                  href={`tel:+1${suite.phone.replace(/\D/g, "")}`}
                  className="mt-1 inline-block text-sm text-foreground underline-offset-4 hover:text-primary hover:underline sm:text-base md:text-lg"
                >
                  {suite.phone}
                </a>
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
                  {suite.fractionalBookingWindows && (
                    <p className="text-sm text-foreground sm:text-base md:text-lg">
                      {translateWithVars(t.suiteDetails.fractionalBookingWindows, { windows: suite.fractionalBookingWindows })}
                    </p>
                  )}
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
                    <span className="text-xl font-bold text-primary md:text-2xl">
                      ${suite.pricing.weekdays.fractional}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{t.suiteDetails.dailyRate}</span>
                    <span className="text-xl font-bold text-primary md:text-2xl">
                      ${suite.pricing.weekdays.daily}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{t.suiteDetails.overnightWeekday}</span>
                    <span className="text-xl font-bold text-primary md:text-2xl">
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
                    <span className="text-xl font-bold text-primary md:text-2xl">
                      ${suite.pricing.weekend.fractional}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{t.suiteDetails.dailyRate}</span>
                    <span className="text-xl font-bold text-primary md:text-2xl">
                      ${suite.pricing.weekend.daily}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-secondary/50 p-3 sm:p-4">
                    <span className="text-xs font-medium text-foreground sm:text-sm md:text-base">{suite.overnightWeekendLabel}</span>
                    <span className="text-xl font-bold text-primary md:text-2xl">
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
      </main>

      <PhotoLightbox
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title={translateWithVars(t.suiteDetails.photosOf, { suiteName: suite.name })}
        images={suite.images}
        alts={imageAlts}
        index={selectedImageIndex}
        onIndexChange={changeModalImage}
        onCloseAutoFocus={returnFocusToThumbnail}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
