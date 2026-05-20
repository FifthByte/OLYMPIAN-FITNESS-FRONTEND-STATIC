import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";


function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative aspect-4/5 overflow-hidden rounded-3xl"
        >
          <motion.img
            src="/images/about.jpg"
            alt="Athlete chalking up"
            width={1280}
            height={1280}
            loading="lazy"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Est. 2014
            </div>
            <div className="mt-1 font-display text-xl font-semibold">
              Twelve years forging champions.
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              About Olympian
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Not a gym.
              <br />A <span className="text-gradient">proving ground.</span>
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              We built Olympian for the obsessed. The athletes who treat
              training as craft. Our coaches design progressive systems that
              adapt to your physiology, not the other way around.
            </p>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Cinematic facilities. Performance-grade equipment. A standard of
              detail you can feel in every rep.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 grid grid-cols-3 gap-4"
          >
            {[
              { v: 12, s: "K+", l: "Members" },
              { v: 98, s: "%", l: "Retention" },
              { v: 24, s: "/7", l: "Access" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border/60 bg-surface/50 p-5"
              >
                <div className="font-display text-4xl font-bold text-gradient">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
