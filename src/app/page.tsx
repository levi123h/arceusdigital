import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { CEO } from "@/components/sections/CEO";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Insights } from "@/components/sections/Insights";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <CEO />
      <CaseStudies />
      <Insights />
      <Footer />
    </main>
  );
}
