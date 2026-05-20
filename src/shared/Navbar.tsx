import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      localStorage.getItem("of-theme")) as "dark" | "light" | null;
    if (stored) setTheme(stored);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("of-theme", next);
    } catch {}
  };

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-60 h-[2px] origin-left bg-linear-to-r from-primary via-gold to-accent"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#top" className="group flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-md bg-linear-to-br from-primary to-gold opacity-90" />
              <div className="absolute inset-[3px] rounded-[5px] bg-background flex items-center justify-center font-display text-sm font-bold">
                Ω
              </div>
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              OLYMPIAN<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-linear-to-r from-primary to-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-10 w-10 place-items-center rounded-full border border-border/60 text-foreground transition-all hover:border-primary/60 hover:text-primary"
            >
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </motion.span>
            </button>
            <a
              href="#pricing"
              className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-primary hover:text-primary-foreground md:inline-flex"
            >
              Join Now
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border/60 md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { translateX: 0 } : { translateX: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 240 }}
        className="fixed inset-0 overflow-x-hidden z-70 flex flex-col bg-background/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-display text-lg font-bold">
            OLYMPIAN<span className="text-primary">.</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border/60"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-6">
          {NAV.map((n, i) => (
            <motion.a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.05 * i + 0.1 }}
              className="font-display text-3xl font-semibold tracking-tight hover:text-primary"
            >
              {n.label}
            </motion.a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground"
          >
            Join Now
          </a>
        </nav>
      </motion.div>
    </>
  );
}
