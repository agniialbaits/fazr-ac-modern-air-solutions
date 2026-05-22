import { motion } from "framer-motion";
import { Award, Tag, Zap, ShieldCheck, Timer, Home } from "lucide-react";

const features = [
  { icon: Award, title: "Teknisi Berpengalaman", desc: "10+ tahun menangani semua tipe AC." },
  { icon: Tag, title: "Harga Transparan", desc: "Tanpa biaya tersembunyi, ada nota resmi." },
  { icon: Zap, title: "Fast Response", desc: "Respon di bawah 30 menit setiap hari." },
  { icon: ShieldCheck, title: "Bergaransi", desc: "Garansi service hingga 30 hari." },
  { icon: Timer, title: "Pengerjaan Cepat", desc: "Efisien tanpa mengorbankan kualitas." },
  { icon: Home, title: "Panggilan ke Rumah", desc: "Datang ke lokasi sesuai jadwal Anda." },
];

export function Features() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 shadow-glow md:p-14">
          {/* curve decoration */}
          <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 800 400" preserveAspectRatio="none">
            <path d="M0,300 C200,200 400,350 800,200 L800,400 L0,400 Z" fill="white" fillOpacity="0.08" />
            <path d="M0,250 C300,180 500,300 800,150" stroke="white" strokeOpacity="0.18" strokeWidth="1.5" fill="none" />
          </svg>

          <div className="relative">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Kenapa FAZR AC</span>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                Keunggulan yang membuat pelanggan kembali lagi
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass-dark flex items-start gap-4 rounded-2xl p-5"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                    <f.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{f.title}</h3>
                    <p className="mt-1 text-sm text-white/75">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
