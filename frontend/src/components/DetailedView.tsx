import styled from "styled-components";
import { IReview } from "../models/IReview";
import { DetailedViewStyled } from "./styled/DetailedViewStyled";

interface AllPhotosProps {
  reviews: IReview[];
}

const Div = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin-left: 30px;
  }
  @media (min-width: 1024px) {
    justify-content: left;
    margin-left: 93px;
  }
`;

export const DetailedView = ({ reviews }: AllPhotosProps) => {
  return (
    <>
      <Div>
        {reviews.map((review, i) => (
          <DetailedViewStyled className="winecard" key={i}>
            <div className="winecard">
              <div className="wine-name-container">
                <h2 className="custom-font">{review.wineName}</h2>
              </div>
              <div className="img-container">
                <img
                  src={review.photo}
                  alt={`Photo of the wine: ${review.wineName}`}
                />
              </div>
              <div className="wine-details-container">
                <div className="small-info-container">
                  <p>{`${review.price} kr`}</p>
                  <p>{`${review.rating}/5`}</p>
                  <p>{`${review.percentage}%`}</p>
                </div>
                <div className="text-wrapper">
                  <span>{"Producer: "}</span>
                  <span className="dynamic-text">{review.producer}</span>
                </div>
                <div className="text-wrapper">
                  <span>{"Grape: "}</span>
                  <span className="dynamic-text">{review.grape}</span>
                </div>
                <div className="text-wrapper">
                  <span>{"Comment: "}</span>
                  <span className="dynamic-text">{review.comment}</span>
                </div>
                <div className="text-wrapper">
                  <span>{"Food Recommendation: "}</span>
                  <span className="dynamic-text">{review.foodPairing}</span>
                </div>
              </div>
            </div>
            <div className="name-container">
              <span>{review.firstname + " " + review.lastname}</span>
            </div>
          </DetailedViewStyled>
        ))}
      </Div>
    </>
  );
};

export default DetailedView;
