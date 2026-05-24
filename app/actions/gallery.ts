"use server"

import { db } from "@/database/db"
import { imageTable } from "@/database/schema"
import { desc } from "drizzle-orm"

export async function getGalleryImages() {
    try {
        const images = await db
            .select()
            .from(imageTable)
            .orderBy(desc(imageTable.createdAt))

        return {
            success: true,
            message: "Fetched gallery data successfully",
            count: images.length,
            data: images,
        }

    } catch (err: any) {
        console.error("getGalleryImages error:", err)

        return {
            success: false,
            message: err.message || "Failed to fetch gallery data",
            data: [],
        }
    }
}