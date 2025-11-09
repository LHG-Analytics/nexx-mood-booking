import { motion } from "framer-motion";

const ADASection = () => {
  return (
    <section className="py-20 px-6 bg-ada-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-9xl font-bold text-white mb-4">
              ADA
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-motel-pink">
              Accessible Features
            </h3>
            <h3 className="text-3xl md:text-4xl font-bold text-motel-pink mb-6">
              and Amenities
            </h3>
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
              NEXX Motels, Unique Motel and Yes Motel are compliant with the
              Department of Justice 2010 ADA Standards for Accessible Design. We
              welcome guests of all abilities. Our property descriptions aim to
              allow any visitor to make an informed decision on whether the hotel
              is an appropriate choice for their needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ADASection;
