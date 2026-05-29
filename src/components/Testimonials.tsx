import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Loader2,
  MessageSquarePlus,
  Send,
  Shield,
  Star,
  Trophy,
  User,
  Users,
  CheckCircle2,
  Quote,
  Briefcase,
} from "lucide-react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";

// ─── Types ───────────────────────────────────────────────────────────────────
interface FirebaseTestimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  category?: string;
  createdAt: Timestamp | null;
}

// ─── Social Proof Data ──────────────────────────────────────────────────────
const socialProofItems = [
  "Pejabat POLRI",
  "Pejabat TNI",
  "Pejabat PEMDA",
  "Turis Mancanegara",
  "Warga Cianjur",
];

// Helper to get category color theme
function getCategoryColor(category: string) {
  switch (category) {
    case "Pejabat POLRI":
      return "from-blue-600 to-blue-800 text-blue-400 border-blue-900/50 bg-blue-950/30";
    case "Pejabat TNI":
      return "from-green-600 to-green-800 text-green-400 border-green-900/50 bg-green-950/30";
    case "Pejabat PEMDA":
      return "from-amber-600 to-amber-800 text-amber-400 border-amber-900/50 bg-amber-950/30";
    case "Turis Mancanegara":
      return "from-purple-600 to-purple-800 text-purple-400 border-purple-900/50 bg-purple-950/30";
    default:
      return "from-cyan-600 to-cyan-800 text-cyan-400 border-cyan-900/50 bg-cyan-950/30";
  }
}

