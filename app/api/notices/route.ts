import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database/db";
import { notices } from "@/database/schema";
import { eq } from "drizzle-orm";


// =====================
// GET all notices
// =====================
export async function GET() {
  try {
    const data = await db
      .select()
      .from(notices)
      .orderBy(notices.createdAt);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch notices" },
      { status: 500 }
    );
  }
}

