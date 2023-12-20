/* eslint-disable @typescript-eslint/no-unused-vars */

import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useReducer, useEffect, useState, useContext } from "react";
import {
  AllReviewsReducerContext,
  ReviewReducerContext,
} from "./contexts/ReviewContext";
import { ReviewDispatchContext } from "./contexts/ReviewDispatchContext";
import {
  ActionType,
  AllReviewReducer,
  NewReviewReducer,
} from "./reducers/ReviewsReducer";
import { createNewReview, getAllReviews } from "./services/reviewApi";
import { IReview } from "./models/IReview";

function App() {
  // state for creating new review
  const [createReview, dispatch] = useReducer(NewReviewReducer, {
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

  //state for all reviews in database
  const [reviews, dispatch2] = useReducer(AllReviewReducer, {
    reviews: [],
  });

  useEffect(() => {
    const getData = async () => {
      const getAllDataFromApi = await getAllReviews();
      console.log("NY HÄMTNING");

      dispatch2({
        type: ActionType.GETALLREVIEWS,
        payload: JSON.stringify(getAllDataFromApi),
      });
    };
    getData();
  }, [createReview.review.photo]);

  console.log(createReview);

  return (
    <>
      <>
        <AllReviewsReducerContext.Provider value={reviews}>
          <ReviewReducerContext.Provider value={createReview}>
            <ReviewDispatchContext.Provider value={dispatch2}>
              <ReviewDispatchContext.Provider value={dispatch}>
                <RouterProvider router={router} />
              </ReviewDispatchContext.Provider>
            </ReviewDispatchContext.Provider>
          </ReviewReducerContext.Provider>
        </AllReviewsReducerContext.Provider>
      </>
    </>
  );
}

export default App;
