import Property, { IProperty } from "@/models/Property";
import getImageUrl from "@/utils/lib";
import connectDB from "@/utils/mongoose";
import Image from "next/image";
import Link from "next/link";

async function getProperty() {
  await connectDB();
  try{
    return await Property.find({})
  } catch(err) {
    throw new Error('Failed to fetch data')
  }
}

export default async function PropertyPage() {
  const data = await getProperty()
  
  return (
    <section className="mb-4">
      <h2 className="flex justify-center mt-4 font-bold mb-4 text-3xl">Homes For Sale</h2>
      
      <div className="px-8 md:flex gap-x-8 gap-y-8">
      {
        data.map(async (property:Partial<IProperty>, key:number) => {
          const getImageSrc = property.images && property.images[0] ? await getImageUrl(property.images[0]) : '';
          return (
            <div key={key} className="max-w-sm rounded shadow-lg overflow-hidden">
              <Link href={`property/${property._id}`}>
                {
                  property.images && property.images[0] && (
                    <div>
                      <Image 
                        src={getImageSrc}
                        alt='Property Image'
                        width={500}
                        height={300}
                      />
                    </div>
                  )
                }
                <div className="px-6 py-4">
                  <h3 className="font-bold text-2xl">${property.price}</h3>
                  <p className="font-medium">
                    <span className="font-bold">{property?.bedroom}</span>&nbsp;bds | 
                    <span className="font-bold">&nbsp;{property?.bathroom}</span>&nbsp;ba |
                    <span className="font-bold">&nbsp;{property?.size}</span>&nbsp;
                  </p>
                  <h3 className="text-xl">{property.address}</h3>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}