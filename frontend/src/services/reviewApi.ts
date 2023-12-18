import axios from "axios";
import { IReview } from "../models/IReview";

// GET
export const getAllReviews = async (): Promise<IReview[] | undefined> => {
  try {
    const response = await axios.get<IReview[]>(
      "http://localhost:4000/api/v1/review"
    );

    return response.data;
  } catch (error) {
    console.log("Couldn't get reviews", error);
    return undefined;
  }
};

// CREATE
export const createNewReview = async (
  review: FormData
): Promise<IReview | undefined> => {
  console.log(review);
  try {
    const response = await axios.post<IReview>(
      "http://localhost:4000/api/v1/review",
      review
    );
    console.log("Posted review:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error creating review", error);
    return undefined;
  }
};
