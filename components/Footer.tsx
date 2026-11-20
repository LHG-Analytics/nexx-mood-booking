"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import { useMotel } from "@/contexts/MotelContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUnit } from "@/contexts/UnitContext";
import { getUnitContact } from "@/lib/units";
import { LanguageSelector } from "./LanguageSelector";

const Footer = () => {
  const config = useMotel();
  const { t } = useLanguage();
  const { unitId } = useUnit();
  // Multi-location motels show only the selected unit's address, phone and
  // Instagram (if it has its own); e-mail and Facebook are the brand's
  const place = getUnitContact(config, unitId);
  const telHref = `tel:+1${place.phone.replace(/\D/g, '')}`;

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
            {unitId && <p className="mb-1 font-semibold text-foreground">{place.name}</p>}
            <p className="text-muted-foreground">
              {place.address.street}
              <br />
              {place.address.city}, {place.address.state} {place.address.zip}
            </p>
            <a
              href={place.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              {t.footer.getDirections}
            </a>
            {/* Units are switched with the selector, so only list other
                locations that aren't units */}
            {config.contact.otherLocations?.filter((location) => !location.unitId).map((location) => (
              <div key={location.address.full} className="mt-6">
                <p className="mb-1 font-semibold text-foreground">{location.name}</p>
                <p className="text-muted-foreground">
                  {location.address.street}
                  <br />
                  {location.address.city}, {location.address.state} {location.address.zip}
                </p>
                {location.phone && (
                  <a
                    href={`tel:+1${location.phone.replace(/\D/g, '')}`}
                    className="block text-muted-foreground transition-colors hover:text-primary"
                  >
                    {location.phone}
                  </a>
                )}
                {location.hours && (
                  <p className="text-muted-foreground">
                    {t.footer.frontDesk}: {location.hours}
                  </p>
                )}
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-primary hover:underline"
                >
                  {t.footer.getDirections}
                </a>
              </div>
            ))}
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
            <div className="mb-2 flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <a href={telHref} className="transition-colors hover:text-primary">
                {place.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${config.contact.email}`}
                className="transition-colors hover:text-primary"
              >
                {config.contact.email}
              </a>
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
              {t.footer.frontDesk}: {place.hours}
            </p>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8">
          {/* Language Selector */}
          <div className="mb-6 flex justify-center">
            <LanguageSelector />
          </div>

          <div className="mb-4 flex justify-center gap-6">
            <a
              href={place.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span className="font-medium">{place.instagram}</span>
            </a>
            {config.contact.facebookUrl && (
              <a
                href={config.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-6 w-6 transition-transform group-hover:scale-110" />
                <span className="font-medium">Facebook</span>
              </a>
            )}
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
