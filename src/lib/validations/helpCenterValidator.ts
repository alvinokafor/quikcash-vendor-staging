import { z } from "zod";

export const helpCenterValidator = z.object({
  title: z
    .string()
    .min(5, { message: "Title has to be more than 5 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be more than 10 characters" }),
});

export type HelpCenterSchema = z.infer<typeof helpCenterValidator>;
