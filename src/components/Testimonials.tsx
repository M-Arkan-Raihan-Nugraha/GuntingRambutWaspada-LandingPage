import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Award, Briefcase, ChevronLeft, ChevronRight, Heart, Star, Trophy, User, Users } from "lucide-react";

const testimonials = [
  {
    name: "Pak Hendra",
    role: "Warga Cianjur",
    icon: <User className="w-5 h-5" />,
    rating: 5,
    text: "Sudah langganan sejak kecil. Dari dulu sampai sekarang kualitasnya tidak pernah berubah - selalu rapi, bersih, dan cepat. Ini tempat favorit saya untuk potong rambut.",
    since: "Pelanggan sejak 1995",
  },
  {
    name: "Bu Sari",
    role: "Ibu Rumah Tangga",
    icon: <Users className="w-5 h-5" />,
    rating: 5,
    text: "Anak-anak saya selalu anteng kalau dipotong di sini. Bapaknya sabar dan pengalaman banget, hasilnya pun selalu rapi. Harganya juga ramah di kantong.",
    since: "Pelanggan sejak 2010",
  },
  {
    name: "Dimas",
    role: "Mahasiswa",
    icon: <Award className="w-5 h-5" />,
    rating: 5,
    text: "Potongannya rapi dan cepat, cocok buat saya yang sering buru-buru. Harganya murah tapi kualitasnya nggak kalah sama barbershop modern yang mahal.",
    since: "Pelanggan sejak 2018",
  },
  {
    name: "Pak Ujang",
    role: "Pedagang",
    icon: <Briefcase className="w-5 h-5" />,
    rating: 5,
    text: "Tetap jadi pilihan warga Cianjur sampai sekarang. Saya sudah coba berbagai tempat, tapi selalu kembali ke sini karena paling nyaman dan hasil paling memuaskan.",
    since: "Pelanggan sejak 1994",
  },
  {
    name: "Rian",
    role: "Karyawan Swasta",
    icon: <User className="w-5 h-5" />,
    rating: 5,
    text: "Enak banget tempatnya, santai dan ngobrolnya nyaman. Sudah kayak potong rambut di rumah sendiri. Buka 24 jam juga sangat membantu karena jadwal kerja saya tidak menentu.",
    since: "Pelanggan sejak 2015",
  },
  {
    name: "Pak Asep",
    role: "Pensiunan PNS",
    icon: <User className="w-5 h-5" />,
    rating: 5,
    text: "Dulu sering potong di sini waktu masih kerja di Pemda. Sampai sekarang masih setia karena memang nggak ada yang bisa ngalahin kualitas dan kehangatan pelayanannya.",
    since: "Pelanggan sejak 1990",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-stone-600"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-stone-950 relative overflow-hidden">
      {/* BG decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-amber-900/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-amber-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Suara Pelanggan</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-50 mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
            Apa Kata <span className="text-amber-500 italic">Mereka</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700" />
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700" />
          </div>
          <p className="text-stone-400 text-base md:text-lg max-w-xl mx-auto">
            Kepercayaan ribuan pelanggan selama puluhan tahun adalah kebanggaan terbesar kami.
          </p>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 mb-10">
          {visible.map((t, i) => (
            <motion.div
              key={t.name + current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative bg-stone-900 border rounded-2xl p-6 transition-all duration-300 ${
                i === 0
                  ? "border-amber-700/60 shadow-lg shadow-amber-900/20"
                  : "border-stone-800"
              }`}
            >
              {i === 0 && (
                <div className="absolute -top-3 left-5">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-700 text-amber-100 text-xs font-bold rounded-full">
                    <Star className="w-3 h-3 fill-amber-100" /> Terpilih
                  </span>
                </div>
              )}
              {/* Quote icon */}
              <div className="text-4xl text-amber-800/40 font-black mb-3" style={{ fontFamily: "Georgia, serif" }}>"</div>
              <p className="text-stone-300 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-xl">
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-stone-100 font-semibold text-sm">{t.name}</p>
                    <p className="text-stone-500 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <StarRating rating={t.rating} />
                  <p className="text-stone-600 text-xs mt-1">{t.since}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Single card */}
        <div className="md:hidden mb-8" ref={containerRef}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-stone-900 border border-amber-700/40 rounded-2xl p-6"
          >
            <div className="text-4xl text-amber-800/40 font-black mb-3" style={{ fontFamily: "Georgia, serif" }}>"</div>
            <p className="text-stone-300 text-sm leading-relaxed mb-5 italic">
              "{testimonials[current].text}"
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-xl">
                  {testimonials[current].icon}
                </div>
                <div>
                  <p className="text-stone-100 font-semibold text-sm">{testimonials[current].name}</p>
                  <p className="text-stone-500 text-xs">{testimonials[current].role}</p>
                </div>
              </div>
              <div className="text-right">
                <StarRating rating={testimonials[current].rating} />
                <p className="text-stone-600 text-xs mt-1">{testimonials[current].since}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-stone-700 hover:border-amber-600 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-all hover:bg-stone-800"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? "w-6 h-2 bg-amber-600" : "w-2 h-2 bg-stone-700 hover:bg-stone-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-stone-700 hover:border-amber-600 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-all hover:bg-stone-800"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-3 gap-4 max-w-xl mx-auto text-center"
        >
          {[
            { value: "5.0", label: "Rating Pelanggan", icon: <Star className="w-5 h-5 fill-amber-500" /> },
            { value: "1000+", label: "Pelanggan Setia", icon: <Heart className="w-5 h-5 fill-amber-500" /> },
            { value: "40+", label: "Tahun Kepercayaan", icon: <Trophy className="w-5 h-5" /> },
          ].map((s) => (
            <div key={s.label} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
              <div className="mb-1 flex justify-center text-amber-500">{s.icon}</div>
              <p className="text-amber-400 font-black text-2xl" style={{ fontFamily: "Playfair Display, serif" }}>{s.value}</p>
              <p className="text-stone-500 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
