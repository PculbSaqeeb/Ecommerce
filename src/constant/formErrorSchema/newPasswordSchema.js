import { z } from "zod";

const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    "Password must contain uppercase, lowercase, and a number"
  )

const NewPasswordSchema = z
  .object({

    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.newPassword === data.confirm_Password, {
    message: "Passwords do not match",
    path: ["confirm_Password"],
  });

export default NewPasswordSchema;