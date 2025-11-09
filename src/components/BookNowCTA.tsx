import { motion } from "framer-motion";
import { DollarSign, Sparkles, ArrowRight } from "lucide-react";

const BookNowCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-8 right-8 z-40 hidden lg:block"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-card rounded-3xl shadow-2xl p-6 border-2 border-primary/20 max-w-sm"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Stay longer, save more
            </p>
            <h3 className="text-3xl font-bold text-foreground flex items-center gap-2">
              Book Now
              <ArrowRight className="w-8 h-8 text-primary" />
            </h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-primary" />
          </div>
        </div>

        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(217, 70, 239, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          Reserve Now
        </motion.button>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-medium">Today's Suggestion</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookNowCTA;
