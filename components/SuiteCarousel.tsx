"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { TiltedCard } from "./ui/tilted-card";

const SuiteCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    autoplayRef.current,
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const suites = [
    {
      id: "nexx",
      name: "Suite Nexx",
      image: "/assets/motel-room-1.jpg",
      price: 55,
      rating: 5,
      amenities: ["TV", "RADIO", "SINGLE SHOWER", "MINI BAR"],
    },
    {
      id: "nexx-plus",
      name: "Suite Nexx Plus",
      image: "/assets/room-2.jpg",
      price: 59,
      rating: 5,
      amenities: ["TV", "RADIO", "POLE", "MINI BAR", "DOUBLE SHOWER"],
    },
    {
      id: "jacuzzi",
      name: "Suite Jacuzzi",
      image: "/assets/room-3.jpg",
      price: 79,
      rating: 5,
      amenities: ["TV", "RADIO", "MINI BAR", "DOUBLE SHOWER", "POLE", "JACUZZI"],
    },
    {
      id: "vip",
      name: "Suite VIP",
      image: "/assets/room-4.jpg",
      price: 125,
      rating: 5,
      amenities: ["TV", "RADIO", "MINI BAR", "DOUBLE CRYSTAL SHOWER", "POLE", "SPA BATHTUP"],
    },
  ];

  return (
    <section className="bg-secondary/20 px-6 py-20" id="rooms">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Our Suites</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover comfort and luxury in our carefully designed suites
          </p>
        </motion.div>

        <div
          className="relative px-4 md:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {suites.map((suite, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_calc(100%-2rem)] pl-4 sm:flex-[0_0_calc(50%-1.5rem)] lg:flex-[0_0_calc(33.333%-1.5rem)]"
                >
                  <TiltedCard className="h-full w-full">
                    <div className="flex h-[580px] w-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all duration-300 hover:shadow-2xl sm:h-[600px]">
                      <div className="relative h-56 flex-shrink-0 overflow-hidden sm:h-64">
                        <img
                          src={suite.image}
                          alt={suite.name}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      <div className="flex flex-1 flex-col p-4 sm:p-6">
                        <h3 className="mb-2 line-clamp-1 text-xl font-bold text-foreground sm:text-2xl">
                          {suite.name}
                        </h3>

                        <div className="mb-3 flex items-center gap-1 sm:mb-4">
                          {[...Array(suite.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-primary text-primary sm:h-5 sm:w-5"
                            />
                          ))}
                        </div>

                        <ul className="mb-4 min-h-[140px] space-y-1.5 sm:mb-6 sm:space-y-2">
                          {suite.amenities.map((amenity, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm"
                            >
                              <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                              <span className="line-clamp-1">{amenity}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-foreground sm:text-3xl">
                              ${suite.price}
                            </span>
                            <span className="text-sm text-muted-foreground">/night</span>
                          </div>
                          <Link href={`/suites/${suite.id}`} className="w-full sm:w-auto">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl sm:px-6 sm:py-3 sm:text-base"
                            >
                              VIEW →
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

          {/* Navigation Buttons - Only visible on hover */}
          <motion.button
            onClick={scrollPrev}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:left-2 sm:h-12 sm:w-12 md:flex"
            style={{ pointerEvents: isHovered ? "auto" : "none" }}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.button>
          <motion.button
            onClick={scrollNext}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-xl backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground sm:right-2 sm:h-12 sm:w-12 md:flex"
            style={{ pointerEvents: isHovered ? "auto" : "none" }}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SuiteCarousel;
