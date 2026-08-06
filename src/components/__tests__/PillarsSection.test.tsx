import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PillarsSection } from "../PillarsSection";
import { pillars } from "@/data/pillars";

describe("PillarsSection", () => {
  it("renders all four pillar names and functions", () => {
    render(<PillarsSection />);
    for (const pillar of pillars) {
      expect(
        screen.getByRole("heading", { name: pillar.name })
      ).toBeInTheDocument();
      expect(screen.getByText(pillar.function)).toBeInTheDocument();
    }
  });
});
