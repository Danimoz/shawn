import { z } from "zod";

export const careerSchema = z.object({
  email: z.string().email({ message: 'An email is required' }).trim(),
  full_name: z.string().min(2, { message: 'A full name is required'}).max(100).trim(),
  phone: z.string().trim().min(10, {message: 'Minimum of 10 Digits'}),
  address: z.string().min(2, { message: 'Address required'}).max(100).trim(),
  city: z.string().min(2, { message: 'City required'}).max(100).trim(),
  state: z.string().min(2, { message: 'State required'}).max(100).trim(),
  zip_code: z.string().min(2, { message: 'Zip required'}).max(6).trim(),
  resume: z.any().refine((file: File) => file?.length !== 0, "File is required"),
  role: z.string().nonempty().refine((value) => value !== 'Select Role', {
    message: 'Please select a valid role'
  })
})