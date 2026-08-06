import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductPreviewSection } from "../ProductPreviewSection";

describe("ProductPreviewSection", () => {
  it("renders the product preview heading and screenshot", () => {
    render(<ProductPreviewSection />);
    expect(
      screen.getByRole("heading", { name: /see what you hold/i })
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/portfolio health check dashboard/i)
    ).toBeInTheDocument();
  });
});
