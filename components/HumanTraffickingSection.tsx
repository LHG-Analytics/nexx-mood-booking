"use client";
import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";

const HumanTraffickingSection = () => {
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
                HUMAN TRAFFICKING
              </h2>
              <h3 className="text-3xl font-light tracking-widest text-white md:text-4xl">
                AWARENESS
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
              Mood Motel is staunchly committed to the fight against human trafficking,
              understanding the critical role the hospitality industry plays in this battle. Mood
              Motel has implemented training and educational campaigns, crafted to ensure that both
              managers and staff across all Mood Motel locations are thoroughly equipped. The
              training focuses on identifying and understanding the signs of human trafficking,
              ensuring that employees are not only vigilant but also knowledgeable about the
              appropriate actions to take in potential situations. This commitment underscores Mood
              Motel's dedication to safeguarding the welfare of individuals and communities,
              reinforcing its standing as a responsible and ethical leader in the hospitality
              sector.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HumanTraffickingSection;
