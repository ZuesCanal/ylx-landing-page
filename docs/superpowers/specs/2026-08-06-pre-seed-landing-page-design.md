# YLX Pre-Seed Investor Landing Page — Design Spec

**Date:** 2026-08-06
**Repo:** `ylx-landing-page` (new, standalone — separate from the read-only YLX Research folder and the `ylxresearch` product demo repo)
**Remote:** https://github.com/ZuesCanal/ylx-landing-page

## Goal

A single-page, high-converting landing page targeted at pre-seed investors and
institutional/enterprise prospects. Positions YLX as the trusted control layer
that lets institutions navigate digital assets safely — the standardized
rating and control surface between raw vault infrastructure (Veda, Morpho,
Upshift) and an institution's existing risk/compliance workflow. Primary
conversion goal: capture investor/enterprise contact info via a waitlist form
(whitepaper + pitch deck + private pilot access).

This is grounded in what's actually built in the `ylxresearch` product (read
for context, not modified): IST/RQS/Fair Yield/Track Record/Conviction
scoring, the 7-gate Policy Builder, Inquest on-chain investigation, Treasury
State Map, and 12 live data sources (Webacy, Breadcrumbs, DeFiLlama,
Chainlink/Pyth, The Graph, Etherscan, Alchemy, Exa, Messari, Polymarket, plus
Sepolia staging). Copy should read as descriptive of real capability, not
aspirational marketing.

## Non-goals

- No CMS, no auth, no multi-page routing, no analytics wiring.
- No real Formspree ID — scaffolded with a placeholder endpoint and a `TODO`.
- No dark-mode toggle (light mode only, per design decision below).
- Does not touch, move, or reference-write into the YLX Research folder or
  the `ylxresearch` repo. Content is informed by reading `README.md`,
  `context.md`, and `PROJECT_OVERVIEW.md`; nothing there is modified.

## Workspace setup

- New standalone directory: `...\RWA Yield Vault\Demos\ylx-landing-page`
  (already created, `git init` done, default branch will be set to `main`).
- Remote: `git remote add origin https://github.com/ZuesCanal/ylx-landing-page`.
- After the initial project scaffold is committed, push to `origin main`
  (confirmed with user — push happens once, after the first real commit of
  the scaffolded app, not after this spec-only commit).

## Tech stack

- Next.js 14+, App Router, TypeScript, `src/` directory, ESLint — via
  `create-next-app`.
- Tailwind CSS for styling.
- `lucide-react` for icons.
- `framer-motion` for scroll-in transitions — restrained: fade/slide only,
  no bounce/parallax.
- `react-hook-form` + `zod` (`@hookform/resolvers`) for waitlist form
  validation — client-side only, no backend.

## Design system

- **Mode:** Light only. Enterprise SaaS: white/off-white background, deep
  navy (`~#0B1F3A`) for headlines/nav, refined charcoal for body text.
- **Accent:** A single emerald accent, reserved specifically for
  rating/score-adjacent elements (pillar icons, CTA button) so it reads as
  signal, not decoration.
- **Typography:** Inter (or system-ui fallback stack), high legibility,
  Bloomberg/BlackRock-terminal register.
- **Motion:** Framer Motion `whileInView` fade/slide-up on section entry
  only. No hover bounce, no auto-playing animation loops.

## Page architecture (`app/page.tsx`, single page, anchor-linked sections)

1. **Nav** — sticky bar: YLX wordmark (left), "Request Access" button
   (right) that scrolls to the waitlist section.

2. **Hero** — Headline positions YLX as the trusted control layer for
   institutional digital asset allocation. Subhead names the four-pillar
   surface (Sight / Flow / Trace / Guard) in one line. Primary CTA button
   ("Request Whitepaper & Pilot Access") scrolls to waitlist. Secondary,
   smaller line naming the underlying vault infrastructure category (Veda,
   Morpho, Upshift-class protocols) for immediate context.

3. **The Control Layer — Four Pillars** — Section headline reinforces
   "conforms to your existing workflow, doesn't replace it." 4-card grid,
   each with a Lucide icon, name, one-line function, one-line workflow-fit
   statement:
   - **Sight** — full visibility into protocol and treasury exposure
     (maps to the product's screener / Treasury State Map).
   - **Flow** — policy-directed capital routing (maps to PolicyBrain /
     the allocation engine).
   - **Trace** — on-chain investigation and evidence trails (maps to
     Inquest / forensic tracing).
   - **Guard** — hard risk gates and standardized ratings (maps to
     IST/RQS, the 7-gate eligibility check, OFAC screening).

4. **Path to a Global Standard** — Horizontal (stacked on mobile) 4-step
   timeline, corporate-grade, no hype language:
   1. Research & Methodology (current — IST/RQS/Fair Yield/Track
      Record/Conviction defined and calibrated)
   2. Institutional Pilots (Helix Ventures phase, MVP validation)
   3. Multi-Jurisdiction Coverage (8-regime eligibility expansion)
   4. Standardized Global Rating Framework

5. **Investor & Enterprise Waitlist** — Form fields: Name, Work Email,
   Organization, Organization Type (dropdown: Institutional Investor /
   Family Office / Fund / DeFi Protocol / Other). Single submit button:
   "Request Whitepaper & Pilot Access." Client + schema (zod) validation;
   inline error states; success confirmation state on submit. Posts to a
   placeholder Formspree endpoint (`https://formspree.io/f/YOUR_FORM_ID`)
   with a code comment marking where to swap in the real form ID.

6. **Footer** — Wordmark, one-line disclaimer ("YLX is in active
   development; figures and methodology are illustrative of current
   capability"), copyright line. No social/link sprawl.

## Verification plan

- `npm run build` succeeds with no type errors.
- Manual check in browser: all four sections render, waitlist form
  validates empty/invalid input and shows a success state on valid
  submit (Formspree call will 404 against the placeholder ID — expected
  and noted to the user, not a bug to fix pre-launch).
- Responsive check at mobile (375px), tablet (768px), desktop (1440px)
  widths — four-pillar grid and timeline both collapse to single-column
  stacks on mobile.
