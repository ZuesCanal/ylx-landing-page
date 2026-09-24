import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProductPreviewSection } from "@/components/ProductPreviewSection";
import { PillarsSection } from "@/components/PillarsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductPreviewSection />
        <TimelineSection />
        <PillarsSection />
        <section id="intelligence" className="border-b border-rule py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Supporting intelligence</p><h2 className="mt-4 text-4xl font-medium leading-tight">Evidence first. Scores in context.</h2></div>
            <div className="grid gap-px border border-rule bg-rule sm:grid-cols-3">
              {[['IST','Infrastructure resilience'],['RQS','Risk quality'],['Track record','Observed history']].map(([name,copy]) => <div key={name} className="bg-canvas p-6"><p className="text-xl font-medium">{name}</p><p className="mt-3 text-sm leading-6 text-muted">{copy} supports the investigation; it does not replace the evidence trail.</p></div>)}
            </div>
          </div>
        </section>
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
