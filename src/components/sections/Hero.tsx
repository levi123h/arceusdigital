import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MotionDiv, fadeUp } from "@/components/ui/Motion";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/0_Galaxy_Spiral_Galaxy_3840x2160.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.12),transparent_55%),radial-gradient(circle_at_75%_55%,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72),rgba(0,0,0,0.93))]" />

      <Container className="relative z-10 pt-20 sm:pt-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <MotionDiv
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
              ARCEUS DIGITAL
            </p>
            <h1 className="mt-4 text-[44px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[56px] lg:text-[68px]">
              UNLOCK SCALABLE GROWTH WITH PRECISION MARKETING
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Arceus Digital helps brands turn data into revenue through
              performance marketing, creative strategy, and scalable systems.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#case-studies" variant="primary">
                View Case Studies
              </Button>
              <Button href="#contact" variant="secondary">
                Get a Proposal
              </Button>
            </div>
          </MotionDiv>
          <div className="hidden lg:block lg:col-span-5" aria-hidden />
        </div>
      </Container>

      <div className="mt-16 border-t border-white/10" />
    </section>
  );
}

