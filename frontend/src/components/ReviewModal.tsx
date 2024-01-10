import styled from "styled-components";
import { IReview } from "../models/IReview";
import { theme } from "../themes/theme";
import { IoMdClose } from "react-icons/io";

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

const StaticText = styled.span`
  //color: #666;
  font-style: normal;
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
  font-style: oblique;
`;

const WineGrape = styled.p`
  //color: #666;
  color: #333;
  font-style: oblique;
`;

const WineFoodPairing = styled.p`
  //color: #666;
  color: #333;
  font-style: oblique;
`;

const WineComment = styled.p`
  margin-top: 8px;
  color: #333;
  font-style: oblique;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: end;
  //text-decoration: underline black;
`;
const UserName = styled.span`
  color: #333;
  font-size: 10pt;
  font-style: oblique;
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  // background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 80%;
  overflow-y: auto;
  color: black;
`;

const CloseButton = styled.button`
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  height: 0px;

  .close-icon {
    font-size: 25pt;
    margin-left: 240px;
  }
`;

interface ReviewModalProps {
  review: IReview;
  onClose: () => void;
}

export const ReviewModal = ({ review, onClose }: ReviewModalProps) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <>
          <WineReviewCard>
            <CloseButton onClick={onClose}>
              <IoMdClose className="close-icon" />
            </CloseButton>
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
                <WineProducer>
                  <StaticText>{"Producer: "}</StaticText>
                  <span>{review.producer}</span>
                </WineProducer>
                <WineGrape>
                  <StaticText>{"Grape: "}</StaticText>
                  <span>{review.grape}</span>
                </WineGrape>
                <WineComment>
                  <StaticText>{"Comment: "}</StaticText>
                  <span>{review.comment}</span>
                </WineComment>
                <WineFoodPairing>
                  <StaticText>{"Food Recommendation: "}</StaticText>
                  <span>{review.foodPairing}</span>
                </WineFoodPairing>
              </WineDetails>
              <NameWrapper>
                <UserName>{review.firstname + " " + review.lastname}</UserName>
              </NameWrapper>
            </SmallerContainer>
          </WineReviewCard>
        </>
      </ModalContent>
    </ModalOverlay>
  );
};
