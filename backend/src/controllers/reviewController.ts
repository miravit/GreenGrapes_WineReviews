const cloudinary = require("cloudinary").v2;
import { RequestHandler } from "express";
import { Review } from "../../../backend/src/models/Review";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_api_key,
  api_secret: process.env.cloud_api_secret,
});

export const getAllReviews: RequestHandler = async (req, res, next) => {
  try {
    const reviews = await Review.find().sort({ createdAt: "descending" });
    const totalReviews = await Review.countDocuments();
    return res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't get all bookings");
  }
};

export const createReview: RequestHandler = async (req, res, next) => {
  try {
    const {
      firstname,
      lastname,
      wineName,
      producer,
      percentage,
      price,
      rating,
      foodPairing,
      grape,
      comment,
    } = req.body;

    // multer middleware
    const photo = req.file?.path;

    const newReview = await Review.create({
      firstname: firstname,
      lastname: lastname,
      wineName: wineName,
      photo: photo,
      producer: producer,
      percentage: percentage,
      price: price,
      rating: rating,
      foodPairing: foodPairing,
      grape: grape,
      comment: comment,
    });

    // posts to cloudinary
    if (req.file) {
      const photoToCloudinary = await cloudinary.uploader.upload(req.file.path);
    }
    return res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't create a new booking");
  }
};
