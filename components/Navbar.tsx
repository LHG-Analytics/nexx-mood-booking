"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useMotel } from "@/contexts/MotelContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const config = useMotel();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 py-2 shadow-lg backdrop-blur-lg" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative flex items-center"
        >
          <div className="relative h-12 w-auto dark:hidden sm:h-14 md:h-16 lg:h-20">
            <Image
              src={config.assets.logo.light}
              alt={config.name}
              width={160}
              height={80}
              className="h-full w-auto object-contain"
              priority
              quality={90}
            />
          </div>
          <div className="relative hidden h-12 w-auto dark:block sm:h-14 md:h-16 lg:h-20">
            <Image
              src={config.assets.logo.dark}
              alt={config.name}
              width={160}
              height={80}
              className="h-full w-auto object-contain"
              priority
              quality={90}
            />
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { label: t.nav.home, href: "#home" },
            { label: t.nav.rooms, href: "#rooms" },
            { label: t.nav.services, href: "#services" }
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="font-medium text-foreground transition-colors duration-200 hover:text-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          )}
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-background/95 backdrop-blur-lg md:hidden"
        >
          <div className="container mx-auto flex flex-col gap-4 px-6 py-4">
            {[
              { label: t.nav.home, href: "#home" },
              { label: t.nav.rooms, href: "#rooms" },
              { label: t.nav.services, href: "#services" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 font-medium text-foreground transition-colors duration-200 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
