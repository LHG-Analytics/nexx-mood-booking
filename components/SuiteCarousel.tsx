"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TiltedCard } from "./ui/tilted-card";
import { useMotel } from "@/contexts/MotelContext";
import { useLanguage } from "@/contexts/LanguageContext";

const SuiteCarousel = () => {
  const config = useMotel();
  const { t, locale } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  // A card sliding under the pointer makes the VIEW button miss its target, so
  // the first time the visitor reaches the carousel we stop autoplay for good.
  // Resuming it on mouseleave only sets the same trap again.
  const autoplayDisabled = useRef(false);

  const disableAutoplay = useCallback(() => {
    if (autoplayDisabled.current) return; // keeps this cheap on pointermove
    autoplayDisabled.current = true;
    autoplayRef.current?.stop();
  }, []);

  // Touch devices never fire mouseenter, so `stopOnMouseEnter` never pauses the
  // carousel there and taps on VIEW land beside the button. No autoplay at all.
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      disableAutoplay();
    }
  }, [disableAutoplay]);

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
    disableAutoplay();
  }, [disableAutoplay]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // The whole card is a link, so dragging the carousel sideways would otherwise
  // open a suite on release. Embla's own click guard did not stop it here, so
  // compare where the pointer went down against where it came up and drop the
  // navigation if it travelled far enough to count as a drag.
  const pointerOrigin = useRef<{ x: number; y: number } | null>(null);

  const handleCardPointerDown = useCallback((event: React.PointerEvent) => {
    pointerOrigin.current = { x: event.clientX, y: event.clientY };
  }, []);

  const handleCardClick = useCallback((event: React.MouseEvent) => {
    const origin = pointerOrigin.current;
    if (!origin) return;
    const travelled =
      Math.abs(event.clientX - origin.x) + Math.abs(event.clientY - origin.y);
    if (travelled > 10) event.preventDefault();
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
          onPointerDown={disableAutoplay}
          // mouseenter never fires when the page scrolls the carousel up under a
          // stationary cursor, so aiming at a card would still hit a moving target.
          onPointerMove={disableAutoplay}
        >
          {/* Carousel */}
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex">
              {suites.map((suite, index) => (
                <div
                  key={index}
                  className="flex min-w-0 flex-[0_0_100%] items-center px-1 sm:flex-[0_0_50%] sm:px-2 lg:flex-[0_0_33.333%] lg:px-2"
                >
                  {/* The tilt spring keeps moving the card for ~700ms after the
                      pointer stops (measured 12px across, 19px down), which used
                      to make the 44px VIEW button impossible to hit. The whole
                      card is the link now, so the target is ~600px tall and that
                      drift no longer matters. select-none keeps the drift from
                      turning a click into a text selection. */}
                  <TiltedCard className="w-full h-[560px] sm:h-[580px] md:h-[600px]">
                    <Link
                      href={`/${locale}/suites/${suite.id}`}
                      aria-label={`${suite.name} — ${t.suiteDetails.clickToView}`}
                      className="group block h-full w-full select-none"
                      onPointerDown={handleCardPointerDown}
                      onClick={handleCardClick}
                    >
                    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-xl transition-all duration-300 hover:shadow-2xl sm:rounded-2xl">
                      <div className="relative h-48 flex-shrink-0 overflow-hidden xs:h-52 sm:h-56 md:h-60">
                        <Image
                          src={suite.image}
                          alt={`${suite.name} - ${config.name}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          quality={85}
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
                            <span className="text-[10px] text-muted-foreground xs:text-[11px] sm:text-xs md:text-sm">
                              {t.suites.priceUnit}
                              {/* Marker for the weekday footnote below the carousel */}
                              <span aria-hidden="true">*</span>
                            </span>
                          </div>
                          {/* A span, not a nested link: the card itself is the
                              anchor, and an <a> inside an <a> is invalid HTML.
                              It reacts to group-hover so hovering anywhere on
                              the card shows the card is clickable. */}
                          <span className="w-full rounded-full bg-primary px-4 py-2 text-center text-[10px] font-medium text-primary-foreground shadow-lg transition-transform duration-200 group-hover:scale-105 xs:px-4 xs:text-[11px] sm:w-auto sm:px-5 sm:py-2.5 sm:text-xs md:px-6 md:py-3 md:text-sm">
                            {t.suites.viewButton}
                          </span>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </TiltedCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Only visible on hover (desktop) or always visible (mobile) */}
          <motion.button
            onClick={scrollPrev}
            aria-label="Previous suite"
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
            aria-label="Next suite"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:h-10 sm:w-10 md:flex lg:h-12 lg:w-12"
            style={{ pointerEvents: isHovered ? "auto" : "none" }}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          </motion.button>
        </div>

        {/* Explains the asterisk next to every card price */}
        <p className="mt-1 text-center text-[11px] text-muted-foreground sm:mt-2 sm:text-xs">
          {t.suites.weekdayNote}
        </p>
      </div>
    </section>
  );
};

export default SuiteCarousel;
