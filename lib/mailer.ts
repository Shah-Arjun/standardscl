// nodemailer configuration


import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",                  // Use gmail’s email service
  auth: {
    user: process.env.MAIL_USER,      // sender email
    pass: process.env.MAIL_PASS,       // sender
  },
});