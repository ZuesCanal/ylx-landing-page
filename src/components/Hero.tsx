import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-28 text-center">
      <h1 className="text-5xl font-medium leading-[1.05] tracking-tighter text-navy sm:text-6xl lg:text-7xl">
        YLX provides the trusted control layer that lets institutions
        navigate digital assets safely
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg text-charcoal">
        We turn your mandate into evidence, approvals, and an audit
        trail — standardizing vault infrastructure like Veda, Morpho, and
        Upshift into a single surface of Sight, Flow, Trace, and Guard.
      </p>
      <a
        href="#waitlist"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-base font-medium text-white transition-colors hover:bg-black"
      >
        Request Whitepaper &amp; Pilot Access
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
