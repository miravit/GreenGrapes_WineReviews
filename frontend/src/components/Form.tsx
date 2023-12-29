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
  const [ratingNumber, setRatingNumber] = useState(0);
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
        rating: ratingNumber,
        foodPairing: inputData.foodPairing,
        grape: inputData.grape,
        comment: inputData.comment,
      },
    });
    onNextButtonClick();
  };

  // star rating logic from https://javascript.plainenglish.io/how-to-use-css-and-react-to-create-a-star-rating-5bfc85882b1b
  const handleStarClick = (e: FormEvent, index: number) => {
    e.preventDefault();
    const clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);

    setRatingNumber((prevNumber) => {
      let newNumber = 0;
      for (let i = 0; i < clickStates.length; i++) {
        if (clickStates[i] === true) {
          newNumber++;
        }
      }

      return newNumber;
    });
  };
  console.log(ratingNumber);
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
              value={inputData.price === 0 ? "" : inputData.price}
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
                points="30,0 18,40 50,16 10,16 42,40"
              />
              <polygon
                onClick={(e) => handleStarClick(e, 1)}
                className={clicked[1] ? "clickedstar" : undefined}
                points="82,0 70,40 102,16 62,16 94,40"
              />
              <polygon
                onClick={(e) => handleStarClick(e, 2)}
                className={clicked[2] ? "clickedstar" : undefined}
                points="134,0 122,40 154,16 114,16 146,40"
              />
              <polygon
                onClick={(e) => handleStarClick(e, 3)}
                className={clicked[3] ? "clickedstar" : undefined}
                points="186,0 174,40 206,16 166,16 198,40"
              />
              <polygon
                onClick={(e) => handleStarClick(e, 4)}
                className={clicked[4] ? "clickedstar" : undefined}
                points="238,0 226,40 258,16 218,16 250,40"
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
