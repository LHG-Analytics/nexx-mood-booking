"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  const images = [
    "/assets/room-1.jpg",
    "/assets/room-2.jpg",
    "/assets/room-3.jpg",
    "/assets/room-4.jpg",
  ];

  return (
    <section className="relative min-h-screen px-6 pb-20 pt-32" id="home">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="mb-2 text-2xl font-light text-foreground md:text-3xl">Welcome to</h2>
              <h1 className="text-6xl font-bold leading-tight text-foreground md:text-8xl">
                MOOD MOTEL
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-lg text-lg text-muted-foreground"
            >
              Experience luxury and comfort at Mood Motel. Our modern suites feature stunning LED
              lighting, premium amenities, and contemporary design to create the perfect atmosphere
              for your stay.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4"
            >
              <motion.a
                href="#rooms"
                className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(217, 70, 239, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Rooms
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 lg:gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative aspect-square overflow-hidden rounded-full shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Motel view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute right-[15%] top-[45%] hidden translate-x-1/2 transform lg:block"
      >
        <div className="relative h-32 w-32">
          <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-primary/30" />
          <div className="absolute inset-2 flex items-center justify-center rounded-full border border-border bg-card shadow-xl">
            <div className="text-center">
              <div className="text-xs font-bold text-primary">LUXURY</div>
              <div className="text-xs text-muted-foreground">BOUTIQUE</div>
              <div className="text-xs font-bold text-primary">MOTEL</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
