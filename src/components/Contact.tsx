'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from "@/utils/validations/contact";

type Inputs = {
  email: string
  first_name: string
  last_name: string
  phone: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting, isSubmitted } } = useForm<Inputs>({
    defaultValues: {
      email: '',
      first_name: '',
      last_name: '',
      phone: ''
    },
    resolver: zodResolver(contactSchema)
  })
  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    try {
      const response = await fetch(`/api/mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
      })
      const info = await response.json()
      reset()
    } catch(err) {
      console.log(err)
      alert('An error occurred while submitting the form. Please try again later.')
    }
  }

  return (
    <div id="contact" className="mt-4 px-8 mb-4">
      <h3 className="capitalize flex justify-center font-bold text-2xl mb-4">GET IN TOUCH WITH US</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex md:gap-x-4">
          <div className="w-full">
            <label htmlFor="first_name" className="w-full">First Name</label>
            <input
              id="first_name" 
              type="text"
              disabled={isSubmitting}  
              className="p-3 w-full rounded-lg border-2 mb-3" 
              placeholder="First Name"
              {...register('first_name')}
              required
            />
            {errors.first_name?.message && (
              <div>{errors.first_name?.message}</div>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="last_name" className="w-full">Last Name</label>
            <input
              id="last_name" 
              type="text"
              disabled={isSubmitting}  
              className="p-3 w-full rounded-lg border-2 mb-3" 
              placeholder="Last Name"
              {...register('last_name')}
              required
            />
            {errors.last_name?.message && (
              <div>{errors.last_name?.message}</div>
            )}
          </div>
        </div>

        <div className="md:flex gap-x-4">
          <div className="w-full">
            <label htmlFor="email">Email</label>
            <input
              id="email" 
              type="email"
              disabled={isSubmitting}  
              className="p-3 w-full rounded-lg border-2 mb-3" 
              placeholder="Email"
              {...register('email')}
              required
            />
            {errors.email?.message && (
              <div>{errors.email?.message}</div>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone" 
              type="text"
              disabled={isSubmitting}
              className="p-3 w-full rounded-lg border-2 mb-3"
              {...register('phone')} 
              placeholder="Phone Number"
            />
            {errors.phone?.message && (
              <div>{errors.phone?.message}</div>
            )}
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            disabled={isSubmitting} 
            className="p-3 w-full rounded-lg border-2 mb-3" 
            {...register('message')} 
            placeholder="Message"
          />
          {errors.phone?.message && (
              <div>{errors.message?.message}</div>
            )}
        </div>

        <div className="flex justify-center">
          <button 
            className="capitalize rounded-lg bg-sky-300 text-lg p-3" 
            type="submit"
            disabled={isSubmitting}
          >
            Drop a message
          </button>
        </div>
      </form>
      {
        isSubmitted && (
          <p className="text-venter mt-6 font-bold text-xl">
            Message Submitted Successfully
          </p>
        )
      }
    </div>
  )   
}