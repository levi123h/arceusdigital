import { Container } from "@/components/ui/Container";
import { MotionDiv, fadeUp } from "@/components/ui/Motion";
import Image from "next/image";

type CaseStudy = {
  title: string;
  description: string;
  imageSrc?: string;
};

const studies: CaseStudy[] = [
  {
    title: "700% ROAS in 90 Days",
    description: "Scaled an e-commerce brand through performance marketing.",
    imageSrc: "/images/case-study-1-deemee-no2.jpg",
  },
  {
    title: "300% Traffic Growth",
    description: "SEO + content strategy for long-term growth.",
    imageSrc: "/images/case-study-2-gopeaks-2.jpg",
  },
  {
    title: "From 0 to 10,000 Leads",
    description: "Built a full-funnel lead generation system.",
    imageSrc: "/images/case-study-3-kinhotel.jpg",
  },
];

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <MotionDiv
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 0.03 + index * 0.04 }}
      className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[0.02] shadow-[var(--shadow-soft)]"
    >
      {study.imageSrc ? (
        <div className="relative h-48 w-full overflow-hidden border-b border-white/10 bg-black">
          <Image
            src={study.imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={index === 0}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_65%)]" />
        </div>
      ) : null}

      <div className="flex min-h-[240px] flex-col justify-between p-7">
        <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
          CASE STUDY
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em]">
          {study.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
          {study.description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span>View details</span>
          <span aria-hidden className="translate-y-[1px]">
            →
          </span>
        </div>
      </div>
    </MotionDiv>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 bg-black text-white">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
              CASE STUDIES
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
              Proof, not promises.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Selected outcomes across acquisition, conversion, and growth
              infrastructure — designed for compounding performance.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {studies.map((study, i) => (
            <CaseCard key={study.title} study={study} index={i} />
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10" />
    </section>
  );
}

