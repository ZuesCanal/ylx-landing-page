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

  it("returns custom error message for invalid organization type", () => {
    const result = waitlistSchema.safeParse({
      name: "Jordan Blake",
      email: "jordan@fund.com",
      organization: "Blake Capital",
      organizationType: "Hedge Fund",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const orgTypeError = result.error.issues.find(
        (issue) => issue.path[0] === "organizationType"
      );
      expect(orgTypeError?.message).toBe("Select an organization type");
    }
  });
});
