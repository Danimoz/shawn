import Property from "@/models/Property";
import connectDB from "@/utils/mongoose";
import { revalidatePath } from "next/cache";
import {UploadApiResponse, v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string, 
  api_key: process.env.CLOUDINARY_API_KEY as string, 
  api_secret: process.env.CLOUDINARY_API_SECRET as string 
});


connectDB();
export async function POST(req: Request) {
  const data = await req.formData();
  const { address, price, bedroom, bathroom, type, size, description, features } = Object.fromEntries(data.entries())
  
  const imageFiles =  data.getAll('images')
  const images: string[] = []

  for(const file of imageFiles){
    const bytes = await (file as File).arrayBuffer()
    const mime = (file as File).type
    const base64Data = Buffer.from(bytes).toString('base64');
    const fileUri = `data:${mime};base64,${base64Data}`;
    try {
      const res: UploadApiResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload(fileUri, { folder: 'shawn' }, (err, result) => {
          if (err) reject(err);
          if (result) resolve(result);
        })
      })
      images.push(res.secure_url)
    } catch(err){
      console.error(err)
      return new Response(JSON.stringify({ message: 'Could not upload image. Try again' }), { status:400 }) 
    }
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

    revalidatePath('/property')
    return new Response(JSON.stringify({ message: 'Added' }), { status:201 }) 
  } catch(err){
    console.error(err)
    return new Response(JSON.stringify({ message: 'Could not add this. Try again' }), { status:400 }) 
  }
}
