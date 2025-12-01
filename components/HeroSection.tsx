"use client";

import { motion } from "framer-motion";
import { useMotel } from "@/contexts/MotelContext";
import { useLanguage, translateWithVars } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const config = useMotel();
  const { t } = useLanguage();
  const images = config.assets.heroImages;

  return (
    <section className="relative min-h-screen px-4 pb-12 pt-24 sm:px-6 sm:pb-20 sm:pt-32" id="home">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="mb-1 text-lg font-light text-foreground sm:mb-2 sm:text-2xl md:text-3xl">{t.hero.welcomeTo}</h2>
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-6xl md:text-8xl">
                {config.displayName}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-lg text-sm text-muted-foreground sm:text-base md:text-lg"
            >
              {translateWithVars(t.hero.description, { motelName: config.name })}
            </motion.p>

            {/* Mobile Image Grid - Between text and button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-3 lg:hidden"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    duration: 0.5,
                  }}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-xl"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-2 sm:pt-4"
            >
              <motion.a
                href="#rooms"
                className="inline-block rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg sm:px-8 sm:py-4 sm:text-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(217, 70, 239, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.exploreRooms}
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Image Grid (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden grid-cols-2 gap-4 lg:grid lg:gap-6"
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
              <div className="text-xs font-bold text-primary">{t.hero.luxuryBadge.luxury}</div>
              <div className="text-xs text-muted-foreground">{t.hero.luxuryBadge.boutique}</div>
              <div className="text-xs font-bold text-primary">{t.hero.luxuryBadge.motel}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
