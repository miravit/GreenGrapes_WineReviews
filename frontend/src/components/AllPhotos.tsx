import { useContext } from "react";
import { AllReviewsReducerContext } from "../contexts/ReviewContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;

  .photo-div {
    margin-bottom: -3px;
  }
`;

const Photos = styled.img`
  width: 175px;
  height: 175px;
  padding-top: 0px;
`;

export const AllPhotos = () => {
  const { reviews } = useContext(AllReviewsReducerContext);

  return (
    <>
      <Container>
        {reviews.map((review, i) => (
          <div key={i} className="photo-div">
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
