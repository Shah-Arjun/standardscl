import { teachersTable } from "@/database/schema";
import {db} from "../../../../database/db"
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
//         qualification: body.qualification,
//         fieldOfStudy: body.fieldOfStudy,
//         subjectTeaches: body.subjectTeaches,
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
console.log("formData-->", formData)
    // get fields
    const teacherName = formData.get("teacherName")?.toString().trim();
    const gender = formData.get("gender")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const address = formData.get("address")?.toString().trim();
    const employmentType = formData.get("employmentType")?.toString().trim();

    const qualification = formData.get("qualification")? JSON.parse(formData.get("qualification") as string) : [];
    const fieldOfStudy = formData.get("fieldOfStudy")? JSON.parse(formData.get("fieldOfStudy") as string) : [];
    const subjectTeaches = formData.get("subjectTeaches")? JSON.parse(formData.get("subjectTeaches") as string) : [];
    const post = formData.get("post")? JSON.parse(formData.get("post") as string) : [];
    const experience = formData.get("experience")?.toString().trim();

    console.log("\n---->", formData)

    // get file
    const photo = formData.get("photo") as File | null;

    // Check required fields
    if (!teacherName || !phone || !address || !employmentType || !qualification || !fieldOfStudy || !subjectTeaches || !post || !experience) {
      return NextResponse.json(
        { success: false, message: "Teacher Name, Phone, Address, Employment Type, Qualification, Field Of Study, Subject Teaches, Post, and Experience are required" },
        { status: 400 }
      );
    }

    //checks photo
    if (!photo) {
      return NextResponse.json(
        { success: false, message: "Photo is required" },
        { status: 400 }
      );
    }


    // convert file to buffer
    const bytes = await photo.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Get the path to the uploads folder relative to the project root
    const uploadsDir = path.join(process.cwd(), 'uploads');


    // Check if folder exists, if not, create it recursively
    await fs.mkdir(uploadsDir, { recursive: true });


    // unique filename
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    // get extension of file
    const ext = path.extname(photo.name)

    // make file name
    const fileName = `teacher-${uniqueSuffix}${ext}`;

    const filePath = path.join(uploadsDir, fileName);   //actual path from root directory

    console.log("filename--> ", fileName)
    console.log('\n\n\nfilepath-->', filePath)


    // Build teacher data
    const teacherData:any = {
      teacherName,
      gender: gender || "male",
      email,
      phone,
      address: address || "",
      employmentType: employmentType || "Full Time",
      qualification: qualification || [],
      fieldOfStudy: fieldOfStudy || [],
      subjectTeaches: subjectTeaches || [],
      post: post || [],
      experience: experience || "",
      photo: fileName // save unique file name
    };

console.log("teachers data---. \n", teacherData)

    // Insert into DB
    const inserted = await db.insert(teachersTable).values(teacherData).returning();

    // save file to upload folder
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      message: "Teacher added successfully",
      data: inserted,
    });

  } catch (err: any) {
    // console.error("POST /api/teachers/add error:", err);
    return NextResponse.json({
        success: false,
        message: err.message || "Upload failed" 
    }, { status: 500 });
  }
}