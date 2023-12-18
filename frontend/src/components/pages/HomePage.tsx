import { useState } from "react";
import {
  AllReviewsContext,
  IAllReviewsContext,
} from "../../contexts/ReviewContext";

import Searchbar from "../Searchbar";
import Feed from "./Feed";

export const HomePage = () => {
  const [allReviews] = useState<IAllReviewsContext>(() => ({
    reviews: [],
    getReviews: () => {
      return;
    },
  }));

  //tagit bort setCurrentReview för deployment

  return (
    <>
      <div>HomePage</div>
      <AllReviewsContext.Provider value={allReviews}>
        <Searchbar />
        <Feed />
      </AllReviewsContext.Provider>
    </>
  );
};

export default HomePage;
