import React, { useContext } from "react";
import { ReviewReducerContext } from "../contexts/ReviewContext";
import { IReview } from "../models/IReview";

const ConfirmReview = () => {
  const createReview = useContext(ReviewReducerContext);
  const review: IReview = createReview.review;

  console.log(review.photo);

  return (
    <>
      {review && (
        <div>
          <img
            src={URL.createObjectURL(review.photo)}
            alt={`Photo of the wine: ${review.wineName}`}
            style={{ width: "250px", height: "250px" }}
          />
          <p>Wine Name: {review.wineName}</p>
          <div>
            <p>Price: {review.price}</p>
            <p>Rating: {review.rating}</p>
          </div>
          <p>Percentage: {review.percentage}</p>
          <p>Grape: {review.grape}</p>
          <p>Producer: {review.producer}</p>
          <p>Food Pairing: {review.foodPairing}</p>
          <label> Comment: </label>
          <p>{review.comment}</p>
          <p>Name: {review.firstname + " " + review.lastname}</p>
        </div>
      )}
    </>
  );
};

export default ConfirmReview;
