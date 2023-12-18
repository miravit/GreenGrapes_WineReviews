import { useState } from "react";
import {
  AllReviewsContext,
  IAllReviewsContext,
} from "../../contexts/ReviewContext";

import Searchbar from "../Searchbar";
import Feed from "./Feed";
import { Link } from "react-router-dom";

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
      <AllReviewsContext.Provider value={allReviews}>
        <Searchbar />
        <Link to="/review">Create a Review!</Link>
        <Feed />
        <button></button>
      </AllReviewsContext.Provider>
    </>
  );
};

export default HomePage;
