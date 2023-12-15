import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { ReviewContext } from "../contexts/ReviewContext";
import { IReview } from "../models/IReview";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { FormStyled } from "./styled/FormStyled";
import axios from "axios";

const Form = () => {
  const { createReview, currentReview } = useContext(ReviewContext);
  const [photoUploaded, setPhotoUploaded] = useState("");

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.name === "price" || e.target.name === "rating") {
      setFormData((prevReview) => ({
        ...prevReview,
        [name]: +value,
      }));
    } else {
      setFormData((prevReview) => ({
        ...prevReview,
        [name]: value,
      }));
    }
  };

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setFormData({ ...formData, photo: e.target.files![0] });
    if (e.target.files![0]) {
      setPhotoUploaded("Photo Successfully uploaded!");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const finishedData = new FormData();
    finishedData.append("firstname", formData.firstname || "");
    finishedData.append("lastname", formData.lastname || "");
    finishedData.append("wineName", formData.wineName || "");
    finishedData.append("photo", formData.photo || "");
    finishedData.append("producer", formData.producer || "");
    finishedData.append("percentage", formData.percentage || "");
    finishedData.append("price", formData.price.toString() || "");
    finishedData.append("rating", formData.rating.toString() || "");
    finishedData.append("foodPairing", formData.foodPairing || "");
    finishedData.append("grape", formData.grape || "");
    finishedData.append("comment", formData.comment || "");

    const response = await axios.post<IReview>(
      "https://green-grapes-l2ar.onrender.com/api/v1/review",
      finishedData
    );
    console.log(response);
    createReview(finishedData);
  };

  console.log(currentReview.firstname);
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

          <label className="uploadButton" htmlFor="file_picker">
            <MdOutlineAddAPhoto />
            <input
              hidden
              type="file"
              name="PHOTO"
              accept=".png, .jpg, .jpeg"
              id="file_picker"
              onChange={(e) => handlePhoto(e)}
            />
          </label>
          <p>{photoUploaded}</p>
          <button type="submit">Submit</button>
        </FormStyled>
      </div>
    </>
  );
};

export default Form;
