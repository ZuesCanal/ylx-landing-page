import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-28 text-center">
      <h1 className="text-5xl font-medium leading-[1.05] tracking-tighter text-navy sm:text-6xl lg:text-7xl">
        PHYLX provides the trusted control layer that lets institutions
        navigate digital assets safely
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg text-charcoal">
        We turn your mandate into policy, evidence, approvals, and an audit
        trail — standardizing ratings and scoring for digital assets into a
        single surface of Sight, Flow, Trace, and Guard.
      </p>
      <a
        href="#waitlist"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-80"
      >
        Request Whitepaper &amp; Pilot Access
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>

      <div className="mx-auto mt-10 flex w-fit items-center gap-8 text-xs uppercase tracking-wide text-slate-400">
        <div>
          <span className="block text-lg font-medium normal-case tracking-normal text-navy">
            700+
          </span>
          Protocols &amp; Products — Covered Universe
        </div>
        <div className="h-8 w-px bg-slate-200" aria-hidden="true" />
        <div>
          <span className="block text-lg font-medium normal-case tracking-normal text-navy">
            $1T+
          </span>
          Covered TVL
        </div>
      </div>
    </section>
  );
}
