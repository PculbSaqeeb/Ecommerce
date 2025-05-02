import { z } from "zod";


const RegisterSchema = z.object({
  name: z.string().nonempty("Name is required").regex(/^[A-Za-z\s]+$/, "Only letters and spaces allowed"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  phoneNumber: z.string().nonempty("Phone number is required").regex(/^\d{10}$/, "Phone number must be 10 digits"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase, and a number"
    ),
  // address: z.string().min(5, "Please enter the address"),
});


export default RegisterSchema;
