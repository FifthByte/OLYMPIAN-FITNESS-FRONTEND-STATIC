import { motion } from "framer-motion";
import { Dumbbell, Flame, HeartPulse, Activity, User, Zap } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Progressive overload protocols built around your biomechanics.",
    color: "primary",
  },
  {
    icon: Flame,
    title: "Bodybuilding",
    desc: "Aesthetic-first programming for hypertrophy and conditioning.",
    color: "gold",
  },
  {
    icon: HeartPulse,
    title: "Weight Loss",
    desc: "Sustainable transformations with metabolic conditioning.",
    color: "accent",
  },
  {
    icon: Activity,
    title: "CrossFit",
    desc: "Functional movement, varied intensity, measurable progress.",
    color: "neon",
  },
  {
    icon: User,
    title: "Personal Training",
    desc: "1:1 with elite coaches. Plans engineered around your life.",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Cardio Conditioning",
    desc: "VO2-max sessions, zone training, sport-specific output.",
    color: "gold",
  },
];

const colorMap: Record<string, string> = {
  primary:
    "from-primary/30 to-primary/0 group-hover:shadow-[0_0_60px_-10px_var(--primary)]",
  gold: "from-gold/30 to-gold/0 group-hover:shadow-[0_0_60px_-10px_var(--gold)]",
  accent:
    "from-accent/30 to-accent/0 group-hover:shadow-[0_0_60px_-10px_var(--accent)]",
  neon: "from-neon/30 to-neon/0 group-hover:shadow-[0_0_60px_-10px_var(--neon)]",
};

export function Programs() {
  return (
    <section id="programs" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              Programs
            </div>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Six disciplines.
              <br />
              One uncompromising standard.
            </h2>
          </motion.div>
          <p className="max-w-sm text-muted-foreground">
            Every program is led by certified coaches with international
            competition experience.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a
                href="#pricing"
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface/40 p-8 transition-all duration-500 hover:border-foreground/20"
              >
                <div
                  className={`absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-radial bg-linear-to-br ${colorMap[p.color]} opacity-50 blur-3xl transition-opacity duration-500`}
                />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-border/60 bg-background/40 transition-colors group-hover:border-primary/60 group-hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                    Discover
                    <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
