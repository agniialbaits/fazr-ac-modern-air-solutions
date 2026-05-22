import { motion } from "framer-motion";
import { MessageSquare, SearchCheck, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Konsultasi", desc: "Hubungi kami via WhatsApp untuk diskusi kebutuhan." },
  { icon: SearchCheck, title: "Pengecekan AC", desc: "Teknisi datang & melakukan diagnosa menyeluruh." },
  { icon: Wrench, title: "Proses Service", desc: "Pengerjaan rapi sesuai standar dengan alat profesional." },
  { icon: CheckCircle2, title: "Testing & Finishing", desc: "Uji performa, bersih-bersih, dan garansi diserahkan." },
];

export function Process() {
  return (
    <section className="bg-gradient-ice py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-electric">Proses Kerja</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            4 langkah sederhana, hasil <span className="text-gradient-brand">maksimal</span>
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                <s.icon className="size-6" />
              </div>
              <div className="mt-2 text-xs font-bold text-electric">LANGKAH {i + 1}</div>
              <h3 className="mt-1 text-lg font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
