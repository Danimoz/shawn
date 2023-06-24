import Property from "@/models/Property";
import getImageUrl from "@/utils/lib";
import connectDB from "@/utils/mongoose";
import Image from "next/image";

async function getProperty(propertyId: string){
  await connectDB();
  try{
    return await Property.findById(propertyId);
  } catch(err){
    throw new Error('Wrong Id details')
  }
}

interface PropertyPageProps {
  params: { Id: string }
}

export default async function PropertyPage({ params }: PropertyPageProps){
  const property = await getProperty(params.Id)
  
  return (
    <section>
      <div className="px-8 grid grid-cols-2 gap-4">
        <div className="overflow-y-scroll">
          {
            property.images.map(async (image:Buffer, key:number) => {
              const getImageSrc = await getImageUrl(image);
              return (
                <div key={key} className="w-full">
                  <Image 
                    alt='Property'
                    src={getImageSrc}
                    width={750}
                    height={500}
                  />
                </div>
            )}
          )}
        </div>

        <div className="w-full mt-8">
          <div>
            <h2 className="text-3xl font-bold">${property.price}</h2><br />
            <p className="font-medium text-xl">
              <span className="font-bold">{property?.bedroom}</span>&nbsp;bds |
              <span className="font-bold">&nbsp;{property?.bathroom}</span>&nbsp;ba |
              <span className="font-bold">&nbsp;{property?.size}</span>&nbsp;
            </p>
            <br />
            <h3 className="text-2xl">{property.address}</h3><br />

            <h3 className="text-xl">{property?.type}</h3><br />
            {
              property?.description && (
                <div>
                  <h2 className="text-xl font-bold">Description</h2>
                  <p className="text-xl">${property.description}</p>
                </div>
              )
            }

            {
              property?.features && (
                <div>
                  <h2 className="text-xl font-bold">Features</h2>
                  <p className="text-xl">${property.features}</p>
                </div>
              )
            }

          </div>
        </div>
      </div>
    </section>
  )
}