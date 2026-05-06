import { Container } from "@/components/ui/Container";
import { MotionDiv, fadeUp } from "@/components/ui/Motion";

type Article = {
  title: string;
  tag: string;
};

const articles: Article[] = [
  { title: "Why Most Ads Fail (And How to Fix It)", tag: "INSIGHTS" },
  { title: "The Future of Performance Marketing", tag: "FUTURE" },
  { title: "How to Build a Scalable Lead Funnel", tag: "SYSTEMS" },
];

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <MotionDiv
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 0.03 + index * 0.03 }}
      className="group rounded-2xl border border-white/12 bg-white/[0.02] p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-[1.015]"
    >
      <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
        {article.tag}
      </p>
      <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.02em]">
        {article.title}
      </h3>
      <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
        <p className="text-sm text-white/70">Read article</p>
        <span
          aria-hidden
          className="text-sm font-semibold text-white/80 transition group-hover:translate-x-0.5"
        >
          →
        </span>
      </div>
    </MotionDiv>
  );
}

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-20 bg-black text-white">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.26em] text-white/70">
              NEWS / INSIGHTS
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
              Strategy, systems, and what’s next.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Clear thinking on performance marketing, creative, and growth
              operations — written for teams that care about execution quality.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard key={article.title} article={article} index={i} />
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10" />
    </section>
  );
}

