import { useState } from "react";
import "./App.css";
import AllPhotos from "./components/AllPhotos";
import Form from "./components/Form";
import {
  AllReviewsContext,
  IAllReviewsContext,
  IReviewContext,
  ReviewContext,
} from "./contexts/ReviewContext";
import { createNewReview } from "./services/reviewApi";
import WelcomePage from "./components/pages/WelcomePage";

function App() {
  //tagit bort setCurrentReview för deployment
  const [allReviews] = useState<IAllReviewsContext>(() => ({
    reviews: [],
    getReviews: () => {
      return;
    },
  }));

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
      return result;
    },
  });

  console.log(allReviews);
  console.log(currentReview);

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
        <Form></Form>
        <AllReviewsContext.Provider value={allReviews}>
          <AllPhotos />
        </AllReviewsContext.Provider>
      </ReviewContext.Provider>
    </>
  );
}

export default App;
