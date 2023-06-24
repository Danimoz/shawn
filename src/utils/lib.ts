import { fileTypeFromBuffer } from "file-type";

export default async function getImageUrl(data:Buffer){
  // Get the MIMEtype from the buffer
  const mimeInfo = await fileTypeFromBuffer(Buffer.from(data))
  const mimeType = mimeInfo ? mimeInfo.mime: 'image/jpg'

  // Convert the buffer to a base64 string
  const base64Image = Buffer.from(data).toString('base64')
  const imageUrl = `data:${mimeType};base64,${base64Image}`
  return imageUrl
}