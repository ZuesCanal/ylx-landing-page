# YLX Pre-Seed Investor Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a single-page, light-mode, enterprise-SaaS-styled Next.js landing page at `ylx-landing-page` that positions YLX as the trusted control layer (Sight / Flow / Trace / Guard) for institutional digital asset allocation, ending in a validated investor/enterprise waitlist form, committed and pushed to `https://github.com/ZuesCanal/ylx-landing-page`.

**Architecture:** Next.js 14 App Router + TypeScript + Tailwind, one route (`/`) composed of six presentational section components (`Nav`, `Hero`, `PillarsSection`, `TimelineSection`, `WaitlistSection`, `Footer`), a shared `SectionReveal` Framer Motion wrapper, and two content data modules (`pillars.ts`, `timeline.ts`). The only non-trivial logic — waitlist form validation and submission — lives in a `zod` schema plus a `react-hook-form`-driven `WaitlistForm` client component, both covered by Vitest + React Testing Library.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS 3, `lucide-react`, `framer-motion`, `react-hook-form`, `zod`, `@hookform/resolvers`; Vitest + `@testing-library/react` + `@testing-library/user-event` + `jsdom` for tests.

## Global Constraints

- Directory: `...\RWA Yield Vault\Demos\ylx-landing-page` (already created; `git init` done, default branch `main`).
- Remote: `https://github.com/ZuesCanal/ylx-landing-page` — push only after the full scaffold is committed (Task 15), per user confirmation. Never force-push.
- Never read, modify, move, or delete anything inside the YLX Research folder or the `ylxresearch` product repo. This plan only creates files under `ylx-landing-page`.
- Light mode only — no dark-mode toggle, no `prefers-color-scheme` override.
- Motion is restrained: `framer-motion` `whileInView` fade/slide-up only, no bounce/parallax/looping animation.
- Waitlist form posts to placeholder `https://formspree.io/f/YOUR_FORM_ID`, marked with a `TODO` comment — never invent a real form ID.
- No CMS, no auth, no multi-page routing, no analytics wiring, no backend beyond the Formspree POST.
- Four pillars, in this exact order and copy intent: **Sight** (visibility), **Flow** (routing), **Trace** (forensics/investigation), **Guard** (risk gates).

---

### Task 1: Scaffold the Next.js app and testing tooling

**Files:**
- Create: entire `create-next-app@14` output (`package.json`, `tsconfig.json`, `next.config.*`, `tailwind.config.ts`, `postcss.config.js`, `.eslintrc*`/`eslint.config.*`, `.gitignore`, `src/app/*`, `public/*`)
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Modify: `package.json` (add `test`/`test:watch` scripts)

**Interfaces:**
- Produces: a working `npm run build`, `npm run lint`, `npm run dev`, and `npm run test` in the project root, with `@/*` resolving to `src/*` in both the app and Vitest.

`create-next-app` refuses to scaffold into a non-empty directory, and `ylx-landing-page` already contains `.git` and `docs/` from the design spec. Scaffold into a sibling temp directory instead, then merge.

- [ ] **Step 1: Scaffold into a sibling temp directory**

```bash
cd "C:/Users/Dennis/Documents/Project Stralis/Business Dev/RWA Yield Vault/Demos"
npx --yes create-next-app@14 ylx-landing-page-scaffold \
  --typescript --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --use-npm --no-git
```

- [ ] **Step 2: Merge the scaffold into the real project directory**

```bash
cd "C:/Users/Dennis/Documents/Project Stralis/Business Dev/RWA Yield Vault/Demos"
rm -rf ylx-landing-page-scaffold/node_modules
cp -r ylx-landing-page-scaffold/. ylx-landing-page/
rm -rf ylx-landing-page-scaffold
```

Expected: `ylx-landing-page/` now contains both `docs/` (untouched) and the fresh Next.js scaffold (`src/app`, `package.json`, etc.).

- [ ] **Step 3: Install dependencies**

```bash
cd "C:/Users/Dennis/Documents/Project Stralis/Business Dev/RWA Yield Vault/Demos/ylx-landing-page"
npm install
npm install lucide-react framer-motion react-hook-form zod @hookform/resolvers
npm install --save-dev vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- [ ] **Step 4: Add Vitest config**

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Create `vitest.setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 5: Add test scripts to `package.json`**

