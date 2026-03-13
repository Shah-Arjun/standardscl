import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function POST(req: Request) {
  try {

    const formData = await req.formData();

    console.log("Form data received:  \n", formData);

    const file: File | null = formData.get("photo") as unknown as File;

    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "uploads");

    // create folder if not exists
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, file.name);

    await fs.writeFile(filePath, buffer);

    console.log("File saved:", filePath);

    return NextResponse.json({
      success: true,
      filename: file.name,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Upload failed" },
      { status: 500 }
    );
  }
}