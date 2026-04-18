import { db } from "@/database/db"
import { imageTable } from "@/database/schema"
import { desc } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"



export async function GET(req: NextRequest) {
    try {
        const images = await db
            .select()
            .from(imageTable)
            .orderBy(desc(imageTable.createdAt))     //latest first
            

        // console.log("Fetched gallery data:", images)  //debug


        return NextResponse.json(
            {success: true, message: "Fetched gallery data successfully", count: images.length, data: images},  //returns array of images data
            {status: 200}
        )


    } catch (err: any) {
        console.error("GET /api/gallery error:", err);
        return NextResponse.json(
            {success: false, message: err.message || "Failed to fetch gallery data"},
            {status: 500}
        )
    }
}

