import { z } from "zod";

const VerfiyOTPSchema = z.object({
  otp: z.string().max(6, "OTP must be 6 digit").nonempty("OTP is required")
});

export default VerfiyOTPSchema;
