import axios from "axios";
import { IReview } from "../models/IReview";

//GET

export const getAllReviews = async () => {
  const response = await axios.get<IReview[]>(
    "https://green-grapes-l2ar.onrender.com/api/v1/review"
  );

  return response.data;
};

//CREATE

export const createNewReview = async (review: FormData): Promise<IReview> => {
  console.log(review);
  const response = await axios.post<IReview>(
    "https://green-grapes-l2ar.onrender.com/api/v1/review",
    review
  );
  console.log("posted review: " + response.data);
  return response.data;
};
