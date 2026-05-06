"use client";

import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

type WorkItem = { id: string; src: string; alt?: string };

const defaultItems: WorkItem[] = [
  { id: "ad-1", src: "/images/ads-case-study/1.jpg", alt: "Ad creative 01" },
  { id: "ad-2", src: "/images/ads-case-study/2.jpg", alt: "Ad creative 02" },
  { id: "ad-3", src: "/images/ads-case-study/3.jpg", alt: "Ad creative 03" },
  { id: "ad-4", src: "/images/ads-case-study/4.jpg", alt: "Ad creative 04" },
  { id: "ad-5", src: "/images/ads-case-study/5.png", alt: "Ad creative 05" },
  { id: "ad-6", src: "/images/ads-case-study/6.jpg", alt: "Ad creative 06" },
  { id: "ad-7", src: "/images/ads-case-study/7.jpg", alt: "Ad creative 07" },
  { id: "ad-8", src: "/images/ads-case-study/8.jpg", alt: "Ad creative 08" },
  { id: "ad-9", src: "/images/ads-case-study/9.jpg", alt: "Ad creative 09" },
  { id: "ad-10", src: "/images/ads-case-study/10.jpg", alt: "Ad creative 10" },
  { id: "ad-11", src: "/images/ads-case-study/11.jpg", alt: "Ad creative 11" },
  { id: "ad-12", src: "/images/ads-case-study/12.jpg", alt: "Ad creative 12" },
  { id: "ad-13", src: "/images/ads-case-study/13.jpg", alt: "Ad creative 13" },
];

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export function WorkCarousel({
  items = defaultItems,
  speedPxPerSec = 72,
}: {
  items?: WorkItem[];
  speedPxPerSec?: number;
}) {
  const x = useMotionValue(0);
  const [stepPx, setStepPx] = useState(260);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const loopItems = useMemo(() => [...items, ...items], [items]);
  const setWidth = items.length * stepPx;

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      const next = Math.max(220, Math.min(320, Math.floor(w / 3.2)));
      setStepPx(next);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    const next = x.get() - (speedPxPerSec * delta) / 1000;
    x.set(next <= -setWidth ? next + setWidth : next);
  });

  return (
    <div ref={viewportRef} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(90deg,rgba(0,0,0,1),rgba(0,0,0,0))]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(270deg,rgba(0,0,0,1),rgba(0,0,0,0))]" />

      <motion.div style={{ x }} className="flex items-stretch gap-6">
        {loopItems.map((item, i) => (
          <CarouselTile
            key={`${item.id}-${i}`}
            src={item.src}
            alt={item.alt ?? ""}
            index={i}
            x={x}
            stepPx={stepPx}
          />
        ))}
      </motion.div>
    </div>
  );
}

function CarouselTile({
  src,
  alt,
  index,
  x,
  stepPx,
}: {
  src: string;
  alt: string;
  index: number;
  x: MotionValue<number>;
  stepPx: number;
}) {
  const viewport = useRef<HTMLDivElement | null>(null);
  const [viewportW, setViewportW] = useState(1200);

  useLayoutEffect(() => {
    const el = viewport.current?.parentElement;
    if (!el) return;
    const ro = new ResizeObserver(() => setViewportW(el.clientWidth));
    ro.observe(el);
    setViewportW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const base = index * (stepPx + 24); // tile width + gap (gap-6 => 24px)

  const scale = useTransform(x, (v) => {
    const center = viewportW / 2;
    const tileCenter = base + v + stepPx / 2;
    const dist = Math.abs(center - tileCenter);
    const t = clamp01(dist / (viewportW * 0.35));
    return 1.12 - 0.22 * t;
  });

  const opacity = useTransform(x, (v) => {
    const center = viewportW / 2;
    const tileCenter = base + v + stepPx / 2;
    const dist = Math.abs(center - tileCenter);
    const t = clamp01(dist / (viewportW * 0.55));
    return 1 - 0.35 * t;
  });

  return (
    <motion.div
      ref={viewport}
      style={{
        width: stepPx,
        scale,
        opacity,
      }}
      className="shrink-0"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/12 bg-white/[0.02] shadow-[var(--shadow-soft)]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 70vw, 520px"
        />
      </div>
    </motion.div>
  );
}

