import { IReview } from "../models/IReview";
import { useContext, useState, useEffect } from "react";
import { ReviewReducerContext } from "../contexts/ReviewContext";
import { ConfirmReviewStyled } from "./styled/ConfirmReviewStyled";

export const ConfirmReview = () => {
  const createReview = useContext(ReviewReducerContext);
  const review: IReview = createReview.review;

  const [imageBlob, setImageBlob] = useState<Blob | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (typeof review.photo === "string") {
        const response = await fetch(review.photo);
        const blob = await response.blob();
        setImageBlob(blob);
      } else {
        setImageBlob(review.photo);
      }
    };

    fetchImage();
  }, [review.photo]);

  return (
    <>
      {review && (
        <>
          <ConfirmReviewStyled>
            <div className="winecard">
              <div className="wine-name-container">
                <h2 className="custom-font">{review.wineName}</h2>
              </div>
              {imageBlob && (
                <div className="img-container">
                  <img
                    src={URL.createObjectURL(imageBlob)}
                    alt={`Photo of the wine: ${review.wineName}`}
                    style={{ width: "200px", height: "250px" }}
                  />
                </div>
              )}
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
              <div className="name-container">
                <span>{review.firstname + " " + review.lastname}</span>
              </div>
            </div>
          </ConfirmReviewStyled>
        </>
      )}
    </>
  );
};

export default ConfirmReview;
