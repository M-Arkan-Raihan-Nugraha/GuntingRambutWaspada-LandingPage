import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Harga", href: "#pricing" },
  { label: "Tim", href: "#team" },
  { label: "Galeri", href: "#gallery" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Lokasi", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-stone-950/95 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav("#hero")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-700/50 group-hover:border-amber-500 transition-colors flex-shrink-0">
                <img src="/images/logo.jpeg" alt="Logo Gunting Rambut Waspada" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <p className="text-amber-500 font-bold text-sm leading-tight tracking-wide" style={{ fontFamily: "Playfair Display, serif" }}>
                  Gunting Rambut
                </p>
                <p className="text-stone-50 font-semibold text-xs leading-tight tracking-widest uppercase">
                  Waspada
                </p>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 text-stone-300 hover:text-amber-400 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a
                href="https://wa.me/6289690448899"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-amber-700 hover:bg-amber-600 text-amber-50 text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-amber-900/40 tracking-wide"
              >
                Hubungi WhatsApp
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-stone-300 hover:text-amber-400 transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-stone-950/98 backdrop-blur-md flex flex-col pt-20 px-6 pb-8 md:hidden"
          >
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-4 text-stone-200 hover:text-amber-400 text-xl font-medium border-b border-stone-800 transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/6289690448899"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-amber-700 hover:bg-amber-600 text-amber-50 text-base font-semibold rounded-full transition-all"
              >
                Hubungi WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
