import { motion } from "framer-motion";
import { Calendar, MapPin, DollarSign, Clock } from "lucide-react";

const CheckAvailability = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-3xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:mx-0 border border-border"
    >
      <h3 className="text-xl font-bold mb-6 text-foreground">Check Availability</h3>

      {/* Check In */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-status-checkIn/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-status-checkIn" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Check In</p>
            <p className="text-sm text-muted-foreground">Feb 12, 18:36</p>
          </div>
        </div>
        <div className="flex gap-1 ml-12">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-status-checkIn/40" />
          ))}
        </div>
      </div>

      {/* Check Out */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-status-checkOut/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-status-checkOut" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Check Out</p>
            <p className="text-sm text-muted-foreground">Feb 12, 18:36</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-secondary/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-status-services" />
            <p className="text-xs text-muted-foreground">Services</p>
          </div>
          <p className="text-2xl font-bold text-foreground">46+</p>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-status-price" />
            <p className="text-xs text-muted-foreground">Price</p>
          </div>
          <p className="text-2xl font-bold text-foreground">60$</p>
        </div>
      </div>

      {/* Mini Map */}
      <div className="relative bg-secondary/30 rounded-xl overflow-hidden h-48 mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.364!2d-80.1683391!3d25.8784223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b21383ba37a3%3A0x433a99e8738d4de8!2s11102%20Biscayne%20Blvd%2C%20Miami%2C%20FL%2033181!5e0!3m2!1sen!2sus!4v1234567890"
          className="w-full h-full border-0"
          loading="lazy"
          title="Motel Location"
        />
        <div className="absolute top-3 right-3 bg-card rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">20 min</span>
        </div>
        <div className="absolute bottom-3 left-3 bg-card rounded-xl px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-xs font-medium text-foreground">EXCELSIOR</p>
          </div>
          <p className="text-xs text-muted-foreground">DISTRICT</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckAvailability;
