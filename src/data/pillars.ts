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
