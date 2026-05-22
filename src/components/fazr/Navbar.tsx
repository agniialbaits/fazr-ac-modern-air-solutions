import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/fazr-ac-logo.jpeg";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#dokumentasi", label: "Dokumentasi" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

const WA_URL = "https://wa.me/6281234567890?text=Halo%20FAZR%20AC%2C%20saya%20ingin%20booking%20service%20AC";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <a href="#beranda" className="flex items-center gap-2">
          <img src={logo} alt="FAZR AC" className="h-10 w-10 rounded-full object-cover ring-1 ring-electric/20" />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-navy">FAZR <span className="text-electric">AC</span></span>
            <span className="hidden text-[10px] uppercase tracking-wider text-muted-foreground sm:block">Service AC Ruangan & Mobil</span>
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-electric"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild variant="brand" size="lg">
            <a href={WA_URL} target="_blank" rel="noreferrer">
              <Snowflake className="size-4" />
              Booking Sekarang
            </a>
          </Button>
        </div>

        <button
          className="rounded-full p-2 text-navy lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass border-t border-border/60 lg:hidden"
        >
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-accent"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="brand" className="mt-2 w-full">
              <a href={WA_URL} target="_blank" rel="noreferrer">Booking Sekarang</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
