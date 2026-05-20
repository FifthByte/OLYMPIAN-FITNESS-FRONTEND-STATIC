import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Alex Mercer",
    role: "Member · 2 years",
    text: "I've trained in gyms across three continents. Olympian is the only place where the standard matches the marketing. Every coach, every machine, every detail.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Member · 18 months",
    text: "Lost 38lbs and gained a community. The programming is intelligent, the energy is contagious, and the results spoke for themselves by month three.",
    rating: 5,
  },
  {
    name: "Tomás Rivera",
    role: "Member · 3 years",
    text: "The coaches actually listen. My programming evolves with my goals, my injuries, my schedule. It's the closest thing to having a sports science department on call.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % reviews.length), 6500);
    return () => clearInterval(id);
  }, []);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  const r = reviews[i];

  return (
    <section className="relative py-10 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            Word on the floor
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            From the people{" "}
            <span className="text-gradient">putting in the work.</span>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-3xl p-10 sm:p-14"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-linear-to-br from-primary to-gold font-display font-bold text-background">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Slide ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-10 bg-primary" : "w-5 bg-border"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous"
                className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-foreground/40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-foreground/40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
