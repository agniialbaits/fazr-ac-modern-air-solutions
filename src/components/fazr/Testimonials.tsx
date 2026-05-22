import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { name: "Andi Pratama", role: "Pemilik Mobil", rating: 5, comment: "AC mobil saya kembali dingin maksimal. Teknisinya sangat profesional dan rapi. Recommended!", initial: "A" },
  { name: "Siti Nurhaliza", role: "Ibu Rumah Tangga", rating: 5, comment: "Cuci AC di rumah cepat, bersih, dan tidak meninggalkan kotoran. Harganya juga sangat reasonable.", initial: "S" },
  { name: "Budi Santoso", role: "Pemilik Kafe", rating: 5, comment: "Sudah langganan FAZR AC untuk maintenance kafe. Selalu fast response dan hasilnya memuaskan.", initial: "B" },
  { name: "Rina Wijaya", role: "Karyawan Swasta", rating: 5, comment: "Bongkar pasang AC saat pindah rumah. Rapi, aman, dan dipasang dengan sangat profesional.", initial: "R" },
  { name: "Hendra Kusuma", role: "Manajer Kantor", rating: 5, comment: "Service AC kantor selalu dipercayakan ke FAZR AC. Garansinya jelas dan tekniknya bisa diandalkan.", initial: "H" },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const visible = [items[index], items[(index + 1) % items.length], items[(index + 2) % items.length]];

  return (
    <section id="testimoni" className="bg-gradient-ice py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-electric">Testimoni</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Apa kata <span className="text-gradient-brand">pelanggan kami</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Sebelumnya" className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-soft transition hover:border-electric hover:text-electric">
              <ChevronLeft className="size-5" />
            </button>
            <button onClick={next} aria-label="Selanjutnya" className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-navy shadow-soft transition hover:border-electric hover:text-electric">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {visible.map((t, i) => (
            <motion.div
              key={`${t.name}-${index}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border/60"
            >
              <div className="mb-3 flex gap-0.5 text-electric">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">"{t.comment}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-gradient-brand font-bold text-white">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
