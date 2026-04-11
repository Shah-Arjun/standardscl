import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database/db";
import { notices } from "@/database/schema";
import { eq } from "drizzle-orm";


// get notice by id
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);

    // validate id
    if (!id || isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid notice ID" },
        { status: 400 }
      );
    }

    // fetch notice
    const result = await db
      .select()
      .from(notices)
      .where(eq(notices.id, id))
      .limit(1);

    const notice = result[0];

    // not found
    if (!notice) {
      return NextResponse.json(
        { error: "Notice not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(notice);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch notice" },
      { status: 500 }
    );
  }
}