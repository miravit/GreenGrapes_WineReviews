import { useEffect, useState } from "react";
import { IReviewContext, ReviewContext } from "../../contexts/ReviewContext";
import { IName, IReview } from "../../models/IReview";
import { createNewReview } from "../../services/reviewApi";
import Form from "../Form";
import WelcomePage from "./WelcomePage";
import { Link } from "react-router-dom";

export const ReviewPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [name, setName] = useState<IName>({
    firstname: "",
    lastname: "",
  });

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

  console.log(currentReview);

  return (
    <>
      <div>ReviewPage</div>
      <button>
        <Link to="/">Go Back</Link>
      </button>
      <div></div>
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
    </>
  );
};

export default ReviewPage;
