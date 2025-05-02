import { z } from "zod";

const VerfiyOTPSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, "OTP must be exactly 6 digits"),
});

export default VerfiyOTPSchema;
