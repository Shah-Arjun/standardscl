// global multer config


import multer from "multer";
import path from "path";
import fs from "fs";


// check upload folder path
const uploadDir = path.join(process.cwd(), "uploads");


// create uploads folder if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


// storage config
const storage = multer.diskStorage({                //this tells multer to store files on disk
  destination: (req, file, cb) => {             //destination where file is stored
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {         //file name generation with unique suffix
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9);     //rg. 1710456789123-394823923

    const ext = path.extname(file.originalname);         //extracts the extension of file

    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);     //If field name = image,,,, image-1710456789123-394823923.jpg
  },
});



// file filter  --- allow only images
const fileFilter: multer.Options["fileFilter"] = (req, file, cb) => {
  const allowed = /jpg|jpeg|png|webp/;

  const ext = allowed.test(path.extname(file.originalname).toLowerCase());  //checks files extenson
  //const mime = allowed.test(file.mimetype);  //checks mime type  eg. image/jpeg


  //allow file if the test passes
  if (ext) {
    cb(null, true);
  } else {
    cb(new Error("Only image files allowed"));
  }
};



// Create multer upload middleware --- to use in another file by importing
export const upload = multer({
  storage,                         //multer disk storage config
  limits: { 
    fileSize: 50 * 1024 * 1024,     //maximum file size 50MB
  },
  fileFilter,                 //apply above image rule
});