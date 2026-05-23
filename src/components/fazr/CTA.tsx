import { motion } from "framer-motion";
import { MessageCircle, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA = "https://wa.me/6283898216494?text=Halo%20FAZR%20AC%2C%20saya%20ingin%20booking%20service%20AC";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 text-center shadow-glow md:p-16"
        >
          {/* airflow lines */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute h-px w-24 rounded-full bg-white/40 animate-airflow"
                style={{
                  top: `${15 + i * 18}%`,
                  left: 0,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>

          <div className="relative">
            <div className="mx-auto mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-white/15 text-white animate-float">
              <Snowflake className="size-7" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              AC Tidak Dingin? Service Sekarang!
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85">
              Booking dalam hitungan detik via WhatsApp. Teknisi siap meluncur ke lokasi Anda.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="xl" className="bg-white text-electric hover:bg-white/95 shadow-glow">
                <a href={WA} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5" />
                  Chat WhatsApp Sekarang
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
