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

// if I want to store images locally instead of cloudinary

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
    return {
      allowedFormats: ["png", "jpg", "jpeg"],
      folder: "green_grapes_photos",
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
