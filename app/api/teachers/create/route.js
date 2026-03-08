import { NextResponse } from "next/server";
import { upload } from "../../../../lib/multer";
import { db } from "../../../../config/db";

export async function POST(req) {
  try {
    await new Promise((resolve, reject) => {
      upload.single("image")(req, {}, (err) => {
        if (err) reject(err);
        else resolve(true);
      });
    });

    const file = req.file;
    const formData = req.body;

    const imagePath = file ? "/uploads/teachers/" + file.filename : null;

    await db.execute(
      `INSERT INTO teachers
       (full_name, gender, email, phone, address, qualification, subject_specialization, positions, working_period, years_of_teaching_experience, image)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        formData.full_name,
        formData.gender,
        formData.email,
        formData.phone,
        formData.address,
        formData.qualification,
        formData.subject_specialization,
        formData.positions,
        formData.working_period,
        formData.years_of_teaching_experience,
        imagePath,
      ]
    );

    return NextResponse.json({ message: "Teacher created successfully" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}