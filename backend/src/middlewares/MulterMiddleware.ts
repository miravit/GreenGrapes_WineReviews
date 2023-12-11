// multer file uploading middleware from tutorial: https://www.youtube.com/watch?app=desktop&v=zMR_NI7zISE
// import { StorageEngine, diskStorage, FileFilterCallback } from "multer";
// const { v4: uuidv4 } = require("uuid");
// const path = require("path");

// const storage = diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../../public/uploads"); // could be wrong filepath
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${uuidv4()}_${path.extname(file.originalname)}`);
//   },
// });

// const fileFilter = (req: any, file: any, cb: any) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const uploadMiddleware = { storage, fileFilter };

// export default { uploadMiddleware };

// this is from stackoverflow https://stackoverflow.com/questions/74851302/mern-multer-and-formik-image-upload
const cloudinary = require("cloudinary").v2;
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { RequestHandler } from "express";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_api_key,
  api_secret: process.env.cloud_api_secret,
});

const MIME_TYPE_MAP: any = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/uploads");
//   },
//   filename: (req, file, cb) => {
//     const ext = MIME_TYPE_MAP[file.mimetype];
//     cb(null, uuidv4() + "." + ext);
//   },
// });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // here I can config the return. If i want a specific id for example
    return {
      allowedFormats: ["png", "jpg", "jpeg"],
      folder: "green_grapes_photos",
      //format: "jpeg",
      public_id: uuidv4(),
      width: 250,
      height: 250,
      crop: "fill",
    };
  },
});

const uploadMiddleware: RequestHandler = multer({ storage: storage }).single(
  "photo"
);

export { uploadMiddleware };
