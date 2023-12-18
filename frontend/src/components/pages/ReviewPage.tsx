import { useContext } from "react";
import Form from "../Form";
import { ReviewContext } from "../../contexts/ReviewContext";

const ReviewPage = () => {
  const { currentReview } = useContext(ReviewContext);

  console.log(currentReview);
  return (
    <>
      <div>ReviewPage</div>
      <Form></Form>
    </>
  );
};

export default ReviewPage;
