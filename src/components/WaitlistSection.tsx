import { WaitlistForm } from "./WaitlistForm";
import { SectionReveal } from "./SectionReveal";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-navy py-20">
      <div className="mx-auto max-w-xl px-6">
        <SectionReveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Investor &amp; Enterprise Waitlist
          </h2>
          <p className="mt-4 text-slate-200">
            Request the whitepaper, pitch deck, and private pilot access.
          </p>
        </SectionReveal>

        <div className="mt-10 rounded-lg bg-white p-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
