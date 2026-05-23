import { motion } from "framer-motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Berapa lama waktu service AC?", a: "Tergantung jenis service" },
  { q: "Apakah ada garansi?", a: "Ya. Kami memberikan garansi service hingga 15 hari untuk pengerjaan dan sparepart." },
  { q: "Bisa panggilan ke rumah?", a: "Tentu. Kami melayani panggilan ke rumah, kantor, kafe, dan workshop tanpa biaya transport untuk area Sumedang." },
  { q: "Melayani area mana saja?", a: "Kami melayani Sumedang, Bandung dan sekitarnya. Hubungi kami untuk konfirmasi area." },
  { q: "Melayani semua tipe AC mobil?", a: "Ya. Semua merek dan tipe — Toyota, Honda, Suzuki, Daihatsu, Mitsubishi, hingga mobil Eropa." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-electric">FAQ</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">
              Pertanyaan yang sering <span className="text-gradient-brand">ditanyakan</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tidak menemukan jawabannya? Hubungi tim kami — kami siap membantu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border border-border/60 bg-card px-5 shadow-soft"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-navy hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
