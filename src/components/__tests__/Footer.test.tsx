import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders the disclaimer and current-year copyright line", () => {
    render(<Footer />);
    expect(screen.getByText(/in active development/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${new Date().getFullYear()} YLX`))
    ).toBeInTheDocument();
  });
});
