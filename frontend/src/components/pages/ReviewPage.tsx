import { useState } from "react";
import { IReviewContext, ReviewContext } from "../../contexts/ReviewContext";
import { IReview } from "../../models/IReview";
import { createNewReview } from "../../services/reviewApi";
import Form from "../Form";
import WelcomePage from "./WelcomePage";

export const ReviewPage = () => {
  //tagit bort setCurrentReview för deployment
  const [currentReview] = useState<IReviewContext>({
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
      const result = await createNewReview(reviewData);
      return result as IReview;
    },
  });

  return (
    <>
      <div>ReviewPage</div>
      <ReviewContext.Provider value={currentReview}>
        <WelcomePage />
        <Form></Form>
      </ReviewContext.Provider>
    </>
  );
};

export default ReviewPage;
