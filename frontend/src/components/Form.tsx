/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { IReview } from "../models/IReview";
import { FormStyled } from "./styled/FormStyled";
import PhotoUploader from "./PhotoUploader";
import { ReviewDispatchContext } from "../contexts/ReviewDispatchContext";
import { ActionType } from "../reducers/ReviewsReducer";

interface FormProps {
  onNextButtonClick: () => void;
}

export const Form = ({ onNextButtonClick }: FormProps) => {
  const dispatch = useContext(ReviewDispatchContext);
  // hanterar input
  const [inputData, setInputData] = useState<Partial<IReview>>({
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputData((prevReview) => ({
      ...prevReview,
      [name]: name === "price" || name === "rating" ? +value : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.UPDATEREVIEW,
      payload: {
        wineName: inputData.wineName,
        producer: inputData.producer,
        percentage: inputData.percentage,
        price: inputData.price,
        rating: inputData.rating,
        foodPairing: inputData.foodPairing,
        grape: inputData.grape,
        comment: inputData.comment,
      },
    });
    onNextButtonClick();
  };

  return (
    <>
      <div>
        <FormStyled onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Wine Name:</label>
          <input
            type="text"
            name="wineName"
            value={inputData.wineName}
            onChange={handleChange}
          />

          <label>Producer:</label>
          <input
            type="text"
            name="producer"
            value={inputData.producer}
            onChange={handleChange}
          />
          <div className="small-input-container">
            <input
              className="percentage"
              type="text"
              name="percentage"
              value={inputData.percentage}
              onChange={handleChange}
            />
            <label className="percentage-label">%</label>

            <input
              className="price"
              type="number"
              name="price"
              value={inputData.price}
              onChange={handleChange}
            />
            <label className="price-label">kr</label>
          </div>

          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={inputData.rating}
            onChange={handleChange}
          />

          <label>Food Pairing:</label>
          <input
            type="text"
            name="foodPairing"
            value={inputData.foodPairing}
            onChange={handleChange}
          />

          <label>Grape:</label>
          <input
            type="text"
            name="grape"
            value={inputData.grape}
            onChange={handleChange}
          />

          <label>Comment:</label>
          <input
            type="text"
            name="comment"
            value={inputData.comment}
            onChange={handleChange}
          />
          <div className="button-container">
            <PhotoUploader />
            <button type="submit">Next</button>
          </div>
        </FormStyled>
      </div>
    </>
  );
};

export default Form;
