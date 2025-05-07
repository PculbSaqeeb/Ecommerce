import { z } from "zod";

const VerfiyOTPSchema = z.object({
  otp: z.string().max(6)
});

export default VerfiyOTPSchema;
