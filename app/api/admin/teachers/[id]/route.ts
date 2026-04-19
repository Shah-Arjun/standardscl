import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database/db";
import { teachersTable } from "@/database/schema";
import { eq } from "drizzle-orm";



// get single theacher  by admin
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; //extract id from url, comes as string

    // convert to number datatype
    const teacherId = Number(id);

    // validate id
    if (Number.isNaN(teacherId)) {
      return NextResponse.json(
        { error: "Invalid teacher ID" },
        { status: 400 }
      );
    }


    // fetch teacher
    const teacher = await db
      .select()
      .from(teachersTable)
      .where(eq(teachersTable.id, teacherId))
      .limit(1);

    // not found
    if (teacher.length === 0) {
      return NextResponse.json(
        { error: "Teacher not found" },
        { status: 404 }
      );
    }

    // success
    return NextResponse.json(teacher[0], { status: 200 });

  } catch (error) {
    console.error("GET teacher by id error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}