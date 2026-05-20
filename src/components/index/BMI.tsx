import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export function BMI() {
  const [height, setHeight] = useState(178);
  const [weight, setWeight] = useState(76);
  const bmi = useMemo(
    () => +(weight / (height / 100) ** 2).toFixed(1),
    [height, weight],
  );

  const category =
    bmi < 18.5
      ? "Underweight"
      : bmi < 25
        ? "Optimal"
        : bmi < 30
          ? "Overweight"
          : "Obese";
  const color =
    bmi < 18.5
      ? "var(--primary)"
      : bmi < 25
        ? "var(--neon)"
        : bmi < 30
          ? "var(--gold)"
          : "var(--accent)";
  const pct = Math.max(0, Math.min(100, ((bmi - 14) / (36 - 14)) * 100));

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-4xl border border-border/60 bg-surface/40 p-8 sm:p-14">
          <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">
                BMI Calculator
              </div>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Know your <span className="text-gradient">baseline.</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Start with where you are. Then build a program designed to take
                you somewhere extraordinary.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <div className="flex justify-between text-sm">
                    <label className="text-muted-foreground">Height</label>
                    <span className="font-display font-semibold">
                      {height} cm
                    </span>
                  </div>
                  <input
                    type="range"
                    min={140}
                    max={220}
                    value={height}
                    onChange={(e) => setHeight(+e.target.value)}
                    className="mt-3 w-full accent-primary"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <label className="text-muted-foreground">Weight</label>
                    <span className="font-display font-semibold">
                      {weight} kg
                    </span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={160}
                    value={weight}
                    onChange={(e) => setWeight(+e.target.value)}
                    className="mt-3 w-full accent-primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative">
                <svg
                  width="240"
                  height="240"
                  viewBox="0 0 240 240"
                  className="-rotate-90"
                >
                  <circle
                    cx="120"
                    cy="120"
                    r="100"
                    stroke="var(--border)"
                    strokeWidth="14"
                    fill="none"
                  />
                  <motion.circle
                    cx="120"
                    cy="120"
                    r="100"
                    stroke={color}
                    strokeWidth="14"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 100}
                    initial={false}
                    animate={{
                      strokeDashoffset: 2 * Math.PI * 100 * (1 - pct / 100),
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ filter: `drop-shadow(0 0 10px ${color})` }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    key={bmi}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-display text-6xl font-bold"
                  >
                    {bmi}
                  </motion.div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    Your BMI
                  </div>
                </div>
              </div>
              <div
                className="mt-6 rounded-full glass px-5 py-2 text-sm font-semibold"
                style={{ color }}
              >
                {category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
