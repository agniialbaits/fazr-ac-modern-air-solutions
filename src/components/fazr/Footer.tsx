import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/fazr-ac-logo.jpeg";

export function Footer() {
  return (
    <footer id="kontak" className="relative overflow-hidden bg-navy text-white">
      <svg className="pointer-events-none absolute inset-x-0 top-0 h-32 w-full text-electric/20" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C360,120 720,0 1440,80 L1440,0 L0,0 Z" fill="currentColor" />
      </svg>

      <div className="container relative mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FAZR AC" className="h-12 w-12 rounded-full object-cover ring-2 ring-electric/40" />
            <div>
              <p className="text-lg font-bold">FAZR <span className="text-electric">AC</span></p>
              <p className="text-xs text-white/60">Service AC Ruangan & Mobil</p>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Jasa profesional service AC mobil dan AC ruangan dengan teknisi berpengalaman,
            harga transparan, dan garansi terpercaya.
          </p>
          <div className="flex gap-2">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="flex size-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-electric">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">Menu</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {["Beranda", "Layanan", "Testimoni", "Dokumentasi", "FAQ"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="transition hover:text-electric">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">Kontak</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 size-4 text-electric" /> +62 812-3456-7890</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 size-4 text-electric" /> halo@fazrac.id</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 text-electric" /> Jakarta & Sekitarnya</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">Jam Operasional</h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li className="flex items-center gap-2"><Clock className="size-4 text-electric" /> Senin – Sabtu: 08.00 – 21.00</li>
            <li className="flex items-center gap-2"><Clock className="size-4 text-electric" /> Minggu: 09.00 – 18.00</li>
            <li className="mt-2 rounded-lg bg-white/5 p-3 text-xs">Emergency call 24 jam untuk pelanggan langganan.</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/60 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} FAZR AC. All rights reserved.</p>
          <p>Dingin maksimal, layanan profesional.</p>
        </div>
      </div>
    </footer>
  );
}
