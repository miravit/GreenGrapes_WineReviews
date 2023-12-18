import axios from "axios";
import { useEffect, useState } from "react";
import { IReview } from "../models/IReview";

const AllPhotos = () => {
  const [data, setData] = useState<IReview[]>([]);

  const getReviewData = async () => {
    const res = await axios.get<IReview[]>(
      "https://green-grapes-l2ar.onrender.com/api/v1/review"
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
    );

    if (res.status == 200) {
      setData(res.data);
    } else {
      alert("error");
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <>
      <div>
        {data.map((review, i) => (
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
