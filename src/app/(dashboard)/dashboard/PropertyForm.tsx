'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { propertySchema } from "@/utils/validations/property";


type PropertyInputs = {
  address: string;
  price: string;
  bedroom?: string;
  bathroom?: string;
  features?: string;
  images?: any | null
  type?: string;
  size?: string;
  description?: string;
}

export default function PropertyForm(){
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting, isSubmitted } } = useForm<PropertyInputs>({
    defaultValues: {
      address: '',
      price: '',
      bedroom: '',
      bathroom: '',
      features: '',
      images: null,
      type: '',
      size: '',
      description: ''
    },
    resolver: zodResolver(propertySchema)
  });

  const onSubmit: SubmitHandler<PropertyInputs> = async (data: PropertyInputs) => {
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(data)) {
        if (key === 'images' && value) {
          for(let i=0; i < data.images.length; i++) {
            formData.append('images', data.images[i])
          };
        } else if (value) {
          formData.append(key, value);
        }
      }
      
      // Send To Backend
      const response = await fetch(`/api/property`, {
        method: 'POST',
        body: formData
      })
      const info = await response.json()
      reset()
    } catch(err){
      console.log(err)
      alert('An error occurred while submitting the form. Please try again later.')
    }
  }
  return (
    <section className="px-8 mt-6">
      <h2 className="text-center font-bold text-2xl">Add New Property</h2>
      {
        isSubmitted ? (
          <div className="flex justify-center items-center font-bold mb-4 text-3xl h-screen">Successful</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mb-3">
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

            <div className="w-full mb-3">
              <label htmlFor="price">Price</label>
              <input 
                id="price" 
                type="text" 
                placeholder="Price" 
                className="p-3 w-full border-2 rounded-lg" 
                {...register('price')}
                disabled={isSubmitting} 
              />
              {errors.price?.message && (
                <div>{errors.price?.message}</div>
              )}
            </div>

            <div className="md:flex gap-x-4 mb-3">
              <div className="w-full mb-3">
                <label htmlFor="bedroom">Bedroom</label>
                <input 
                  id="bedroom" 
                  type="text" 
                  placeholder="Bedroom" 
                  className="p-3 w-full border-2 rounded-lg" 
                  {...register('bedroom')}
                  disabled={isSubmitting} 
                />
                {errors.bedroom?.message && (
                  <div>{errors.bedroom?.message}</div>
                )}
              </div>

              <div className="w-full mb-3">
                <label htmlFor="bedroom">Bathroom</label>
                <input 
                  id="bathroom" 
                  type="text" 
                  placeholder="Bathroom" 
                  className="p-3 w-full border-2 rounded-lg" 
                  {...register('bathroom')}
                  disabled={isSubmitting} 
                />
                {errors.bathroom?.message && (
                  <div>{errors.bathroom?.message}</div>
                )}
              </div>
            </div>

            <div className="w-full mb-3">
              <label htmlFor="description">Description</label>
              <input 
                id="description" 
                type="text" 
                placeholder="Description" 
                className="p-3 w-full border-2 rounded-lg" 
                {...register('description')}
                disabled={isSubmitting} 
              />
              {errors.description?.message && (
                <div>{errors.description?.message}</div>
              )}
            </div>

            <div className="w-full mb-3">
              <label htmlFor="features">Features</label>
              <textarea 
                id="features" 
                placeholder="Features" 
                className="p-3 w-full border-2 rounded-lg" 
                {...register('features')}
                disabled={isSubmitting} 
              />
              {errors.features?.message && (
                <div>{errors.features?.message}</div>
              )}
            </div>

            <div className="md:flex gap-x-4 mb-3">
              <div className="w-full mb-3">
                <label htmlFor="type">Type</label>
                <input 
                  id="type" 
                  type="text" 
                  placeholder="Type e.g. House, apartment" 
                  className="p-3 w-full border-2 rounded-lg" 
                  {...register('type')}
                  disabled={isSubmitting} 
                />
                {errors.type?.message && (
                  <div>{errors.type?.message}</div>
                )}
              </div>

              <div className="w-full mb-3">
                <label htmlFor="size">Size</label>
                <input 
                  id="size" 
                  type="text" 
                  placeholder="Size e.g. 41sqft" 
                  className="p-3 w-full border-2 rounded-lg" 
                  {...register('size')}
                  disabled={isSubmitting} 
                />
                {errors.size?.message && (
                  <div>{errors.size?.message}</div>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="images">Images</label>
              <input id="images" 
                type="file" 
                multiple 
                className="p-3 w-full border-2 rounded-lg" 
                required {...register('images')} 
                disabled={isSubmitting}
              />
              {errors.images?.message && (
                <>{errors.images?.message}</>
              )}
            </div>

            <div className="flex justify-center mb-4">
              <button 
                className="capitalize rounded-lg bg-sky-300 text-lg p-4" 
                type="submit"
                disabled={isSubmitting}
              >
                SUBMIT
              </button>
            </div>
          </form>
        )
      }
    </section>
  )
}