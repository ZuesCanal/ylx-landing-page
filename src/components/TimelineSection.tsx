import { timeline } from "@/data/timeline";
import { SectionReveal } from "./SectionReveal";

export function TimelineSection() {
  return (
    <section id="workflow" className="border-b border-rule py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Investigation workflow</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
            From event to evidence.
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((milestone, index) => (
            <SectionReveal
              key={milestone.title}
              className="border-t border-ink pt-4"
            >
              <span className="text-sm text-muted/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-medium text-ink">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {milestone.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
