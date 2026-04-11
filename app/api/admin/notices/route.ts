import { db } from "@/database/db";
import { notices } from "@/database/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";






// =====================
// POST create notice - by admin
// =====================
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { title, content, category, postedBy } = body;

    if (!title || !content || !category || !postedBy) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newNotice = await db.insert(notices).values({
      title,
      content,
      category,
      postedBy,
    }).returning();

    return NextResponse.json(newNotice[0]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add notice" },
      { status: 500 }
    );
  }
}





// =====================
// DELETE notice by ID
// =====================
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Notice ID is required" },
        { status: 400 }
      );
    }

    const deleted = await db
      .delete(notices)
      .where(eq(notices.id, Number(id)))
      .returning();

    if (deleted.length === 0) {
      return NextResponse.json(
        { error: "Notice not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Notice deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete notice" },
      { status: 500 }
    );
  }
}