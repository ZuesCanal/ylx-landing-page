import { pillars } from "@/data/pillars";
import { SectionReveal } from "./SectionReveal";

export function PillarsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy">
            The Control Layer
          </h2>
          <p className="mt-4 text-charcoal">
            Four surfaces that conform to your existing workflow — YLX
            doesn&apos;t ask an institution to replace its process, it
            standardizes what feeds into it.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <SectionReveal
              key={pillar.name}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <pillar.icon
                className="h-8 w-8 text-emerald-600"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-semibold text-navy">
                {pillar.name}
              </h3>
              <p className="mt-2 text-sm text-charcoal">{pillar.function}</p>
              <p className="mt-3 text-sm text-slate-500">
                {pillar.workflowFit}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
