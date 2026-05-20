import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube } from "lucide-react";

const trainers = [
  {
    img: "/images/trainer1.jpg",
    name: "Marcus Vale",
    role: "Head Coach — Strength",
    tag: "IPF Pro",
  },
  { img: "/images/trainer2.jpg", name: "Elena Kross", role: "CrossFit Specialist", tag: "CF-L4" },
  { img: "/images/trainer3.jpg", name: "Rio Castell", role: "Bodybuilding Coach", tag: "IFBB Pro" },
  {
    img: "/images/trainer4.jpg",
    name: "Nadia Sloan",
    role: "Boxing & Conditioning",
    tag: "Pro Fighter",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            The Coaches
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Trained by <span className="text-gradient">the best</span> in their
            field.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative aspect-3/4 overflow-hidden rounded-3xl"
            >
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                width={800}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />

              <div className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                {t.tag}
              </div>

              <div className="absolute inset-x-4 bottom-4 translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="font-display text-xl font-bold">{t.name}</h3>
                <div className="text-sm text-muted-foreground">{t.role}</div>
                <div className="mt-3 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {[Instagram, Twitter, Youtube].map((Icon, k) => (
                    <a
                      key={k}
                      href="#"
                      aria-label="Social"
                      className="grid h-8 w-8 place-items-center rounded-full glass hover:text-primary"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
