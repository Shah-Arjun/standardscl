// api to get all teachers
// app/api/teachers/route.ts
import { db } from "@/database/db";
import { teachersTable } from "@/database/schema";
import { asc } from "drizzle-orm";


export async function GET() {
  const teachers = await db.select()
      .from(teachersTable)
      .orderBy(asc(teachersTable.createdAt));     
      
  return Response.json(teachers);
}