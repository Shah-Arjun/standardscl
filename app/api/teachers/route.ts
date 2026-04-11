// api to get all teachers
// app/api/teachers/route.ts
import { getAllTeachers } from "@/lib/queries/teachers";


export async function GET() {
  const teachers = await getAllTeachers();
  return Response.json(teachers);
}