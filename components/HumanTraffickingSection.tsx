"use client";
import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import { useMotel } from "@/contexts/MotelContext";
import { useLanguage, translateWithVars } from "@/contexts/LanguageContext";

const HumanTraffickingSection = () => {
  const config = useMotel();
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-black px-6 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-10 top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 left-10 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Left Side - Logo/Icon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="relative">
              <div className="mb-6 flex h-48 w-48 items-center justify-center rounded-full border-4 border-white/20">
                <HandHeart className="h-24 w-24 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-wide text-white md:text-5xl">
                {t.trafficking.title}
              </h2>
              <h3 className="text-3xl font-light tracking-widest text-white md:text-4xl">
                {t.trafficking.subtitle}
              </h3>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <p className="text-lg leading-relaxed">
              {translateWithVars(t.trafficking.description, { motelName: config.name })}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HumanTraffickingSection;
