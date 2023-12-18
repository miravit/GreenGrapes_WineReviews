/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import {
  AllReviewsContext,
  IAllReviewsContext,
  IReviewContext,
  ReviewContext,
} from "./contexts/ReviewContext";
import { IReview } from "./models/IReview";
import { createNewReview } from "./services/reviewApi";
import WelcomePage from "./components/pages/WelcomePage";
import FeedPage from "./components/pages/FeedPage";
import ReviewPage from "./components/pages/ReviewPage";

function App() {
  const [allReviews, setAllReviews] = useState<IAllReviewsContext>(() => ({
    reviews: [],
    getReviews: () => {
      return;
    },
  }));

  const [currentReview, setCurrentReview] = useState<IReviewContext>({
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

  // const { currentReview } = useContext<IReviewContext>(ReviewContext);
  // const { reviews } = useContext<IAllReviewsContext>(AllReviewsContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const allResults = await getAllReviews();

  //     setAllReviews((prevAllReviews) => ({
  //       ...prevAllReviews,
  //       reviews: allResults,
  //     }));
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <ReviewContext.Provider value={currentReview}>
        <WelcomePage />
        {/* <PhotoUploader /> */}
        <ReviewPage></ReviewPage>

        <AllReviewsContext.Provider value={allReviews}>
          <FeedPage></FeedPage>
        </AllReviewsContext.Provider>
      </ReviewContext.Provider>
    </>
  );
}

export default App;
