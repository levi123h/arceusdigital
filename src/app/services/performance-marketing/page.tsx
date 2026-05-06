import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/sections/Footer";
import { MotionDiv, fadeUp } from "@/components/ui/Motion";
import { WorkCarousel } from "./WorkCarousel";

const stats = [
  { value: "3–10x", label: "Efficiency gains with better measurement" },
  { value: "2–5x", label: "Faster iteration cycles with testing" },
  { value: "Full-funnel", label: "Visibility from click to revenue" },
  { value: "Always-on", label: "Optimization across channels" },
];

const capabilities = [
  {
    title: "Paid social & creative performance",
    description:
      "Campaign structures, creative testing, and budget allocation designed to scale profitably across Meta, TikTok, and beyond.",
    imageSrc: "/images/capability-paid-social.jpg",
  },
  {
    title: "Search & shopping growth",
    description:
      "High-intent capture with Google Search, Performance Max, and Shopping — paired with landing pages built for conversion.",
    imageSrc: "/images/capability-search-shopping.jpg",
  },
  {
    title: "Measurement & incrementality",
    description:
      "Server-side tracking, clean attribution, and practical incrementality checks so decisions are grounded in reality — not dashboards.",
    imageSrc: "/images/capability-measurement.jpg",
  },
  {
    title: "CRO that compounds",
    description:
      "Rapid experiments across offers, messaging, and UX to improve conversion rate and create durable advantage over time.",
    imageSrc: "/images/capability-cro-compounds.jpg",
  },
];

const insights = [
  {
    tag: "STRATEGY",
    title: "A modern performance marketing system",
    description:
      "How we connect creative, measurement, and channel execution into one repeatable operating model.",
  },
  {
    tag: "MEASUREMENT",
    title: "Tracking without the guesswork",
    description:
      "A practical approach to attribution, event hygiene, and server-side setup that actually supports decision-making.",
  },
  {
    tag: "EXECUTION",
    title: "Testing velocity: the real moat",
    description:
      "Why speed beats perfection — and the minimum test cadence required to outlearn the market.",
  },
];

const serviceStack = [
  "Ad Strategy",
  "Display",
  "Instagram Ads",
  "Retargeting",
  "Advertising Funnels",
  "Email Marketing",
  "Landing Pages",
  "Shopify",
  "Amazon Ads",
  "Facebook Ads",
  "Media Strategy",
  "SMS",
  "Conversion Rate Optimization",
  "Google Ads",
  "Messenger",
  "Snapchat",
  "Creative Strategy",
  "Google Analytics",
  "Performance Ad Creative",
  "TikTok",
  "Copywriting",
  "Google Search",
  "Programmatic",
  "YouTube",
];

const serviceIconSrc: Record<string, string> = {
  "Ad Strategy": "/icons/ads-strategy.svg",
  Display: "/icons/Site_Icons_Display.svg",
  "Instagram Ads": "/icons/Site_Icons_Instagram.svg",
  Retargeting: "/icons/Site_Icons_Retargeting.svg",
  "Advertising Funnels": "/icons/Site_Icons_Advertising-Funnels.svg",
  "Email Marketing": "/icons/email-marketing.svg",
  "Landing Pages": "/icons/Site_Icons_Landing-Pages.svg",
  Shopify: "/icons/Specialty_Icon_Shopify-1.svg",
  "Amazon Ads": "/icons/Site_Icons_Amazon-1.svg",
  "Facebook Ads": "/icons/Site_Icons_Facebook.svg",
  "Media Strategy": "/icons/Site_Icons_Media-Strategy.svg",
  SMS: "/icons/Site_Icons_SMS.svg",
  "Conversion Rate Optimization": "/icons/Site_Icons_CRO.svg",
  "Google Ads": "/icons/google-ads.svg",
  Messenger: "/icons/Specialty_Icon_Messenger-1.svg",
  Snapchat: "/icons/Site_Icons_Snapchat.svg",
  "Creative Strategy": "/icons/Site_Icons_Creative-Strategy.svg",
  "Google Analytics": "/icons/Site_Icons_Google-Analytics.svg",
  "Performance Ad Creative": "/icons/performance-ad-creative.svg",
  TikTok: "/icons/Site_Icons_TikTok.svg",
  Copywriting: "/icons/Site_Icons_Copywriting.svg",
  "Google Search": "/icons/Site_Icons_Google-Search-1.svg",
  Programmatic: "/icons/programattic.svg",
  YouTube: "/icons/Site_Icons_YouTube.svg",
};

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
  const iconSrc = serviceIconSrc[label];

  return (
    <div className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-white/[0.03]">
      <span className="grid h-8 w-8 place-items-center rounded-full border border-white/12 bg-white/[0.03]">
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 opacity-90"
          />
        ) : (
          <span className="text-[11px] font-semibold tracking-tight text-white/80">
            {label
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("")
              .toUpperCase()}
          </span>
        )}
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

export default function PerformanceMarketingPage() {
  return (
    <main className="flex-1 bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/technology-hologram-indoors.jpg"
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
              Performance Marketing
            </h1>
            <p className="mt-6 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              A growth system built on measurement, creative iteration, and
              disciplined execution — so you can scale with clarity, not
              guesswork.
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
                Build relevance, capture intent, and scale profitably.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                We connect creative and measurement so each test teaches you
                something — and each win can be repeated across channels.
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

          <div className="mt-16 lg:mt-20">
            <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
              OUR WORK
            </p>
            <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.02em] text-white/90 sm:text-2xl">
              Our ad production was stellar
            </p>

            <div className="mt-10">
              <WorkCarousel />
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
                Clear thinking for compounding performance.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Frameworks, measurement principles, and execution patterns you
                can use immediately.
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

