import styled from "styled-components";
import { IReview } from "../models/IReview";
import { theme } from "../themes/theme";
import { useState } from "react";
import { ReviewModal } from "./ReviewModal";

interface AllPhotosProps {
  reviews: IReview[];
}

const Container = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-left: 8px;

  .photo-div {
    margin-bottom: -6px;
  }
`;

const Photos = styled.img`
  width: 182px;
  height: 175px;
  padding-top: 0px;
  border: 1px solid ${theme.buttonColor};
  cursor: pointer;
`;

export const AllPhotos = ({ reviews }: AllPhotosProps) => {
  const [selectedReview, setSelectedReview] = useState<IReview | null>(null);

  const handlePhotoClick = (review: IReview) => {
    setSelectedReview(review);
  };

  const handleCloseModal = () => {
    setSelectedReview(null);
  };
  return (
    <>
      <Container>
        {reviews.map((review, i) => (
          <div key={i} className="photo-div">
            <Photos
              src={review.photo}
              alt={`Photo of the wine: ${review.wineName}`}
              onClick={() => handlePhotoClick(review)}
            />
          </div>
        ))}
      </Container>
      {selectedReview && (
        <ReviewModal review={selectedReview} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default AllPhotos;
