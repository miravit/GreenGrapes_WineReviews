import { useContext } from "react";
import { AllReviewsReducerContext } from "../contexts/ReviewContext";
import styled from "styled-components";

const Container = styled.div`
  width: 130px;
  margin-left: 13px;
  height: 44px;
  padding: 0;
`;

export const AllPhotos = () => {
  const { reviews } = useContext(AllReviewsReducerContext);

  return (
    <>
      <Container>
        {reviews.map((review, i) => (
          <div key={i} style={{ margin: "10px" }}>
            <img
              src={review.photo}
              alt={`Photo of the wine: ${review.wineName}`}
              style={{ width: "250px", height: "250px" }}
            />
            <p>Firstname: {review.firstname}</p>
          </div>
        ))}
      </Container>
    </>
  );
};

export default AllPhotos;
