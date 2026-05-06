import { Container } from "@/components/ui/Container";
import { MotionDiv, fadeUp } from "@/components/ui/Motion";
import Image from "next/image";

export function CEO() {
  return (
    <section id="leadership" className="scroll-mt-20 bg-black text-white">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          <MotionDiv
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.04 }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-white/12 bg-white/[0.02]">
              <Image
                src="/images/leadership.jpg"
                alt="Hung Ho, CEO, Arceus Digital"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_50%)]" />
            </div>
          </MotionDiv>

          <MotionDiv
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="lg:col-span-7 lg:pl-10"
          >
            <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
              LEADERSHIP
            </p>
            <blockquote className="mt-6 text-[28px] font-semibold leading-[1.18] tracking-[-0.03em] sm:text-[34px] lg:text-[40px]">
              “Marketing shouldn’t be guesswork. At Arceus Digital, every
              decision is backed by data and built for growth.”
            </blockquote>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-base font-semibold tracking-tight">
                Hung Ho
              </p>
              <p className="mt-1 text-sm text-white/70">
                CEO, Arceus Digital
              </p>
            </div>
          </MotionDiv>
        </div>
      </Container>

      <div className="border-t border-white/10" />
    </section>
  );
}

