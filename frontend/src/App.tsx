import { useEffect, useState } from "react";
import "./App.css";
import AllPhotos from "./components/AllPhotos";
import Form from "./components/Form";
import {
  AllReviewsContext,
  IAllReviewsContext,
  IReviewContext,
  ReviewContext,
} from "./contexts/ReviewContext";
import { IReview } from "./models/IReview";
import { createNewReview, getAllReviews } from "./services/reviewApi";
import WelcomePage from "./components/pages/WelcomePage";

function App() {
  const [allReviews, setAllReviews] = useState<IAllReviewsContext>(() => ({
    reviews: [],
    getReviews: () => {
      return;
    },
  }));

  const [currentReview, setCurrentReview] = useState<IReviewContext>({
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

    createReview: () => {
      return new Promise<IReview>((resolve) => {
        resolve({
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
        });
      });
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const allResults = await getAllReviews();

      setAllReviews((prevAllReviews) => ({
        ...prevAllReviews,
        reviews: allResults,
      }));
    };

    fetchData();
  }, []);

  currentReview.createReview = async (): Promise<IReview> => {
    const result = await createNewReview(currentReview.review);
    setCurrentReview({
      ...currentReview,
      review: { ...currentReview.review },
    });

    return result;
  };

  return (
    <>
      <ReviewContext.Provider value={currentReview}>
        <WelcomePage />
        {/* <PhotoUploader /> */}
        <Form></Form>
        <AllReviewsContext.Provider value={allReviews}>
          <AllPhotos />
        </AllReviewsContext.Provider>
      </ReviewContext.Provider>
    </>
  );
}

export default App;
