import { motion } from "framer-motion";
import { User } from "lucide-react";

const team = [
  {
    name: "Dadan Hamdani (64)",
    role: "Pemilik",
    description: "Melanjutkan estafet keahlian sejak 1987, beliau menjaga marwah Gunting Rambut Waspada dengan dedikasi yang tak lekang oleh waktu.",
    image: "/images/owner.jpg",
    accent: "red"
  },
  {
    name: "Tatang Gojali (59)",
    role: "Penata Rambut Senior",
    description: "Sosok senior yang telah mengukir kepercayaan pelanggan sejak 1994, memadukan ketelitian klasik dengan sentuhan personal yang hangat.",
    image: "/images/tatang.jpeg",
    accent: "amber"
  },
  {
    name: "Syahrul Anwar (55)",
    role: "Penata Rambut Senior",
    description: "Dengan pengalaman lebih dari dua dekade, beliau menghadirkan presisi dalam setiap potongan, memastikan tradisi pangkas tetap relevan bagi setiap generasi.",
    image: "/images/syahrul.png",
    accent: "blue"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-stone-900 relative overflow-hidden">
      {/* Barber pole subtle accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-700/50 via-white/10 to-blue-700/50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-700/50 via-white/10 to-red-700/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Orang di Balik Layar</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-50 mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
            Tim <span className="text-amber-500 italic">Kami</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-600" />
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-stone-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-600" />
          </div>
          <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto">
            Mereka yang selalu siap memberikan layanan potong rambut terbaik dengan senyuman dan keahlian yang terasah bertahun-tahun.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden hover:border-stone-700 transition-colors"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                member.accent === 'red' ? 'bg-red-500' : 
                member.accent === 'blue' ? 'bg-blue-500' : 
                member.accent === 'stone' ? 'bg-stone-500' : 'bg-amber-500'
              }`} />
              
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale-0 md:grayscale md:group-hover:grayscale-0"
                />
                <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-stone-950 to-transparent`} />
              </div>
              
              <div className="p-6 relative z-10 text-center -mt-12">
                <div className="w-16 h-16 rounded-full bg-stone-800 border-2 border-stone-950 flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-20 ${
                    member.accent === 'red' ? 'bg-red-500' : 
                    member.accent === 'blue' ? 'bg-blue-500' : 
                    member.accent === 'stone' ? 'bg-stone-500' : 'bg-amber-500'
                  }`} />
                  <User className={`w-6 h-6 ${
                    member.accent === 'red' ? 'text-red-400' : 
                    member.accent === 'blue' ? 'text-blue-400' : 
                    member.accent === 'stone' ? 'text-stone-400' : 'text-amber-400'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-stone-100 mb-1" style={{ fontFamily: "Lora, serif" }}>{member.name}</h3>
                <p className={`text-sm font-medium mb-4 tracking-wide ${
                  member.accent === 'red' ? 'text-red-400' : 
                  member.accent === 'blue' ? 'text-blue-400' : 
                  member.accent === 'stone' ? 'text-stone-400' : 'text-amber-400'
                }`}>{member.role}</p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
