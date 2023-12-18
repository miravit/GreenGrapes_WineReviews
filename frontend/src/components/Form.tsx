
/* eslint-disable @typescript-eslint/no-unused-vars */


import { ChangeEvent, FormEvent, useContext, useState } from "react";


import { ReviewContext } from "../contexts/ReviewContext";
import { IReview } from "../models/IReview";

import { FormStyled } from "./styled/FormStyled";

import PhotoUploader from "./PhotoUploader";


const Form = () => {
  const { createReview } = useContext(ReviewContext);

  const [formData, setFormData] = useState<IReview>({
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

    setFormData((prevReview) => ({
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
    finishedData.append("firstname", formData.firstname || "");
    finishedData.append("lastname", formData.lastname || "");
    finishedData.append("wineName", formData.wineName || "");
    finishedData.append("photo", newPhoto || "");
    finishedData.append("producer", formData.producer || "");
    finishedData.append("percentage", formData.percentage || "");
    finishedData.append("price", formData.price.toString() || "");
    finishedData.append("rating", formData.rating.toString() || "");
    finishedData.append("foodPairing", formData.foodPairing || "");
    finishedData.append("grape", formData.grape || "");
    finishedData.append("comment", formData.comment || "");


    try {
      const response = await createReview(finishedData);
    } catch (error) {
      console.log("sorry couldnt post review");
    }

  };

  return (
    <>
      <div>
        <FormStyled onSubmit={handleSubmit} encType="multipart/form-data">
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </label>

          <label>
            Wine Name:
            <input
              type="text"
              name="wineName"
              value={formData.wineName}
              onChange={handleChange}
            />
          </label>

          <label>
            Producer:
            <input
              type="text"
              name="producer"
              value={formData.producer}
              onChange={handleChange}
            />
          </label>

          <label>
            Percentage:
            <input
              type="text"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </label>

          <label>
            Rating:
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </label>

          <label>
            Food Pairing:
            <input
              type="text"
              name="foodPairing"
              value={formData.foodPairing}
              onChange={handleChange}
            />
          </label>

          <label>
            Grape:
            <input
              type="text"
              name="grape"
              value={formData.grape}
              onChange={handleChange}
            />
          </label>

          <label>
            Comment:
            <input
              type="text"
              name="comment"
              value={formData.comment}
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
