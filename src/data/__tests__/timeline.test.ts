import { describe, expect, it } from "vitest";
import { timeline } from "../timeline";

describe("timeline", () => {
  it("defines four investigation steps in order", () => {
    expect(timeline).toHaveLength(4);
    expect(timeline[0].title).toBe("Detect the event");
    expect(timeline[3].title).toBe("Export the record");
  });
});
