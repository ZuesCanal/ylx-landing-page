import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="evidence-grid border-b border-rule">
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[0.76fr_1.24fr] lg:py-24">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            Trusted infrastructure for digital-asset decisions
          </p>
          <h1 className="mt-6 text-5xl font-medium leading-[0.98] sm:text-6xl lg:text-7xl">
            Context before action.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-muted">
            Refrnce gives institutions the source-linked evidence, intelligence,
            policy, and authority required to act on-chain with confidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#trace" className="inline-flex items-center gap-3 rounded bg-ink px-5 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-80">
              Explore Trace <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#waitlist" className="rounded border border-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-canvas">
              Talk to us
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[480px] w-full max-w-2xl" aria-label="Refrnce Trace evidence system">
          <svg className="absolute inset-0 h-full w-full text-muted" viewBox="0 0 680 480" fill="none" aria-hidden="true">
            <path className="trace-line" d="M340 240 170 134M340 240 520 112M340 240 540 350M340 240 165 356" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-muted bg-canvas text-center shadow-sm">
            <strong className="text-lg font-medium">Refrnce Core</strong>
            <span className="mt-2 max-w-24 text-[10px] leading-4 text-muted">Context · Evidence · Identity · Policy · Audit</span>
          </div>
          <SystemNode className="left-0 top-16" label="Refrnce Trace" copy="Establish what happened and what supports it." status="Evidence graph" />
          <SystemNode className="right-0 top-5" label="Source intelligence" copy="Resolve entities, accounts, assets, and events." status="Sources linked" />
          <SystemNode className="bottom-4 right-0" label="Policy context" copy="Test the evidence against mandate and authority." status="Decision context" />
          <SystemNode className="bottom-0 left-0" label="Audit record" copy="Package findings into a reviewable evidence trail." status="Export ready" />
        </div>
      </div>
    </section>
  );
}

function SystemNode({ className, label, copy, status }: { className: string; label: string; copy: string; status: string }) {
  return (
    <div className={`absolute w-56 rounded-md border border-graphite bg-graphite p-4 text-canvas shadow-xl ${className}`}>
      <div className="mb-4 flex items-center justify-between text-[10px] text-canvas/55">
        <span>{status}</span><span className="h-1.5 w-1.5 rounded-full bg-evidence" />
      </div>
      <h2 className="text-base font-medium">{label}</h2>
      <p className="mt-2 text-xs leading-5 text-canvas/65">{copy}</p>
    </div>
  );
}
