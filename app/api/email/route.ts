import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { email, fullName, phone, date,addressStreet,addressCity,province, country,available
} = await request.json();

  // Define the custom "titan" service settings
  const titanService = {
    host: 'smtp.titan.email',
    port: 465,
    secure: true,
  };

  // Create the Nodemailer transporter with custom service settings
  const transport = nodemailer.createTransport({
    ...titanService,
    auth: {
      user: 'info@maplestaffconnect.ca',
      pass: 'maplestaffconnect12@M',
    },
  });

  const mailOptions = {
    from: 'info@maplestaffconnect.ca',
    to: 'info@maplestaffconnect.ca',
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${fullName} (${email})`,
    text:`Hello my name is ${fullName} i would like to join your organization my data is a s follows email ${email} fullName ${fullName}, 
    phone ${phone}, 
    date ${date},
    streetAddrss ${addressStreet},
    city ${addressCity},
    province ${province}, 
    country ${country},
    availability ${available} }
    `, 
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err:any):any {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}