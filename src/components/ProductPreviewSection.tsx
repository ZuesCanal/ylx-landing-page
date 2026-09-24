import { SectionReveal } from "./SectionReveal";

export function ProductPreviewSection() {
  return (
    <section id="trace" className="border-b border-rule bg-ink py-24 text-canvas">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-canvas/50">Refrnce Trace</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">Follow the evidence, not the assumption.</h2>
            <p className="mt-6 max-w-md leading-7 text-canvas/65">Trace connects wallets, counterparties, assets, transactions, and source records into one defensible view of an on-chain event.</p>
            <div className="mt-12 grid grid-cols-2 gap-px border border-canvas/10 bg-canvas/10 text-sm">
              {["Entity resolved", "Source verified", "Path reconstructed", "Record exportable"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-ink p-3"><span className="h-1.5 w-1.5 rounded-full bg-evidence" />{item}</div>
              ))}
            </div>
          </div>
          <TraceInterface />
        </SectionReveal>
      </div>
    </section>
  );
}

function TraceInterface() {
  return (
    <div className="overflow-hidden rounded-md border border-canvas/15 bg-panel shadow-2xl" aria-label="Trace investigation interface">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-canvas/10 px-5 py-4 text-xs text-canvas/55">
        <span>Investigation / TX-84A2</span><span className="rounded-sm border border-evidence/30 bg-evidence/10 px-2 py-1 text-evidence">Sources verified</span>
      </div>
      <div className="grid min-h-[430px] lg:grid-cols-[1fr_220px]">
        <div className="relative border-b border-canvas/10 p-6 lg:border-b-0 lg:border-r">
          <svg viewBox="0 0 520 330" className="h-full min-h-72 w-full" role="img" aria-label="Evidence graph linking an origin wallet through transactions and assets to a destination vault">
            <g stroke="currentColor" className="text-canvas/20" strokeWidth="1"><path d="M85 165L215 82L330 145L445 72M215 82L250 245L420 260M330 145L420 260" /></g>
            {[[85,165,"Origin"],[215,82,"Router"],[330,145,"Asset"],[445,72,"Vault"],[250,245,"Counterparty"],[420,260,"Exit"]].map(([x,y,label], index) => (
              <g key={String(label)}><circle cx={x} cy={y} r={index === 0 ? 18 : 12} className={index === 0 ? "fill-evidence/30 stroke-evidence" : "fill-graphite stroke-canvas/35"} /><text x={x} y={Number(y)+30} textAnchor="middle" className="fill-canvas/55 text-[10px]">{label}</text></g>
            ))}
          </svg>
        </div>
        <div className="divide-y divide-canvas/10">
          <EvidenceRow label="Event" value="Vault deposit" />
          <EvidenceRow label="Origin" value="0x71F…A420" />
          <EvidenceRow label="Asset" value="USDC" />
          <EvidenceRow label="Timestamp" value="14:32:08 UTC" />
          <EvidenceRow label="Sources" value="4 corroborated" tone="evidence" />
          <EvidenceRow label="Review" value="1 open item" tone="review" />
        </div>
      </div>
    </div>
  );
}

function EvidenceRow({ label, value, tone }: { label: string; value: string; tone?: "evidence" | "review" }) {
  const toneClass = tone === "evidence" ? "text-evidence" : tone === "review" ? "text-review" : "text-canvas";
  return <div className="px-5 py-4"><p className="text-[10px] uppercase tracking-[0.14em] text-canvas/40">{label}</p><p className={`mt-1 text-sm ${toneClass}`}>{value}</p></div>;
}
