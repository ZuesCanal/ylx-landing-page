import { timeline } from "@/data/timeline";
import { SectionReveal } from "./SectionReveal";

export function TimelineSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy">
            Path to a Global Standard
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((milestone, index) => (
            <SectionReveal
              key={milestone.title}
              className="border-t-2 border-emerald-600 pt-4"
            >
              <span className="text-sm font-medium text-emerald-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-navy">
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
