import { z } from "zod";

export const loginSchema = z.object({
  mobile: z
    .string()
    .min(10, "Enter valid mobile number")
    .max(10),
});

export type LoginForm = z.infer<typeof loginSchema>;