In the `"scripts"` block, add:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 6: Verify the scaffold builds and lints cleanly**

```bash
npm run build
npm run lint
```

Expected: both succeed with no errors.

- [ ] **Step 7: Confirm the spec file survived the merge, review staged changes, and commit**

```bash
ls docs/superpowers/specs
git add -A
git status
git commit -m "feat: scaffold Next.js app with Tailwind, lucide, framer-motion, and Vitest tooling"
```

Expected: `git status` before commit shows the scaffold files plus the untouched `docs/superpowers/specs/2026-08-06-pre-seed-landing-page-design.md` — no unexpected deletions.

---

### Task 2: Design tokens and root layout

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Produces: Tailwind color utilities `navy` and `charcoal`, `font-sans` mapped to Inter via `var(--font-inter)`, and page `<html>`/`<body>` shell used by every route.

- [ ] **Step 1: Set custom Tailwind theme colors and font mapping**

Replace the `theme` block in `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        charcoal: "#1F2937",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Strip the default dark-mode CSS and add smooth scrolling**

Replace the full contents of `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Wire the Inter font and page metadata into the root layout**

Replace the full contents of `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "YLX — The Trusted Control Layer for Institutional Digital Assets",
  description:
    "YLX standardizes digital asset vault infrastructure into Sight, Flow, Trace, and Guard — a control layer institutions can safely allocate through.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify the build still succeeds**

```bash
npm run build
```

Expected: succeeds with no type or build errors.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts src/app/globals.css src/app/layout.tsx
git commit -m "feat: add navy/charcoal design tokens, Inter font, and page metadata"
```

---

### Task 3: Waitlist validation schema

**Files:**
- Create: `src/lib/waitlist-schema.ts`
- Test: `src/lib/__tests__/waitlist-schema.test.ts`

**Interfaces:**
- Produces: `waitlistSchema` (a `zod` object schema), `WaitlistFormValues` (its inferred TypeScript type), and `organizationTypes` (a readonly tuple of the five allowed organization-type strings) — all consumed by Task 4's `WaitlistForm`.

- [ ] **Step 1: Write the failing test**

Create `src/lib/__tests__/waitlist-schema.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { waitlistSchema } from "../waitlist-schema";

describe("waitlistSchema", () => {
  it("accepts a fully valid submission", () => {
    const result = waitlistSchema.safeParse({
      name: "Jordan Blake",
      email: "jordan@fund.com",
      organization: "Blake Capital",
      organizationType: "Fund",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = waitlistSchema.safeParse({
      name: "Jordan Blake",
      email: "not-an-email",
      organization: "Blake Capital",
      organizationType: "Fund",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a name shorter than 2 characters", () => {
    const result = waitlistSchema.safeParse({
      name: "J",
      email: "jordan@fund.com",
      organization: "Blake Capital",
      organizationType: "Fund",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an organization type outside the allowed list", () => {
    const result = waitlistSchema.safeParse({
      name: "Jordan Blake",
      email: "jordan@fund.com",
      organization: "Blake Capital",
      organizationType: "Hedge Fund",
    });
    expect(result.success).toBe(false);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- waitlist-schema
```

Expected: FAIL — `Cannot find module '../waitlist-schema'`.

- [ ] **Step 3: Implement the schema**

Create `src/lib/waitlist-schema.ts`:

```ts
import { z } from "zod";

export const organizationTypes = [
  "Institutional Investor",
  "Family Office",
  "Fund",
  "DeFi Protocol",
  "Other",
] as const;

export const waitlistSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid work email"),
  organization: z.string().trim().min(2, "Enter your organization name"),
  organizationType: z.enum(organizationTypes, {
    errorMap: () => ({ message: "Select an organization type" }),
  }),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm run test -- waitlist-schema
```

Expected: PASS — 4 tests.

- [ ] **Step 5: Commit**

```bash
git add src/lib/waitlist-schema.ts src/lib/__tests__/waitlist-schema.test.ts
git commit -m "feat: add waitlist form validation schema"
```

