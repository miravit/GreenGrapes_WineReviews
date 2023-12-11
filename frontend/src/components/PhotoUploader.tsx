import { MdOutlineAddAPhoto } from "react-icons/md";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { IReview } from "../models/IReview";

const PhotoUploader = () => {
  const [newReview, setNewReview] = useState<IReview>({
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

  const [photoUploaded, setPhotoUploaded] = useState("");
  //const [images, setImage] = useState("");

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setNewReview({ ...newReview, [e.target.name]: e.target.value });
  // };

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setNewReview({ ...newReview, photo: e.target.files![0] });
    if (e.target.files![0]) {
      setPhotoUploaded("Photo Successfully uploaded!");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", newReview.firstname || "");
    formData.append("lastname", newReview.lastname || "");
    formData.append("wineName", newReview.wineName || "");
    formData.append("photo", newReview.photo || "");
    formData.append("producer", newReview.producer || "");
    formData.append("percentage", newReview.percentage || "");
    formData.append("price", newReview.price.toString() || "");
    formData.append("rating", newReview.rating.toString() || "");
    formData.append("foodPairing", newReview.foodPairing || "");
    formData.append("grape", newReview.grape || "");
    formData.append("comment", newReview.comment || "");
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
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* <input
          type="text"
          placeholder="firstname"
          name="firstname"
          value={newReview.firstname}
          onChange={handleChange}
        /> */}
        <input type="submit" />
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
      </form>
      <p>{photoUploaded}</p>
      <div></div>
    </>
  );
};

export default PhotoUploader;