

import { transporter } from "./mailer";




// Send message to school mail fuction
export async function sendEmailToScl(data: {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}) {
  const { name, email, phone, subject, message } = data;

  return transporter.sendMail({
    from: `"School Website" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: subject || "New Contact Form Message",

    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,

    html: `
      <h2>New Contact Form Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Subject:</b> ${subject || "N/A"}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,

    replyTo: email, //  reply goes to user
  });
}






// Auto-reply to user function
export async function sendAutoReply(email: string, name: string) {
  return transporter.sendMail({
    from: `"Standard Sec. Boarding School" <${process.env.MAIL_USER}>`,
    to: email,
    subject: "We received your message",

    text: `
      Dear ${name},

      Thank you for contacting us.
      We have received your message and will contact you soon.

      Regards,
      Standard Sec. Boarding School
      standardboarding.com
      025 590085
      9812363723
    `,

    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto;">
      
      <p>Dear <strong>${name}</strong>,</p>
      
      <p>Thank you for contacting Standard Sec. Boarding School.</p>
      <p>We have received your email and will contact you soon.</p>
      
      <br/>
      
      <p>
        Best regards,<br/>
        <strong>Standard Secondary Boarding School</strong><br/>
        📞 025-590085<br/>
        📱 9812 363723<br/>
        🌐 www.standardboarding.com
      </p>
      
      <!-- Logo -->
      <div style="margin-top: 16px; text-align: left;">
        <img 
          src="https://res.cloudinary.com/dpraq0j6y/image/upload/v1776400420/SchoolLogo_aleh3u.png" 
          alt="Standard Secondary Boarding School Logo" 
          width="90"
          style="display: block;"
        />
      </div>
      
    </div>
  `
  });
}