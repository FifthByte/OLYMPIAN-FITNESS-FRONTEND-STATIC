import { useRef, useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    name: "Daniel R.",
    weeks: 16,
    before: "linear-gradient(135deg,#3a2a1f,#1a1410)",
    after: "linear-gradient(135deg,#2a4a6e,#0a1a2a)",
    h: "tall",
  },
  {
    name: "Sofia K.",
    weeks: 24,
    before: "linear-gradient(135deg,#4a3a2a,#1a1410)",
    after: "linear-gradient(135deg,#b8884a,#3a2a1f)",
    h: "short",
  },
  {
    name: "Akira T.",
    weeks: 12,
    before: "linear-gradient(135deg,#2a2a2a,#0a0a0a)",
    after: "linear-gradient(135deg,#6e2a2a,#1a0a0a)",
    h: "tall",
  },
  {
    name: "Maya P.",
    weeks: 20,
    before: "linear-gradient(135deg,#3a3a4a,#1a1a2a)",
    after: "linear-gradient(135deg,#4ad1b8,#1a3a3a)",
    h: "short",
  },
];

function Card({ item, i }: { item: (typeof items)[number]; i: number }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: i * 0.08 }}
      ref={ref}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      className={`group relative overflow-hidden rounded-3xl  border border-border/60 ${
        item.h === "tall" ? " aspect-4/5" : "aspect-4/5"
      }`}
    >
      <div className="absolute inset-0" style={{ background: item.before }} />
      <div
        className="absolute inset-0"
        style={{ background: item.after, clipPath: `inset(0 0 0 ${pos}%)` }}
      />
      <div
        className="absolute inset-y-0 w-px bg-foreground/70 shadow-[0_0_20px_var(--primary)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-foreground text-background text-xs font-bold">
          ⇄
        </div>
      </div>
      <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
        Before
      </div>
      <div className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
        After
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
        <div>
          <div className="font-display text-lg font-semibold">{item.name}</div>
          <div className="text-xs text-muted-foreground">
            {item.weeks} week transformation
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-primary">
              Transformations
            </div>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Real members. <span className="text-gradient">Real results.</span>
            </h2>
          </motion.div>
          <p className="max-w-sm text-muted-foreground">
            Drag the slider on each card to reveal the transformation.
          </p>
        </div>

        <div className="mt-12 grid ] grid-cols-2 gap-5  lg:grid-cols-4">
          {items.map((it, i) => (
            <Card key={it.name} item={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
