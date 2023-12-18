import axios from "axios";
import { IReview } from "../models/IReview";

// GET

 

export const getAllReviews = async () => {
  try {
  const response = await axios.get<IReview[]>(
    "https://green-grapes-l2ar.onrender.com/api/v1/review"
  );

  return response.data;
   } catch (error) {
    console.log("Couldn't get reviews", error);
    return undefined;

};

// CREATE
export const createNewReview = async (
  review: FormData
): Promise<IReview | undefined> => {
  console.log(review);

  const response = await axios.post<IReview>(
    "https://green-grapes-l2ar.onrender.com/api/v1/review",
    review
  );
  console.log("posted review: " + response.data);
  return response.data;
};
