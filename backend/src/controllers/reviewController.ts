import { RequestHandler } from "express";
import { Review } from "../models/Review";

export const getAllReviews: RequestHandler = async (req, res, next) => {
  try {
    return res.send("get all");
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
      photo,
      producer,
      percentage,
      price,
      rating,
      foodPairing,
      grape,
      comment,
    } = req.body;

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
