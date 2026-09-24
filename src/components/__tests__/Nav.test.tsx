import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Nav } from "../Nav";

describe("Nav", () => {
  it("renders the wordmark and a CTA linking to the contact form", () => {
    render(<Nav />);
    expect(screen.getByAltText("Refrnce")).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /talk to us/i });
    expect(cta).toHaveAttribute("href", "#talk-to-us");
  });
});
