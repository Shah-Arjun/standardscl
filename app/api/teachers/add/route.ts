import { teachersTable } from "@/database/schema";
import {db} from "../../../../database/db"


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