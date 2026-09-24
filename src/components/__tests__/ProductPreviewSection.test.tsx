import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductPreviewSection } from "../ProductPreviewSection";

describe("ProductPreviewSection", () => {
  it("renders the Trace investigation surface", () => {
    render(<ProductPreviewSection />);
    expect(
      screen.getByRole("heading", { name: /follow the evidence/i })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/trace investigation interface/i)
    ).toBeInTheDocument();
  });
});
