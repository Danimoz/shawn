import { z } from "zod";

export const propertySchema = z.object({
  address: z.string().min(3, { message: 'Minimum of 3 Characters'}),
  bedroom: z.string().optional(),
  bathroom: z.string().optional(),
  price: z.string(),
  features: z.string().optional(),
  description: z.string().optional(),
  images: z.any(),
  type: z.string().optional(),
  size: z.string().optional()
});