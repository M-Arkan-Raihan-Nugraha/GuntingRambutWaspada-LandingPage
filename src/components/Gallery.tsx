import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const galleryItems = [
  {
    src: "/images/waspada.jpg",
    alt: "Gunting Rambut Waspada",
    label: "Identitas Kami",
  },
  {
    src: "/images/main-bench1.jpeg",
    alt: "Area pangkas utama",
    label: "Meja Pangkas Utama",
  },
  {
    src: "/images/main-bench2.png",
    alt: "Suasana pangkas rambut",
    label: "Meja Pangkas Utama",
  },
  {
    src: "/images/main-bench3.jpeg",
    alt: "Detail area pangkas",
    label: "Meja Pangkas Utama",
  },
  {
    src: "/images/second-bench1.jpeg",
    alt: "Area pangkas kedua",
    label: "Meja Pangkas Kedua",
  },
  {
    src: "/images/second-bench2.png",
    alt: "Suasana pangkas rambut",
    label: "Meja Pangkas Kedua",
  },
  {
    src: "/images/cabinet.jpeg",
    alt: "Peralatan dan penyimpanan",
    label: "Lemari Peralatan",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

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
            Setiap foto menceritakan dedikasi kami dalam menjaga tradisi pangkas rambut di Cianjur.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-16">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src + i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(item)}
              className="relative group overflow-hidden rounded-xl md:rounded-2xl cursor-pointer"
            >
              <div className="aspect-square w-full h-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 md:grayscale md:group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-stone-100 font-semibold text-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-stone-950/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-5 right-5 text-stone-400 hover:text-white p-2 bg-stone-900/50 rounded-full z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full flex flex-col items-center justify-center overflow-y-auto py-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center w-full max-h-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl mb-6"
                />
                
                <div className="text-center px-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-stone-100 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    {selectedImage.label}
                  </h3>
                  <p className="text-stone-400 text-sm md:text-base mt-2 max-w-2xl">
                    {selectedImage.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
