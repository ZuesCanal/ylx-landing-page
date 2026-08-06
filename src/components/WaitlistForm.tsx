"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  organizationTypes,
  waitlistSchema,
  type WaitlistFormValues,
} from "@/lib/waitlist-schema";

// TODO: replace with the real Formspree form ID before deploying.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

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
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Formspree request failed");
      setSubmitState("success");
      reset();
    } catch {
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <p role="status" className="font-medium text-navy">
        Request received. Our team will follow up with the whitepaper, pitch
        deck, and pilot access details.
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
          {...register("name")}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-charcoal focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal">
          Work Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-charcoal focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-charcoal">
          Organization
        </label>
        <input
          id="organization"
          type="text"
          {...register("organization")}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-charcoal focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
        />
        {errors.organization && (
          <p className="mt-1 text-sm text-red-600">
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
          {...register("organizationType")}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-charcoal focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
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
          <p className="mt-1 text-sm text-red-600">
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
        className="mt-2 rounded-full bg-navy px-4 py-2 font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "submitting"
          ? "Submitting…"
          : "Request Whitepaper & Pilot Access"}
      </button>
    </form>
  );
}
