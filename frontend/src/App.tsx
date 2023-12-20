/* eslint-disable @typescript-eslint/no-unused-vars */

import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { useReducer, useEffect, useState } from "react";
import {
  AllReviewsReducerContext,
  ReviewReducerContext,
} from "./contexts/ReviewContext";
import { ReviewDispatchContext } from "./contexts/ReviewDispatchContext";
import { ActionType, AllReviewReducer } from "./reducers/ReviewsReducer";
import { getAllReviews } from "./services/reviewApi";

function App() {
  const [reviews, dispatch] = useReducer(AllReviewReducer, {
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
        <AllReviewsReducerContext.Provider value={reviews}>
          <ReviewDispatchContext.Provider value={dispatch}>
            <RouterProvider router={router} />
          </ReviewDispatchContext.Provider>
        </AllReviewsReducerContext.Provider>
      </>
    </>
  );
}

export default App;
