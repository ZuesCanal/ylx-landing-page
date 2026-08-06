import { describe, expect, it } from "vitest";
import { timeline } from "../timeline";

describe("timeline", () => {
  it("defines four milestones in chronological order", () => {
    expect(timeline).toHaveLength(4);
    expect(timeline[0].title).toBe("Research & Methodology");
    expect(timeline[3].title).toBe("Standardized Global Rating Framework");
  });
});
