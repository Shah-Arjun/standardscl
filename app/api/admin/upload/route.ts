// add imaegs test api


import {upload} from "../../../../lib/multer";
import { runMiddleware } from "../../../../lib/runMiddleware";
import { NextResponse } from "next/server";


export const config = {
  api: {
    bodyParser: false,
  },
};



//add images api
export async function POST(req: any, res: any) {
  try {
 console.log("hello")
    await runMiddleware(req, res, upload.single("photo"));
    // await runMiddleware(req, res, upload.array("photos", 5));   //for multiple file upload , max=5

    console.log("Middleware executed successfully");

    const file = req.file;   //returns object containing uploaded file information

    const body = req.body;

    console.log(body)
    
    console.log("Uploaded file--->\n:", file);
    console.log("Uploaded file.filename--->\n:", file.filename);
    console.log("Form data:", body);

    return NextResponse.json({
      success: true,
      file,
      body,
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Upload failed" },
      { status: 500 }
    );
  }
}
