import Property from "@/models/Property";
import connectDB from "@/utils/mongoose";

connectDB();
export async function POST(req: Request) {
  const data = await req.formData();
  const { address, price, bedroom, bathroom, type, size, description, features } = Object.fromEntries(data.entries())
  
  const imageFiles =  data.getAll('images')
  const images: Buffer[] = []
  
  for(const file of imageFiles){
    const bytes = await (file as File).arrayBuffer()
    const buffer = Buffer.from(bytes)
    images.push(buffer)
  }
  
  try {
    await Property.create({
      address, 
      price, 
      bedroom: Number(bedroom), 
      bathroom: Number(bathroom), 
      type, 
      size, 
      description, 
      features, 
      images
    })
    return new Response(JSON.stringify({ message: 'Added' }), { status:201 }) 
  } catch(err){
    console.error(err)
    return new Response(JSON.stringify({ message: 'Could not add this. Try again' }), { status:400 }) 
  }
}


export async function GET(req: Request){
  try {
    const property = await Property.find({})
    return new Response(JSON.stringify({ data: property }), { status:200 }) 
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Could not add this. Try again' }), { status:400 }) 
  }
}
