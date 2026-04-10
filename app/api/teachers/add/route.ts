import { teachersTable } from "@/database/schema";
import { db } from "../../../../database/db";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { uploadToCloudinary } from "./../../.../../../../lib/cloudinary";



export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    //console.log("form data  ", formData); //debug



    // ─── Extract string fields ──────────────────────────────
    const teacherName = formData.get("teacherName")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const gender = formData.get("gender")?.toString().trim() ?? "male";
    const genderValue: "male" | "female" | "other" = [
      "male",
      "female",
      "other",
    ].includes(gender)
      ? (gender as "male" | "female" | "other")
      : "male";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const address = formData.get("address")?.toString().trim() ?? "";
    const employmentType = formData.get("employmentType")?.toString().trim() ?? "";
    const experience = Number(formData.get("experience"));

    // is experience a number?
    if (isNaN(experience) || experience < 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Experience must be a positive number",
        },
        { status: 400 },
      );
    }



    // ─── Parse arrays safely ────────────────────────────────
    const parseJSONField = (field: FormDataEntryValue | null): string[] => {
      if (!field) return [];
      try {
        return JSON.parse(field.toString());
      } catch {
        return [];
      }
    };



    const qualifications = parseJSONField(formData.get("qualifications"));
    const subjectsTeaches = parseJSONField(formData.get("subjectsTeaches"));
    const post = parseJSONField(formData.get("post"));



    // ─── Validate required text fields except file  ──────────────────────────
    const missingFields: string[] = [];
    if (!teacherName) missingFields.push("Teacher Name");
    if (!phone) missingFields.push("Phone Number");
    if (!address) missingFields.push("Address");
    if (!employmentType) missingFields.push("Employment Type");
    if (!experience) missingFields.push("Experience");
    if (qualifications.length === 0) missingFields.push("Qualifications");

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 },
      );
    }



    // ─── get File from formData  ───────────────────────────────────────
    const file = formData.get("photo") as File | null;

    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        { success: false, message: "Valid photo is required" },
        { status: 400 },
      );
    }



    // validate size of file - 50mb
    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "Photo must be less than 50MB" },
        { status: 400 },
      );
    }

    // image format validation
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: "Only JPG, JPEG, PNG allowed" },
        { status: 400 },
      );
    }

    //console.log("All validations passed, proceeding with file save and DB insert..."); //debug




    // ─── Save file to upload dir ,, local upload ─────────────────────────────────────────
    // const uploadsDir = path.join(process.cwd(), "uploads"); //get path of upload dir
    // await fs.mkdir(uploadsDir, { recursive: true }); //if not exist make dir upload

    const ext = path.extname(file.name); //get file extension
    const fileName = `teacher-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    // const filePath = path.join(uploadsDir, fileName);   //for local upload

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // await fs.writeFile(filePath, buffer);  //for local upload

    console.log("File saved locally, now uploading to Cloudinary...");



    // ─── Upload to Cloudinary ─────────────────────────
    let cloudResult;
    try {
      cloudResult = await uploadToCloudinary(buffer);
    } catch (err) {
      console.error("Cloudinary upload failed:", err);
      return NextResponse.json(
        { success: false, message: "Failed to upload photo" },
        { status: 500 },
      );
    }

    //console.log("cloudResult-->\n", cloudResult);


    // ─── prepare data ───────────────────────────────────
    const teacherData = {
      teacherName,
      gender: genderValue,
      email,
      phone,
      address,
      employmentType,
      experience,
      qualifications,
      subjectsTeaches,
      post,
      photo: cloudResult.secure_url, //db savees cloudinary url
      photoPublicId: cloudResult.public_id, //db saves cloudinary public id for  of photo for future access
    };



    //debug
    //console.log("Inserting teacher data into DB:", teacherData);


    // ─── Insert into DB ───────────────────────────────────
    const inserted = await db.insert(teachersTable).values(teacherData).returning();

    //console.log("Inserted teacher data:", inserted);


    return NextResponse.json({
      success: true,
      message: "Teacher added successfully",
      data: inserted,
    });
  } catch (err: any) {
    console.error("POST /api/teachers/add error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Form upload failed" },
      { status: 500 },
    );
  }
}





// api to get all teachers
// app/api/teachers/route.ts
import { getAllTeachers } from "@/lib/queries/teachers";

export async function GET() {
  const teachers = await getAllTeachers();
  return Response.json(teachers);
}