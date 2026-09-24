import { WaitlistForm } from "./WaitlistForm";
import { SectionReveal } from "./SectionReveal";

export function WaitlistSection() {
  return (
    <section id="talk-to-us" className="scroll-mt-20 border-b border-rule py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <SectionReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Private access</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            Talk to us.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-muted">
            Fill out the form and we’ll email you about the Trace briefing, product walkthrough, and private pilot access.
          </p>
        </SectionReveal>

        <div className="rounded-md border border-rule bg-canvas p-6 sm:p-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
