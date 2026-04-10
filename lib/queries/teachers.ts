// lib/queries/teachers.ts
import { db } from "../../database/db"
import { teachersTable } from "@/database/schema";
import { eq, desc, asc } from "drizzle-orm";


//get all teachers logic
export async function getAllTeachers() {
  return await db.select()
    .from(teachersTable)
    .orderBy(asc(teachersTable.createdAt));
}




//get teacher by id logic
export async function getTeacherById(id: number) {
  const result = await db
    .select()
    .from(teachersTable)
    .where(eq(teachersTable.id, id));

  return result[0] || null;
}