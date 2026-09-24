"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  organizationTypes,
  waitlistSchema,
  type WaitlistFormValues,
} from "@/lib/waitlist-schema";

// FormSubmit delivers each submission straight to these inboxes.
// Each address must click the one-time FormSubmit activation email once.
const RECIPIENTS = ["doctorzeus2013@gmail.com", "neale.java@gmail.com"];

type SubmitState = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
  });

  async function onSubmit(values: WaitlistFormValues) {
    setSubmitState("submitting");
    try {
      const payload = {
        Name: values.name,
        "Work Email": values.email,
        Organization: values.organization,
        "Organization Type": values.organizationType,
        _subject: `Refrnce access request — ${values.organization}`,
        _template: "table",
        _captcha: "false",
      };

      const results = await Promise.allSettled(
        RECIPIENTS.map((recipient) =>
          fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }),
        ),
      );

      const delivered = results.some(
        (result) => result.status === "fulfilled" && result.value.ok,
      );
      if (!delivered) throw new Error("Submission failed");
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <p role="status" className="font-medium text-ink">
        Request received. Our team will follow up with the Trace briefing and pilot access details.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal">
          Name
        </label>
        <input
          id="name"
          type="text"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
          className="mt-1 w-full rounded border border-rule bg-canvas px-3 py-2.5 text-ink focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal">
          Work Email
        </label>
        <input
          id="email"
          type="email"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
          className="mt-1 w-full rounded border border-rule bg-canvas px-3 py-2.5 text-ink focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-charcoal">
          Organization
        </label>
        <input
          id="organization"
          type="text"
          aria-invalid={errors.organization ? "true" : "false"}
          aria-describedby={errors.organization ? "organization-error" : undefined}
          {...register("organization")}
          className="mt-1 w-full rounded border border-rule bg-canvas px-3 py-2.5 text-ink focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
        />
        {errors.organization && (
          <p id="organization-error" className="mt-1 text-sm text-red-600">
            {errors.organization.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="organizationType"
          className="block text-sm font-medium text-charcoal"
        >
          Organization Type
        </label>
        <select
          id="organizationType"
          defaultValue=""
          aria-invalid={errors.organizationType ? "true" : "false"}
          aria-describedby={
            errors.organizationType ? "organizationType-error" : undefined
          }
          {...register("organizationType")}
          className="mt-1 w-full rounded border border-rule bg-canvas px-3 py-2.5 text-ink focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink"
        >
          <option value="" disabled>
            Select one
          </option>
          {organizationTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.organizationType && (
          <p id="organizationType-error" className="mt-1 text-sm text-red-600">
            {errors.organizationType.message}
          </p>
        )}
      </div>

      {submitState === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Something went wrong submitting your request. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === "submitting"}
        className="mt-2 rounded bg-ink px-4 py-3 font-medium text-canvas transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "submitting"
          ? "Submitting…"
          : "Request Trace Access"}
      </button>
    </form>
  );
}
