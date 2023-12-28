import { useContext, useEffect, useState } from "react";
import { ReviewReducerContext } from "../../contexts/ReviewContext";
import Form from "../Form";
import WelcomeInput from "./WelcomeInput";
import ConfirmReview from "../ConfirmReview";
import { ReviewDispatchContext } from "../../contexts/ReviewDispatchContext";
import { ActionType } from "../../reducers/ReviewsReducer";
import { createNewReview } from "../../services/reviewApi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import styled from "styled-components";

const BackContainer = styled.div`
  display: flex;
  cursor: pointer;

  .back-arrow {
    font-size: 35px;
    padding-right: 5px;
  }

  p {
    margin-top: 3px;
  }
`;

export const ReviewPage = () => {
  const dispatch = useContext(ReviewDispatchContext);
  const createReview = useContext(ReviewReducerContext);
  const [showForm, setShowForm] = useState(false);
  const [showConfirmReview, setShowConfirmReview] = useState(false);

  useEffect(() => {
    if (createReview.review.firstname !== "") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, [createReview]);

  const handleChangeNameClick = () => {
    setShowForm(false);
    setShowConfirmReview(false);
  };
  const handleNextButtonClick = () => {
    if (Object.values(createReview.review).every((value) => value)) {
      setShowConfirmReview(true);
      setShowForm(false);
    } else {
      // At least one property is missing a value, do something else...
      console.log("At least one property is missing a value");
    }
  };
  const handleEditClick = () => {
    setShowForm(true);
    setShowConfirmReview(false);
  };
  const handlePostClick = async () => {
    const finishedData = new FormData();
    finishedData.append("firstname", createReview.review.firstname || "");
    finishedData.append("lastname", createReview.review.lastname || "");
    finishedData.append("wineName", createReview.review.wineName || "");
    finishedData.append("photo", createReview.review.photo || "");
    finishedData.append("producer", createReview.review.producer || "");
    finishedData.append("percentage", createReview.review.percentage || "");
    finishedData.append("price", createReview.review.price.toString() || "");
    finishedData.append("rating", createReview.review.rating.toString() || "");
    finishedData.append("foodPairing", createReview.review.foodPairing || "");
    finishedData.append("grape", createReview.review.grape || "");
    finishedData.append("comment", createReview.review.comment || "");
    try {
      dispatch({
        type: ActionType.CREATENEWREVIEW,
        payload: finishedData,
      });
      await createNewReview(finishedData);

      dispatch({
        type: ActionType.CREATENEWREVIEW,
        payload: {
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

      setShowConfirmReview(false);
    } catch (error) {
      console.log("sorry could not post review" + error);
    }
  };

  return (
    <>
      <div></div>

      {showForm && !showConfirmReview && (
        <>
          <BackContainer onClick={handleChangeNameClick}>
            <MdOutlineKeyboardBackspace className="back-arrow" />
            <p> Change Name</p>
          </BackContainer>
          {/* <h2>{"Welcome " + createReview.review.firstname + "!"}</h2> */}
          <Form onNextButtonClick={handleNextButtonClick} />
        </>
      )}

      {showConfirmReview && (
        <>
          <ConfirmReview />
          <div>
            <button onClick={handleEditClick}>Edit Review</button>
            <button onClick={handlePostClick}>Post Review</button>
          </div>
        </>
      )}

      {!showForm && !showConfirmReview && <WelcomeInput />}
    </>
  );
};

export default ReviewPage;
