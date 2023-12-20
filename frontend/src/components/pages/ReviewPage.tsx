import { useContext, useEffect, useState } from "react";
import { ReviewReducerContext } from "../../contexts/ReviewContext";

import Form from "../Form";
import { Link } from "react-router-dom";
//import { ReviewDispatchContext } from "../../contexts/ReviewDispatchContext";
import WelcomeInput from "./WelcomeInput";

export const ReviewPage = () => {
  //const dispatch = useContext(ReviewDispatchContext)
  const createReview = useContext(ReviewReducerContext);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (
      createReview.review.firstname !== "" &&
      createReview.review.firstname !== ""
    ) {
      setIsFormVisible(true);
    } else {
      setIsFormVisible(false);
    }
  }, [createReview]);

  const handleChangeNameClick = () => {
    setIsFormVisible(false);
  };

  console.log(createReview);

  return (
    <>
      <div>ReviewPage</div>
      <button>
        <Link to="/">Go Back</Link>
      </button>
      <div></div>

      {isFormVisible ? (
        <>
          <h2>
            {"Welcome " +
              createReview.review.firstname +
              " please create a new Wine Review!"}
          </h2>
          <button onClick={handleChangeNameClick}>change name</button>
          <Form />
        </>
      ) : (
        <WelcomeInput />
      )}
    </>
  );
};

export default ReviewPage;
