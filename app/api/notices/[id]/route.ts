import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database/db";
import { notices } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const noticeId = Number(id);

    // Better validation
    if (Number.isNaN(noticeId)) {
      return NextResponse.json(
        { error: "InvalnoticeId notice noticeId" },
        { status: 400 }
      );
    }

    const notice = await db
      .select()
      .from(notices)
      .where(eq(notices.id, noticeId))
      .limit(1);

    if (notice.length === 0) {
      return NextResponse.json(
        { error: "Notice not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(notice[0], { status: 200 });
  } catch (error) {
    console.error("GET notice by noticeId error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}