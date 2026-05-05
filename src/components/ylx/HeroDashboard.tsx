import { Activity, CheckCircle2, ShieldCheck, TrendingUp, Database, GitBranch } from "lucide-react";

const Spark = ({ color = "hsl(var(--accent))" }: { color?: string }) => (
  <svg viewBox="0 0 200 60" className="w-full h-14">
    <defs>
      <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.35" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0,45 L20,38 L40,42 L60,30 L80,33 L100,22 L120,28 L140,18 L160,24 L180,12 L200,16 L200,60 L0,60 Z" fill="url(#g1)" />
    <path d="M0,45 L20,38 L40,42 L60,30 L80,33 L100,22 L120,28 L140,18 L160,24 L180,12 L200,16" fill="none" stroke={color} strokeWidth="1.5" />
  </svg>
);

const Bar = ({ value, label }: { value: number; label: string }) => {
  const belowThreshold = value < 80;
  return (
    <div className="flex items-center gap-3">
      <span className="w-28 text-[11px] text-muted-foreground font-mono uppercase tracking-wider">{label}</span>
      <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
        <div
          className={`h-full rounded-full ${belowThreshold ? "bg-warning" : "bg-gradient-accent"}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className={`w-8 text-[11px] font-mono ${belowThreshold ? "text-warning" : "text-foreground"}`}>{value}</span>
    </div>
  );
};

export const HeroDashboard = () => {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-8 bg-gradient-accent opacity-[0.06] blur-3xl rounded-[3rem] -z-10" />
      <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
        {/* Top chrome */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">ylx.app / treasury / overview</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse-soft" /> Live
          </div>
        </div>

        <div className="grid grid-cols-12 gap-px bg-border">
          {/* Left rail */}
          <aside className="col-span-12 md:col-span-3 bg-card p-4 space-y-1 text-sm">
            {[
              { icon: Activity, label: "Dashboard", active: true },
              { icon: ShieldCheck, label: "Policy" },
              { icon: Database, label: "Yield Universe" },
              { icon: TrendingUp, label: "Risk Scores" },
              { icon: GitBranch, label: "Routing" },
              { icon: CheckCircle2, label: "Audit Log" },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13px] ${
                  active ? "bg-secondary text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-border">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2">Mandate</p>
              <p className="text-xs text-foreground">Conservative Stablecoin v3.2</p>
              <p className="text-[11px] text-muted-foreground mt-1">Approved · 04 May 2026</p>
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-12 md:col-span-9 bg-card p-5 space-y-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: "Treasury balance", value: "$248.6M", delta: "+1.2%", chart: true },
                { label: "Approved capacity", value: "$84.2M", delta: "33.9%", chart: false },
                { label: "Yield range (net)", value: "4.62 – 5.41%", delta: "fair", chart: false },
                { label: "Policy status", value: "Compliant", delta: "0 breaches", chart: false },
              ].map((m, i) => (
                <div key={i} className="rounded-lg border border-border bg-gradient-panel p-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{m.label}</p>
                  <p className="text-base lg:text-lg font-semibold text-foreground mt-1 font-display">{m.value}</p>
                  <p className="text-[11px] text-accent mt-0.5">{m.delta}</p>
                  {m.chart && <Spark />}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
              <div className="lg:col-span-3 rounded-lg border border-border p-4 bg-surface-elevated">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-foreground">Risk Quality Score · by allocation</p>
                  <span className="text-[11px] text-muted-foreground font-mono">RQS · IST · FairYield</span>
                </div>
                <div className="space-y-2.5">
                  <Bar label="USDC / Aave v3" value={88} />
                  <Bar label="OUSG (Ondo)" value={92} />
                  <Bar label="USDM Vault" value={74} />
                  <Bar label="sDAI · Spark" value={81} />
                  <Bar label="USDT / Compound" value={66} />
                </div>
              </div>
              <div className="lg:col-span-2 rounded-lg border border-border p-4 bg-surface-elevated">
                <p className="text-sm font-medium text-foreground mb-3">Allocation limits</p>
                <div className="space-y-3 text-xs">
                  {[
                    { k: "Max per protocol", v: "20%" },
                    { k: "Min IST score", v: "80" },
                    { k: "Min RQS band", v: "Approved" },
                    { k: "Liquidity window", v: "T+0 – T+2" },
                  ].map((r) => (
                    <div key={r.k} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{r.k}</span>
                      <span className="font-mono text-foreground">{r.v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Approved venues</span>
                    <span className="text-xs font-mono text-foreground">14 / 32</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface-elevated">
              <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">Audit trail</p>
                <span className="text-[11px] text-muted-foreground font-mono">last 24h</span>
              </div>
              <ul className="divide-y divide-border text-xs">
                {[
                  { t: "12:48", e: "Route executed", d: "USDC → Aave v3 · $4.20M · policy ✓", c: "success" },
                  { t: "11:02", e: "Score changed", d: "USDM Vault · RQS 78 → 74 · evidence attached", c: "warning" },
                  { t: "09:31", e: "Allocation approved", d: "OUSG · $6.00M · committee · 3 of 3", c: "success" },
                  { t: "08:14", e: "Policy updated", d: "Min IST 78 → 80 · v3.2 published", c: "muted" },
                ].map((r, i) => (
                  <li key={i} className="flex items-center gap-3 px-4 py-2.5">
                    <span className="font-mono text-muted-foreground w-10">{r.t}</span>
                    <span className={`h-1.5 w-1.5 rounded-full ${r.c === "success" ? "bg-success" : r.c === "warning" ? "bg-warning" : "bg-muted-foreground/40"}`} />
                    <span className="text-foreground w-40 truncate">{r.e}</span>
                    <span className="text-muted-foreground truncate flex-1">{r.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>

      {/* Floating policy chip */}
      <div className="hidden lg:flex absolute -left-6 top-32 items-center gap-2.5 rounded-xl border border-border bg-card shadow-md px-3.5 py-2.5">
        <ShieldCheck className="h-4 w-4 text-accent" />
        <div>
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">Policy check</p>
          <p className="text-xs text-foreground font-medium">42 / 42 rules passed</p>
        </div>
      </div>

      <div className="hidden lg:flex absolute -right-4 bottom-20 items-center gap-2.5 rounded-xl border border-border bg-card shadow-md px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-success animate-pulse-soft" />
        <div>
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">IST · OUSG</p>
          <p className="text-xs text-foreground font-medium">92 · sufficient</p>
        </div>
      </div>
    </div>
  );
};