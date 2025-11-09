import { motion } from "framer-motion";
import motelExterior1 from "@/assets/motel-exterior-1.jpg";
import motelInterior1 from "@/assets/motel-interior-1.jpg";
import motelRoom1 from "@/assets/motel-room-1.jpg";
import motelExterior2 from "@/assets/motel-exterior-2.jpg";

const HeroSection = () => {
  const images = [
    motelExterior1,
    motelInterior1,
    motelRoom1,
    motelExterior2,
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative" id="home">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-2">
                Hotel
              </h2>
              <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight">
                BOOKING
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              The Star Hotel was reopened to visitors in 2016. The building was
              renovated and modernized to meet the expectations of the most
              demanding guests.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4"
            >
              <motion.a
                href="#rooms"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg shadow-lg"
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
                className="relative aspect-square rounded-full overflow-hidden shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Motel view ${index + 1}`}
                  className="w-full h-full object-cover"
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
        className="hidden lg:block absolute right-[15%] top-[45%] transform translate-x-1/2"
      >
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow" />
          <div className="absolute inset-2 rounded-full bg-card border border-border flex items-center justify-center shadow-xl">
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
