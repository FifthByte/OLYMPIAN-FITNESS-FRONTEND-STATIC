import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-linear-to-br from-surface via-background to-surface p-12 sm:p-20 text-center"
        >
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
          <div className="pointer-events-none absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/25 blur-[120px] animate-pulse-glow" />
          <div className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gold/25 blur-[120px] animate-pulse-glow" />

          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              Limited intake
            </div>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-7xl">
              The work <span className="text-gradient">starts today.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Join Olympian Fitness with founding-member pricing locked for
              life. No contracts. No excuses.
            </p>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground glow-primary"
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Claim Your Spot
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
