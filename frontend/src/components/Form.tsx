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
  const [clicked, setClicked] = useState([false, false, false, false, false]);
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

  // kan vara fel ts types!
  const handleStarClick = (e: FormEvent, index: number) => {
    e.preventDefault();
    const clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
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
          <div className="rating">
            <svg xmlns="http://www.w3.org/2000/svg" className="star">
              <polygon
                onClick={(e) => handleStarClick(e, 0)}
                className={clicked[0] ? "clickedstar" : undefined}
                points="20,0 8,40 40,16 0,16 32,40"
              />
              <polygon
                onClick={(e) => handleStarClick(e, 1)}
                className={clicked[1] ? "clickedstar" : undefined}
                points="62,0 50,40 82,16 42,16 74,40"
              />
              <polygon
                onClick={(e) => handleStarClick(e, 2)}
                className={clicked[2] ? "clickedstar" : undefined}
                points="104,0 92,40 124,16 84,16 116,40"
              />
              <polygon
                onClick={(e) => handleStarClick(e, 3)}
                className={clicked[3] ? "clickedstar" : undefined}
                points="146,0 134,40 166,16 126,16 158,40"
              />
              <polygon
                onClick={(e) => handleStarClick(e, 4)}
                className={clicked[4] ? "clickedstar" : undefined}
                points="188,0 176,40 208,16 168,16 200,40"
              />
            </svg>
          </div>
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
