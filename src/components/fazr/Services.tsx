import { motion } from "framer-motion";
import {
  Car, Home, Droplets, SprayCan, Wrench, CalendarCheck, AlertTriangle, PackagePlus, ArrowRight,
} from "lucide-react";

const services = [
  { icon: Car, title: "Service AC Mobil", desc: "Perawatan dan perbaikan menyeluruh sistem AC mobil semua merek." },
  { icon: Home, title: "Service AC Rumah", desc: "Service AC split, cassette, dan standing untuk hunian dan kantor." },
  { icon: Droplets, title: "Isi Freon", desc: "Top up freon R32, R410A, R134a dengan tekanan presisi." },
  { icon: SprayCan, title: "Cuci AC", desc: "Cuci AC menyeluruh hingga ke evaporator agar dingin maksimal." },
  { icon: Wrench, title: "Bongkar Pasang AC", desc: "Pindah lokasi AC aman dengan teknisi bersertifikat." },
  { icon: CalendarCheck, title: "Maintenance Berkala", desc: "Paket perawatan rutin agar AC tetap awet dan hemat listrik." },
  { icon: AlertTriangle, title: "Perbaikan AC Bocor", desc: "Deteksi & tambal kebocoran freon, pipa, dan tray air." },
  { icon: PackagePlus, title: "Instalasi AC Baru", desc: "Pemasangan AC baru rapi dan sesuai standar pabrikan." },
];

export function Services() {
  return (
    <section id="layanan" className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-electric">Layanan Kami</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Solusi Lengkap untuk AC <span className="text-gradient-brand">Mobil & Ruangan</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Dari cuci AC hingga instalasi baru — kami tangani semua kebutuhan pendinginan Anda.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition-all hover:border-electric/40 hover:shadow-glow"
            >
              <div className="absolute -right-12 -top-12 size-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-soft">
                  <s.icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <a
                  href="#kontak"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric"
                >
                  Detail
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
