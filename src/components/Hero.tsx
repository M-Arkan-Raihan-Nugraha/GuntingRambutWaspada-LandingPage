import { motion } from "framer-motion";
import { MapPin, MessageCircle, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden group"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Suasana Gunting Rambut Waspada"
          className="w-full h-full object-cover object-center grayscale transition-all duration-700 group-hover:grayscale-0"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/70 to-stone-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 via-transparent to-stone-950/40" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-60" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-24 md:pt-32 md:pb-32">


        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-stone-50 mb-3 leading-none tracking-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Gunting Rambut
          <br />
          <span className="text-amber-500 italic">Waspada</span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 my-5 md:my-7"
        >
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-blue-600" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-stone-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
          </div>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-red-600" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl text-amber-200/90 font-medium mb-4 md:mb-5"
          style={{ fontFamily: "Lora, serif" }}
        >
          Legenda Gunting Rambut di Cianjur Sejak 1982
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-base sm:text-lg text-stone-300/80 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
        >
          Melayani potong rambut pria dan anak-anak dengan harga terjangkau
          dan pelayanan terpercaya selama puluhan tahun.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo("#location")}
            className="group flex items-center gap-2.5 px-7 py-4 bg-amber-700 hover:bg-amber-600 text-amber-50 font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-800/50 hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center"
          >
            <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Lihat Lokasi
          </button>
          <a
            href="https://wa.me/6289690448899"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-7 py-4 bg-transparent border-2 border-amber-600/70 hover:border-amber-500 text-amber-200 hover:text-amber-100 hover:bg-amber-950/40 font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-base w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Hubungi WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-14 md:mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { value: "40+", label: "Tahun Berdiri" },
            { value: "4x", label: "Pindah Lokasi" },
            { value: "1000+", label: "Pelanggan Setia" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-amber-400" style={{ fontFamily: "Playfair Display, serif" }}>{stat.value}</p>
              <p className="text-stone-400 text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 hover:text-amber-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </motion.button>
    </section>
  );
}
