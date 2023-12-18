import { createContext } from "react";
import { IReview } from "../../../backend/src/models/Review";
import { createNewReview } from "../services/reviewApi";

export interface IReviewContext {
  currentReview: IReview;
  createReview: (reviewData: FormData) => Promise<IReview>;
}

export interface IAllReviewsContext {
  reviews: IReview[];
  getReviews: () => void;
}

// my context with the current context and the post request function.
export const ReviewContext = createContext<IReviewContext>({
  currentReview: {
    firstname: "",
    lastname: "",
    wineName: "",
    photo: "",
    producer: "",
    percentage: "",
    price: 0,
    rating: 0,
    foodPairing: "",
    grape: "",
    comment: "",
  },
  createReview: async (reviewData: FormData) => {
    // assuming you have a function to convert FormData to IReview
    const result = await createNewReview(reviewData);
    return result as IReview;
  },
});

// get all reviews context with the list of all reviews + the get function.
export const AllReviewsContext = createContext<IAllReviewsContext>({
  reviews: [],
  getReviews: () => {
    return;
  },
});
