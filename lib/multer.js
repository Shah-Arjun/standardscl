import multer from "multer";
import fs from "fs";
import path from "path";

// Upload folder
const uploadDir = path.join(process.cwd(), "public/uploads/teachers");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const allowedFileType = ["image/png", "image/jpg", "image/jpeg"];
    if (!allowedFileType.includes(file.mimetype)) {
      cb(new Error("This file type is not supported"));
      return;
    }

    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Multer middleware
export const upload = multer({ storage });