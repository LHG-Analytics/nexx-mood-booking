"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="container mx-auto">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 flex items-center gap-2 font-bold text-foreground">
              <MapPin className="h-5 w-5 text-primary" />
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
              className="mt-2 inline-block text-sm text-primary hover:underline"
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
            <h3 className="mb-4 flex items-center gap-2 font-bold text-foreground">
              <Phone className="h-5 w-5 text-primary" />
              Contact
            </h3>
            <p className="mb-2 text-muted-foreground">Phone: (305) 555-0123</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@moodmotel.com</span>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 flex items-center gap-2 font-bold text-foreground">
              <Clock className="h-5 w-5 text-primary" />
              Hours
            </h3>
            <p className="text-muted-foreground">
              Check-in: 3:00 PM
              <br />
              Check-out: 11:00 AM
              <br />
              Front Desk: 24/7
            </p>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="mb-4 flex justify-center">
            <a
              href="https://www.instagram.com/moodmotel"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="font-medium">@moodmotel</span>
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2025 Mood Motel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
