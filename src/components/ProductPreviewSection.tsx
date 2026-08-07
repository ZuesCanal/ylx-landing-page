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

        <SectionReveal className="mt-12">
          <Image
            src="/health-check-preview.png"
            alt="PHYLX portfolio health check: wallet summary, weighted IST, RQS, and Track Record scores, policy breach count, and a six-position holdings table with per-asset yield, scores, policy status, and audit verification."
            width={2592}
            height={2236}
            sizes="(min-width: 896px) 896px, 100vw"
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
