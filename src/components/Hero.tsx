import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export function Hero() {
  return (
    <section className="evidence-grid border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 lg:pt-24">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start xl:gap-8">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Trusted infrastructure for digital-asset decisions
            </p>
            <h1 className="mt-6 text-5xl font-medium leading-[0.98] sm:text-6xl lg:text-7xl">
              Context before action.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
              Refrnce gives institutions the source-linked evidence, intelligence,
              policy, and authority required to act on-chain with confidence.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#trace" className="inline-flex items-center gap-3 rounded bg-ink px-5 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-80">
                Explore Trace <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#talk-to-us" className="rounded border border-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-canvas">
                Talk to us
              </a>
            </div>
          </div>

          <div className="rc-diagram rc-side mt-14 xl:mt-0" aria-label="Refrnce Trace evidence system">
          <div className="rc-hub-cell">
            <div className="rc-hub">
              <span className="rc-conn rc-conn-top" aria-hidden="true" />
              <span className="rc-conn rc-conn-bottom" aria-hidden="true" />
              <span className="rc-conn rc-conn-left" aria-hidden="true" />
              <span className="rc-conn rc-conn-right" aria-hidden="true" />
              <strong className="rc-hub-title">Refrnce Core</strong>
              <span className="rc-hub-caps">
                <span className="whitespace-nowrap">Context&nbsp;· Evidence&nbsp;· Identity</span>
                <br />
                <span className="whitespace-nowrap">Policy&nbsp;· Audit</span>
              </span>
            </div>
          </div>
          <ProductCard area="rc-top" name="Intelligence" copy="Understand exposure and change" panel={<ExposurePanel />} />
          <ProductCard area="rc-left" name="Trace" copy="Establish what happened and what supports it" panel={<GraphPanel />} />
          <ProductCard area="rc-right" name="Policy" copy="Test action against policy and authority" panel={<PolicyPanel />} />
          <ProductCard area="rc-bottom" name="Execute" copy="Move value with verified context and control" panel={<ExecutePanel />} />
        </div>

        <div className="mt-10 border-t border-rule pt-8 text-center">
          <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
            Start with the capability your workflow needs.
          </h2>
          <p className="mt-4 text-base text-muted">
            Every Refrnce product shares the same source-linked data, policy, identity and audit foundation.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ area, name, copy, panel }: { area: string; name: string; copy: string; panel: ReactNode }) {
  return (
    <div className={`rc-card ${area}`}>
      <div className="rc-panel">{panel}</div>
      <div className="rc-text">
        <p className="rc-eyebrow">Refrnce</p>
        <h2 className="rc-name">
          <span className="sr-only">Refrnce </span>
          {name}
        </h2>
        <p className="rc-copy">{copy}</p>
      </div>
    </div>
  );
}

function PanelTitle({ children }: { children: ReactNode }) {
  return <p className="rc-panel-title">{children}</p>;
}

function Dot({ tone }: { tone: "accent" | "grey" | "review" | "alert" }) {
  return <span className={`rc-dot rc-dot-${tone}`} aria-hidden="true" />;
}

function ExposurePanel() {
  return (
    <div>
      <PanelTitle>Exposure</PanelTitle>
      <div className="flex items-baseline justify-between">
        <span className="rc-value">$248.6M</span>
        <span className="rc-num rc-accent">+2.4%</span>
      </div>
      <svg viewBox="0 0 104 14" className="rc-spark" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 12 L14 11 L24 11.5 L36 9 L46 10 L58 7 L70 8 L82 5 L92 6 L104 2 L104 14 L0 14Z" className="rc-spark-fill" />
        <path d="M0 12 L14 11 L24 11.5 L36 9 L46 10 L58 7 L70 8 L82 5 L92 6 L104 2" className="rc-spark-line" />
      </svg>
      <ul>
        <li className="rc-row"><span className="rc-row-label"><Dot tone="accent" />Assets</span><span className="rc-num">12</span></li>
        <li className="rc-row"><span className="rc-row-label"><Dot tone="grey" />Counterparties</span><span className="rc-num">48</span></li>
      </ul>
    </div>
  );
}

function GraphPanel() {
  const nodes: [number, number][] = [[20, 18], [60, 12], [95, 30], [30, 55], [70, 50], [55, 85], [20, 90], [95, 75]];
  const edges: [number, number][] = [[0, 4], [1, 4], [2, 4], [3, 4], [4, 5], [4, 6], [4, 7], [0, 3], [1, 2], [5, 7]];
  return (
    <div>
      <PanelTitle>Evidence Graph</PanelTitle>
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 110 100" className="h-[54px] w-[40px] shrink-0" aria-hidden="true">
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className="rc-edge" />
          ))}
          {nodes.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 4 ? 9 : 7} className={i % 3 === 0 ? "rc-node-accent" : "rc-node"} />
          ))}
        </svg>
        <ul className="min-w-0">
          <li className="rc-row"><span className="rc-row-label"><Dot tone="accent" />Entity</span></li>
          <li className="rc-row"><span className="rc-row-label"><Dot tone="grey" />Account</span></li>
          <li className="rc-row"><span className="rc-row-label"><Dot tone="grey" />Asset</span></li>
        </ul>
      </div>
    </div>
  );
}

function PolicyPanel() {
  const rows: [string, string, "accent" | "review" | "alert"][] = [
    ["Allowed", "92%", "accent"],
    ["Review", "6%", "review"],
    ["Blocked", "2%", "alert"],
  ];
  return (
    <div>
      <PanelTitle>Policy Decision</PanelTitle>
      <ul>
        {rows.map(([k, v, tone]) => (
          <li key={k} className="rc-row"><span className="rc-row-label"><Dot tone={tone} />{k}</span><span className="rc-num">{v}</span></li>
        ))}
      </ul>
    </div>
  );
}

function ExecutePanel() {
  const rows: [string, string, boolean][] = [
    ["Context", "Done", true],
    ["Policy", "Done", true],
    ["Approval", "Done", true],
    ["Execute", "Live", false],
  ];
  return (
    <div>
      <PanelTitle>Execution</PanelTitle>
      <ul>
        {rows.map(([k, v, done]) => (
          <li key={k} className="rc-row">
            <span className="rc-row-label">
              {done ? <Check className="rc-check" strokeWidth={2.5} aria-hidden="true" /> : <span className="rc-pending" aria-hidden="true" />}
              {k}
            </span>
            <span className={`rc-pill ${done ? "" : "rc-pill-muted"}`}>{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
