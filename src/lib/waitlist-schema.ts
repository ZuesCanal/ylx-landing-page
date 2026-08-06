import { z } from "zod";

export const organizationTypes = [
  "Institutional Investor",
  "Family Office",
  "Fund",
  "DeFi Protocol",
  "Other",
] as const;

export const waitlistSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid work email"),
  organization: z.string().trim().min(2, "Enter your organization name"),
  organizationType: z.enum(organizationTypes, {
    error: () => "Select an organization type",
  }),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
