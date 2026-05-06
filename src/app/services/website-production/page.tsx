import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/sections/Footer";
import { MotionDiv, fadeUp } from "@/components/ui/Motion";
import { VideoTile } from "./VideoTile";

const stats = [
  { value: "1–3s", label: "Target load time across key pages" },
  { value: "2–4x", label: "Higher conversion from clearer journeys" },
  { value: "SEO-ready", label: "Technical foundation that scales" },
  { value: "Composable", label: "Pages, sections, and systems built to grow" },
];

const capabilities = [
  {
    title: "Conversion-first website builds",
    description:
      "Modern, fast websites designed around your funnel — with clear messaging, strong hierarchy, and frictionless flows.",
    imageSrc: "/images/capability-conversion-first.jpg",
  },
  {
    title: "Landing pages & funnel architecture",
    description:
      "High-performing landing pages, offers, and page sequencing that turn clicks into qualified leads and sales.",
    imageSrc: "/images/capability-landing-pages.jpg",
  },
  {
    title: "Performance & technical foundation",
    description:
      "Core Web Vitals, responsive design, accessibility, and maintainable UI systems — so the site stays fast as you scale.",
    imageSrc: "/images/capability-technical-foundation.jpg",
  },
  {
    title: "Analytics-ready implementation",
    description:
      "Clean event naming, tracking plan support, and measurement hooks so growth decisions don’t require guesswork.",
    imageSrc: "/images/capability-analytics-ready.jpg",
  },
];

const videoShowcase = [
  { title: "Deemee Website", src: "/videos/website-project-01.webm" },
  { title: "Ludee Care Website", src: "/videos/website-project-02.webm" },
  { title: "Gopeaks Website", src: "/videos/website-project-03.webm" },
  { title: "Kin Hotel Website", src: "/videos/kin-hotel-saigon.webm" },
];

const insights = [
  {
    tag: "FOUNDATION",
    title: "Why speed and clarity win",
    description:
      "A practical approach to page structure, messaging, and performance that improves conversion without redesign churn.",
  },
  {
    tag: "UX",
    title: "Funnel-aware page design",
    description:
      "How to connect acquisition intent to the right page elements so users move forward with confidence.",
  },
  {
    tag: "SYSTEMS",
    title: "Building a site you can extend",
    description:
      "Design systems and component patterns that keep your website consistent as new pages and offers are added.",
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

export default function WebsiteProductionPage() {
  return (
    <main className="flex-1 bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/website-production.jpg"
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
              Website Production
            </h1>
            <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Conversion-first websites and landing pages — built for speed,
              clarity, and compounding performance.
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
                Build clarity, speed, and conversion into every page.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                We translate your offer into a system of pages and components
                that move users forward — and make iteration easy.
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
              WEBSITES THAT WE PRODUCED
            </p>
            <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.02em] text-white/90 sm:text-2xl">
              Build relevance and capture intent
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {videoShowcase.map((v, i) => (
                <VideoTile key={v.title} title={v.title} src={v.src} index={i} />
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
                Clarity on what makes pages convert.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Practical patterns for messaging, UX, and performance — built for
                teams that ship.
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

