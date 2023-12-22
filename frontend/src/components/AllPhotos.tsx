import { useContext } from "react";
import { AllReviewsReducerContext } from "../contexts/ReviewContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Photos = styled.img`
  width: 175px;
  height: 175px;
  padding: 6px;
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
