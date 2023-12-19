/* eslint-disable @typescript-eslint/no-unused-vars */

import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useReducer, useEffect, useState } from "react";
import {
  IReviewContext,
  ReviewContext,
  ReviewReducerContext,
} from "./contexts/ReviewContext";
import { ReviewDispatchContext } from "./contexts/ReviewDispatchContext";
import { ReviewReducer, ActionType } from "./reducers/ReviewsReducer";
import { createNewReview, getAllReviews } from "./services/reviewApi";
import { IReview } from "./models/IReview";

function App() {
  const [reviews, dispatch] = useReducer(ReviewReducer, {
    reviews: [],
  });

  useEffect(() => {
    const getData = async () => {
      const getAllDataFromApi = await getAllReviews();

      dispatch({
        type: ActionType.GETALLREVIEWS,
        payload: JSON.stringify(getAllDataFromApi),
      });
    };

    getData();
  }, [dispatch]);

  return (
    <>
      <>
        <ReviewReducerContext.Provider value={reviews}>
          <ReviewDispatchContext.Provider value={dispatch}>
            <RouterProvider router={router} />
          </ReviewDispatchContext.Provider>
        </ReviewReducerContext.Provider>
      </>
    </>
  );
}

export default App;
