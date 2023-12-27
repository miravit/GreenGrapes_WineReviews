import { ChangeEvent, useContext, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { ReviewDispatchContext } from "../contexts/ReviewDispatchContext";
import { ActionType } from "../reducers/ReviewsReducer";
import styled from "styled-components";

const PhotoAdded = styled.p`
  margin-left: -20px;
  margin-right: 20px;
`;

export const PhotoUploader = () => {
  const dispatch = useContext(ReviewDispatchContext);
  const [uploadedPhotoText, setUploadedPhotoText] = useState("");

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      dispatch({
        type: ActionType.UPDATEREVIEW,
        payload: {
          photo: file,
        },
      });
      setUploadedPhotoText("Photo Added ✔");
      //setUploadedPhoto(file);
    }
  };

  return (
    <>
      <label className="uploadButton" htmlFor="file_picker">
        <MdOutlineAddAPhoto className="photo-icon" />
        <input
          hidden
          type="file"
          name="PHOTO"
          accept=".png, .jpg, .jpeg"
          id="file_picker"
          onChange={(e) => handlePhoto(e)}
        />
      </label>
      <div>
        <PhotoAdded>{uploadedPhotoText}</PhotoAdded>
        {/* <img
          src={URL.createObjectURL(review.photo)}
          alt={`Photo of the wine`}
          style={{ width: "100px", height: "130px" }}
        /> */}
      </div>
    </>
  );
};

export default PhotoUploader;
