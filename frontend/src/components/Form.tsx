import { FormEvent, useContext, useState } from "react";
import { IReview } from "../models/IReview";
import { FormStyled } from "./styled/FormStyled";
import PhotoUploader from "./PhotoUploader";
import { ReviewDispatchContext } from "../contexts/ReviewDispatchContext";
import { ActionType } from "../reducers/ReviewsReducer";
import { useForm, Controller } from "react-hook-form";

interface FormProps {
  onNextButtonClick: () => void;
}

export const Form = ({ onNextButtonClick }: FormProps) => {
  const dispatch = useContext(ReviewDispatchContext);
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const [ratingNumber, setRatingNumber] = useState(0);
  // hanterar input
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      wineName: "",
      producer: "",
      percentage: "",
      price: 0,
      rating: 0,
      foodPairing: "",
      grape: "",
      comment: "",
    },
  });

  const onSubmit = (data: Partial<IReview>) => {
    let priceToNumber = data.price;
    if (data.price !== undefined) {
      priceToNumber = +data.price;
    }
    dispatch({
      type: ActionType.UPDATEREVIEW,
      payload: {
        wineName: data.wineName,
        producer: data.producer,
        percentage: data.percentage,
        price: priceToNumber,
        rating: ratingNumber,
        foodPairing: data.foodPairing,
        grape: data.grape,
        comment: data.comment,
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

    setRatingNumber(() => {
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
        <FormStyled
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="formWrapper">
            <label>Wine Name:</label>
            <Controller
              name="wineName"
              control={control}
              render={({ field }) => (
                <>
                  <input {...field} type="text" />
                  {errors.wineName && (
                    <p className="error">{errors.wineName.message}</p>
                  )}
                </>
              )}
              rules={{ required: "Wine name is required" }}
            />

            <label>Producer:</label>
            <Controller
              name="producer"
              control={control}
              render={({ field }) => (
                <>
                  <input {...field} type="text" />
                  {errors.producer && (
                    <p className="error">{errors.producer.message}</p>
                  )}
                </>
              )}
              rules={{ required: "producer is required" }}
            />
            <div className="small-input-container">
              <div className="percentage">
                <label className="percentage-label">percentage: </label>
                <Controller
                  name="percentage"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input {...field} type="text" placeholder="%" />
                      {errors.percentage && (
                        <p className="error">{errors.percentage.message}</p>
                      )}
                    </>
                  )}
                  rules={{ required: "Percentage is required" }}
                />
              </div>
              <div className="price">
                <label className="price-label">price (sek):</label>
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input {...field} type="number" />
                      {errors.price && (
                        <p className="error">{errors.price.message}</p>
                      )}
                    </>
                  )}
                  rules={{ required: "Price is required" }}
                />
              </div>
            </div>

            <label>Food Pairing:</label>
            <Controller
              name="foodPairing"
              control={control}
              render={({ field }) => <input {...field} type="text" />}
            />

            <label>Comment:</label>
            <Controller
              name="comment"
              control={control}
              render={({ field }) => <input {...field} type="text" />}
            />
            <label>Grape:</label>
            <div className="grape-photo-wrapper">
              <Controller
                name="grape"
                control={control}
                render={({ field }) => (
                  <>
                    <div>
                      <input {...field} type="text" className="grapeInput" />
                      {errors.grape && (
                        <p className="error-grape">{errors.grape.message}</p>
                      )}
                    </div>
                  </>
                )}
                rules={{ required: "Grape is required" }}
              />
              <div className="photdiv">
                <PhotoUploader />
              </div>
            </div>
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
              <button type="submit">Next</button>
            </div>
          </div>
        </FormStyled>
      </div>
    </>
  );
};

export default Form;
