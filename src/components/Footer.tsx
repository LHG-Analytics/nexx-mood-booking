import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Location
            </h3>
            <p className="text-muted-foreground">
              11102 Biscayne Blvd
              <br />
              Miami, FL 33181
            </p>
            <a
              href="https://google.com/maps/dir//11102+Biscayne+Blvd,+Miami,+FL+33181/@25.8784223,-80.1683391,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm mt-2 inline-block"
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Contact
            </h3>
            <p className="text-muted-foreground mb-2">Phone: (305) 555-0123</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@nexxmotel.com</span>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-foreground mb-4">Hours</h3>
            <p className="text-muted-foreground">
              Check-in: 3:00 PM
              <br />
              Check-out: 11:00 AM
              <br />
              Front Desk: 24/7
            </p>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Nexx Motel Biscayne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
