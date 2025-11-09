"use client";
import { motion } from "framer-motion";

const ADASection = () => {
  return (
    <section className="relative overflow-hidden bg-ada-purple px-6 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-7xl font-bold text-white md:text-9xl">ADA</h2>
            <h3 className="text-3xl font-bold text-motel-pink md:text-4xl">Accessible Features</h3>
            <h3 className="mb-6 text-3xl font-bold text-motel-pink md:text-4xl">and Amenities</h3>
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
              Mood Motel is compliant with the Department of Justice 2010 ADA Standards for
              Accessible Design. We welcome guests of all abilities. Our property descriptions aim
              to allow any visitor to make an informed decision on whether the hotel is an
              appropriate choice for their needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ADASection;
