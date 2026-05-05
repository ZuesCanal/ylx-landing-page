import { Button } from "@/components/ui/button";
import { Nav } from "@/components/ylx/Nav";
import { HeroDashboard } from "@/components/ylx/HeroDashboard";
import { Section } from "@/components/ylx/Section";
import { ProductMockup } from "@/components/ylx/ProductMockup";
import {
  ArrowRight, ShieldCheck, Database, GitBranch, Activity, ClipboardCheck,
  Layers, FileText, Boxes, Building2, Briefcase, Wallet, Landmark, ScrollText, Coins,
  ChevronRight, CheckCircle2,
} from "lucide-react";

const trustCategories = ["Corporate Treasuries", "Wealth Platforms", "Asset Managers", "Custodians", "Stablecoin Issuers", "Auditors"];

const problems = [
  { t: "Fragmented opportunity discovery", b: "Yield opportunities are scattered across protocols, tokenized funds, issuers, chains and custody environments." },
  { t: "Unclear risk-adjusted yield", b: "Headline APY rarely explains the underlying risk, liquidity, smart contract exposure or information quality." },
  { t: "Policy and execution are disconnected", b: "Treasury mandates often live in documents, while execution decisions happen across fragmented tools and venues." },
  { t: "Audit trails are incomplete", b: "Boards, auditors and risk teams need evidence for every score, approval, allocation and policy decision." },
];

const solutions = [
  { i: Activity, t: "Intelligence by default", b: "Compare stablecoin, DeFi and tokenized RWA venues using proprietary risk, yield and information-quality methodologies." },
  { i: ShieldCheck, t: "Policy before execution", b: "Translate board-approved treasury mandates into clear allocation rules across assets, chains, protocols, tenors, liquidity requirements and counterparty limits." },
  { i: GitBranch, t: "Route only where approved", b: "Orchestrate capital across eligible venues while respecting risk limits, liquidity thresholds and compliance constraints." },
  { i: ClipboardCheck, t: "Audit-ready from day one", b: "Capture every score, decision, approval, allocation and policy change in a verifiable audit trail." },
];

const primitives = [
  { n: "01", t: "Core Intelligence Engine", b: "Risk, yield and confidence scores across stablecoins, protocols, vaults, tokenized funds and real-world asset venues.", i: Activity },
  { n: "02", t: "Policy Builder", b: "Turn investment policies into enforceable digital rules covering approved assets, allocation limits, chains, protocols, jurisdictions, duration and liquidity controls.", i: ShieldCheck },
  { n: "03", t: "Digital Strategy", b: "Construct treasury allocation strategies based on yield, risk, liquidity, duration, information quality and mandate fit.", i: Layers },
  { n: "04", t: "Orchestration & Routing", b: "Route assets across approved venues through non-custodial infrastructure, custody integrations or smart-contract execution paths.", i: GitBranch },
  { n: "05", t: "Compliance & Audit", b: "Generate evidence packs, audit logs, risk reports, board packs and policy compliance records.", i: ClipboardCheck },
];

const stages = [
  {
    tag: "Stage 01 · Pre-Allocation",
    title: "Define policy and model the opportunity.",
    body: "Upload or build a treasury mandate. Set rules for assets, venues, chains, limits, liquidity, duration, risk scores, jurisdictional constraints and compliance requirements.",
    bullets: ["Build treasury policy rules", "Screen approved assets and venues", "Model yield, liquidity and risk scenarios", "Compare opportunities before capital moves"],
  },
  {
    tag: "Stage 02 · Allocation",
    title: "Route capital through approved pathways.",
    body: "YLX identifies policy-compliant opportunities and routes capital only through eligible venues, custody partners or smart-contract pathways.",
    bullets: ["Compare approved yield opportunities", "Check every allocation against policy", "Respect allocation caps and liquidity thresholds", "Route through non-custodial or custody-integrated workflows"],
  },
  {
    tag: "Stage 03 · Post-Allocation",
    title: "Monitor, report and audit continuously.",
    body: "Every score, decision, approval, route and policy change is recorded for treasury reporting, board oversight, external audit and risk review.",
    bullets: ["Monitor risk and yield changes", "Detect policy breaches", "Generate evidence packets", "Export board and audit reports"],
  },
];

