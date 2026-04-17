import { NextResponse } from "next/server";
import { sendAutoReply } from "@/lib/sendEmail";
import { transporter } from "@/lib/mailer";



export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { studentName, parentName, email, phone, grade, message } = body
    // console.log("form admission form ", body)      //debug


    // validate phone
    if(!/^\d{10}$/.test(phone)){
      return NextResponse.json({
        success : false,
        error : "Phone number must be 10 digits"
      } , {status : 400})
    }

    // Validate input
    if (!studentName || !parentName || !email || !phone || !grade) {
      return NextResponse.json({
        success: false,
        error: "All required fields must be filled",
      });
    }




    // Send to school
    await transporter.sendMail({
      from: `"Admission Form" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Admission Application for Grade - ${grade}`,

      text: `
        Student Name: ${studentName}
        Parent Name: ${parentName}
        Email: ${email}
        Phone: ${phone}
        Grade: ${grade}

        Message:
        ${message || "N/A"}
        `,

      replyTo: email,   
    });

    // Auto reply to user
    await sendAutoReply(email, parentName);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}
