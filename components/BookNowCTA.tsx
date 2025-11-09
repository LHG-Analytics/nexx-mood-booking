"use client";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Sparkles, ArrowRight, X } from "lucide-react";
import { useState } from "react";

const BookNowCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6 }}
        className="fixed bottom-8 right-8 z-40 hidden lg:block"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative max-w-sm rounded-3xl border-2 border-primary/20 bg-card p-6 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-foreground" />
          </button>

          <div className="mb-4 flex items-start justify-between pr-8">
            <div>
              <p className="mb-1 text-sm text-muted-foreground">Stay longer, save more</p>
              <h3 className="flex items-center gap-2 text-3xl font-bold text-foreground">
                Book Now
                <ArrowRight className="h-8 w-8 text-primary" />
              </h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>

          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(217, 70, 239, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-2xl bg-primary py-4 text-lg font-bold text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
          >
            Reserve Now
          </motion.button>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-medium">Today's Suggestion</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookNowCTA;
