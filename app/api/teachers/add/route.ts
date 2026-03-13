import { teachersTable } from "@/database/schema";
import {db} from "../../../../database/db"

import { NextResponse } from "next/server";

// POST handler
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse JSON

    // Check required fields
    if (!body.teacherName || !body.phone) {
      return NextResponse.json(
        { success: false, message: "Teacher Name and Phone are required" },
        { status: 400 }
      );
    }

    // Build teacher data
    const teacherData:any = {
      teacherName: body.teacherName,
      gender: body.gender || "male",
      email: body.email,
      phone: body.phone,
      address: body.address || "",
      employmentType: body.employmentType || "Full Time",
      qualification: body.qualification?.split(",") || [],
      fieldOfStudy: body.fieldOfStudy?.split(",") || [],
      subjectTeaches: body.subjectTeaches?.split(",") || [],
      post: body.post?.split(",") || [],
      experience: body.experience || "",
      photo: "///", // no photo
    };

    // Insert into DB
    const inserted = await db.insert(teachersTable).values(teacherData).returning();

    return NextResponse.json({
      success: true,
      message: "Teacher added successfully",
      data: inserted,
    });
  } catch (err: any) {
    console.error("POST /api/teachers/add error:", err);
    return NextResponse.json({ success: false, message: err.message || "Upload failed" }, { status: 500 });
  }
}