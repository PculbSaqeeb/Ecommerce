import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z
    .string()
    .nonempty("Password is required")
});

export default LoginSchema;
