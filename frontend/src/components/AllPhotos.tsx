import { useContext } from "react";
import { AllReviewsReducerContext } from "../contexts/ReviewContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const Photos = styled.img`
  width: 170px;
  height: 170px;
  padding: 5px;
`;

export const AllPhotos = () => {
  const { reviews } = useContext(AllReviewsReducerContext);

  return (
    <>
      <Container>
        {reviews.map((review, i) => (
          <div key={i}>
            <Photos
              src={review.photo}
              alt={`Photo of the wine: ${review.wineName}`}
            />
          </div>
        ))}
      </Container>
    </>
  );
};

export default AllPhotos;
