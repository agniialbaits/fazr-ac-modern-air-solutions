import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Wrench, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCar from "@/assets/hero-car-ac.jpg";
import heroRoom from "@/assets/hero-room-ac.jpg";

const WA = "https://wa.me/6281234567890?text=Halo%20FAZR%20AC";

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 bg-gradient-hero" />
      {/* subtle curve like logo */}
      <svg
        className="pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] text-electric/10"
        viewBox="0 0 200 200" fill="none"
      >
        <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" />
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="container relative mx-auto grid items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-electric/20 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-electric backdrop-blur">
            <Snowflake className="size-3.5" />
            Dingin Maksimal, Hemat Listrik
          </span>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-navy md:text-6xl">
            Service AC Mobil & Ruangan{" "}
            <span className="text-gradient-brand">Profesional</span>
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            Melayani service, cuci AC, isi freon, bongkar pasang, dan maintenance dengan
            teknisi berpengalaman. Cepat, bergaransi, dan harga transparan.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="xl" variant="brand">
              <a href={WA} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" />
                Booking Sekarang
              </a>
            </Button>
            <Button asChild size="xl" variant="outline">
              <a href="#layanan">
                Lihat Layanan
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { icon: Zap, label: "Fast Response" },
              { icon: ShieldCheck, label: "Bergaransi" },
              { icon: Wrench, label: "Teknisi Profesional" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-navy shadow-soft ring-1 ring-electric/10">
                <b.icon className="size-3.5 text-electric" />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative h-[420px] md:h-[520px]"
        >
          <div className="absolute right-0 top-0 h-[70%] w-[78%] overflow-hidden rounded-3xl shadow-soft ring-1 ring-electric/10">
            <img src={heroCar} alt="Teknisi service AC mobil" className="h-full w-full object-cover" width={1280} height={896} />
          </div>
          <div className="absolute bottom-0 left-0 h-[55%] w-[62%] overflow-hidden rounded-3xl shadow-soft ring-4 ring-white">
            <img src={heroRoom} alt="Teknisi service AC ruangan" className="h-full w-full object-cover" width={1280} height={896} loading="lazy" />
          </div>

          {/* floating glass badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-2 top-6 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-soft"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
              <Snowflake className="size-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Suhu Ideal</p>
              <p className="text-sm font-bold text-navy">18° Cool Mode</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="glass absolute -bottom-4 right-2 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-soft"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-navy text-white">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Garansi Service</p>
              <p className="text-sm font-bold text-navy">30 Hari</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
