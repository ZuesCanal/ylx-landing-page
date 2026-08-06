import { pillars } from "@/data/pillars";
import { SectionReveal } from "./SectionReveal";

export function PillarsSection() {
  return (
    <section className="border-t border-slate-200 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal className="max-w-xl">
          <h2 className="text-4xl font-medium tracking-tighter text-navy sm:text-5xl">
            The Control Layer
          </h2>
          <p className="mt-4 text-charcoal">
            Four surfaces that conform to your existing workflow — YLX
            doesn&apos;t ask an institution to replace its process, it
            standardizes what feeds into it.
          </p>
        </SectionReveal>

        <div className="mt-16">
          {pillars.map((pillar, index) => (
            <SectionReveal
              key={pillar.name}
              className="grid grid-cols-1 gap-4 border-t border-slate-200 py-8 sm:grid-cols-[3rem_1fr_1fr] sm:items-start sm:gap-8"
            >
              <span className="text-sm text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-3">
                <pillar.icon
                  className="h-5 w-5 text-navy"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-medium text-navy">
                  {pillar.name}
                </h3>
              </div>
              <div>
                <p className="text-charcoal">{pillar.function}</p>
                <p className="mt-2 text-sm text-slate-500">
                  {pillar.workflowFit}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
