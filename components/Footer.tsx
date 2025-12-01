"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { useMotel } from "@/contexts/MotelContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

const Footer = () => {
  const config = useMotel();
  const { t } = useLanguage();

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
              {t.footer.location}
            </h3>
            <p className="text-muted-foreground">
              {config.contact.address.street}
              <br />
              {config.contact.address.city}, {config.contact.address.state} {config.contact.address.zip}
            </p>
            <a
              href={config.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              {t.footer.getDirections}
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
              {t.footer.contact}
            </h3>
            <p className="mb-2 text-muted-foreground">{t.footer.phone}: {config.contact.phone}</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{config.contact.email}</span>
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
              {t.footer.hours}
            </h3>
            <p className="text-muted-foreground">
              {t.footer.frontDesk}: {config.contact.hours}
            </p>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8">
          {/* Language Selector */}
          <div className="mb-6 flex justify-center">
            <LanguageSelector />
          </div>

          <div className="mb-4 flex justify-center">
            <a
              href={config.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="font-medium">{config.contact.instagram}</span>
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2025 {config.name}. {t.footer.allRightsReserved}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
