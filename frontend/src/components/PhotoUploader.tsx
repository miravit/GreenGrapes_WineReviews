//import { MdOutlineAddAPhoto } from "react-icons/md";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { IReview } from "../models/IReview";

const PhotoUploader = () => {
  interface INewPhoto {
    uploadedPhoto: File | null;
    // other properties...
  }

  const [newReview, setNewReview] = useState<IReview>({
    firstname: "",
    lastname: "test",
    wineName: "test",
    photo: "test",
    producer: "test",
    percentage: "test",
    price: 0,
    rating: 1,
    foodPairing: "test",
    grape: "test",
    comment: "test",
  });

  const [newPhoto, setNewPhoto] = useState<INewPhoto>({
    uploadedPhoto: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  //   const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
  //     if (!e.target.files) return;
  //     setNewPhoto({ ...newPhoto, uploadedPhoto: e.target.files[0] });
  //     console.log(e.target.files[0]);
  //   };

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    //if (!e.target.files) return;
    setNewReview({ ...newReview, photo: e.target.files![0] });
  };

  console.log(newPhoto);
  console.log(newReview);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", newReview.firstname);
    formData.append("lastname", newReview.lastname);
    formData.append("wineName", newReview.wineName);
    formData.append("photo", newReview.photo);
    formData.append("producer", newReview.producer);
    formData.append("percentage", newReview.percentage);
    formData.append("price", newReview.price.toString());
    formData.append("rating", newReview.rating.toString());
    formData.append("foodPairing", newReview.foodPairing);
    formData.append("grape", newReview.grape);
    formData.append("comment", newReview.comment);
    console.log(FormData);

    console.log(formData);
    const response = await axios.post<IReview>(
      "http://localhost:4000/api/v1/review",
      formData
    );
    console.log(response.data);
    return response.data;
  };

  return (
    // <label className="uploadButton" htmlFor="file_picker">
    //   <MdOutlineAddAPhoto />
    //   <input
    //     hidden
    //     type="file"
    //     name="file_picker"
    //     id="file_picker"
    //     onChange={(e) => handleChange(e)}
    //   />
    // </label>
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="photo"
          onChange={handlePhoto}
        />
        <input
          type="text"
          placeholder="firstname"
          name="firstname"
          value={newReview.firstname}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default PhotoUploader;
