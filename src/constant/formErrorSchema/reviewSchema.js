import { z } from "zod";

export const reviewSchema = z.object({
  rating: z
    .number({
      required_error: "Rating is required",
      invalid_type_error: "Rating must be a number",
    })
    .min(1, "Rating must be at least 1 star")
    .max(5, "Rating can be maximum 5 stars"),

  comment: z
    .string({
      required_error: "Comment is required",
    })
    .min(10, "Comment must be at least 10 characters"),

//   image: z
//     .any()
//     .refine(
//       (file) => !file || file instanceof File,
//       "Image must be a file"
//     )
//     .refine(
//       (file) => !file || file.size <= 2 * 1024 * 1024,
//       "Image must be less than 2MB"
//     )
});
