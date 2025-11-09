"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useRef } from "react";
import Link from "next/link";

const SuiteCarousel = () => {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplayRef.current]);

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

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {suites.map((suite, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%]"
                >
                  <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={suite.image}
                        alt={suite.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="mb-2 text-2xl font-bold text-foreground">{suite.name}</h3>

                      <div className="mb-4 flex items-center gap-1">
                        {[...Array(suite.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>

                      <ul className="mb-6 space-y-2">
                        {suite.amenities.map((amenity, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {amenity}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-foreground">${suite.price}</span>
                          <span className="text-muted-foreground">/night</span>
                        </div>
                        <Link href={`/suites/${suite.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
                          >
                            VIEW →
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuiteCarousel;
