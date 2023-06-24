import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.formData();
  try {
    if (!data.get('full_name') || !data.get('email') || !data.get('phone') || !data.get('address') || !data.get('zip_code') || !data.get('city') || !data.get('state') || !data.get('role') || !data.get('resume')) {
      throw new Error('Missing required fields');
    }
    const file: File | null = data.get('resume') as unknown as File
    if (!file) {
      return new Response(JSON.stringify({ message: 'File not found' }))
    }
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
      },
      tls: { rejectUnauthorized: false }
    });

    const message = {
      from: `"Shawn Property" <${process.env.GMAIL_USER}>`,
      to: "barrjasonjabar@gmail.com",
      subject: "Application from Shawn Site",
      text: `Application Detail:\n 
        Full Name: ${data.get('full_name')}\n
        Email: ${data.get('email')}\n
        Phone: ${data.get('phone')}\n
        Address: ${data.get('address')}\n
        Zip Code: ${data.get('zip_code')}\n
        City: ${data.get('city')}\n
        State: ${data.get('state')}\n
        Role: ${data.get('role')}\n
      `,
      attachments: [
        {
          filename: `${file.name}`,
          content: buffer
        },
      ]
    }
    await transporter.sendMail(message)
    return new Response(JSON.stringify({ message: 'Aplied' })) 
  } catch(err) {
    return new Response(JSON.stringify({ message: 'There is an error' })) 
  }
}