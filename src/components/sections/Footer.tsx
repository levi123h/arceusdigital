import { Container } from "@/components/ui/Container";

const links = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-black text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-tight">Arceus Digital</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Precision marketing for teams who want measurable growth, clean
              execution, and systems that scale.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
                LINKS
              </p>
              <ul className="mt-4 space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-white/80 transition hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
                CONTACT
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <p>
                  <a
                    className="transition hover:text-white"
                    href="mailto:hello@arceusdigital.com"
                  >
                    hello@arceusdigital.com
                  </a>
                </p>
                <p>
                  <a className="transition hover:text-white" href="tel:+10000000000">
                    +1 (000) 000-0000
                  </a>
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
                SOCIAL
              </p>
              <div className="mt-4 flex gap-3">
                {["X", "IN", "IG"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/[0.02] text-xs font-semibold tracking-tight text-white/75 transition hover:border-white/30 hover:bg-white/[0.05] hover:text-white"
                    aria-label={s}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Arceus Digital. Built for growth.</p>
          <p className="text-white/55">Minimal. Editorial. Performance-led.</p>
        </div>
      </Container>
    </footer>
  );
}

