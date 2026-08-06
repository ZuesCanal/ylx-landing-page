import { WaitlistForm } from "./WaitlistForm";
import { SectionReveal } from "./SectionReveal";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="border-t border-slate-200 py-24">
      <div className="mx-auto max-w-xl px-6">
        <SectionReveal className="text-center">
          <h2 className="text-4xl font-medium tracking-tighter text-navy sm:text-5xl">
            Investor &amp; Enterprise Waitlist
          </h2>
          <p className="mt-4 text-charcoal">
            Request the whitepaper, pitch deck, and private pilot access.
          </p>
        </SectionReveal>

        <div className="mt-10 rounded-2xl border border-slate-200 p-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
