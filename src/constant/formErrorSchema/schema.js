import { z } from "zod";

const RegisterSchema = z
  .object({
    name: z
      .string()
      .max(50,"Name should be at most 50 characters long.")
      .nonempty("Name is required")
      .regex(/^[A-Za-z\s]+$/, "Only letters and spaces allowed"),
      email: z
      .string()
      .nonempty("Email is required")
      .regex(/^\S+@\S+\.\S+$/, "Invalid email format"),
    phoneNumber: z
      .string()
      .nonempty("Phone number is required")
      .max("Must be 10 digit")
      .regex(/^\d{10}$/, "Phone number must be 10 digits"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain uppercase, lowercase, and a number"
      ),
    confirmPassword: z.string().nonempty("Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default RegisterSchema;
