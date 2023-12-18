import { useState } from "react";

import AllPhotos from "../AllPhotos";
import {
  AllReviewsContext,
  IAllReviewsContext,
} from "../../contexts/ReviewContext";
import WelcomePage from "./WelcomePage";

export const FeedPage = () => {
  //tagit bort setCurrentReview för deployment
  const [allReviews] = useState<IAllReviewsContext>(() => ({
    reviews: [],
    getReviews: () => {
      return;
    },
  }));

  //tagit bort setCurrentReview för deployment

  return (
    <>
      <div>FeedPage</div>
      <WelcomePage />
      <AllReviewsContext.Provider value={allReviews}>
        <AllPhotos></AllPhotos>
      </AllReviewsContext.Provider>
    </>
  );
};

export default FeedPage;