---

### Task 4: Waitlist form component

**Files:**
- Create: `src/components/WaitlistForm.tsx`
- Test: `src/components/__tests__/WaitlistForm.test.tsx`

**Interfaces:**
- Consumes: `waitlistSchema`, `organizationTypes`, `WaitlistFormValues` from `@/lib/waitlist-schema` (Task 3).
- Produces: `WaitlistForm` — a client component with no props, rendering a labeled form (`name`, `email`, `organization`, `organizationType` fields) that shows inline validation errors, a submitting state, a `role="status"` success message on successful POST, and a `role="alert"` error message on failed POST. Consumed by Task 11's `WaitlistSection`.

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/WaitlistForm.test.tsx`:

```tsx
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WaitlistForm } from "../WaitlistForm";

describe("WaitlistForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true } as Response));
  });

  it("shows validation errors when submitted empty", async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    await user.click(
      screen.getByRole("button", { name: /request whitepaper/i })
    );

    expect(await screen.findByText(/enter your full name/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a valid work email/i)).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("submits and shows a success message with valid input", async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    await user.type(screen.getByLabelText(/^name$/i), "Jordan Blake");
    await user.type(screen.getByLabelText(/work email/i), "jordan@fund.com");
    await user.type(screen.getByLabelText(/^organization$/i), "Blake Capital");
    await user.selectOptions(
      screen.getByLabelText(/organization type/i),
      "Fund"
    );
    await user.click(
      screen.getByRole("button", { name: /request whitepaper/i })
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(await screen.findByRole("status")).toHaveTextContent(
      /request received/i
    );
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- WaitlistForm
```

Expected: FAIL — `Cannot find module '../WaitlistForm'`.

- [ ] **Step 3: Implement the component**

Create `src/components/WaitlistForm.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  organizationTypes,
  waitlistSchema,
  type WaitlistFormValues,
} from "@/lib/waitlist-schema";

// TODO: replace with the real Formspree form ID before deploying.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
  });

  async function onSubmit(values: WaitlistFormValues) {
    setSubmitState("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Formspree request failed");
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <p role="status" className="font-medium text-emerald-700">
        Request received. Our team will follow up with the whitepaper, pitch
        deck, and pilot access details.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-charcoal focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal">
          Work Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-charcoal focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-charcoal">
          Organization
        </label>
        <input
          id="organization"
          type="text"
          {...register("organization")}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-charcoal focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        />
        {errors.organization && (
          <p className="mt-1 text-sm text-red-600">
            {errors.organization.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="organizationType"
          className="block text-sm font-medium text-charcoal"
        >
          Organization Type
        </label>
        <select
          id="organizationType"
          defaultValue=""
          {...register("organizationType")}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-charcoal focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
        >
          <option value="" disabled>
            Select one
          </option>
          {organizationTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.organizationType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.organizationType.message}
          </p>
        )}
      </div>

      {submitState === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong submitting your request. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="mt-2 rounded-md bg-emerald-600 px-4 py-2 font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "submitting"
          ? "Submitting…"
          : "Request Whitepaper & Pilot Access"}
      </button>
    </form>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm run test -- WaitlistForm
```

Expected: PASS — 2 tests.

- [ ] **Step 5: Commit**

```bash
git add src/components/WaitlistForm.tsx src/components/__tests__/WaitlistForm.test.tsx
git commit -m "feat: add waitlist form with validation and Formspree submission"
```

---

### Task 5: Static content data — pillars and timeline

**Files:**
- Create: `src/data/pillars.ts`
- Create: `src/data/timeline.ts`
- Test: `src/data/__tests__/pillars.test.ts`
- Test: `src/data/__tests__/timeline.test.ts`

**Interfaces:**
- Produces: `pillars` (array of `Pillar { name, icon: LucideIcon, function, workflowFit }`, exactly `["Sight", "Flow", "Trace", "Guard"]` in order) and `timeline` (array of `TimelineMilestone { title, description }`, exactly 4 entries). Consumed by Task 9 (`PillarsSection`) and Task 10 (`TimelineSection`).

- [ ] **Step 1: Write the failing tests**

Create `src/data/__tests__/pillars.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { pillars } from "../pillars";

describe("pillars", () => {
  it("defines exactly the four control-layer pillars in order", () => {
    expect(pillars.map((p) => p.name)).toEqual([
      "Sight",
      "Flow",
      "Trace",
      "Guard",
    ]);
  });

  it("gives every pillar a function and workflow-fit description", () => {
    for (const pillar of pillars) {
      expect(pillar.function.length).toBeGreaterThan(0);
      expect(pillar.workflowFit.length).toBeGreaterThan(0);
    }
  });
});
```

Create `src/data/__tests__/timeline.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { timeline } from "../timeline";

describe("timeline", () => {
  it("defines four milestones in chronological order", () => {
    expect(timeline).toHaveLength(4);
    expect(timeline[0].title).toBe("Research & Methodology");
    expect(timeline[3].title).toBe("Standardized Global Rating Framework");
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

```bash
npm run test -- pillars timeline
```

Expected: FAIL — modules not found.

- [ ] **Step 3: Implement the data modules**

Create `src/data/pillars.ts`:

```ts
import { Eye, Route, Search, ShieldCheck, type LucideIcon } from "lucide-react";

export type Pillar = {
  name: string;
  icon: LucideIcon;
  function: string;
  workflowFit: string;
};

export const pillars: Pillar[] = [
  {
    name: "Sight",
    icon: Eye,
    function:
      "Full visibility into protocol and treasury exposure across every chain you hold.",
    workflowFit:
      "Plugs into the screening and monitoring your risk desk already runs — nothing to migrate.",
  },
  {
    name: "Flow",
    icon: Route,
    function: "Policy-directed capital routing across vetted yield venues.",
    workflowFit:
      "Executes within the allocation limits your investment committee has already approved.",
  },
  {
    name: "Trace",
    icon: Search,
    function:
      "On-chain investigation and evidence trails for every wallet and counterparty.",
    workflowFit:
      "Produces the audit trail your compliance function already expects for allocation decisions.",
  },
  {
    name: "Guard",
    icon: ShieldCheck,
    function:
      "Hard risk gates and standardized ratings — IST, RQS, and OFAC screening.",
    workflowFit:
      "Enforces the exclusion rules your mandate already defines, before capital ever moves.",
  },
];
```

Create `src/data/timeline.ts`:

```ts
export type TimelineMilestone = {
  title: string;
  description: string;
};

export const timeline: TimelineMilestone[] = [
  {
    title: "Research & Methodology",
    description:
      "IST, RQS, Fair Yield, Track Record, and Conviction scoring defined and calibrated against live protocol data.",
  },
  {
    title: "Institutional Pilots",
    description:
      "MVP validation with early institutional partners during the Helix Ventures phase.",
  },
  {
    title: "Multi-Jurisdiction Coverage",
    description:
      "Eligibility expanded across eight regulatory regimes, from the US and EU to Singapore and the UAE.",
  },
  {
    title: "Standardized Global Rating Framework",
    description:
      "A common reference standard for institutional-grade digital asset vault risk.",
  },
];
```

- [ ] **Step 4: Run the tests to verify they pass**

```bash
npm run test -- pillars timeline
```

Expected: PASS — 3 tests total.

- [ ] **Step 5: Commit**

```bash
git add src/data/pillars.ts src/data/timeline.ts src/data/__tests__/pillars.test.ts src/data/__tests__/timeline.test.ts
git commit -m "feat: add pillar and timeline content data"
```

---

### Task 6: Scroll-reveal motion wrapper

**Files:**
- Create: `src/components/SectionReveal.tsx`
- Test: `src/components/__tests__/SectionReveal.test.tsx`

**Interfaces:**
- Produces: `SectionReveal({ children, className? })` — a client component wrapping `children` in a `framer-motion` `motion.div` with a restrained `whileInView` fade/slide-up. Consumed by Task 9, 10, and 11.

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/SectionReveal.test.tsx`:

```tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionReveal } from "../SectionReveal";

describe("SectionReveal", () => {
  it("renders its children", () => {
    render(
      <SectionReveal>
        <p>Pillars content</p>
      </SectionReveal>
    );
    expect(screen.getByText("Pillars content")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- SectionReveal
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement the component**

Create `src/components/SectionReveal.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm run test -- SectionReveal
```

Expected: PASS — 1 test.

- [ ] **Step 5: Commit**

```bash
git add src/components/SectionReveal.tsx src/components/__tests__/SectionReveal.test.tsx
git commit -m "feat: add restrained scroll-reveal motion wrapper"
```

---

### Task 7: Nav component

**Files:**
- Create: `src/components/Nav.tsx`
- Test: `src/components/__tests__/Nav.test.tsx`

**Interfaces:**
- Produces: `Nav()` — a sticky header with the YLX wordmark and a "Request Access" link to `#waitlist`. Consumed by Task 13's `page.tsx`.

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Nav.test.tsx`:

```tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Nav } from "../Nav";

describe("Nav", () => {
  it("renders the wordmark and a CTA linking to the waitlist section", () => {
    render(<Nav />);
    expect(screen.getByText("YLX")).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /request access/i });
    expect(cta).toHaveAttribute("href", "#waitlist");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- Nav
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement the component**

Create `src/components/Nav.tsx`:

```tsx
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold tracking-tight text-navy">
          YLX
        </span>
        <a
          href="#waitlist"
          className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Request Access
        </a>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm run test -- Nav
```

Expected: PASS — 1 test.

- [ ] **Step 5: Commit**

```bash
git add src/components/Nav.tsx src/components/__tests__/Nav.test.tsx
git commit -m "feat: add sticky nav with wordmark and waitlist CTA"
```

---

### Task 8: Hero component

**Files:**
- Create: `src/components/Hero.tsx`
- Test: `src/components/__tests__/Hero.test.tsx`

**Interfaces:**
- Produces: `Hero()` — headline, subhead naming all four pillars, and a CTA link to `#waitlist`. Consumed by Task 13's `page.tsx`.

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Hero.test.tsx`:

```tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

describe("Hero", () => {
  it("names the control layer and all four pillars in the subhead", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /trusted control layer/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Sight, Flow, Trace, and Guard/i)
    ).toBeInTheDocument();
  });

  it("links its CTA to the waitlist section", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: /request whitepaper/i });
    expect(cta).toHaveAttribute("href", "#waitlist");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- Hero
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement the component**

Create `src/components/Hero.tsx`:

```tsx
export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        The trusted control layer for institutional digital asset allocation
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-charcoal">
        YLX standardizes vault infrastructure — Veda, Morpho, Upshift, and the
        chains they route through — into a single surface of Sight, Flow,
        Trace, and Guard, so capital can move safely inside the workflow your
        institution already runs.
      </p>
      <a
        href="#waitlist"
        className="mt-10 inline-block rounded-md bg-emerald-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-emerald-700"
      >
        Request Whitepaper &amp; Pilot Access
      </a>
    </section>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm run test -- Hero
```

Expected: PASS — 2 tests.

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx src/components/__tests__/Hero.test.tsx
git commit -m "feat: add hero section"
```

---

### Task 9: Four Pillars section

**Files:**
- Create: `src/components/PillarsSection.tsx`
- Test: `src/components/__tests__/PillarsSection.test.tsx`

**Interfaces:**
- Consumes: `pillars` from `@/data/pillars` (Task 5), `SectionReveal` from `@/components/SectionReveal` (Task 6).
- Produces: `PillarsSection()` — "The Control Layer" heading plus a 4-card grid, one card per pillar. Consumed by Task 13's `page.tsx`.

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/PillarsSection.test.tsx`:

```tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PillarsSection } from "../PillarsSection";
import { pillars } from "@/data/pillars";

describe("PillarsSection", () => {
  it("renders all four pillar names and functions", () => {
    render(<PillarsSection />);
    for (const pillar of pillars) {
      expect(
        screen.getByRole("heading", { name: pillar.name })
      ).toBeInTheDocument();
      expect(screen.getByText(pillar.function)).toBeInTheDocument();
    }
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- PillarsSection
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement the component**

Create `src/components/PillarsSection.tsx`:

```tsx
import { pillars } from "@/data/pillars";
import { SectionReveal } from "./SectionReveal";

export function PillarsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-navy">
            The Control Layer
          </h2>
          <p className="mt-4 text-charcoal">
            Four surfaces that conform to your existing workflow — YLX
            doesn&apos;t ask an institution to replace its process, it
            standardizes what feeds into it.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <SectionReveal
              key={pillar.name}
              className="rounded-lg border border-slate-200 bg-white p-6"
            >
              <pillar.icon
                className="h-8 w-8 text-emerald-600"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-semibold text-navy">
                {pillar.name}
              </h3>
              <p className="mt-2 text-sm text-charcoal">{pillar.function}</p>
              <p className="mt-3 text-sm text-slate-500">
                {pillar.workflowFit}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm run test -- PillarsSection
```

Expected: PASS — 1 test (asserting all 4 pillars render).

- [ ] **Step 5: Commit**

```bash
git add src/components/PillarsSection.tsx src/components/__tests__/PillarsSection.test.tsx
git commit -m "feat: add four-pillar control layer section"
```

---

### Task 10: Timeline section

**Files:**
- Create: `src/components/TimelineSection.tsx`
- Test: `src/components/__tests__/TimelineSection.test.tsx`

**Interfaces:**
- Consumes: `timeline` from `@/data/timeline` (Task 5), `SectionReveal` from `@/components/SectionReveal` (Task 6).
- Produces: `TimelineSection()` — "Path to a Global Standard" heading plus a 4-milestone grid, numbered in order. Consumed by Task 13's `page.tsx`.

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/TimelineSection.test.tsx`:

```tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimelineSection } from "../TimelineSection";
import { timeline } from "@/data/timeline";

describe("TimelineSection", () => {
  it("renders all four milestone titles in order", () => {
    render(<TimelineSection />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.map((h) => h.textContent)).toEqual(
      timeline.map((m) => m.title)
    );
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- TimelineSection
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement the component**

Create `src/components/TimelineSection.tsx`:

```tsx
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
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm run test -- TimelineSection
```

Expected: PASS — 1 test.

- [ ] **Step 5: Commit**

```bash
git add src/components/TimelineSection.tsx src/components/__tests__/TimelineSection.test.tsx
git commit -m "feat: add path-to-standard timeline section"
```

---

### Task 11: Waitlist section

**Files:**
- Create: `src/components/WaitlistSection.tsx`
- Test: `src/components/__tests__/WaitlistSection.test.tsx`

**Interfaces:**
- Consumes: `WaitlistForm` from `@/components/WaitlistForm` (Task 4), `SectionReveal` from `@/components/SectionReveal` (Task 6).
- Produces: `WaitlistSection()` — a `section id="waitlist"` wrapping the heading, copy, and `WaitlistForm`. Consumed by Task 13's `page.tsx` and targeted by `Nav`/`Hero`'s `#waitlist` anchors.

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/WaitlistSection.test.tsx`:

```tsx
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { WaitlistSection } from "../WaitlistSection";

describe("WaitlistSection", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: true } as Response)
    );
  });

  it("exposes a #waitlist anchor target with the heading and form", () => {
    const { container } = render(<WaitlistSection />);
    expect(container.querySelector("#waitlist")).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: /investor & enterprise waitlist/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- WaitlistSection
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement the component**

Create `src/components/WaitlistSection.tsx`:

```tsx
import { WaitlistForm } from "./WaitlistForm";
import { SectionReveal } from "./SectionReveal";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="bg-navy py-20">
      <div className="mx-auto max-w-xl px-6">
        <SectionReveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Investor &amp; Enterprise Waitlist
          </h2>
          <p className="mt-4 text-slate-200">
            Request the whitepaper, pitch deck, and private pilot access.
          </p>
        </SectionReveal>

        <div className="mt-10 rounded-lg bg-white p-8">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm run test -- WaitlistSection
```

Expected: PASS — 1 test.

- [ ] **Step 5: Commit**

```bash
git add src/components/WaitlistSection.tsx src/components/__tests__/WaitlistSection.test.tsx
git commit -m "feat: add investor and enterprise waitlist section"
```

---

### Task 12: Footer component

**Files:**
- Create: `src/components/Footer.tsx`
- Test: `src/components/__tests__/Footer.test.tsx`

**Interfaces:**
- Produces: `Footer()` — wordmark, disclaimer line, and a copyright line with the current year. Consumed by Task 13's `page.tsx`.

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Footer.test.tsx`:

```tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders the disclaimer and current-year copyright line", () => {
    render(<Footer />);
    expect(screen.getByText(/in active development/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${new Date().getFullYear()} YLX`))
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run test -- Footer
```

Expected: FAIL — module not found.

- [ ] **Step 3: Implement the component**

Create `src/components/Footer.tsx`:

```tsx
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
        <p className="font-semibold text-navy">YLX</p>
        <p className="mt-2">
          YLX is in active development; figures and methodology are
          illustrative of current capability.
        </p>
        <p className="mt-2">&copy; {year} YLX. All rights reserved.</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm run test -- Footer
```

Expected: PASS — 1 test.

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer.tsx src/components/__tests__/Footer.test.tsx
git commit -m "feat: add footer with development disclaimer"
```

---

### Task 13: Assemble the page and verify end-to-end

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `Nav` (Task 7), `Hero` (Task 8), `PillarsSection` (Task 9), `TimelineSection` (Task 10), `WaitlistSection` (Task 11), `Footer` (Task 12).
- Produces: the complete `/` route.

- [ ] **Step 1: Replace the default page with the composed sections**

Replace the full contents of `src/app/page.tsx`:

```tsx
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PillarsSection } from "@/components/PillarsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PillarsSection />
        <TimelineSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Run the full test suite**

```bash
npm run test
```

Expected: PASS — all suites from Tasks 3–12 green.

- [ ] **Step 3: Run the production build and linter**

```bash
npm run build
npm run lint
```

Expected: both succeed with no errors.

- [ ] **Step 4: Manual responsive check**

```bash
npm run dev
```

Open `http://localhost:3000` and check the page at 375px, 768px, and 1440px widths (browser devtools device toolbar): confirm the pillar grid and timeline grid collapse to a single column on mobile, the nav stays sticky, and the waitlist form is usable at all three widths. Stop the dev server (`Ctrl+C`) when done.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble landing page from hero, pillars, timeline, and waitlist sections"
```

---

### Task 14: Repo polish and README

**Files:**
- Modify: `README.md`

**Interfaces:**
- Produces: a project `README.md` describing the app, dev commands, and the outstanding Formspree TODO — no code interfaces.

- [ ] **Step 1: Replace the default create-next-app README**

Replace the full contents of `README.md`:

```markdown
# YLX — Pre-Seed Investor Landing Page

Single-page marketing site positioning YLX as the trusted control layer
(Sight / Flow / Trace / Guard) for institutional digital asset allocation.
Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Development

\`\`\`bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run test     # run the Vitest suite
npm run build    # production build
npm run lint     # eslint
\`\`\`

## Before deploying

- Replace the placeholder Formspree endpoint in
  `src/components/WaitlistForm.tsx` (`FORMSPREE_ENDPOINT`) with the real
  form ID from https://formspree.io.
```

- [ ] **Step 2: Run the full verification pass one more time**

```bash
npm run lint
npm run test
npm run build
```

Expected: all three succeed with no errors.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add project README with dev commands and Formspree TODO"
```

---

### Task 15: Push to GitHub

**Files:** none (repository operation only)

**Interfaces:** none.

- [ ] **Step 1: Add the GitHub remote**

```bash
git remote add origin https://github.com/ZuesCanal/ylx-landing-page
git remote -v
```

Expected: `origin` listed for both fetch and push.

- [ ] **Step 2: Push to `main`**

```bash
git push -u origin main
```

Expected: push succeeds and reports the new `main` branch tracking `origin/main`. If the push is rejected (e.g., the remote already has unrelated history, or returns a 404/permission error), stop and report the exact error back rather than force-pushing.

- [ ] **Step 3: Confirm the final state**

```bash
git log --oneline
git status
```

Expected: a clean working tree, `git status` reporting the local branch up to date with `origin/main`.
