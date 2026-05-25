"use server";

import { sendAutoReply } from "@/lib/sendEmail";
import { transporter } from "@/lib/mailer";

type AdmissionFormData = {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  grade: string;
  message?: string;
};

export async function submitAdmissionForm(data: AdmissionFormData) {
  try {
    // console.log("backend admission from---", data)
    const { studentName, parentName, email, phone, grade, message } = data;

    // Validate required fields
    if (!parentName || !email || !phone) {
      return {
        success: false,
        error: "All required fields must be filled",
      };
    }

    // Validate phone (10 digits)
    if (!/^\d{10}$/.test(phone)) {
      return {
        success: false,
        error: "Phone number must be 10 digits",
      };
    }

    // Send email to school
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

    // Auto reply
    await sendAutoReply(email, parentName);

    return {
      success: true,
      message: "Admission form submitted successfully",
    };
  } catch (error) {
    console.error("Admission Form Error:", error);
    return {
      success: false,
      error: "Something went wrong",
    };
  }
}