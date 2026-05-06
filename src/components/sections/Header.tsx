"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Insights", href: "/#insights" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/55">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-white/90 transition hover:text-white"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-10 w-56 overflow-hidden">
            <Image
              src="/images/Arceus_Digital_Logo_Horizontal_newnew.png"
              alt="Arceus Digital"
              fill
              className="object-contain"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="#contact" variant="secondary" className="h-11 px-5">
            Get a Proposal
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.02] text-white/85 transition hover:border-white/25 hover:bg-white/[0.04] md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-black/85 md:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile" className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/[0.04] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
                <Button href="#contact" variant="primary" className="h-11 w-full">
                  Get a Proposal
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

