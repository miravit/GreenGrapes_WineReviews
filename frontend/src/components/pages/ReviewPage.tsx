import { useEffect, useReducer, useState } from "react";
import {
  IReviewContext,
  ReviewContext,
  ReviewReducerContext,
} from "../../contexts/ReviewContext";
import { IName, IReview } from "../../models/IReview";
import { createNewReview } from "../../services/reviewApi";
import Form from "../Form";
import WelcomePage from "./WelcomePage";
import { Link } from "react-router-dom";
import { NewReviewReducer } from "../../reducers/ReviewsReducer";
import { ReviewDispatchContext } from "../../contexts/ReviewDispatchContext";

export const ReviewPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  //with this state we create the review
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
  });

  //therefore this state needs to go in the dispatch as well.
  const [name, setName] = useState<IName>({
    firstname: "",
    lastname: "",
  });

  // this is only a state to keep track of the current booking information
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
      const result = await createNewReview(reviewData);
      return result as IReview;
    },
  });

  const handleNameChange = (name: IName) => {
    setName(name);
    setCurrentReview((prevReview) => ({
      ...prevReview,
      currentReview: {
        ...prevReview.currentReview,
        firstname: name.firstname,
        lastname: name.lastname,
      },
    }));
  };

  useEffect(() => {
    if (
      currentReview.currentReview.firstname !== "" &&
      currentReview.currentReview.firstname !== ""
    ) {
      setIsFormVisible(true);
      if (name.firstname !== "") {
        setIsFormVisible(true);
      }
    } else {
      setIsFormVisible(false);
    }
  }, [name]);

  const handleChangeNameClick = () => {
    setIsFormVisible(false);
  };

  console.log(createReview);
  console.log(currentReview);

  return (
    <>
      <div>ReviewPage</div>
      <button>
        <Link to="/">Go Back</Link>
      </button>
      <div></div>
      <ReviewReducerContext.Provider value={createReview}>
        <ReviewDispatchContext.Provider value={dispatch}>
          <ReviewContext.Provider value={currentReview}>
            {isFormVisible ? (
              <>
                <h2>
                  {"Welcome " +
                    currentReview.currentReview.firstname +
                    " please create a new Wine Review!"}
                </h2>
                <button onClick={handleChangeNameClick}>change name</button>
                <Form />
              </>
            ) : (
              <WelcomePage setName={handleNameChange} />
            )}
          </ReviewContext.Provider>
        </ReviewDispatchContext.Provider>
      </ReviewReducerContext.Provider>
    </>
  );
};

export default ReviewPage;
