import { teachersTable } from "@/database/schema";
import { db } from "../../../../database/db";
import fs from "fs/promises"; //

// // // GET teachers api ;  http://localhost:3000/api/teachers/add
// export async function GET() {
//     return Response.json({
//         message: "Teachers API"
//     });
// }

// // ADD teaches api : http://localhost:3000/api/teachers/add
// export async function POST(req : Request) {
//   try {
//     const body = await req.json();
//     console.log(body)

//     const newTeacher = await db
//       .insert(teachersTable)
//       .values({
//         teacherName: body.teacherName,
//         gender: body.gender,
//         email: body.email,
//         phone: body.phone,
//         address: body.address,
//         employmentType: body.employmentType,
//         qualifications: body.qualifications,
//         fieldOfStudy: body.fieldOfStudy,
//         subjectsTeaches: body.subjectsTeaches,
//         post: body.post,
//         experience: body.experience,
//         photo: body.photo,
//       })
//       .returning();

//     return Response.json({
//       success: true,
//       data: newTeacher,
//     });

//   } catch (error : any) {
//     return Response.json({
//       success: false,
//       message: error.message,
//     });
//   }
// }

import { NextResponse } from "next/server";
import path from "path";

// POST handler
export async function POST(req: Request) {
  try {
    const formData = await req.formData(); // Parse FormData
    console.log("formData-->", formData);
    // ─── Extract string fields ───────────────────────────────────────
    const teacherName = formData.get("teacherName")?.toString().trim() ?? "";
    const gender = formData.get("gender")?.toString().trim() ?? "male";
    const email = formData.get("email")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const address = formData.get("address")?.toString().trim() ?? "";
    const employmentType =
      formData.get("employmentType")?.toString().trim() ?? "Full Time";
    const experience = formData.get("experience")?.toString().trim() ?? "";

    // ─── Safe JSON parse for arrays ──────────────────────────────────
    let qualifications: string[] = [];
    let fieldOfStudy: string[] = [];
    let subjectsTeaches: string[] = [];
    let post: string[] = [];

    try {
      const q = formData.get("qualifications");
      if (q && typeof q === "string") qualifications = JSON.parse(q);

      const f = formData.get("fieldsOfStudy");
      if (f && typeof f === "string") fieldOfStudy = JSON.parse(f);

      const s = formData.get("subjectsTeaches");
      if (s && typeof s === "string") subjectsTeaches = JSON.parse(s);

      const p = formData.get("posts");
      if (p && typeof p === "string") post = JSON.parse(p);
    } catch (parseErr) {
      console.error("JSON parse error:", parseErr);
      return NextResponse.json(
        { success: false, message: "Invalid format in array fields" },
        { status: 400 },
      );
    }

    // get file
    const photo = formData.get("photo") as File | null;

    console.log("\n---->", formData);

    // ─── Validation ──────────────────────────────────────────────────
    if (!photo || !(photo instanceof File) || photo.size === 0) {
      return NextResponse.json(
        { success: false, message: "Valid photo file is required" },
        { status: 400 },
      );
    }

    if (photo.size > 50 * 1024 * 1024) {
      // 50MB limit
      return NextResponse.json(
        { success: false, message: "Photo file size must be less than 50MB" },
        { status: 400 },
      );
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(photo.type)) {
      return NextResponse.json(
        {
          success: false,
          message: "Only JPG, JPEG and PNG photos are allowed",
        },
        { status: 400 },
      );
    }
    // Now it's safe to proceed — photo is guaranteed to be a non-empty File
    const bytes = await photo.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const errors: string[] = [];

    if (!teacherName) errors.push("Teacher Name");
    if (!phone) errors.push("Phone Number");
    if (!address) errors.push("Address");
    if (!employmentType) errors.push("Employment Type");
    if (!experience) errors.push("Experience");
    if (qualifications.length === 0)
      errors.push("Qualifications (at least one)");

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${errors.join(", ")}`,
        },
        { status: 400 },
      );
    }

    // Get the path to the uploads folder relative to the project root
    const uploadsDir = path.join(process.cwd(), "uploads");

    // Check if folder exists, if not, create it recursively
    await fs.mkdir(uploadsDir, { recursive: true });

    // unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    // get extension of file
    const ext = path.extname(photo.name);

    // make file name
    const fileName = `teacher-${uniqueSuffix}${ext}`;

    const filePath = path.join(uploadsDir, fileName); //actual path from root directory

    console.log("filename--> ", fileName);
    console.log("\n\n\nfilepath-->", filePath);

    // Build teacher data
    const teacherData: any = {
      teacherName,
      gender: gender || "male",
      email,
      phone,
      address: address || "",
      employmentType: employmentType || "Full Time",
      qualifications: qualifications || [],
      fieldOfStudy: fieldOfStudy || [],
      subjectsTeaches: subjectsTeaches || [],
      post: post || [],
      experience: experience || "",
      photo: fileName, // save unique file name
    };

    console.log("teachers data---. \n", teacherData);

    // Insert into DB
    const inserted = await db
      .insert(teachersTable)
      .values(teacherData)
      .returning();

    // save file to upload folder
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      message: "Teacher added successfully",
      data: inserted,
    });
  } catch (err: any) {
    // console.error("POST /api/teachers/add error:", err);
    return NextResponse.json(
      {
        success: false,
        message: err.message || "Upload failed",
      },
      { status: 500 },
    );
  }
}
