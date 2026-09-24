import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export function Hero() {
  return (
    <section className="evidence-grid border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
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
            <a href="#talk-to-us" className="rounded border border-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-canvas">
              Talk to us
            </a>
          </div>
        </div>

        <div
          className="relative mt-16 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-[auto_auto_auto] lg:items-center lg:gap-x-10 lg:gap-y-10"
          aria-label="Refrnce Trace evidence system"
        >
          {/* connectors */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
            <div className="absolute left-1/2 top-[12%] h-[76%] w-px -translate-x-1/2 bg-muted/50" />
            <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-muted/50" />
          </div>

          <div className="lg:col-start-2 lg:row-start-1">
            <SystemNode label="Refrnce Intelligence" copy="Understand exposure and change">
              <ExposurePanel />
            </SystemNode>
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <SystemNode label="Refrnce Trace" copy="Establish what happened and what supports it">
              <GraphPanel />
            </SystemNode>
          </div>
          <div className="relative z-10 mx-auto flex h-40 w-40 flex-col items-center justify-center rounded-full border border-muted bg-canvas text-center shadow-sm lg:col-start-2 lg:row-start-2 lg:h-44 lg:w-44">
            <strong className="text-lg font-medium">Refrnce Core</strong>
            <span className="mt-2 max-w-28 text-[11px] leading-4 text-muted">Context · Evidence · Identity · Policy · Audit</span>
          </div>
          <div className="lg:col-start-3 lg:row-start-2">
            <SystemNode label="Refrnce Policy" copy="Test action against policy and authority">
              <PolicyPanel />
            </SystemNode>
          </div>
          <div className="lg:col-start-2 lg:row-start-3">
            <SystemNode label="Refrnce Execute" copy="Move value with verified context and control">
              <ExecutePanel />
            </SystemNode>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemNode({ label, copy, children }: { label: string; copy: string; children: ReactNode }) {
  return (
    <div className="relative z-10 flex flex-col gap-4 rounded-lg border border-graphite bg-graphite p-3 text-canvas shadow-xl sm:flex-row sm:items-center lg:w-[420px] lg:mx-auto">
      <div className="w-full shrink-0 rounded-md border border-canvas/10 bg-panel p-3 sm:w-[210px]">{children}</div>
      <div className="px-1 pb-1 sm:pb-0">
        <h2 className="text-base font-medium">{label}</h2>
        <p className="mt-2 text-xs leading-5 text-canvas/65">{copy}</p>
      </div>
    </div>
  );
}

function PanelTitle({ children }: { children: ReactNode }) {
  return <p className="mb-2 text-[10px] font-medium text-canvas/80">{children}</p>;
}

function ExposurePanel() {
  const rows: [string, string, string][] = [
    ["Assets", "12", "bg-evidence"],
    ["Counterparties", "48", "bg-review"],
    ["Geographies", "23", "bg-canvas/50"],
    ["Risk signals", "4", "bg-alert"],
  ];
  return (
    <div>
      <PanelTitle>Exposure Overview</PanelTitle>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-medium">$248.6M</span>
        <span className="text-[9px] text-evidence">+2.4% (24h)</span>
      </div>
      <svg viewBox="0 0 180 32" className="mt-1 h-8 w-full text-evidence" aria-hidden="true">
        <path d="M0 26 L20 24 L35 25 L55 20 L70 22 L90 16 L110 18 L130 12 L150 14 L165 8 L180 4 L180 32 L0 32Z" className="fill-evidence/15" />
        <path d="M0 26 L20 24 L35 25 L55 20 L70 22 L90 16 L110 18 L130 12 L150 14 L165 8 L180 4" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
      <ul className="mt-2 space-y-1">
        {rows.map(([k, v, c]) => (
          <li key={k} className="flex items-center justify-between text-[9px] text-canvas/70">
            <span className="flex items-center gap-1.5"><span className={`h-1.5 w-1.5 rounded-full ${c}`} />{k}</span>
            <span>{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GraphPanel() {
  const nodes: [number, number][] = [[20, 18], [60, 12], [95, 30], [30, 55], [70, 50], [55, 85], [20, 90], [95, 75]];
  const edges: [number, number][] = [[0, 4], [1, 4], [2, 4], [3, 4], [4, 5], [4, 6], [4, 7], [0, 3], [1, 2], [5, 7]];
  const legend: [string, string][] = [["Entity", "bg-evidence"], ["Account", "bg-evidence/60"], ["Transaction", "bg-canvas/60"], ["Asset", "bg-canvas/35"]];
  return (
    <div>
      <PanelTitle>Evidence Graph</PanelTitle>
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 110 100" className="h-20 w-24 text-evidence" aria-hidden="true">
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.8" />
          ))}
          {nodes.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 4 ? 6 : 4} className={i % 3 === 0 ? "fill-evidence" : "fill-canvas/40"} />
          ))}
        </svg>
        <ul className="space-y-1">
          {legend.map(([k, c]) => (
            <li key={k} className="flex items-center gap-1.5 text-[9px] text-canvas/70"><span className={`h-1.5 w-1.5 rounded-full ${c}`} />{k}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PolicyPanel() {
  const rows: [string, string, string, string][] = [
    ["Allowed", "92%", "bg-evidence", "text-evidence"],
    ["Requires Review", "6%", "bg-review", "text-review"],
    ["Blocked", "2%", "bg-alert", "text-alert"],
  ];
  return (
    <div>
      <PanelTitle>Policy Decision</PanelTitle>
      <ul className="space-y-1.5">
        {rows.map(([k, v, dot, txt]) => (
          <li key={k} className="flex items-center justify-between rounded border border-canvas/10 bg-graphite px-2 py-1.5 text-[10px]">
            <span className={`flex items-center gap-1.5 ${txt}`}><span className={`h-2 w-2 rounded-full ${dot}`} />{k}</span>
            <span className={txt}>{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExecutePanel() {
  const rows: [string, string, boolean][] = [
    ["Context Verified", "Verified", true],
    ["Policy Check", "Passed", true],
    ["Approval", "Approved", true],
    ["Execute", "In Progress", false],
  ];
  return (
    <div>
      <PanelTitle>Execution</PanelTitle>
      <ul className="space-y-1">
        {rows.map(([k, v, done]) => (
          <li key={k} className="flex items-center justify-between rounded border border-canvas/10 bg-graphite px-2 py-1 text-[10px] text-canvas/80">
            <span className="flex items-center gap-1.5">
              {done ? (
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-evidence"><Check className="h-2 w-2 text-panel" strokeWidth={3} /></span>
              ) : (
                <span className="h-3 w-3 rounded-full border border-canvas/50" />
              )}
              {k}
            </span>
            <span className={`rounded px-1.5 py-0.5 text-[8px] ${done ? "bg-evidence/20 text-evidence" : "bg-canvas/10 text-canvas/70"}`}>{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
