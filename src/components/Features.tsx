import { motion } from "framer-motion";

import { Award, Banknote, Zap, Heart, Scissors, Moon } from "lucide-react";

const features = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Legendaris Sejak 1982",
    description: "Lebih dari 40 tahun melayani warga Cianjur dengan penuh dedikasi. Kepercayaan yang telah teruji waktu.",
  },
  {
    icon: <Banknote className="w-7 h-7" />,
    title: "Harga Ramah di Kantong",
    description: "Potong rambut berkualitas mulai Rp15.000. Terjangkau untuk semua kalangan tanpa kompromi kualitas.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Pelayanan Cepat",
    description: "Antrian dikelola dengan baik agar setiap pelanggan mendapat pelayanan tepat waktu dan efisien.",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Ribuan Pelanggan Loyal",
    description: "Banyak pelanggan yang sudah berlangganan sejak kecil dan terus kembali hingga dewasa.",
  },
  {
    icon: <Scissors className="w-7 h-7" />,
    title: "Ciri Khas Pangkas Tradisional",
    description: "Teknik potong rambut tradisional yang telah terasah puluhan tahun - rapi, bersih, dan memuaskan.",
  },
  {
    icon: <Moon className="w-7 h-7" />,
    title: "Buka 24 Jam",
    description: "Kami beroperasi 24 jam nonstop dari Senin hingga Sabtu. Siap melayani kapanpun Anda datang.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-stone-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-900/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Mengapa Pilih Kami</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-50 mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
            Keunggulan <span className="text-amber-500 italic">Kami</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700" />
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700" />
          </div>
          <p className="text-stone-400 text-base md:text-lg max-w-xl mx-auto">
            Apa yang membuat Gunting Rambut Waspada berbeda dan tetap dicintai warga Cianjur selama puluhan tahun.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative bg-stone-900 border border-stone-800 rounded-2xl p-6 md:p-7 hover:border-amber-700/50 transition-all duration-300 cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-stone-800 border border-stone-700 group-hover:border-amber-700/40 flex items-center justify-center text-amber-500 mb-5 transition-colors duration-300">
                  {feat.icon}
                </div>

                <h3 className="text-stone-100 font-bold text-lg mb-3 group-hover:text-amber-100 transition-colors" style={{ fontFamily: "Lora, serif" }}>
                  {feat.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-400 transition-colors">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
