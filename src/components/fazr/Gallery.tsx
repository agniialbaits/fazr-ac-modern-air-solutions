import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-wash.jpg";
import g2 from "@/assets/gallery-install.jpg";
import g3 from "@/assets/gallery-freon.jpg";
import g4 from "@/assets/gallery-car-vent.jpg";
import g5 from "@/assets/gallery-beforeafter.jpg";
import g6 from "@/assets/gallery-tools.jpg";

const photos = [
  { src: g1, label: "Cuci AC Rumah" },
  { src: g3, label: "Pengecekan Freon" },
  { src: g2, label: "Pemasangan AC" },
  { src: g4, label: "Service AC Mobil" },
  { src: g5, label: "Before / After" },
  { src: g6, label: "Peralatan Lengkap" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="dokumentasi" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-electric">Dokumentasi</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Galeri pengerjaan <span className="text-gradient-brand">teknisi kami</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Bukti nyata kualitas setiap service yang kami kerjakan.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((p, i) => (
            <motion.button
              key={p.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              onClick={() => setOpen(p.src)}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-border/60 ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                width={800}
                height={800}
                className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-4 text-left text-white opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-sm font-semibold">{p.label}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/80 p-4 backdrop-blur"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Tutup"
            >
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={open}
              alt="Preview"
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-glow"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
