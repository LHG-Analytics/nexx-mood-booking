import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback } from "react";
import motelRoom1 from "@/assets/motel-room-1.jpg";
import motelExterior1 from "@/assets/motel-exterior-1.jpg";
import motelInterior1 from "@/assets/motel-interior-1.jpg";

const SuiteCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const suites = [
    {
      name: "Deluxe Suite",
      image: motelRoom1,
      price: 60,
      rating: 5,
      amenities: ["King Size Bed", "Smart TV", "Private Bathroom", "Mini Bar"],
    },
    {
      name: "Executive Suite",
      image: motelExterior1,
      price: 85,
      rating: 5,
      amenities: ["King Size Bed", "Living Area", "Premium Bathroom", "Mini Bar"],
    },
    {
      name: "Premium Suite",
      image: motelInterior1,
      price: 75,
      rating: 5,
      amenities: ["Queen Bed", "Work Desk", "Private Bathroom", "Coffee Maker"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20" id="rooms">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Suites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={suite.image}
                        alt={suite.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {suite.name}
                      </h3>

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(suite.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      <ul className="space-y-2 mb-6">
                        {suite.amenities.map((amenity, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {amenity}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-foreground">
                            ${suite.price}
                          </span>
                          <span className="text-muted-foreground">/night</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
                        >
                          Book Now →
                        </motion.button>
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card hover:bg-primary text-foreground hover:text-primary-foreground w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 border border-border"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card hover:bg-primary text-foreground hover:text-primary-foreground w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 border border-border"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuiteCarousel;
