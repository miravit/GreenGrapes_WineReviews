import { useState } from "react";

import AllPhotos from "../AllPhotos";
import {
  AllReviewsContext,
  IAllReviewsContext,
} from "../../contexts/ReviewContext";

export const Feed = () => {
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
      <div>FEED</div>
      <AllReviewsContext.Provider value={allReviews}>
        <AllPhotos></AllPhotos>
      </AllReviewsContext.Provider>
    </>
  );
};

export default Feed;
