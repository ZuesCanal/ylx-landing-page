import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WaitlistForm } from "../WaitlistForm";

describe("WaitlistForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true } as Response));
  });

  it("shows validation errors when submitted empty", async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    await user.click(
      screen.getByRole("button", { name: /request whitepaper/i })
    );

    expect(await screen.findByText(/enter your full name/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a valid work email/i)).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("submits and shows a success message with valid input", async () => {
    const user = userEvent.setup();
    render(<WaitlistForm />);

    await user.type(screen.getByLabelText(/^name$/i), "Jordan Blake");
    await user.type(screen.getByLabelText(/work email/i), "jordan@fund.com");
    await user.type(screen.getByLabelText(/^organization$/i), "Blake Capital");
    await user.selectOptions(
      screen.getByLabelText(/organization type/i),
      "Fund"
    );
    await user.click(
      screen.getByRole("button", { name: /request whitepaper/i })
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(await screen.findByRole("status")).toHaveTextContent(
      /request received/i
    );
  });
});
