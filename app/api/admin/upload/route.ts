import { NextResponse } from "next/server";
// import path from "path";
// import fs from "fs/promises";   for multer
import { imageTable } from "@/database/schema";
import { db } from "../../../../database/db";
import { uploadToCloudinary } from "@/lib/cloudinary";


type Category = typeof imageTable.$inferInsert["category"];



// upload images by admin
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    //console.log("form data  ", formData); //debug

    const file = formData.get("file") as File;

    // ─── extract string fields ──────────────────────────────
    const title = formData.get("title")?.toString().trim();
    const rawCategory = formData.get("category")?.toString().trim();
    const validCategories: Category[] = [
      "School",
      "Teachers",
      "Students",
      "Events",
      "Sports",
      "Activities",
      "Educational Tour",
      "Memories",
    ];


    // if category is invalid
    if (!rawCategory || !validCategories.includes(rawCategory as Category)) {
      return NextResponse.json(
        { success: false, message: "Invalid category" },
        { status: 400 }
      );
    }

    const category: Category = rawCategory as Category;

    // validate file
    if (!file || !(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        { success: false, message: "Valid image is required" },
        { status: 400 },
      );
    }


    // image and videos format validation
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp", "video/mp4", "video/mov", "video/webm"];
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: "Only jpg, jpeg, png, webp, mp4, mov, webm formats are allowed" },
        { status: 400 },
      );
    }



    // size validation img-10mb
    if (file.type.startsWith("image/") && file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "Image must be less than 10MB" },
        { status: 400 }
      );
    }

    // size validation video-100mb
    if (file.type.startsWith("video/") && file.size > 100 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: "Video must be less than 100MB" },
        { status: 400 }
      );
    }


    // const ext = path.extname(file.name); //get file extension
    // const fileName = `ssbs-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    // const filePath = path.join(uploadsDir, fileName);   //for local upload

    
    // convert file to buffer 
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // await fs.writeFile(filePath, buffer);  //for local upload

    console.log("File saved locally, now uploading to Cloudinary...");



    // ─── Upload to Cloudinary ─────────────────────────
    let cloudResult;
    try {
      cloudResult = await uploadToCloudinary(buffer, "ssbs_gallery");
    } catch (err) {
      console.error("Cloudinary upload failed:", err);
      return NextResponse.json(
        { success: false, message: "Failed to upload photo" },
        { status: 500 },
      );
    }

    //console.log("cloudResult-->\n", cloudResult);


    // ─── full data for db ───────────────────────────────────
    const imageData = {
      category,
      title: title || "",
      url: cloudResult.secure_url, //db savees cloudinary url
      photoPublicId: cloudResult.public_id, //db saves cloudinary public id for  of photo for future access
    };



    //debug
    //console.log("Inserting teacher data into DB:", teacherData);


    // ─── Insert into DB ───────────────────────────────────
    const inserted = await db.insert(imageTable).values(imageData).returning();

    //console.log("Inserted teacher data:", inserted);


    return NextResponse.json({
      success: true,
      message: "Image added successfully",
      // data: inserted,
    });
  } catch (err: any) {
    console.error("POST /api/admin/upload error:", err);   //debug
    return NextResponse.json(
      { success: false, message: err.message || "Image upload failed" },
      { status: 500 },
    );
  }
}





