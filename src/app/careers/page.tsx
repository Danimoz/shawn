'use client';

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { careerSchema } from "@/utils/validations/career";


type CareerInputs = {
  full_name: string
  email: string
  phone: string
  zip_code: string
  address: string
  city: string
  state: string
  resume: FileList | null
  role: string
}

export default function Careers(){
  const roles: string[] = ['Customer Service', 'Office Manager', 'ICT & Telecomms Engineer', 'Receptionist', 'Payroll/Financial Accountant', 'Market Researcher']

  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting, isSubmitted } } = useForm<CareerInputs>({
    defaultValues: {
      email: '',
      full_name: '',
      phone: '',
      zip_code: '',
      address: '',
      city: '',
      state: '',
      role: '',
      resume: null
    },
    resolver: zodResolver(careerSchema)
  });

  const onSubmit: SubmitHandler<CareerInputs> = async (data: CareerInputs) => {
    try {
      const formData = new FormData();
      if (data.resume && data.resume.length > 0) {
        formData.append('resume', data.resume[0]);
      }
      formData.append('full_name', data.full_name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('zip_code', data.zip_code);
      formData.append('address', data.address);
      formData.append('city', data.city);
      formData.append('state', data.state);
      formData.append('role', data.role);

      const response = await fetch(`/api/career`, {
        method: 'POST',
        body: formData
      })
      const info = await response.json()
      reset()
    } catch(err) {
      console.log(err)
      alert('An error occurred while submitting the form. Please try again later.')
    }
  }

  return (
    <div>
      <h3 className="text-black text-3xl mt-6 px-8 mb-3 text-center">We are Hiring!!</h3>
      <div className="relative h-[75vh]">
        <Image 
          fill={true}
          alt='Hiring'
          src='/hiring.jpg'
          className="careerImg"
        />
      </div>

      <div className="px-8 text-center">
        <h3 className="text-center text-3xl font-bold mt-4">VACANCIES</h3>
        <p className="mb-3">We're hiring for the following</p>

        <ul className="flex gap-x-9 justify-center list-disc mb-6">
          {roles.map((role:string, idx:number) => (
            <li key={idx}>{role}</li>
          ))}
        </ul>

        <p> Fill the form to begin your application.</p>
      </div>

      <div className="px-8 mt-6">        
        {
          isSubmitted ? (
            <div className="flex justify-center font-bold mb-4 text-3xl">You've applied Successfully</div>
          ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full mb-3">
                  <label htmlFor="full_name">Full Name</label>
                  <input 
                    id="full_name" 
                    type="text" 
                    placeholder="Full Name" 
                    className="p-3 w-full border-2 rounded-lg" 
                    {...register('full_name')}
                    disabled={isSubmitting} 
                  />
                  {errors.full_name?.message && (
                    <div>{errors.full_name?.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="Email" 
                    className="p-3 w-full border-2 rounded-lg" 
                    {...register('email')}
                    disabled={isSubmitting}
                  />
                  {errors.email?.message && (
                    <div>{errors.email?.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    id="phone" 
                    type="text" 
                    placeholder="Phone Number" 
                    className="p-3 w-full border-2 rounded-lg" 
                    {...register('phone')}
                    disabled={isSubmitting}
                  />
                  {errors.phone?.message && (
                    <div>{errors.phone?.message}</div>
                  )}
                </div>

                <div className="md:flex gap-x-4 mb-3">
                  <div className="w-full">
                    <label htmlFor="address">Address</label>
                    <input 
                      id="address" 
                      type="text" 
                      placeholder="Address" 
                      className="p-3 w-full border-2 rounded-lg" 
                      {...register('address')}
                      disabled={isSubmitting}
                    />
                    {errors.address?.message && (
                      <div>{errors.address?.message}</div>
                    )}
                  </div>

                  <div className="w-full">
                    <label htmlFor="city">City</label>
                    <input 
                      id="city" 
                      type="text" 
                      placeholder="City" 
                      className="p-3 w-full border-2 rounded-lg" 
                      {...register('city')}
                      disabled={isSubmitting}
                    />
                    {errors.city?.message && (
                      <div>{errors.city?.message}</div>
                    )}
                  </div>

                  <div className="w-full">
                    <label htmlFor="state">State</label>
                    <input 
                      id="state" 
                      type="text" 
                      placeholder="State" 
                      className="p-3 w-full border-2 rounded-lg" 
                      {...register('state')}
                      disabled={isSubmitting}
                    />
                    {errors.state?.message && (
                        <div>{errors.state?.message}</div>
                      )}
                  </div>

                  <div className="w-full">
                    <label htmlFor="zip_code">ZIP</label>
                    <input 
                      id="zip_code" 
                      type="text" 
                      placeholder="ZIP" 
                      className="p-3 w-full border-2 rounded-lg" 
                      {...register('zip_code')}
                      disabled={isSubmitting}
                    />
                    {errors.zip_code?.message && (
                      <div>{errors.zip_code?.message}</div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="resume">Resume</label>
                  <input id="resume" type="file" className="p-3 w-full border-2 rounded-lg" required {...register('resume')} disabled={isSubmitting}/>
                  {errors.resume?.message && (
                    <div>{errors.resume?.message}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="role">Role</label>
                  <select className="w-full p-3 border-2 rounded-lg" {...register('role')} disabled={isSubmitting} defaultValue={'Select Role'}>
                    {roles.map((role:string, idx:number) => (
                      <option key={idx}>{role}</option>
                    ))}
                  </select>
                  {errors.role?.message && (
                    <div>{errors.role?.message}</div>
                  )}
                </div>

                <div className="flex justify-center mb-4">
                  <button 
                    className="capitalize rounded-lg bg-sky-300 text-lg p-4" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Apply
                  </button>
                </div>
              </form>
          )
        }
      </div>
    </div>
  );
}