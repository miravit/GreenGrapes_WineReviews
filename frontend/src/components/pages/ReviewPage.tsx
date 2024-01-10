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
import { theme } from "../../themes/theme";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import { IoMdClose } from "react-icons/io";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin-top: 10px;

  button {
    margin-right: 20px;
    margin-left: 20px;
    background-color: ${theme.buttonColor};
    color: ${theme.buttonTextColor};
    width: 100px;
  }
`;

const LoadingWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingContainer = styled.div`
  padding: 10px;
  padding-top: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  background-color: white;
  color: black;
  width: 70%;
`;

const CloseButton = styled.button`
  //top: 10px;
  //right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px;

  .close-icon {
    font-size: 25pt;
    margin-left: 240px;
  }
`;

export const ReviewPage = () => {
  const dispatch = useContext(ReviewDispatchContext);
  const createReview = useContext(ReviewReducerContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showConfirmReview, setShowConfirmReview] = useState(false);
  const [showNameModal, setShowNameModal] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (createReview.review.firstname !== "") {
      setShowForm(true);
      setShowNameModal(false);
    } else {
      setShowForm(false);
    }
  }, [createReview]);

  const handleChangeNameClick = () => {
    setShowForm(false);
    setShowConfirmReview(false);
    setShowNameModal(true);
  };
  const handleNextButtonClick = () => {
    const { wineName, producer, percentage, price, rating, grape } =
      createReview.review;

    if (wineName && producer && percentage && price && rating && grape) {
      setShowConfirmReview(true);
      setShowForm(false);
    } else {
      // At least one required property is missing a value, do something else...
      console.log("At least one required property is missing a value");
      setShowConfirmReview(false);
    }
  };
  const handleEditClick = () => {
    setShowForm(true);
    setShowConfirmReview(false);
  };
  const handlePostClick = async () => {
    setShowForm(false);
    setShowConfirmReview(false);
    setLoading(true);
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
      setLoading(false);

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

      navigate("/");
    } catch (error) {
      console.log("sorry could not post review" + error);
      setErrorMessage(
        "Sorry! Could not post due to technical issues. Please go back, check your network connection and try again!"
      );
    }
  };

  const onLoadingClose = () => {
    setErrorMessage("");
    setLoading(false);
  };

  const handleGoBack = () => {
    navigate("/");
    setShowNameModal(false);
  };

  return (
    <>
      {showNameModal && !showConfirmReview && (
        <>
          <WelcomeInput onClick={handleGoBack} />
          <Form onNextButtonClick={handleNextButtonClick} />
        </>
      )}
      {errorMessage && (
        <LoadingWrapper>
          <LoadingContainer onClick={onLoadingClose}>
            <CloseButton onClick={onLoadingClose}>
              <IoMdClose className="close-icon" />
            </CloseButton>
            {errorMessage}
          </LoadingContainer>
        </LoadingWrapper>
      )}
      {loading && <LoadingSpinner />}
      {showForm && !showConfirmReview && !errorMessage && !loading && (
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
          <ButtonContainer>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handlePostClick}>Post</button>
          </ButtonContainer>
        </>
      )}
    </>
  );
};

export default ReviewPage;
