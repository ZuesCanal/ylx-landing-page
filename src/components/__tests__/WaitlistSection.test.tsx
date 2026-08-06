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
