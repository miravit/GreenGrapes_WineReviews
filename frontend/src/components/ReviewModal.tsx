import { IReview } from "../models/IReview";
import { IoMdClose } from "react-icons/io";
import { ReviewModalStyled } from "./styled/ReviewModalStyled";

interface ReviewModalProps {
  review: IReview;
  onClose: () => void;
}

export const ReviewModal = ({ review, onClose }: ReviewModalProps) => {
  return (
    <ReviewModalStyled onClick={onClose}>
      <div className="modal-content">
        <>
          <div className="winecard">
            <button className="close-button" onClick={onClose}>
              <IoMdClose className="close-icon" />
            </button>
            <div className="winecard-smaller">
              <div className="wine-name-container">
                <h2 className="wine-name custom-font">{review.wineName}</h2>
              </div>
              <div className="wine-img-container">
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
                  <span className="static-text">{review.producer}</span>
                </div>
                <div className="text-wrapper">
                  <span>{"Grape: "}</span>
                  <span className="static-text">{review.grape}</span>
                </div>
                <div className="text-wrapper">
                  <span>{"Comment: "}</span>
                  <span className="static-text">{review.comment}</span>
                </div>
                <div className="text-wrapper">
                  <span>{"Food Recommendation: "}</span>
                  <span className="static-text">{review.foodPairing}</span>
                </div>
              </div>
              <div className="name-wrapper">
                <span>{review.firstname + " " + review.lastname}</span>
              </div>
            </div>
          </div>
        </>
      </div>
    </ReviewModalStyled>
  );
};
