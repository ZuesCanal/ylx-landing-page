import { pillars } from "@/data/pillars";
import { SectionReveal } from "./SectionReveal";

export function PillarsSection() {
  return (
    <section className="border-b border-rule py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionReveal className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">What Trace establishes</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            A connected record of what happened.
          </h2>
          <p className="mt-5 leading-7 text-muted">
            Every conclusion remains linked to the accounts, events, and source material that support it.
          </p>
        </SectionReveal>

        <div className="mt-16">
          {pillars.map((pillar, index) => (
            <SectionReveal
              key={pillar.name}
              className="grid grid-cols-1 gap-4 border-t border-rule py-8 sm:grid-cols-[3rem_1fr_1fr] sm:items-start sm:gap-8"
            >
              <span className="text-sm text-muted/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-3">
                <pillar.icon
                  className="h-5 w-5 text-ink"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-medium text-ink">
                  {pillar.name}
                </h3>
              </div>
              <div>
                <p className="text-muted">{pillar.function}</p>
                <p className="mt-2 text-sm text-muted/75">
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