// ─── Sub-components ─────────────────────────────────────────────────────────
function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const s = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${s} ${i < rating ? "text-amber-500 fill-amber-500" : "text-stone-600"}`}
        />
      ))}
    </div>
  );
}

function InteractiveStarRating({
  rating,
  onChange,
}: {
  rating: number;
  onChange: (r: number) => void;
}) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          key={i}
          type="button"
          onMouseEnter={() => setHover(i + 1)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(i + 1)}
          className="transition-transform hover:scale-125 focus:outline-none"
        >
          <Star
            className={`w-7 h-7 transition-colors ${
              i < (hover || rating)
                ? "text-amber-500 fill-amber-500"
                : "text-stone-600"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function formatDate(timestamp: Timestamp | null): string {
  if (!timestamp) return "";
  const d = timestamp.toDate();
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Testimonial Card ───────────────────────────────────────────────────────
function TestimonialCard({ t, index }: { t: FirebaseTestimonial; index: number }) {
  const category = t.category || "Warga Cianjur";
  const colorTheme = getCategoryColor(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative bg-stone-900 border border-stone-800 hover:border-amber-700/50 rounded-2xl p-6 pt-12 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/10"
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-6">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black tracking-wider uppercase bg-gradient-to-r ${colorTheme}`}>
          <Shield className="w-3 h-3" />
          {category}
        </span>
      </div>

      {/* Quote */}
      <div className="absolute top-3 right-4 text-stone-800 group-hover:text-amber-900/30 transition-colors">
        <Quote className="w-8 h-8" />
      </div>

      <div className="mb-4">
        <StarRating rating={t.rating} />
      </div>

      <p className="text-stone-300 text-sm leading-relaxed mb-5 line-clamp-4 italic">
        "{t.text}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-stone-800/60">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-amber-200 text-sm font-bold uppercase">
          {t.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-stone-100 font-semibold text-sm truncate">{t.name}</p>
          <p className="text-stone-500 text-xs">{formatDate(t.createdAt)}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Testimonial Form ───────────────────────────────────────────────────────
function TestimonialForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Warga Cianjur");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) return setError("Nama harus diisi.");
    if (rating === 0) return setError("Pilih rating terlebih dahulu.");
    if (!text.trim()) return setError("Pesan testimoni harus diisi.");
    if (text.trim().length < 10) return setError("Pesan terlalu pendek (minimal 10 karakter).");

    setSubmitting(true);
    try {
      await addDoc(collection(db, "testimonials"), {
        name: name.trim(),
        rating,
        text: text.trim(),
        category,
        createdAt: Timestamp.now(),
      });
      setSuccess(true);
      setName("");
      setRating(0);
      setText("");
      setCategory("Warga Cianjur");
      onSubmitted();
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error("Error submitting testimonial:", err);
      setError("Gagal mengirim testimoni. Coba lagi nanti.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 border border-stone-800 rounded-2xl p-8 md:p-10 overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-amber-800/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-amber-900/8 blur-2xl pointer-events-none" />

        <div className="relative z-10">
          {/* Form Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-800/30 border border-amber-700/30 flex items-center justify-center">
              <MessageSquarePlus className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3
                className="text-xl md:text-2xl font-black text-stone-50"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Bagikan Pengalaman Anda
              </h3>
              <p className="text-stone-500 text-xs">
                Ceritakan pengalaman potong rambut Anda di sini
              </p>
            </div>
          </div>

          {/* Success State */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-green-900/30 border border-green-700/30"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-300 text-sm">
                  Terima kasih! Testimoni Anda telah berhasil dikirim.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label className="text-stone-300 text-sm font-medium mb-2 block">
                Nama
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  maxLength={50}
                  className="w-full pl-10 pr-4 py-3 bg-stone-800/60 border border-stone-700 rounded-xl text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all"
                />
              </div>
            </div>

            {/* Category Select */}
            <div>
              <label className="text-stone-300 text-sm font-medium mb-2 block">
                Kategori
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-stone-800/60 border border-stone-700 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all cursor-pointer appearance-none"
                >
                  {socialProofItems.map((item) => (
                    <option key={item} value={item} className="bg-stone-900 text-stone-100">
                      {item}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Star Rating */}
            <div>
              <label className="text-stone-300 text-sm font-medium mb-2 block">
                Rating
              </label>
              <InteractiveStarRating rating={rating} onChange={setRating} />
            </div>

            {/* Message */}
            <div>
              <label className="text-stone-300 text-sm font-medium mb-2 block">
                Pesan Testimoni
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ceritakan pengalaman Anda..."
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 bg-stone-800/60 border border-stone-700 rounded-xl text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30 transition-all resize-none"
              />
              <p className="text-stone-600 text-xs mt-1 text-right">
                {text.length}/500
              </p>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm bg-red-900/20 border border-red-800/30 rounded-lg px-4 py-2">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-amber-50 font-bold text-sm rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-900/30 hover:shadow-amber-800/40"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Testimoni
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<FirebaseTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const containerRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 6;

  // Real-time listener
  useEffect(() => {
    const q = query(
      collection(db, "testimonials"),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (snap) => {
      const data: FirebaseTestimonial[] = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as FirebaseTestimonial[];
      setTestimonials(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Filter logic
  const filteredTestimonials = selectedCategory === "Semua"
    ? testimonials
    : testimonials.filter((t) => (t.category || "Warga Cianjur") === selectedCategory);

  const totalPages = Math.ceil(filteredTestimonials.length / ITEMS_PER_PAGE);
  const pagedTestimonials = filteredTestimonials.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  // Average rating calculated dynamically from database
  const avgRating =
    testimonials.length > 0
      ? (testimonials.reduce((sum, t) => sum + Number(t.rating || 0), 0) / testimonials.length).toFixed(1)
      : "5.0";

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-stone-950 relative overflow-hidden">
      {/* BG decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-amber-900/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-amber-900/10 blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-900/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-green-900/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Dipercaya Orang-Orang Penting
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-50 mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Testimoni <span className="text-amber-500 italic">Istimewa</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700" />
            <div className="w-2 h-2 rounded-full bg-amber-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700" />
          </div>
          <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto">
            Dari pejabat kepolisian, TNI, pemerintah daerah, hingga Turis Mancanegara —
            mereka semua mempercayakan penampilan terbaik mereka kepada kami.
          </p>
        </motion.div>

        {/* Interactive Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
        >
          {["Semua", ...socialProofItems].map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(0);
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-amber-500 bg-amber-500/10 text-amber-400 shadow-md shadow-amber-900/20"
                    : "border-stone-800 bg-stone-900/40 text-stone-400 hover:border-stone-700 hover:text-stone-300"
                }`}
              >
                <Shield className={`w-3.5 h-3.5 ${isActive ? "text-amber-500" : "text-stone-600"}`} />
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* ─── Two-column Layout: Testimonials + Form ─── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Testimonials Grid (3 cols on lg) */}
          <div className="lg:col-span-3" ref={containerRef}>
            {/* Section subtitle */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-500" />
                <h3 className="text-stone-200 font-bold text-lg">
                  {selectedCategory === "Semua" ? "Semua Testimoni" : `Testimoni: ${selectedCategory}`}
                </h3>
                {filteredTestimonials.length > 0 && (
                  <span className="text-stone-500 text-sm">
                    ({filteredTestimonials.length})
                  </span>
                )}
              </div>
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="w-8 h-8 rounded-full border border-stone-700 hover:border-amber-600 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-stone-500 text-xs font-medium">
                    {currentPage + 1}/{totalPages}
                  </span>
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages - 1}
                    className="w-8 h-8 rounded-full border border-stone-700 hover:border-amber-600 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-20 text-stone-500">
                <Loader2 className="w-8 h-8 animate-spin text-amber-600 mb-3" />
                <p className="text-sm">Memuat testimoni...</p>
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredTestimonials.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-2xl bg-stone-800 border border-stone-700 flex items-center justify-center mb-4">
                  <MessageSquarePlus className="w-8 h-8 text-stone-600" />
                </div>
                <p className="text-stone-400 font-semibold mb-1">Belum ada testimoni</p>
                <p className="text-stone-500 text-sm max-w-xs">
                  {selectedCategory === "Semua"
                    ? "Jadilah yang pertama membagikan pengalaman Anda!"
                    : `Belum ada testimoni untuk kategori ${selectedCategory}. Jadilah yang pertama!`}
                </p>
              </div>
            )}

            {/* Testimonial Cards */}
            {!loading && filteredTestimonials.length > 0 && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory + currentPage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4"
                >
                  {pagedTestimonials.map((t, i) => (
                    <TestimonialCard key={t.id} t={t} index={i} />
                  ))}
                </motion.div>
              </AnimatePresence>
            )}

            {/* Dots Navigation */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      i === currentPage
                        ? "w-6 h-2 bg-amber-600"
                        : "w-2 h-2 bg-stone-700 hover:bg-stone-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Form (2 cols on lg) */}
          <div className="lg:col-span-2">
            <TestimonialForm onSubmitted={() => {
              setSelectedCategory("Semua");
              setCurrentPage(0);
            }} />
          </div>
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
            {
              value: avgRating,
              label: "Rating Rata-rata",
              icon: <Star className="w-5 h-5 fill-amber-500" />,
            },
            {
              value: testimonials.length > 0 ? `${testimonials.length}` : "0",
              label: "Total Testimoni",
              icon: <Heart className="w-5 h-5 fill-amber-500" />,
            },
            {
              value: "40+",
              label: "Tahun Kepercayaan",
              icon: <Trophy className="w-5 h-5" />,
            },
          ].map((s) => (
            <div key={s.label} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
              <div className="mb-1 flex justify-center text-amber-500">{s.icon}</div>
              <p
                className="text-amber-400 font-black text-2xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {s.value}
              </p>
              <p className="text-stone-500 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
