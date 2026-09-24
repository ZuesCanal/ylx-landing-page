import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";

describe("Hero", () => {
  it("leads with Trace-first positioning", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /context before action/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/source-linked evidence/i)
    ).toBeInTheDocument();
  });

  it("links its CTA to the waitlist section", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: /explore trace/i });
    expect(cta).toHaveAttribute("href", "#trace");
    expect(screen.getByRole("link", { name: /talk to us/i })).toHaveAttribute(
      "href",
      "#talk-to-us",
    );
  });

  it("shows the connected evidence system", () => {
    render(<Hero />);
    expect(screen.getByText("Refrnce Trace")).toBeInTheDocument();
    expect(screen.getByText("Audit record")).toBeInTheDocument();
  });
});
