import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Clock, MapPin, MessageCircle, Navigation, Scissors, User, Users } from "lucide-react";

export default function Location() {
  const waLink = "https://wa.me/6289690448899";
  const mapsLink = "https://maps.app.goo.gl/D73eDjm2JXJWCHj67";
  const embedSrc = "https://www.google.com/maps/embed?pb=!4v1778553588572!6m8!1m7!1sjJ3jq9t_VINB6hMgJ6Rq6w!2m2!1d-6.82341977769408!2d107.1379267462411!3f332.54142371646833!4f-9.047053587453732!5f0.7820865974627469";

  return (
    <section id="location" className="py-20 md:py-32 bg-stone-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/30 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-amber-900/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Temukan Kami</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-50 mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
            Lokasi <span className="text-amber-500 italic">Kami</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700" />
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700" />
          </div>
          <p className="text-stone-400 text-base md:text-lg max-w-xl mx-auto">
            Mudah ditemukan - kami selalu ada untuk melayani Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Map placeholder / Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Map embed */}
            <div className="relative rounded-2xl overflow-hidden bg-stone-800 border border-stone-700 h-72 md:h-96 mb-4">
              <iframe
                src={embedSrc}
                title="Lokasi Gunting Rambut Waspada di Google Maps"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address detail */}
            <div className="bg-stone-800/50 border border-stone-700/50 rounded-xl p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-stone-100 font-medium text-sm mb-0.5">Alamat Lengkap</p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Di antara Kantor PWI Cianjur dan Jembatan menuju Gang Kirana IV<br />
                  RT 02 RW 21, Cianjur, Jawa Barat
                </p>
                <p className="text-amber-500/70 text-xs mt-2 italic">
                  * Berlokasi sejak Oktober 2025
                </p>
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {/* Hours */}
            <div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-900/30 border border-amber-800/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-stone-100 font-bold text-lg" style={{ fontFamily: "Lora, serif" }}>Jam Operasional</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-stone-700/50">
                  <span className="text-stone-300 text-sm font-medium">Senin - Sabtu</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400 font-semibold text-sm">24 Jam Nonstop</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-stone-300 text-sm font-medium">Minggu</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-red-400 font-semibold text-sm">Tutup</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-900/20 border border-green-700/20 rounded-xl">
                <p className="text-green-400 text-xs text-center font-medium">
                  <CheckCircle className="inline-block w-3.5 h-3.5 mr-1 align-[-2px]" />
                  Sekarang: Buka 24 Jam - Siap Melayani Anda!
                </p>
              </div>
            </div>

            {/* Pricing quick reference */}
            <div className="bg-stone-800/60 border border-stone-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-900/30 border border-amber-800/30 flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-stone-100 font-bold text-lg" style={{ fontFamily: "Lora, serif" }}>Harga Layanan</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-stone-900 rounded-xl">
                  <div className="flex items-center gap-2.5">
                    <User className="w-4 h-4 text-amber-500" />
                    <span className="text-stone-200 text-sm font-medium">Dewasa</span>
                  </div>
                  <span className="text-amber-400 font-bold">Rp 20.000</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-stone-900 rounded-xl">
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-amber-500" />
                    <span className="text-stone-200 text-sm font-medium">Anak-anak</span>
                  </div>
                  <span className="text-amber-400 font-bold">Rp 15.000</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-green-700 hover:bg-green-600 text-green-50 font-semibold rounded-2xl transition-all hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </a>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-stone-700 hover:bg-stone-600 text-stone-100 font-semibold rounded-2xl transition-all hover:-translate-y-0.5 border border-stone-600"
              >
                <Navigation className="w-5 h-5" />
                Petunjuk Arah (Google Maps)
              </a>
            </div>

            {/* Landmark info */}
            <div className="bg-amber-950/30 border border-amber-800/20 rounded-2xl p-4">
              <p className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-2">
                <MapPin className="w-4 h-4" /> Patokan Lokasi:
              </p>
              <ul className="space-y-1.5 text-stone-400 text-sm">
                <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" /> Di sebelah Kantor PWI Cianjur</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" /> Dekat jembatan menuju Gang Kirana IV</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" /> RT 02 RW 21, Cianjur</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
