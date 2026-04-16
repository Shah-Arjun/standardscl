// app/api/admin/delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database/db";
import { imageTable } from "@/database/schema";
import { inArray } from "drizzle-orm";
import cloudinary from "@/lib/cloudinary";   // ← Make sure this file exists




// Helper function to determine resource type from Cloudinary URL
function getResourceTypeFromUrl(url: string): "image" | "video" {
  const lowerUrl = url.toLowerCase();

  if (
    lowerUrl.includes(".mp4") ||
    lowerUrl.includes(".mov") ||
    lowerUrl.includes(".webm") ||
    lowerUrl.includes(".ogg") ||
    lowerUrl.includes("/video/") ||
    lowerUrl.includes("video/upload")
  ) {
    return "video";
  }

  return "image";
}




export async function DELETE(req: NextRequest) {
  try {
    const { ids }: { ids: number[] } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { success: false, message: "Invalid image IDs" },
        { status: 400 }
      );
    }




    // 1. Fetch items from database
    const itemsToDelete = await db
      .select({
        id: imageTable.id,
        url: imageTable.url,
        photoPublicId: imageTable.photoPublicId,   // Make sure this column exists
      })
      .from(imageTable)
      .where(inArray(imageTable.id, ids));

    if (itemsToDelete.length === 0) {
      return NextResponse.json(
        { success: false, message: "No matching items found" },
        { status: 404 }
      );
    }




    // 2. Delete files from Cloudinary
    const deletePromises = itemsToDelete.map(async (item) => {
      if (!item.photoPublicId || !item.url) return;

      const resourceType = getResourceTypeFromUrl(item.url);

      try {
        await cloudinary.uploader.destroy(item.photoPublicId, {
          resource_type: resourceType,
        });
        console.log(`Deleted from Cloudinary: ${item.photoPublicId} (${resourceType})`);
      } catch (cloudErr: any) {
        console.error(`Failed to delete from Cloudinary ${item.photoPublicId}:`, cloudErr.message);
      }
    });

    await Promise.allSettled(deletePromises);





    // 3. Delete records from Supabase (Drizzle)
    await db
      .delete(imageTable)
      .where(inArray(imageTable.id, ids));

    console.log(`Successfully deleted ${ids.length} items`);

    return NextResponse.json({
      success: true,
      message: `${ids.length} item(s) deleted successfully`,
      deletedCount: ids.length,
    });



    
  } catch (err: any) {
    console.error("DELETE /api/admin/delete error:", err);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to delete items",
        error: err.message 
      },
      { status: 500 }
    );
  }
}