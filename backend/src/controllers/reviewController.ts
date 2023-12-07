import { RequestHandler } from "express";
import { Review } from "../models/Review";

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

    //detta är för multer middleware
    const photo = req.file?.filename;
    console.log("------- photo i backend:  " + photo);

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

    return res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't create a new booking");
  }
};
