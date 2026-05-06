"use client";

import { Container } from "@/components/ui/Container";
import { MotionDiv, fadeUp } from "@/components/ui/Motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef, useState } from "react";

type Service = {
  title: string;
  description: string;
  backgroundImageSrc?: string;
  href: string;
};

const services: Service[] = [
  {
    title: "PERFORMANCE MARKETING",
    description: "Data-driven campaigns designed for measurable ROI.",
    backgroundImageSrc: "/images/technology-hologram-indoors.jpg",
    href: "/services/performance-marketing",
  },
  {
    title: "Website Production",
    description: "Scalable systems to consistently acquire qualified leads.",
    backgroundImageSrc: "/images/website-production.jpg",
    href: "/services/website-production",
  },
  {
    title: "CREATIVE & CONTENT",
    description: "Content that converts, not just looks good.",
    backgroundImageSrc: "/images/creative-content.jpg",
    href: "/services/creative-content",
  },
  {
    title: "SEO and AI search",
    description: "Long-term organic growth with technical precision.",
    backgroundImageSrc: "/images/seo-ai-search.jpg",
    href: "/services/seo-ai-search",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isFeatured = Boolean(service.backgroundImageSrc);
  const headerVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isHover, setIsHover] = useState(false);

  function handleEnter() {
    setIsHover(true);
    const v = headerVideoRef.current;
    if (!v) return;
    try {
      v.currentTime = 0;
      void v.play();
    } catch {
      // Ignore autoplay restrictions; still show a poster/first frame when possible
    }
  }

  function handleLeave() {
    setIsHover(false);
    const v = headerVideoRef.current;
    if (!v) return;
    try {
      v.pause();
      v.currentTime = 0;
    } catch {
      // noop
    }
  }

  return (
    <MotionDiv
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 0.04 + index * 0.02 }}
      className="group relative aspect-[1/1.75] overflow-hidden rounded-none border border-white/12 bg-white/[0.02] px-6 py-[4px] shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Link
        href={service.href}
        aria-label={`Open ${service.title}`}
        className="absolute inset-0 z-[1]"
      />

      {isFeatured && service.backgroundImageSrc ? (
        <>
          <Image
            src={service.backgroundImageSrc}
            alt=""
            fill
            priority={index === 0 || index === 1}
            className="pointer-events-none select-none object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.88),rgba(5,20,60,0.72),rgba(0,0,0,0.86))] opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(80,160,255,0.20),transparent_55%)] opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
        </>
      ) : null}

      <video
        ref={headerVideoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        autoPlay={isHover}
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/videos/0_Galaxy_Spiral_Galaxy_3840x2160.mp4"
          type="video/mp4"
        />
      </video>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.90))]" />

      <div className="relative flex h-full flex-col justify-between">
        <div>
          {!isFeatured ? (
            <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
              SERVICE
            </p>
          ) : null}
          <h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-white">
            {service.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/70">
            {service.description}
          </p>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[2] grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        >
          <div className="pointer-events-auto">
            <Button
              href={service.href}
              variant="secondary"
              className="h-10 rounded-full"
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-black text-white">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
              SERVICES
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
              Systems, creative, and performance — built to scale.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              A modular service stack designed to compound growth: acquisition,
              conversion, and measurement — with clarity at every step.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10" />
    </section>
  );
}

