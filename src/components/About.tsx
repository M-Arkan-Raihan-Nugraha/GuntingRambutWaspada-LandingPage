import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { Scissors, MapPin, Landmark, Star, Zap, Banknote, Heart } from "lucide-react";

const timelineEvents = [
  {
    year: "1982",
    title: "Awal Mula",
    description: "Langkah pertama kami dimulai di depan Pasar Ramayana Cianjur. Sejak saat itu, kami mulai dipercaya sebagai tempat andalan warga untuk merapikan penampilan.",
    icon: <Scissors className="w-5 h-5" />,
  },
  {
    year: "1994",
    title: "Pindah ke Dekat Pemda",
    description: "Kami beralih ke Jl. Siliwangi, di sekitar kawasan Pemda Kabupaten Cianjur. Di sinilah nama kami semakin melekat di hati para pelanggan setia lintas generasi.",
    icon: <Landmark className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "Lokasi Sekarang",
    description: "Kini kami menetap di antara Kantor PWI dan jembatan Gang Kirana IV. Suasana baru, namun dengan dedikasi dan kualitas layanan klasik yang tak pernah berubah.",
    icon: <Star className="w-5 h-5" />,
    current: true,
  },
];

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-start gap-0 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row mb-10 last:mb-0`}>
      {/* Desktop: Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`hidden md:block w-5/12 ${isLeft ? "text-right" : "text-left"}`}
      >
        <div className={`inline-block bg-stone-900 border border-stone-700/60 rounded-2xl p-5 hover:border-amber-700/50 transition-colors duration-300 ${isLeft ? "" : ""}`}>
          <div className="flex items-center gap-2 mb-2 justify-end" style={{ justifyContent: isLeft ? "flex-end" : "flex-start" }}>
            <span className="text-amber-500 flex items-center justify-center">{event.icon}</span>
            <span className="text-amber-500 font-bold text-xl" style={{ fontFamily: "Playfair Display, serif" }}>{event.year}</span>
          </div>
          <h3 className="text-stone-100 font-semibold text-lg mb-1.5" style={{ fontFamily: "Lora, serif" }}>{event.title}</h3>
          <p className="text-stone-400 text-sm leading-relaxed">{event.description}</p>
          {event.current && (
            <span className="inline-flex items-center mt-2 px-3 py-1 bg-amber-700/20 border border-amber-600/30 text-amber-400 text-xs rounded-full font-medium">
              <MapPin className="w-3 h-3 mr-1" /> Lokasi Saat Ini
            </span>
          )}
        </div>
      </motion.div>

      {/* Center line + dot */}
      <div className="relative flex flex-col items-center w-8 md:w-2/12 flex-shrink-0 mx-4 md:mx-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 flex-shrink-0 ${
            event.current
              ? "border-amber-500 bg-amber-900/40 shadow-lg shadow-amber-900/50 text-amber-400"
              : "border-stone-600 bg-stone-800 text-stone-400"
          }`}
        >
          {event.icon}
        </motion.div>
        {index < timelineEvents.length - 1 && (
          <div className="absolute top-10 bottom-0 w-px bg-gradient-to-b from-stone-600 to-transparent" style={{ left: "50%", transform: "translateX(-50%)", height: "calc(100% + 2.5rem)" }} />
        )}
      </div>

      {/* Mobile: Content below dot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:hidden flex-1 pb-2"
      >
        <div className="bg-stone-900 border border-stone-700/60 rounded-2xl p-4 hover:border-amber-700/50 transition-colors">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-amber-500 font-bold text-lg" style={{ fontFamily: "Playfair Display, serif" }}>{event.year}</span>
            {event.current && (
              <span className="px-2 py-0.5 bg-amber-700/20 border border-amber-600/30 text-amber-400 text-xs rounded-full">Sekarang</span>
            )}
          </div>
          <h3 className="text-stone-100 font-semibold text-base mb-1" style={{ fontFamily: "Lora, serif" }}>{event.title}</h3>
          <p className="text-stone-400 text-sm leading-relaxed">{event.description}</p>
        </div>
      </motion.div>

      {/* Desktop: Empty side */}
      <div className="hidden md:block w-5/12" />
    </div>
  );
}

export default function About() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-stone-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #d97706 0, #d97706 1px, transparent 0, transparent 50%)`,
        backgroundSize: "20px 20px"
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Perjalanan Kami</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-50 mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
            Tentang <span className="text-amber-500 italic">Kami</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700" />
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700" />
          </div>
          <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Gunting Rambut Waspada adalah usaha pangkas rambut legendaris di Cianjur yang telah 
            berdiri sejak tahun <span className="text-amber-400 font-semibold">1982</span> dan 
            tetap bertahan hingga sekarang dengan pelayanan yang tak pernah pudar.
          </p>
        </motion.div>

        {/* Two columns: Image + Text */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/waspada.jpg"
                alt="Suasana Gunting Rambut Waspada"
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-stone-950/80 backdrop-blur-sm border border-amber-700/40 rounded-xl px-4 py-3">
                <p className="text-amber-400 font-bold text-2xl" style={{ fontFamily: "Playfair Display, serif" }}>1982</p>
                <p className="text-stone-300 text-xs">Tahun Berdiri</p>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-amber-700/40 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-amber-700/40 rounded-br-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-stone-100 mb-5" style={{ fontFamily: "Lora, serif" }}>
              Dipercaya Warga Cianjur Selama Lebih dari Empat Dekade
            </h3>
            <div className="space-y-4 text-stone-400 leading-relaxed">
              <p>
                Sejak pertama kali membuka pintu di depan Pasar Ramayana Cianjur pada tahun 1982, 
                Gunting Rambut Waspada telah menjadi tempat terpercaya bagi masyarakat Cianjur 
                untuk tampil rapi dengan harga yang sangat terjangkau.
              </p>
              <p>
                Meskipun telah berpindah lokasi sebanyak empat kali, pelanggan setia kami selalu 
                mencari dan menemukan kami. Ini adalah bukti kepercayaan yang tak ternilai 
                yang telah dibangun selama lebih dari <span className="text-amber-400 font-medium">40 tahun</span>.
              </p>
              <p>
                Kami bangga mempertahankan tradisi pangkas rambut klasik yang telah menjadi 
                ciri khas kami - cepat, rapi, ramah, dan dengan harga yang bersahabat.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: <Scissors className="w-5 h-5" />, label: "Pangkas Tradisional" },
                { icon: <Zap className="w-5 h-5" />, label: "Pelayanan Cepat" },
                { icon: <Banknote className="w-5 h-5" />, label: "Harga Terjangkau" },
                { icon: <Heart className="w-5 h-5" />, label: "Ribuan Pelanggan" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 text-stone-300">
                  <span className="text-amber-500 flex items-center justify-center">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="text-2xl md:text-4xl font-black text-stone-100 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Perjalanan <span className="text-amber-500 italic">Lokasi Usaha</span>
          </h3>
          <p className="text-stone-500 text-sm">Dari satu tempat ke tempat lain, kami selalu ada untuk Anda</p>
        </motion.div>

        {/* Timeline items */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-700/50 via-stone-700/50 to-transparent -translate-x-1/2" />
          {timelineEvents.map((event, i) => (
            <TimelineItem key={event.year} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
