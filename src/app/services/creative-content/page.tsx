import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/sections/Footer";
import { MotionDiv, fadeUp } from "@/components/ui/Motion";

const stats = [
  { value: "1–2w", label: "Creative cadence for steady learning" },
  { value: "10–30", label: "Iterations per month (concept → cutdowns)" },
  { value: "Multi-format", label: "Static, UGC, short-form, and ads" },
  { value: "Always-on", label: "A repeatable pipeline, not one-offs" },
];

const capabilities = [
  {
    title: "Creative strategy & messaging",
    description:
      "Positioning, hooks, and angles informed by audience research — translated into creative directions that perform.",
    imageSrc: "/images/creative-content.jpg",
  },
  {
    title: "Performance ad creative",
    description:
      "Concepts designed for testing: variations, cutdowns, formats, and edits built to drive measurable outcomes.",
    imageSrc: "/images/technology-hologram-indoors.jpg",
  },
  {
    title: "Content that compounds",
    description:
      "Organic + paid content systems that build trust, improve CTR, and lift conversion over time.",
    imageSrc: "/images/leadership.jpg",
  },
  {
    title: "Production & iteration pipeline",
    description:
      "Fast briefs, clear feedback loops, and a repeatable workflow so your team can ship consistently.",
    imageSrc: "/images/website-production.jpg",
  },
];

const serviceStack = [
  "Creative Direction",
  "Offer & Hook Testing",
  "UGC Concepts",
  "Short-form Video",
  "Static Variations",
  "Ad Copywriting",
  "Landing Page Alignment",
  "Creative QA",
  "Cutdowns & Iterations",
  "Format Adaptation",
  "Brief Templates",
  "Performance Reviews",
  "Messaging Frameworks",
  "Brand Consistency",
  "Creative Library",
  "Production Ops",
  "Creator Sourcing",
  "Editing",
  "Batch Shooting",
  "Always-on Pipeline",
];

const insights = [
  {
    tag: "CREATIVE",
    title: "What makes ads work now",
    description:
      "How to structure hooks, proofs, and offers so your creative earns attention and drives action.",
  },
  {
    tag: "TESTING",
    title: "Creative iteration beats guesswork",
    description:
      "A simple testing cadence that turns creative into a measurable learning system.",
  },
  {
    tag: "SYSTEMS",
    title: "Building a scalable content engine",
    description:
      "Process and tooling that keeps output high while protecting quality and brand consistency.",
  },
];

function StatCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  return (
    <MotionDiv
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 0.04 + index * 0.03 }}
      className="group relative py-2"
    >
      <p className="text-3xl font-semibold tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-0.5">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-white/70">{label}</p>
      <div className="pointer-events-none mt-6 h-px bg-white/10" />
    </MotionDiv>
  );
}

function StackItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/[0.03]">
      <span className="grid h-8 w-8 place-items-center rounded-full border border-white/12 bg-white/[0.03] text-[11px] font-semibold tracking-tight text-white/80">
        {label
          .split(" ")
          .slice(0, 2)
          .map((w) => w[0])
          .join("")
          .toUpperCase()}
      </span>
      <span className="text-sm font-medium text-white/80">{label}</span>
    </div>
  );
}

function CapabilityCard({
  title,
  description,
  imageSrc,
  index,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  index: number;
}) {
  return (
    <MotionDiv
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 0.05 + index * 0.04 }}
      className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.02] p-7 shadow-[var(--shadow-soft)]"
    >
      {imageSrc ? (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.90),rgba(5,20,60,0.70),rgba(0,0,0,0.86))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(80,160,255,0.18),transparent_55%)]" />
        </div>
      ) : null}

      <div className="relative">
        <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
          CAPABILITY
        </p>
        <h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-white">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-white/70">{description}</p>
      </div>
    </MotionDiv>
  );
}

function InsightCard({
  tag,
  title,
  description,
  index,
}: {
  tag: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <MotionDiv
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 0.04 + index * 0.04 }}
      className="group rounded-2xl border border-white/12 bg-white/[0.02] p-7 shadow-[var(--shadow-soft)] transition hover:border-white/25 hover:bg-white/[0.04]"
    >
      <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
        {tag}
      </p>
      <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.02em]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-white/70">{description}</p>
      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span>Learn more</span>
        <span aria-hidden className="translate-y-[1px]">
          →
        </span>
      </div>
    </MotionDiv>
  );
}

export default function CreativeContentPage() {
  return (
    <main className="flex-1 bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/creative-content.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.92),rgba(5,20,60,0.78),rgba(0,0,0,0.90))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(80,160,255,0.22),transparent_55%)]" />
        </div>

        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
              SERVICE
            </p>
            <h1 className="mt-4 text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[54px] lg:text-[64px]">
              Creative &amp; Content
            </h1>
            <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Creative that earns attention and converts — built as an iteration
              engine, not a one-time asset.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#contact" variant="primary" className="h-12 px-7">
                Get a Proposal
              </Button>
              <Button
                href="/#case-studies"
                variant="secondary"
                className="h-12 px-7"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </Container>

        <div className="border-t border-white/10" />
      </section>

      <section className="bg-black text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} index={i} />
            ))}
          </div>
        </Container>
        <div className="border-t border-white/10" />
      </section>

      <section className="bg-black text-white">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
                WHAT WE DO
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Turn creative into a compounding advantage.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                We build a system for testing hooks, proofs, and formats — so
                performance improves as output increases.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2">
            {capabilities.map((c, i) => (
              <CapabilityCard
                key={c.title}
                title={c.title}
                description={c.description}
                imageSrc={c.imageSrc}
                index={i}
              />
            ))}
          </div>

          <div className="mt-14 lg:mt-16">
            <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
              OUR EXPERTISE
            </p>
            <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.02em] text-white/90 sm:text-2xl">
              Build relevance, capture intent, and scale profitably.
            </p>

            <div className="mt-8 grid gap-x-6 gap-y-1 md:grid-cols-2 lg:grid-cols-4">
              {serviceStack.map((label) => (
                <StackItem key={label} label={label} />
              ))}
            </div>
          </div>
        </Container>

        <div className="border-t border-white/10" />
      </section>

      <section className="bg-black text-white">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
                INSIGHTS
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                Creative that performs is a system.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Frameworks for hooks, offers, and iteration velocity — built for
                performance.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3">
            {insights.map((x, i) => (
              <InsightCard
                key={x.title}
                tag={x.tag}
                title={x.title}
                description={x.description}
                index={i}
              />
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

