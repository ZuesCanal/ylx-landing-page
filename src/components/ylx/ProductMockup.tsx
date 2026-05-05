import { useState } from "react";

const tabs = ["Dashboard", "Policy", "Yield Universe", "Risk Scores", "Routing", "Audit Log"];

const Pill = ({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "ok" | "warn" | "muted" }) => {
  const map = {
    default: "bg-secondary text-foreground",
    ok: "bg-accent-soft text-accent",
    warn: "bg-warning/15 text-warning",
    muted: "bg-muted text-muted-foreground",
  } as const;
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${map[tone]}`}>{children}</span>;
};

export const ProductMockup = () => {
  const [tab, setTab] = useState("Policy");
  return (
    <div className="rounded-2xl border border-border bg-card shadow-panel overflow-hidden">
      <div className="flex flex-wrap gap-1 border-b border-border bg-surface px-2 py-1.5">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
              tab === t ? "bg-card text-foreground shadow-sm border border-border" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="p-5 sm:p-7 min-h-[460px]">
        {tab === "Dashboard" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              ["Portfolio balance", "$248.6M"],
              ["Approved capacity", "$84.2M"],
              ["Yield range", "4.62 – 5.41%"],
              ["Risk status", "Within band"],
              ["Policy status", "Compliant"],
              ["Next review", "12 May 2026"],
              ["Routing events (24h)", "7"],
              ["Watchlist alerts", "2"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-border p-3 bg-gradient-panel">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{k}</p>
                <p className="text-base font-semibold text-foreground mt-1 font-display">{v}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Policy" && (
          <div className="space-y-2">
            {[
              ["Max allocation per protocol", "≤ 20%", "ok"],
              ["Minimum IST score", "≥ 80", "ok"],
              ["Minimum RQS band", "Approved", "ok"],
              ["Approved assets", "USDC · USDT · Tokenized T-bills", "default"],
              ["Approved chains", "Ethereum · Base · Arbitrum", "default"],
              ["Redemption liquidity", "T+0 to T+2", "ok"],
              ["Emergency exit trigger", "Critical score deterioration", "warn"],
            ].map(([rule, value, tone]) => (
              <div key={rule as string} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface-elevated px-4 py-3">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Rule</p>
                  <p className="text-sm text-foreground font-medium">{rule}</p>
                </div>
                <Pill tone={tone as any}>{value}</Pill>
              </div>
            ))}
          </div>
        )}

        {tab === "Yield Universe" && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground font-mono border-b border-border">
                  {["Venue", "Asset", "Yield", "Liquidity", "RQS", "IST", "Policy", "Capacity"].map((h) => (
                    <th key={h} className="py-2.5 pr-4 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Aave v3", "USDC", "5.12%", "T+0", "88", "92", "ok", "$24.0M"],
                  ["Ondo OUSG", "T-bill", "4.92%", "T+1", "92", "95", "ok", "$18.0M"],
                  ["Spark sDAI", "DAI", "4.78%", "T+0", "81", "86", "ok", "$12.4M"],
                  ["Compound v3", "USDT", "4.62%", "T+0", "66", "78", "warn", "$6.0M"],
                  ["USDM Vault", "USDM", "5.41%", "T+2", "74", "80", "warn", "$8.2M"],
                ].map((r) => (
                  <tr key={r[0]} className="text-foreground">
                    <td className="py-3 pr-4 font-medium">{r[0]}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{r[1]}</td>
                    <td className="py-3 pr-4 font-mono">{r[2]}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{r[3]}</td>
                    <td className="py-3 pr-4 font-mono">{r[4]}</td>
                    <td className="py-3 pr-4 font-mono">{r[5]}</td>
                    <td className="py-3 pr-4"><Pill tone={r[6] === "ok" ? "ok" : "warn"}>{r[6] === "ok" ? "Approved" : "Review"}</Pill></td>
                    <td className="py-3 pr-4 font-mono">{r[7]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "Risk Scores" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              ["RQS", "84", "Approved band"],
              ["IST", "89", "Sufficient"],
              ["FairYield", "+38 bps", "vs benchmark"],
              ["Liquidity Depth", "Tier 1", "Deep"],
              ["Governance Risk", "Low", "Multi-sig 4/7"],
              ["Smart Contract Risk", "Moderate", "Audited · 3 firms"],
            ].map(([k, v, s]) => (
              <div key={k} className="rounded-lg border border-border p-4 bg-gradient-panel">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{k}</p>
                <p className="text-2xl font-display font-semibold text-foreground mt-1">{v}</p>
                <p className="text-xs text-muted-foreground mt-1">{s}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "Routing" && (
          <div className="space-y-3">
            {[
              ["USDC · 4.20M", "Treasury wallet → Aave v3", "Policy ✓ · Liquidity ✓", "Executed"],
              ["USDT · 1.80M", "Treasury wallet → Compound v3", "Policy ✓ · Cap ✓", "Pending committee"],
              ["DAI · 2.40M", "Spark sDAI → Treasury wallet", "Rebalance · Liquidity ✓", "Queued"],
            ].map((r) => (
              <div key={r[0]} className="rounded-lg border border-border bg-surface-elevated p-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{r[0]}</p>
                  <p className="text-xs text-muted-foreground">{r[1]}</p>
                </div>
                <p className="text-xs text-muted-foreground font-mono">{r[2]}</p>
                <Pill tone={r[3] === "Executed" ? "ok" : "muted"}>{r[3]}</Pill>
              </div>
            ))}
          </div>
        )}

        {tab === "Audit Log" && (
          <ul className="divide-y divide-border text-sm">
            {[
              ["12:48 UTC", "Route executed", "USDC → Aave v3 · $4.20M"],
              ["11:02 UTC", "Score changed", "USDM Vault · RQS 78 → 74"],
              ["10:14 UTC", "Venue moved to watchlist", "Compound v3 · liquidity drift"],
              ["09:31 UTC", "Allocation approved", "OUSG · $6.00M · committee 3 of 3"],
              ["08:14 UTC", "Policy updated", "Min IST 78 → 80 · v3.2"],
              ["07:00 UTC", "Evidence packet generated", "Q2 board pack · 142 pages"],
              ["06:42 UTC", "Board report exported", "PDF · CSV · XBRL"],
            ].map((r) => (
              <li key={r[0]} className="flex items-center gap-4 py-2.5">
                <span className="font-mono text-xs text-muted-foreground w-24">{r[0]}</span>
                <span className="text-foreground w-56 font-medium">{r[1]}</span>
                <span className="text-muted-foreground">{r[2]}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};