import { describe, expect, it } from "vitest";
import { pillars } from "../pillars";

describe("pillars", () => {
  it("defines exactly the four Trace evidence outcomes in order", () => {
    expect(pillars.map((p) => p.name)).toEqual([
      "Transaction provenance",
      "Relationship mapping",
      "Exposure paths",
      "Decision-ready evidence",
    ]);
  });

  it("gives every pillar a function and workflow-fit description", () => {
    for (const pillar of pillars) {
      expect(pillar.function.length).toBeGreaterThan(0);
      expect(pillar.workflowFit.length).toBeGreaterThan(0);
    }
  });
});
