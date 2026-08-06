import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimelineSection } from "../TimelineSection";
import { timeline } from "@/data/timeline";

describe("TimelineSection", () => {
  it("renders all four milestone titles in order", () => {
    render(<TimelineSection />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.map((h) => h.textContent)).toEqual(
      timeline.map((m) => m.title)
    );
  });
});
