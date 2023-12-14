import { NextResponse, type NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  const { email, name, message, subject } = await request.json()

  // Define the custom "titan" service settings
  const titanService = {
    host: "smtp.titan.email",
    port: 465,
    secure: true,
  }

  // Create the Nodemailer transporter with custom service settings
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "thecreativearchivalproject@gmail.com",
      pass: "#CAP2023",
    },
  })

  const mailOptions = {
    from: "thecreativearchivalproject@gmail.com",
    to: "thecreativearchivalproject@gmail.com",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `${subject} Message from ${name} (${email})`,
    text: message,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: any): any {
        if (!err) {
          resolve("Email sent")
        } else {
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ message: "Email sent" })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
