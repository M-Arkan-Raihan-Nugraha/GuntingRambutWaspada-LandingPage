import { motion } from "framer-motion";
import { Scissors, MapPin, Clock, MessageCircle, Heart } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Harga", href: "#pricing" },
  { label: "Keunggulan", href: "#features" },
  { label: "Tim", href: "#team" },
  { label: "Galeri", href: "#gallery" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Lokasi", href: "#location" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-950 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/60 to-transparent" />

      {/* CTA Section */}
      <div className="relative py-16 md:py-20 border-b border-stone-800/60">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">Generasi Baru Menyapa</p>
            <h2 className="text-3xl md:text-5xl font-black text-stone-50 mb-5 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
              Belum Pernah Coba?
              <br />
              <span className="text-amber-500 italic">Waktunya Sekarang!</span>
            </h2>
            <p className="text-stone-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Gabung dengan ribuan pelanggan setia kami dan rasakan pengalaman potong rambut 
              yang tak terlupakan bersama legenda pangkas Cianjur.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6289690448899"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-700 hover:bg-amber-600 text-amber-50 font-bold rounded-full transition-all hover:shadow-2xl hover:shadow-amber-900/50 hover:-translate-y-1 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp Sekarang
              </a>
              <button
                onClick={() => scrollTo("#location")}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-stone-700 hover:border-amber-700/50 text-stone-300 hover:text-amber-300 font-bold rounded-full transition-all hover:-translate-y-1 text-base"
              >
                <MapPin className="w-5 h-5" />
                Lihat Lokasi
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-5 group cursor-default">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-700/40 flex-shrink-0">
                  <img src="/images/logo.jpeg" alt="Logo Gunting Rambut Waspada" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-stone-100 font-black text-lg leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    Gunting Rambut
                  </p>
                  <p className="text-amber-500 font-bold text-base leading-tight tracking-widest">
                    WASPADA
                  </p>
                </div>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed mb-5 max-w-xs">
                <em className="text-stone-300">"Legenda Gunting Rambut di Cianjur Sejak 1982"</em>
              </p>
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                Melayani potong rambut pria dan anak-anak dengan ketulusan dan dedikasi selama lebih dari empat dekade.
              </p>

              {/* Decorative divider */}
              <div className="flex items-center gap-2 mt-6">
                <div className="h-px flex-1 bg-gradient-to-r from-amber-700/40 to-transparent" />
                <Scissors className="w-3.5 h-3.5 text-amber-700/50" />
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-stone-200 font-semibold text-sm uppercase tracking-widest mb-5">Navigasi</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-stone-500 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-700/50 group-hover:bg-amber-500 transition-colors" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-stone-200 font-semibold text-sm uppercase tracking-widest mb-5">Informasi</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-stone-300 text-sm font-medium mb-0.5">Lokasi</p>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Di antara Kantor PWI dan Jembatan menuju Gang Kirana IV RT 02 RW 21, Cianjur
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-stone-300 text-sm font-medium mb-1">Jam Operasional</p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-stone-500 text-xs">Senin - Sabtu</span>
                        <span className="text-green-400 text-xs font-semibold">24 Jam</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-stone-500 text-xs">Minggu</span>
                        <span className="text-red-400 text-xs font-semibold">Tutup</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-stone-300 text-sm font-medium mb-0.5">Kontak</p>
                    <a
                      href="https://wa.me/6289690448899"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-amber-400 text-xs transition-colors"
                    >
                      WhatsApp: 089690448899
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-600 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Gunting Rambut Waspada. Semua hak dilindungi.
          </p>
          <p className="text-stone-700 text-xs flex items-center gap-1">
            Dibuat dengan <Heart className="w-3 h-3 text-red-700 fill-red-700 mx-0.5" /> untuk Cianjur
          </p>
        </div>
      </div>
    </footer>
  );
}
