import styled from "styled-components";
import { IReview } from "../models/IReview";

interface AllPhotosProps {
  reviews: IReview[];
}

const Container = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;
  margin-left: 16px;

  .photo-div {
    margin-bottom: -3px;
  }
`;

const Photos = styled.img`
  width: 175px;
  height: 175px;
  padding-top: 0px;
  border: 1px solid black;
`;

export const AllPhotos = ({ reviews }: AllPhotosProps) => {
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
