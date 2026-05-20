import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 49,
    yearly: 39,
    desc: "Full gym access with the essentials.",
    features: [
      "Unlimited gym access",
      "Locker & shower",
      "Group classes (3/wk)",
      "Mobile app",
    ],
    featured: false,
  },
  {
    name: "Elite",
    monthly: 119,
    yearly: 99,
    desc: "Our most popular plan for serious athletes.",
    features: [
      "Everything in Starter",
      "Unlimited classes",
      "2 PT sessions / month",
      "Nutrition plan",
      "Recovery suite",
    ],
    featured: true,
  },
  {
    name: "Olympian",
    monthly: 249,
    yearly: 209,
    desc: "White-glove coaching, no compromises.",
    features: [
      "Everything in Elite",
      "Weekly 1:1 PT",
      "Bloodwork & metrics",
      "Sauna + cold plunge",
      "Concierge support",
    ],
    featured: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <section id="pricing" className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary"
          >
            Membership
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Pick your path.{" "}
            <span className="text-gradient">Outwork the rest.</span>
          </motion.h2>

          <div className="mt-10 inline-flex items-center gap-1 rounded-full glass p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${!yearly ? "text-background" : "text-muted-foreground"}`}
            >
              {!yearly && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", damping: 24, stiffness: 240 }}
                />
              )}
              <span className="relative">Monthly</span>
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${yearly ? "text-background" : "text-muted-foreground"}`}
            >
              {yearly && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", damping: 24, stiffness: 240 }}
                />
              )}
              <span className="relative">
                Yearly <span className="ml-1 text-gold">−20%</span>
              </span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ${
                p.featured
                  ? "border border-primary/40 bg-linear-to-b from-primary/10 to-surface glow-primary"
                  : "border border-border/60 bg-surface/40 hover:border-foreground/20"
              }`}
            >
              {p.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {p.name}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={yearly ? "y" : "m"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-6xl font-bold"
                  >
                    ${yearly ? p.yearly : p.monthly}
                  </motion.span>
                </AnimatePresence>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full ${p.featured ? "bg-primary text-primary-foreground" : "bg-surface-elevated text-foreground"}`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border bg-background/40 hover:border-foreground/40"
                }`}
              >
                Choose {p.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
