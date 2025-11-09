import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";

const HumanTraffickingSection = () => {
  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Logo/Icon */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full border-4 border-white/20 flex items-center justify-center mb-6">
                <HandHeart className="w-24 h-24 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                HUMAN TRAFFICKING
              </h2>
              <h3 className="text-3xl md:text-4xl font-light text-white tracking-widest">
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
              Mood Motel is staunchly committed to the fight against human
              trafficking, understanding the critical role the hospitality industry
              plays in this battle. Mood Motel has implemented training and
              educational campaigns, crafted to ensure that both managers and staff
              across all Mood Motel locations are thoroughly equipped. The
              training focuses on identifying and understanding the signs of human
              trafficking, ensuring that employees are not only vigilant but also
              knowledgeable about the appropriate actions to take in potential
              situations. This commitment underscores Mood Motel's dedication to
              safeguarding the welfare of individuals and communities, reinforcing
              its standing as a responsible and ethical leader in the hospitality
              sector.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HumanTraffickingSection;
