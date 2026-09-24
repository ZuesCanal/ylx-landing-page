export type TimelineMilestone = {
  title: string;
  description: string;
};

export const timeline: TimelineMilestone[] = [
  {
    title: "Detect the event",
    description:
      "Start from a transaction, address, asset movement, or counterparty requiring review.",
  },
  {
    title: "Map the relationships",
    description:
      "Resolve connected entities, accounts, contracts, assets, and transaction paths.",
  },
  {
    title: "Verify the evidence",
    description:
      "Corroborate the path against source-linked records and retain unresolved questions.",
  },
  {
    title: "Export the record",
    description:
      "Deliver a reviewable trail for research, compliance, risk, and investment decisions.",
  },
];
