import axios from "axios";
import { useEffect, useState } from "react";
import { IReview } from "../models/IReview";

const AllPhotos = () => {
  const [data, setData] = useState<IReview[]>([]);

  const getReviewData = async () => {
    const res = await axios.get<IReview[]>(
      "https://green-grapes-l2ar.onrender.com/api/v1/review",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
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
        {data.map((photo, i) => (
          <img
            key={i}
            src={photo.photo}
            alt={"photo of the wine: " + photo.wineName}
            style={{ width: "250px", height: "250px", margin: "5px" }}
          />
        ))}
      </div>
    </>
  );
};

export default AllPhotos;
