import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Nav } from "../Nav";

describe("Nav", () => {
  it("renders the wordmark and a CTA linking to the waitlist section", () => {
    render(<Nav />);
    expect(screen.getByAltText("YLX")).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /request access/i });
    expect(cta).toHaveAttribute("href", "#waitlist");
  });
});
