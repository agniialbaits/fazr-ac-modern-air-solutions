import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/fazr/Navbar";
import { Hero } from "@/components/fazr/Hero";
import { Services } from "@/components/fazr/Services";
import { Features } from "@/components/fazr/Features";
import { Testimonials } from "@/components/fazr/Testimonials";
import { Gallery } from "@/components/fazr/Gallery";
import { Process } from "@/components/fazr/Process";
import { FAQ } from "@/components/fazr/FAQ";
import { CTA } from "@/components/fazr/CTA";
import { Footer } from "@/components/fazr/Footer";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FAZR AC – Service AC Mobil & Ruangan Profesional" },
      {
        name: "description",
        content:
          "FAZR AC: jasa service AC mobil & ruangan, cuci AC, isi freon, bongkar pasang, dan maintenance. Teknisi profesional, fast response, bergaransi.",
      },
      { property: "og:title", content: "FAZR AC – Service AC Mobil & Ruangan Profesional" },
      {
        property: "og:description",
        content:
          "Teknisi berpengalaman, harga transparan, dan bergaransi. Booking via WhatsApp sekarang.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
});

function Index() {
  const WA = "https://wa.me/6283898216494?text=Halo%20FAZR%20AC";
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Process />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow transition hover:scale-110"
      >
        <MessageCircle className="size-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-electric/40" />
      </a>
    </div>
  );
}
