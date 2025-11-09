"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
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
        scrolled ? "bg-background/80 py-3 shadow-lg backdrop-blur-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative h-28 w-auto md:h-32 lg:h-36"
        >
          <img
            src="/assets/logo-light.webp"
            alt="Mood Motel"
            className="h-full w-full object-contain transition-opacity duration-300 dark:hidden"
            style={{ maxHeight: "100%", width: "auto" }}
          />
          <img
            src="/assets/logo-dark.webp"
            alt="Mood Motel"
            className="hidden h-full w-full object-contain transition-opacity duration-300 dark:block"
            style={{ maxHeight: "100%", width: "auto" }}
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {["Home", "Rooms", "Services", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-foreground transition-colors duration-200 hover:text-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
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
            {["Home", "Rooms", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 font-medium text-foreground transition-colors duration-200 hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
