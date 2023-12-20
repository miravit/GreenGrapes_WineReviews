/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ReviewContext, ReviewReducerContext } from "../contexts/ReviewContext";
import { IReview } from "../models/IReview";
import { FormStyled } from "./styled/FormStyled";
import PhotoUploader from "./PhotoUploader";
import { ReviewDispatchContext } from "../contexts/ReviewDispatchContext";
import { ActionType } from "../reducers/ReviewsReducer";
export const Form = () => {
  const { createReview, currentReview } = useContext(ReviewContext);
  const { createNewReview, review } = useContext(ReviewReducerContext);
  const dispatch = useContext(ReviewDispatchContext);

  // hanterar inputr
  const [inputData, setInputData] = useState<IReview>({
    firstname: "",
    lastname: "",
    wineName: "",
    photo: "",
    producer: "",
    percentage: "",
    price: 0,
    rating: 0,
    foodPairing: "",
    grape: "",
    comment: "",
  });

  const [newPhoto, setNewPhoto] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputData((prevReview) => ({
      ...prevReview,
      [name]: name === "price" || name === "rating" ? +value : value,
    }));
  };

  const handlePhotoChange = (photo: File) => {
    setNewPhoto(photo);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const finishedData = new FormData();
    finishedData.append("firstname", currentReview.firstname || "");
    finishedData.append("lastname", currentReview.lastname || "");
    finishedData.append("wineName", inputData.wineName || "");
    finishedData.append("photo", newPhoto || "");
    finishedData.append("producer", inputData.producer || "");
    finishedData.append("percentage", inputData.percentage || "");
    finishedData.append("price", inputData.price.toString() || "");
    finishedData.append("rating", inputData.rating.toString() || "");
    finishedData.append("foodPairing", inputData.foodPairing || "");
    finishedData.append("grape", inputData.grape || "");
    finishedData.append("comment", inputData.comment || "");

    try {
      dispatch({
        type: ActionType.CREATENEWREVIEW,
        payload: finishedData,
      });
      await createNewReview(finishedData);
    } catch (error) {
      console.log("sorry could not post review");
    }
  };

  return (
    <>
      <div>
        <FormStyled onSubmit={handleSubmit} encType="multipart/form-data">
          <label>
            Wine Name:
            <input
              type="text"
              name="wineName"
              value={inputData.wineName}
              onChange={handleChange}
            />
          </label>

          <label>
            Producer:
            <input
              type="text"
              name="producer"
              value={inputData.producer}
              onChange={handleChange}
            />
          </label>

          <label>
            Percentage:
            <input
              type="text"
              name="percentage"
              value={inputData.percentage}
              onChange={handleChange}
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="price"
              value={inputData.price}
              onChange={handleChange}
            />
          </label>

          <label>
            Rating:
            <input
              type="number"
              name="rating"
              value={inputData.rating}
              onChange={handleChange}
            />
          </label>

          <label>
            Food Pairing:
            <input
              type="text"
              name="foodPairing"
              value={inputData.foodPairing}
              onChange={handleChange}
            />
          </label>

          <label>
            Grape:
            <input
              type="text"
              name="grape"
              value={inputData.grape}
              onChange={handleChange}
            />
          </label>

          <label>
            Comment:
            <input
              type="text"
              name="comment"
              value={inputData.comment}
              onChange={handleChange}
            />
          </label>

          <PhotoUploader onPhotoChange={handlePhotoChange} />
          <button type="submit">Submit</button>
        </FormStyled>
      </div>
    </>
  );
};

export default Form;
