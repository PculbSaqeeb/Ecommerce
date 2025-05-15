import { z } from "zod";

const ForgotPasswordSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  
});

export default ForgotPasswordSchema;
