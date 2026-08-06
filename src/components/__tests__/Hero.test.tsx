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

  it("shows the covered-universe coverage stats", () => {
    render(<Hero />);
    expect(screen.getByText("700+")).toBeInTheDocument();
    expect(
      screen.getByText(/Covered Universe/i)
    ).toBeInTheDocument();
    expect(screen.getByText("$1T+")).toBeInTheDocument();
    expect(screen.getByText(/Covered TVL/i)).toBeInTheDocument();
  });
});
