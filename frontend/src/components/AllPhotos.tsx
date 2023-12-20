import { useContext } from "react";
import { AllReviewsReducerContext } from "../contexts/ReviewContext";

export const AllPhotos = () => {
  const { reviews } = useContext(AllReviewsReducerContext);

  return (
    <>
      <div>
        {reviews.map((review, i) => (
          <div key={i} style={{ margin: "10px" }}>
            <img
              src={review.photo}
              alt={`Photo of the wine: ${review.wineName}`}
              style={{ width: "250px", height: "250px" }}
            />
            <p>Firstname: {review.firstname}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPhotos;
