import { Schema, model } from "mongoose";

export interface IReview {
  firstname: string;
  lastname: string;
  wineName: string;
  photo: string;
  producer: string;
  percentage: string;
  price: number;
  rating: number;
  foodPairing: string;
  grape: string;
  comment: string;
}

export const reviewSchema = new Schema<IReview>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: false },
    wineName: { type: String, required: true },
    photo: { type: String, required: true },
    producer: { type: String, required: true },
    percentage: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    foodPairing: { type: String, required: false },
    grape: { type: String, required: true },
    comment: { type: String, required: false },
  },
  { timestamps: true }
);

export const Review = model<IReview>("Review", reviewSchema);
