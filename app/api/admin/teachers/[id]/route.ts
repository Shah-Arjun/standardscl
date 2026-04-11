import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database/db";
import { teachersTable } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);


    if (!id || isNaN(id)) {
      return NextResponse.json({ error: "Invalid teacher ID" }, { status: 400 });
    }

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid teacher ID" },
        { status: 400 }
      );
    }

    const teacher = await db
      .select()
      .from(teachersTable)
      .where(eq(teachersTable.id, id))
      .limit(1);

    if (teacher.length === 0) {
      return NextResponse.json(
        { error: "Teacher not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(teacher[0], { status: 200 });
  } catch (error) {
    console.error("GET teacher by id error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}