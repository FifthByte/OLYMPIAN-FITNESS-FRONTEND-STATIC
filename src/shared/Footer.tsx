import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";



export function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-border/60 bg-surface/40 pt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9">
                <div className="absolute inset-0 rounded-md bg-linear-to-br from-primary to-gold" />
                <div className="absolute inset-[3px] rounded-[5px] bg-background grid place-items-center font-display text-sm font-bold">
                  Ω
                </div>
              </div>
              <span className="font-display text-xl font-bold">
                OLYMPIAN<span className="text-primary">.</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              A cinematic training experience for athletes who refuse the
              ordinary.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, k) => (
                <a
                  key={k}
                  href="#"
                  aria-label="Social"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border/60 hover:border-primary/60 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Explore
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Programs", "Trainers", "Pricing", "Gallery"].map(
                (x) => (
                  <li key={x}>
                    <a
                      href={`#${x.toLowerCase()}`}
                      className="hover:text-primary"
                    >
                      {x}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Visit
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>42 Athena Boulevard</li>
              <li>Downtown District</li>
              <li>Mon–Sun · 24/7</li>
              <li className="text-foreground">+1 (555) 012-9876</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Get the drop
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Programs, founding-member offers, no spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-border/60 bg-background/40 p-1"
            >
              <input
                type="email"
                required
                placeholder="you@strength.com"
                className="flex-1 bg-transparent px-4 text-sm placeholder:text-muted-foreground/60 focus:outline-none"
              />
              <button className="rounded-full bg-foreground px-5 py-2 text-xs font-semibold text-background hover:bg-primary hover:text-primary-foreground">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 py-8 text-xs text-muted-foreground sm:flex-row">
          <div>
            © {new Date().getFullYear()} Olympian Fitness. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
