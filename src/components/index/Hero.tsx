import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const stats = [
  { v: "12K+", l: "Active Members" },
  { v: "40+", l: "Elite Trainers" },
  { v: "3.2K", l: "Transformations" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Floating glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[450px] w-[450px] rounded-full bg-gold/15 blur-[140px] animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
          Class of 2026 — Now Open
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-[8rem]"
        >
          Forge Your <br />
          <span className="text-gradient">Ultimate Physique</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          A cinematic training experience engineered for athletes who refuse the
          ordinary. Elite coaching, intelligent programming, no shortcuts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] glow-primary"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Join Now{" "}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/30 px-7 py-3.5 text-sm font-semibold backdrop-blur hover:border-foreground/40"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-foreground text-background">
              <Play className="h-3 w-3 fill-current" />
            </span>
            Explore Programs
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-20 grid gap-4 sm:mt-28 sm:grid-cols-3 sm:max-w-2xl"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="font-display text-3xl font-bold text-gradient">
                {s.v}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/40 bg-background/40 backdrop-blur-sm">
        <div className="flex overflow-hidden py-4">
          <div className="flex shrink-0 animate-marquee gap-12 whitespace-nowrap px-6 font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                {[
                  "Strength",
                  "•",
                  "Discipline",
                  "•",
                  "Aesthetics",
                  "•",
                  "Performance",
                  "•",
                  "Endurance",
                  "•",
                  "Mindset",
                  "•",
                ].map((w, i) => (
                  <span key={i} className={w === "•" ? "text-primary" : ""}>
                    {w}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
