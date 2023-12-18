import { useState } from "react";
import Form from "../Form";
import { IReviewContext, ReviewContext } from "../../contexts/ReviewContext";
import { IReview } from "../../models/IReview";
import { createNewReview } from "../../services/reviewApi";

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
      // assuming you have a function to convert FormData to IReview
      const result = await createNewReview(reviewData);
      return result as IReview;
    },
  });

  console.log(currentReview);
  return (
    <>
      <ReviewContext.Provider value={currentReview}>
        <div>ReviewPage</div>
        <Form></Form>
      </ReviewContext.Provider>
    </>
  );
};

export default ReviewPage;
