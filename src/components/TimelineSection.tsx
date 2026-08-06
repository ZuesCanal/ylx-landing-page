import { timeline } from "@/data/timeline";
import { SectionReveal } from "./SectionReveal";

export function TimelineSection() {
  return (
    <section className="border-t border-slate-200 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal>
          <h2 className="text-4xl font-medium tracking-tighter text-navy sm:text-5xl">
            Path to a Global Standard
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((milestone, index) => (
            <SectionReveal
              key={milestone.title}
              className="border-t border-navy pt-4"
            >
              <span className="text-sm text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-medium text-navy">
                {milestone.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal">
                {milestone.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
