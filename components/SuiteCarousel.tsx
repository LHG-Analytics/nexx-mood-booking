"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { TiltedCard } from "./ui/tilted-card";
import { useMotel } from "@/contexts/MotelContext";
import { useLanguage } from "@/contexts/LanguageContext";

const SuiteCarousel = () => {
  const config = useMotel();
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [autoplayRef.current]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (autoplayRef.current) {
      autoplayRef.current.stop();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (autoplayRef.current) {
      autoplayRef.current.play();
    }
  }, []);

  // Get suites from config
  const suitesBase = config.suites;

  // Duplicate slides for smoother infinite loop
  const suites = [...suitesBase, ...suitesBase];

  return (
    <section className="overflow-x-hidden bg-secondary/20 px-4 py-12 sm:px-6 sm:py-20" id="rooms">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12"
        >
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:mb-4 sm:text-4xl md:text-5xl">{t.suites.title}</h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            {t.suites.subtitle}
          </p>
        </motion.div>

        <div
          className="relative px-1 py-6 sm:px-2 sm:py-8 md:px-4 md:py-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel */}
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex">
              {suites.map((suite, index) => (
                <div
                  key={index}
                  className="flex min-w-0 flex-[0_0_100%] items-center px-1 sm:flex-[0_0_50%] sm:px-2 lg:flex-[0_0_33.333%] lg:px-2"
                >
                  <TiltedCard className="w-full h-[560px] sm:h-[580px] md:h-[600px]">
                    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xl transition-all duration-300 hover:shadow-2xl sm:rounded-2xl">
                      <div className="relative h-48 flex-shrink-0 overflow-hidden xs:h-52 sm:h-56 md:h-60">
                        <img
                          src={suite.image}
                          alt={suite.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      <div className="flex flex-1 flex-col justify-between p-4 xs:p-5 sm:p-6 md:p-7">
                        <div>
                          <h3 className="mb-1 line-clamp-1 text-base font-bold text-foreground xs:text-lg sm:mb-2 sm:text-xl md:text-2xl">
                            {suite.name}
                          </h3>

                          <div className="mb-2 flex items-center gap-0.5 xs:mb-2.5 sm:mb-3 sm:gap-1">
                            {[...Array(suite.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-3 w-3 fill-primary text-primary xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5"
                              />
                            ))}
                          </div>

                          <div className="min-h-[70px] xs:min-h-[75px] sm:min-h-[80px]">
                            <ul className="grid grid-cols-2 gap-1 xs:gap-1.5 sm:gap-2">
                              {suite.amenities.slice(0, 6).map((amenity, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-1.5 text-[10px] text-muted-foreground xs:text-[11px] sm:gap-2 sm:text-xs md:text-sm"
                                  style={suite.amenities.length === 4 && i === 3 ? { gridColumn: '2' } : {}}
                                >
                                  <div className="h-1 w-1 flex-shrink-0 rounded-full bg-primary xs:h-1.5 xs:w-1.5 sm:h-1.5 sm:w-1.5" />
                                  <span className="line-clamp-1">{amenity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-3 flex flex-col gap-2 xs:mt-4 xs:gap-2.5 sm:mt-5 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-baseline gap-1 xs:gap-1.5">
                            <span className="text-lg font-bold text-foreground xs:text-xl sm:text-2xl md:text-3xl">
                              ${suite.price}
                            </span>
                            <span className="text-[10px] text-muted-foreground xs:text-[11px] sm:text-xs md:text-sm">{t.suites.perNight}</span>
                          </div>
                          <Link
                            href={`/suites/${suite.id}`}
                            className="relative z-10 w-full sm:w-auto"
                            style={{ pointerEvents: 'auto' }}
                          >
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full rounded-full bg-primary px-4 py-2 text-[10px] font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl xs:px-4 xs:text-[11px] sm:px-5 sm:py-2.5 sm:text-xs md:px-6 md:py-3 md:text-sm"
                              style={{ pointerEvents: 'auto' }}
                            >
                              {t.suites.viewButton}
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TiltedCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Only visible on hover (desktop) or always visible (mobile) */}
          <motion.button
            onClick={scrollPrev}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:h-10 sm:w-10 md:flex lg:h-12 lg:w-12"
            style={{ pointerEvents: isHovered ? "auto" : "none" }}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:h-10 sm:w-10 md:flex lg:h-12 lg:w-12"
            style={{ pointerEvents: isHovered ? "auto" : "none" }}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SuiteCarousel;
