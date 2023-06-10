import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json()
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    },
    tls: { rejectUnauthorized: false }
  });

  try {
    await transporter.sendMail({
      from: `"Shawn Property" <${process.env.GMAIL_USER}>`,
      to: "barrjasonjabar@gmail.com",
      subject: "Contact from Shawn Site",
      text: `Contact Detail:\n 
        First Name: ${data.data.first_name}\n
        Last Name: ${data.data.last_name}\n
        Email: ${data.data.email}\n
        Phone: ${data.data.phone}
      `
    })
    return new Response(JSON.stringify({message: 'Successful'}), { status: 200 })
  } catch(err){
    console.log(err)
    return new Response(JSON.stringify({message: 'Mail not sent'}), { status: 400 })
  }  
}
