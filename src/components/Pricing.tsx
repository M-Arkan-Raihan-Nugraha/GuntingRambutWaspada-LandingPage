import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Clock, Sparkles, User, Users } from "lucide-react";

const plans = [
  {
    title: "Anak-Anak",
    subtitle: "Di bawah 12 tahun",
    price: "15.000",
    icon: <Users className="w-10 h-10" strokeWidth={1.7} />,
    features: [
      "Potong rambut rapi & nyaman",
      "Pelayanan sabar & ramah",
      "Selesai dengan cepat",
      "Penata rambut berpengalaman",
    ],
    color: "from-stone-800 to-stone-900",
    accent: "amber-600",
    badge: null,
  },
  {
    title: "Dewasa",
    subtitle: "Remaja & orang dewasa",
    price: "20.000",
    icon: <User className="w-10 h-10" strokeWidth={1.7} />,
    features: [
      "Potong rambut model pilihan",
      "Finishing rapi & bersih",
      "Kerapian terjamin",
      "Pelayanan terpercaya",
    ],
    color: "from-amber-950 to-stone-900",
    accent: "amber-500",
    badge: "Terlaris",
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="pricing" className="py-20 md:py-32 bg-stone-900 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-900/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-900/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Harga Layanan</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-50 mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
            Terjangkau & <span className="text-amber-500 italic">Berkualitas</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700" />
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700" />
          </div>
          <p className="text-stone-400 text-base md:text-lg max-w-xl mx-auto">
            Harga bersahabat tanpa kompromi kualitas - sudah terbukti selama lebih dari 40 tahun.
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-amber-700/20 border border-amber-600/30 rounded-full">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-sm font-semibold">Terjangkau & Berkualitas</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative group"
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-amber-600 text-white text-xs font-bold rounded-full shadow-lg tracking-wide uppercase">
                    {plan.badge}
                  </span>
                </div>
              )}
              <div className={`relative bg-gradient-to-b ${plan.color} border ${plan.badge ? "border-amber-600/60" : "border-stone-700/60"} rounded-2xl p-7 md:p-8 overflow-hidden group-hover:border-amber-600/40 transition-all duration-300`}>
                {/* Glow effect on hover */}
                {plan.badge && (
                  <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                )}

                <div className="text-center mb-6">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-amber-700/40 bg-stone-950/60 text-amber-400">
                    {plan.icon}
                  </div>
                  <h3 className="text-stone-100 font-bold text-2xl mb-1" style={{ fontFamily: "Lora, serif" }}>{plan.title}</h3>
                  <p className="text-stone-500 text-sm">{plan.subtitle}</p>
                </div>

                <div className="text-center mb-7">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-stone-400 text-sm font-medium">Rp</span>
                    <span className="text-5xl font-black text-amber-400" style={{ fontFamily: "Playfair Display, serif" }}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-stone-500 text-xs mt-1">per kunjungan</p>
                </div>

                <div className="space-y-3 mb-7">
                  {plan.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-700/30 border border-amber-600/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-amber-500" strokeWidth={2.5} />
                      </div>
                      <span className="text-stone-300 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/6289690448899"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.badge
                      ? "bg-amber-700 hover:bg-amber-600 text-amber-50 hover:shadow-lg hover:shadow-amber-900/50"
                      : "bg-stone-700 hover:bg-stone-600 text-stone-200"
                  }`}
                >
                  Booking Sekarang
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hours info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6 md:p-8 text-center"
        >
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-amber-700/40 bg-stone-900 text-amber-400">
            <Clock className="w-6 h-6" />
          </div>
          <h4 className="text-stone-100 font-bold text-xl mb-4" style={{ fontFamily: "Lora, serif" }}>Jam Operasional</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between max-w-xs mx-auto">
              <span className="text-stone-400 text-sm">Senin - Sabtu</span>
              <span className="text-amber-400 font-semibold text-sm">24 Jam Nonstop</span>
            </div>
            <div className="flex items-center justify-between max-w-xs mx-auto">
              <span className="text-stone-400 text-sm">Minggu</span>
              <span className="text-red-400 font-semibold text-sm">Tutup</span>
            </div>
          </div>
          <p className="text-stone-500 text-xs mt-4">
            * Tersedia 24 jam sehari, kami siap melayani kapanpun Anda membutuhkan
          </p>
        </motion.div>
      </div>
    </section>
  );
}
