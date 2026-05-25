// app/actions/contact.actions.ts

"use server";

import { sendEmailToScl, sendAutoReply } from "@/lib/sendEmail";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
};

export async function submitContactForm(data: ContactFormData) {
  try {
    // console.log(data)
    const { name, email, phone, subject, message } = data;

    // Validation
    if (!name || !email || !phone || !message) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    // Send emails in parallel
    await Promise.all([
      sendEmailToScl({
        name,
        email,
        phone,
        subject,
        message,
      }),

      sendAutoReply(email, name),
    ]);

    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error("Contact Form Error:", error);

    return {
      success: false,
      error: "Something went wrong, server error",
    };
  }
}