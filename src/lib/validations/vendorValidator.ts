import { z } from "zod";

export const createVendorValidator = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password must not be more than 32 characters" }),
  password2: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password must not be more than 32 characters" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(32, { message: "Username must not be more than 32 characters" }),
  user_role: z.string(),
  phone: z
    .string()
    .min(11, { message: "Phone Number must be 11 characters" })
    .max(11, { message: "Phone Number must be 11 characters" }),
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 3 characters" })
    .max(32, { message: "First name must not be more than 32 characters" }),
  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 3 characters" })
    .max(32, { message: "Last name must not be more than 32 characters" }),
});

export const createVendorWalletValidator = z.object({
  vendorname: z.number(),
  wallet_type: z.string(),
});

export const fundVendorWalletValidator = z.object({
  amount: z.string(),
});

export const withdrawFromWalletValidator = z.object({
  vendorname: z.string(),
  wallet_type: z.string(),
});

export type CreateVendorSchema = z.infer<typeof createVendorValidator>;
export type CreateVendorWalletSchema = z.infer<
  typeof createVendorWalletValidator
>;
export type FundVendorWalletSchema = z.infer<typeof fundVendorWalletValidator>;
export type WithdrawFromWalletSchema = z.infer<
  typeof withdrawFromWalletValidator
>;
