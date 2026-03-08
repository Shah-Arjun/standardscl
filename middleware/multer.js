import multer from "multer";
import path from "path";

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/teachers");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
