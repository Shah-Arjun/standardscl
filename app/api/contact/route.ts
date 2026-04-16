//  send email to school api for contact form in /contact page   or in /admission page


import { NextResponse } from "next/server";
import { sendEmailToScl, sendAutoReply } from "@/lib/sendEmail";




export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json({
        success: false,
        error: "All fields are required",
      });
    }

    // Send both emails in parallel (faster) to school , and auto reply
    await Promise.all([
      sendEmailToScl({ name, email, phone, subject, message }),
      sendAutoReply(email, name),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    // console.error("Email Error:", error);
    return NextResponse.json({
      success: false,
      error: "Something went wrong, server error",
    });
  }
}