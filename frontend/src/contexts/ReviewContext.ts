import { createContext } from "react";
import { IReview } from "../../../backend/src/models/Review";
import { createNewReview } from "../services/reviewApi";
import { IAllReviewState, IReviewState } from "../reducers/ReviewsReducer";

export interface IReviewContext {
  currentReview: IReview;
  createReview: (reviewData: FormData) => Promise<IReview>;
}

export const AllReviewsReducerContext = createContext<IAllReviewState>({
  reviews: [],
});

export const ReviewReducerContext = createContext<IReviewState>({
  review: {
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
  createNewReview: async (reviewData: FormData) => {
    const result = await createNewReview(reviewData);
    return result as IReview;
  },
});
