import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

export function ProductPreviewSection() {
  return (
    <section className="border-t border-slate-200 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionReveal>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Live on PHYLX
          </p>
          <h2 className="mt-2 text-4xl font-medium tracking-tighter text-navy sm:text-5xl">
            See what you hold. How it scores.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-charcoal">
            A sample portfolio scored, policy-checked, and audit-sourced in
            real time — this is what evidence, approvals, and an audit trail
            look like in practice.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-12 overflow-hidden rounded-2xl border border-slate-200">
          <Image
            src="/health-check-preview.png"
            alt="Portfolio health check dashboard showing total value, weighted IST, RQS, and Track Record scores, a policy breach count, and a holdings table with per-asset conviction, policy status, and audit verification."
            width={1256}
            height={801}
            className="h-auto w-full"
          />
        </SectionReveal>

        <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">
          Read-only · No signatures · No execution
        </p>
      </div>
    </section>
  );
}
