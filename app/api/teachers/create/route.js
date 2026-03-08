import { NextResponse } from "next/server";
import { upload } from "../../../middleware/multer";
import mysql from "mysql2/promise";
import nextConnect from "next-connect";
import fs from "fs";
import { db } from "../../../../config/db";

// Disable default bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Use next-connect to integrate Multer
const handler = nextConnect();

handler.use(upload.single("image"));

handler.post(async (req, res) => {
  try {
    const {
      full_name,
      gender,
      email,
      phone,
      address,
      qualification,
      subject_specialization,
      position,
      working_period,
      years_of_teaching_experience,
    } = req.body;

    const imagePath = req.file
      ? "/uploads/teachers/" + req.file.filename
      : null;

    const sql = `
      INSERT INTO teachers 
      (full_name, gender, email, phone, address, qualification, subject_specialization, position, working_period, years_of_teaching_experience, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(sql, [
      full_name,
      gender,
      email,
      phone,
      address,
      qualification,
      subject_specialization,
      position,
      working_period,
      years_of_teaching_experience,
      imagePath,
    ]);

    return res
      .status(201)
      .json({ message: "Teacher data inserted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default handler;