const scores = [
  ["IST", "Information Sufficiency Threshold", "Measures whether enough reliable information exists to evaluate an opportunity."],
  ["RQS", "Risk Quality Score", "Assesses the overall risk profile of a venue, issuer, protocol or strategy."],
  ["FairYield", "Risk-adjusted yield", "Compares expected yield against risk, liquidity, duration and market alternatives."],
  ["Track Record", "Operational history", "Evaluates historical performance, stability, incidents and consistency."],
  ["Conviction", "Forward-looking signal", "Combines forward-looking confidence signals across governance, infrastructure, liquidity and yield quality."],
  ["Liquidity Depth", "Exit capacity", "Measures exit capacity, redemption terms, pool depth and market resilience."],
  ["Reserve Transparency", "Issuer integrity", "Assesses issuer reserves, attestations, reporting quality and redemption confidence."],
  ["Governance Risk", "Protocol controls", "Evaluates protocol governance, admin controls, upgrade risk and decision-making structure."],
  ["Smart Contract Risk", "Technical exposure", "Reviews audits, exploit history, complexity, dependencies and technical risk exposure."],
];

const useCases = [
  { i: Building2, t: "Corporate Treasuries", b: "Put idle stablecoin balances to work while staying within board-approved policy and liquidity constraints." },
  { i: Briefcase, t: "Wealth Platforms", b: "Evaluate digital yield products before presenting them to advisers, committees or clients." },
  { i: Layers, t: "Asset Managers", b: "Screen tokenized funds, DeFi venues and stablecoin yield opportunities with repeatable risk methodology." },
  { i: Wallet, t: "Custodians", b: "Add intelligence, policy and reporting layers around client digital asset balances." },
  { i: ScrollText, t: "Auditors & Risk Teams", b: "Review evidence packs, policy decisions, allocation history and risk changes through a clear audit trail." },
  { i: Coins, t: "Stablecoin & RWA Issuers", b: "Help institutional allocators understand yield, reserves, transparency, structure and compliance posture." },
];

const research = [
  ["Digital Treasury Monitor", "Monthly market intelligence across stablecoin yields, tokenized Treasuries, DeFi venues and RWA opportunities."],
  ["Stablecoin Issuer Scorecards", "Compare reserve transparency, redemption terms, liquidity, governance and jurisdictional risk."],
  ["Protocol Risk Reports", "Assess smart contract exposure, governance, liquidity, exploit history and operational risk."],
  ["Tokenized Treasury Reports", "Evaluate tokenized money market funds, T-bill products and on-chain cash equivalents."],
  ["DeFi Venue Risk Reviews", "Score yield venues based on risk quality, information sufficiency, liquidity and fair yield."],
  ["Custom Due Diligence", "Bespoke analysis for committees reviewing specific assets, venues, protocols or strategies."],
];

const integrations = ["Fireblocks", "Coinbase Custody", "Anchorage Digital", "MetaMask Institutional", "Chainlink", "The Graph", "DeFiLlama", "RWA.xyz", "ERP / TMS systems", "Auditor exports"];

