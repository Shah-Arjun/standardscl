import { teachersTable } from "@/database/schema";
import {db} from "../../../../database/db"


// // GET teachers api ;  http://localhost:3000/api/teachers/add
// export async function GET() {
//     return Response.json({
//         message: "Teachers API"
//     });
// } 


// ADD teaches api : http://localhost:3000/api/teachers/add
export async function POST(req : Request) {
  try {
    const body = await req.json();
    // console.log(body)
    
    const newTeacher = await db
      .insert(teachersTable)
      .values({
        teacherName: body.teacherName,
        gender: body.gender,
        email: body.email,
        phone: body.phone,
        address: body.address,
        employmentType: body.employmentType,
        qualification: body.qualification,
        fieldOfStudy: body.fieldOfStudy,
        subjectTeaches: body.subjectTeaches,
        post: body.post,
        experience: body.experience,
        photo: body.photo,
      })
      .returning();

    return Response.json({
      success: true,
      data: newTeacher,
    });

  } catch (error : any) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}