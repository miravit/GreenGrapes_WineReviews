import { useContext } from "react";
import { ReviewReducerContext } from "../contexts/ReviewContext";

export const AllPhotos = () => {
  const { reviews } = useContext(ReviewReducerContext);

  console.log(reviews);

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
