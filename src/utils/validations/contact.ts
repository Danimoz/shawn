import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email({ message: 'An email is required' }).trim(),
  first_name: z.string().min(2, { message: 'A first name is required'}).max(100).trim(),
  last_name: z.string().min(2, { message: 'A last name is required'}).max(100).trim(),
  phone: z.string().trim().min(10, {message: 'Minimum of 10 Digits'}).optional(),
  message: z.string().nonempty({ message: 'Message cannot be blank' })
})