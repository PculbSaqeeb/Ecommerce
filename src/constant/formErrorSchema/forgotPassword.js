import { z } from "zod";

const ForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email format"),
  
});

export default ForgotPasswordSchema;
