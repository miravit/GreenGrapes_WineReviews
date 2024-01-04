import styled from "styled-components";
import { IReview } from "../models/IReview";
import { theme } from "../themes/theme";
const WineReviewCard = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  padding-top: 0;
  margin: 16px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const WineImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const WineDetails = styled.div`
  font-size: 16px;
`;

const WineName = styled.h2`
  margin: 0px;
  color: #333;
`;

const WineProducer = styled.p`
  color: #666;
`;

const WineGrape = styled.p`
  color: #666;
`;

const WineFoodPairing = styled.p`
  color: #666;
`;

const WineComment = styled.p`
  margin-top: 8px;
  color: #333;
`;

const WinePriceRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const WinePrice = styled.p`
  color: #27ae60;
`;

const WineRating = styled.p`
  color: #f39c12;
`;

const WineAlcoholPercentage = styled.p`
  margin-top: 8px;
  color: #666;
`;
interface AllPhotosProps {
  reviews: IReview[];
}

export const DetailedView = ({ reviews }: AllPhotosProps) => {
  console.log(reviews);
  return (
    <>
      {reviews.map((review, i) => (
        <WineReviewCard key={i}>
          <WineName>{review.wineName}</WineName>
          <WineImage
            src={review.photo}
            alt={`Photo of the wine: ${review.wineName}`}
          />
          <WineDetails>
            <WinePriceRatingWrapper>
              <WinePrice>{`$${review.price}`}</WinePrice>
              <WineRating>{`${review.rating}/5`}</WineRating>
              <WineAlcoholPercentage>{`Alcohol: ${review.percentage}%`}</WineAlcoholPercentage>
            </WinePriceRatingWrapper>
            <WineProducer>{review.producer}</WineProducer>
            <WineGrape>{review.grape}</WineGrape>
            <WineFoodPairing>{review.foodPairing}</WineFoodPairing>
            <WineComment>{review.comment}</WineComment>
          </WineDetails>
        </WineReviewCard>
      ))}
    </>
  );
};

export default DetailedView;
