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

  it("exposes a #talk-to-us anchor target with the heading and form", () => {
    const { container } = render(<WaitlistSection />);
    expect(container.querySelector("#talk-to-us")).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: /talk to us/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument();
  });
});
