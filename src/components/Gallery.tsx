import { motion } from "framer-motion";
import { useState } from "react";

const galleryItems = [
  {
    src: "/images/haircut-1.jpg",
    alt: "Hasil potongan rambut dewasa",
    label: "Potongan Dewasa",
    tag: "Dewasa",
  },
  {
    src: "/images/haircut-2.jpg",
    alt: "Potongan rambut anak-anak",
    label: "Potongan Anak-Anak",
    tag: "Anak-anak",
  },
  {
    src: "/images/haircut-3.jpg",
    alt: "Alat pangkas tradisional",
    label: "Alat Tradisional",
    tag: "Teknik",
  },
  {
    src: "/images/barber-about.jpg",
    alt: "Suasana tempat pangkas",
    label: "Suasana Tempat",
    tag: "Tempat",
  },
  {
    src: "/images/hero-bg.jpg",
    alt: "Interior pangkas rambut",
    label: "Interior Klasik",
    tag: "Interior",
  },
];



export default function Gallery() {
  const [activeTag, setActiveTag] = useState("Semua");
  const tags = ["Semua", "Dewasa", "Anak-anak", "Teknik", "Tempat", "Interior"];

  const filtered = activeTag === "Semua"
    ? galleryItems
    : galleryItems.filter((g) => g.tag === activeTag);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-stone-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Hasil Karya</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-50 mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
            Galeri <span className="text-amber-500 italic">Kami</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700" />
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700" />
          </div>
          <p className="text-stone-400 text-base md:text-lg max-w-xl mx-auto">
            Setiap potongan rambut adalah karya yang kami kerjakan dengan penuh perhatian dan keahlian.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? "bg-amber-700 text-amber-50 shadow-lg shadow-amber-900/40"
                  : "bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200 border border-stone-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-16">
          {filtered.map((item, i) => (
            <motion.div
              key={item.src + i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group overflow-hidden rounded-xl md:rounded-2xl cursor-pointer ${
                i === 0 ? "col-span-2 md:col-span-1 row-span-1" : ""
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2.5 py-1 bg-amber-700/90 text-amber-100 text-xs rounded-full mb-1.5">{item.tag}</span>
                <p className="text-stone-100 font-semibold text-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
