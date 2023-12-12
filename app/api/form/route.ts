import { NextResponse, type NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { email, fullName,  address, phoneNumber,position,otherPosition,employmentType,driverLicense,firstAidCPR,availability,desiredHours,restrictions
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
    subject: `Email From Survey Form`,
    text:`Hello,

    My name is ${fullName}, and I'm interested in joining your organization. I've provided the following information:
    
    Email: ${email}
    Full Name: ${fullName}
    Phone: ${phoneNumber}
    Desired Position: ${position}
    If I chose 'Other' in positions, I'm interested in: ${otherPosition}
    Type of Employment Desired: ${employmentType}
    Driver's License and Reliable Transportation: ${driverLicense}
    First Aid/CPR Experience: ${firstAidCPR}
    Availability: ${availability}
    Desired Hours: ${desiredHours}
    Restrictions: ${restrictions}
    Address: ${address}
    I've submitted this information through a form on your website.
    
    Thank you for considering my application.
    
    Best regards,
    
    ${fullName}
        
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