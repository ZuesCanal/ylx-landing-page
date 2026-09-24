import { Fingerprint, GitBranch, FileCheck2, Network, type LucideIcon } from "lucide-react";

export type Pillar = {
  name: string;
  icon: LucideIcon;
  function: string;
  workflowFit: string;
};

export const pillars: Pillar[] = [
  {
    name: "Transaction provenance",
    icon: Fingerprint,
    function:
      "Reconstruct where value originated, how it moved, and where it settled.",
    workflowFit:
      "Source references remain attached to every event in the path.",
  },
  {
    name: "Relationship mapping",
    icon: Network,
    function: "Connect entities, accounts, counterparties, protocols, and assets.",
    workflowFit:
      "Move from an isolated address to the wider exposure context.",
  },
  {
    name: "Exposure paths",
    icon: GitBranch,
    function:
      "Surface direct and indirect routes through contracts and venues.",
    workflowFit:
      "Separate observed movement from inferred relationships.",
  },
  {
    name: "Decision-ready evidence",
    icon: FileCheck2,
    function:
      "Package findings, timestamps, sources, and open questions into one record.",
    workflowFit:
      "Give risk, compliance, and investment teams the same reviewable context.",
  },
];
