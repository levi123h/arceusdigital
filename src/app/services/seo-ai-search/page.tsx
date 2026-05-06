import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/sections/Footer";
import { MotionDiv, fadeUp } from "@/components/ui/Motion";

const stats = [
  { value: "90d+", label: "Sustainable momentum with compounding gains" },
  { value: "Tech + content", label: "Foundation + relevance working together" },
  { value: "AI-ready", label: "Structured content for modern discovery" },
  { value: "Intent-led", label: "Pages mapped to what buyers actually search" },
];

const capabilities = [
  {
    title: "Technical SEO foundation",
    description:
      "Crawlability, indexing, site structure, speed, and clean templates — so every new page ships with SEO baked in.",
    imageSrc: "/images/seo-ai-search.jpg",
  },
  {
    title: "Content strategy & topical authority",
    description:
      "Intent mapping, content clusters, and editorial systems that grow visibility and trust over time.",
    imageSrc: "/images/creative-content.jpg",
  },
  {
    title: "AI search optimization",
    description:
      "Structured pages, clear entities, and proof-driven content designed to surface in modern AI-driven search experiences.",
    imageSrc: "/images/technology-hologram-indoors.jpg",
  },
  {
    title: "Measurement & iteration",
    description:
      "Search reporting that ties traffic to outcomes — and a roadmap that prioritizes what moves revenue, not vanity metrics.",
    imageSrc: "/images/lead-generation.jpg",
  },
];

const serviceStack = [
  "Technical Audit",
  "Indexing & Crawl",
  "Site Architecture",
  "Internal Linking",
  "Schema & Entities",
  "Content Clusters",
  "Keyword/Intent Mapping",
  "On-page Optimization",
  "Template SEO",
  "Core Web Vitals",
  "Programmatic Pages",
  "Editorial Workflow",
  "Content Briefs",
  "AI Search Readiness",
  "SERP Analysis",
  "Competitive Gaps",
  "Reporting",
  "Roadmapping",
  "Iteration Cadence",
  "Governance",
];

const insights = [
  {
    tag: "SEO",
    title: "How topical authority actually compounds",
    description:
      "A practical approach to clusters and internal linking that improves discoverability over time.",
  },
  {
    tag: "AI SEARCH",
    title: "Designing pages for modern discovery",
    description:
      "How structure, entities, and proof help your content show up in AI-driven experiences.",
  },
  {
    tag: "TECHNICAL",
    title: "Make SEO the default, not a retrofit",
    description:
      "Template decisions and performance basics that keep your site strong as it grows.",
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

export default function SeoAiSearchPage() {
  return (
    <main className="flex-1 bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/seo-ai-search.jpg"
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
              SEO &amp; AI Search
            </h1>
            <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Long-term organic growth with technical precision — built for how
              people discover brands today.
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
                Build visibility that compounds over time.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                We connect technical foundations and content strategy so every
                improvement supports the next.
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
                SEO that survives platform shifts.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Principles for technical foundations, content relevance, and AI
                discovery readiness.
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