const governance = [
  { i: ShieldCheck, t: "Policy Enforcement", b: "Every allocation is checked against approved treasury rules before execution." },
  { i: FileText, t: "Evidence Packets", b: "Scores include source data, timestamps, methodology versioning and explainability." },
  { i: ClipboardCheck, t: "Verifiable Audit Trail", b: "Every approval, policy change, score update and routing decision is recorded for review." },
  { i: Boxes, t: "Non-Custodial Architecture", b: "YLX is designed as an intelligence and orchestration layer, not a balance sheet or custody provider." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero border-b border-border">
        <div className="container pt-16 sm:pt-24 pb-20 sm:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Treasury OS · Institutional preview
            </div>
            <h1 className="mt-6 font-display text-[2.5rem] sm:text-5xl lg:text-[3.6rem] leading-[1.04] tracking-tight text-foreground">
              The treasury operating system for digital assets.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              YLX helps institutions evaluate stablecoin, DeFi and tokenized RWA yield opportunities, convert treasury mandates into enforceable policy rules, and route capital across approved venues with real-time risk monitoring and audit-ready reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-glow group">
                Request access
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border-strong text-foreground bg-card">
                View platform
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-mono">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Non-custodial</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Policy-first</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Audit-ready</span>
            </div>
          </div>
          <div className="lg:col-span-7 animate-fade-up [animation-delay:120ms]">
            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-surface">
        <div className="container py-10">
          <p className="text-center text-sm text-muted-foreground">
            Built for institutional treasury, risk and compliance teams.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {trustCategories.map((c) => (
              <div key={c} className="bg-card px-4 py-5 text-center">
                <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-mono">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section
        eyebrow="The problem"
        title="Digital asset yield is fragmented, opaque and hard to govern."
        body="Institutional treasuries face a growing universe of stablecoins, tokenized funds, DeFi protocols, custodians, chains, bridges and yield venues. Each opportunity carries different risks, liquidity profiles, governance standards, smart contract exposures and compliance requirements."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {problems.map((p, i) => (
            <div key={p.t} className="bg-card p-7 sm:p-8 hover:bg-surface transition-colors">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-muted-foreground mt-1">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.b}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section
        className="bg-surface border-y border-border"
        eyebrow="The platform"
        title="One connected platform for governed digital asset treasury."
        body="YLX connects intelligence, policy, routing and auditability in one governed workflow. Treasury and risk teams can evaluate opportunities, approve strategies, enforce limits and monitor allocations from a single control layer."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map(({ i: Icon, t, b }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-accent-soft text-accent inline-flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRIMITIVES */}
      <Section
        eyebrow="Platform primitives"
        title="Five primitives for institutional digital asset allocation."
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {primitives.map(({ n, t, b, i: Icon }) => (
            <div key={n} className="bg-card p-6 lg:p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-accent">{n}</span>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground leading-snug">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WORKFLOW */}
      <Section
        className="bg-gradient-navy text-primary-foreground"
        eyebrow="Workflow"
        title="Control at every stage of the digital asset treasury cycle."
      >
        <div className="space-y-px bg-white/10 rounded-2xl overflow-hidden">
          {stages.map((s, idx) => (
            <div key={s.tag} className="bg-primary/95 backdrop-blur p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground/60">{s.tag}</p>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl tracking-tight">{s.title}</h3>
              </div>
              <p className="lg:col-span-4 text-sm sm:text-base text-primary-foreground/75 leading-relaxed">{s.body}</p>
              <ul className="lg:col-span-4 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-primary-foreground/85">
                    <ChevronRight className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="lg:col-span-12 -mb-4 mt-2 hidden lg:block">
                {idx < stages.length - 1 && <div className="h-px bg-primary-foreground/10" />}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* INTELLIGENCE */}
      <Section
        eyebrow="Intelligence layer"
        title="Institutional intelligence for a fragmented digital asset market."
        body="YLX normalizes stablecoins, tokenized Treasuries, DeFi protocols, vaults, bridges and yield venues into scores, limits, recommendations and evidence trails that institutions can understand, govern and defend."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {scores.map(([code, name, body]) => (
            <div key={code} className="rounded-xl border border-border bg-card p-5 hover:border-border-strong transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-accent">{code}</span>
                <span className="text-[10px] font-mono text-muted-foreground">methodology</span>
              </div>
              <h4 className="mt-3 font-display text-base font-semibold text-foreground">{name}</h4>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUCT MOCKUP */}
      <Section
        className="bg-surface border-y border-border"
        eyebrow="The product"
        title="One platform. Every policy, score, route and audit event."
      >
        <ProductMockup />
      </Section>

      {/* USE CASES */}
      <Section
        eyebrow="Use cases"
        title="Built for teams managing digital asset exposure."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map(({ i: Icon, t, b }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-secondary text-foreground inline-flex items-center justify-center">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">{t}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* RESEARCH */}
      <Section
        className="bg-surface border-y border-border"
        eyebrow="Research & intelligence"
        title="Start with intelligence. Scale into orchestration."
        body="YLX can support institutions before capital moves. Independent reports, scorecards and market monitors help treasury and risk teams understand the investable digital asset universe before moving into policy-based routing."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {research.map(([t, b]) => (
            <div key={t} className="bg-card p-6 hover:bg-surface transition-colors group">
              <div className="flex items-center justify-between">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* METRICS */}
      <Section eyebrow="Where we are" title="Building deliberately, with institutional rigor.">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {[
            ["32+", "Institutional discovery interviews"],
            ["11", "Qualified pipeline conversations"],
            ["5", "Core risk methodologies"],
            ["—", "Policy-first architecture"],
            ["—", "Non-custodial by design"],
          ].map(([k, v]) => (
            <div key={v} className="bg-card p-6">
              <p className="font-display text-3xl sm:text-4xl text-foreground">{k}</p>
              <p className="mt-2 text-xs text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground font-mono">Indicative figures · subject to update.</p>
      </Section>

      {/* INTEGRATIONS */}
      <Section
        className="bg-surface border-y border-border"
        eyebrow="Institutional infrastructure"
        title="Built to integrate with the institutional stack."
        body="YLX is designed to connect with custodians, wallets, exchanges, stablecoin issuers, tokenized asset platforms, oracles, reporting systems and internal treasury workflows."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {integrations.map((i) => (
            <div key={i} className="bg-card px-5 py-7 text-center">
              <p className="text-sm text-foreground font-medium">{i}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground italic">Integrations shown are illustrative and subject to product roadmap.</p>
      </Section>

      {/* GOVERNANCE */}
      <Section
        eyebrow="Governance & compliance"
        title="Governance is not a feature. It is the foundation."
        body="YLX puts policy, risk and auditability at the centre of the digital asset treasury workflow. Every allocation is evaluated before execution and monitored after deployment."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {governance.map(({ i: Icon, t, b }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6">
              <Icon className="h-5 w-5 text-accent" />
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-gradient-navy text-primary-foreground">
        <div className="container py-24 sm:py-32 text-center max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-mono">Get started</p>
          <h2 className="mt-5 font-display text-3xl sm:text-5xl tracking-tight leading-[1.05]">
            Bring policy, intelligence and control to digital asset treasury.
          </h2>
          <p className="mt-5 text-primary-foreground/75 text-base sm:text-lg leading-relaxed">
            YLX helps institutions move from fragmented opportunity discovery to governed, auditable and policy-driven digital asset allocation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Request access <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Book a strategy call
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/80 border-t border-primary-foreground/10">
        <div className="container py-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 font-display text-xl text-primary-foreground">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-accent text-accent-foreground text-[11px] font-bold">Y</span>
                YLX
              </div>
              <p className="mt-4 text-sm text-primary-foreground/60 max-w-sm">
                Policy-driven digital asset treasury infrastructure.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
              {[
                ["Product", ["Platform", "Intelligence", "Policy", "Routing"]],
                ["Solutions", ["Compliance", "Use Cases"]],
                ["Company", ["Company", "Contact"]],
                ["Legal", ["Disclosures", "Terms", "Privacy"]],
              ].map(([h, items]) => (
                <div key={h as string}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-primary-foreground/50 font-mono">{h}</p>
                  <ul className="mt-4 space-y-2.5">
                    {(items as string[]).map((i) => (
                      <li key={i}><a href="#" className="hover:text-primary-foreground transition-colors">{i}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/50">
            <p>© 2026 Yield Liquidity Exchange. All rights reserved.</p>
            <p>YLX is not a bank, custodian, fund manager or investment adviser. Information provided is for institutional evaluation purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
