import styled from "styled-components";
import { IReview } from "../models/IReview";
import { theme } from "../themes/theme";
const WineReviewCard = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  padding-top: 8px;
  margin: 16px;
  margin-top: 20px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #84ba5a;

  &:hover {
    transform: scale(1.05);
  }
`;

const SmallerContainer = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  padding-top: 2px;
  margin: 7px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #ffffff75;

  &:hover {
    transform: scale(1.01);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const WineImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
  border: 2px;
`;

const WineDetails = styled.div`
  font-size: 14px;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const WineName = styled.h2`
  margin: 0px;
  padding-bottom: 3px;
  color: #333;
  font-size: 14pt;
  text-align: center;
`;
const WineProducer = styled.p`
  //color: #666;
  color: #333;
`;

const WineGrape = styled.p`
  //color: #666;
  color: #333;
`;

const WineFoodPairing = styled.p`
  //color: #666;
  color: #333;
`;

const WineComment = styled.p`
  margin-top: 8px;
  color: #333;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: end;
  //text-decoration: underline black;
`;
const UserName = styled.span`
  color: #333;
  font-size: 10pt;
`;

const WinePriceRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  max-width: 100vw;
  color: white;
  margin-bottom: 10px;

  p {
    border: 2px solid white;
    border-radius: 8px;
    width: 70px;
    text-align: center;
    //margin-right: 20px;
    //background-color: ${theme.secondaryColor};
  }
`;

const WinePrice = styled.p`
  //color: #27ae60;
  color: #333;
`;

const WineRating = styled.p`
  color: #333;
`;

const WineAlcoholPercentage = styled.p`
  //color: #666;
  color: #333;
`;
interface AllPhotosProps {
  reviews: IReview[];
}

export const DetailedView = ({ reviews }: AllPhotosProps) => {
  return (
    <>
      {reviews.map((review, i) => (
        <WineReviewCard key={i}>
          <SmallerContainer>
            <HeadingContainer>
              <WineName className="custom-font">{review.wineName}</WineName>
            </HeadingContainer>
            <ImageContainer>
              <WineImage
                src={review.photo}
                alt={`Photo of the wine: ${review.wineName}`}
              />
            </ImageContainer>
            <WineDetails>
              <WinePriceRatingWrapper>
                <WinePrice>{`${review.price} kr`}</WinePrice>
                <WineRating>{`${review.rating}/5`}</WineRating>
                <WineAlcoholPercentage>{`${review.percentage}%`}</WineAlcoholPercentage>
              </WinePriceRatingWrapper>
              <WineProducer>{"Producer: " + review.producer}</WineProducer>
              <WineGrape>{"Grape: " + review.grape}</WineGrape>
              <WineFoodPairing>
                {"Food Recommendation: " + review.foodPairing}
              </WineFoodPairing>
              <WineComment>{"Comment: " + review.comment}</WineComment>
            </WineDetails>
            <NameWrapper>
              <UserName>{review.firstname + " " + review.lastname}</UserName>
            </NameWrapper>
          </SmallerContainer>
        </WineReviewCard>
      ))}
    </>
  );
};

export default DetailedView;
