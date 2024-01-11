import { ChangeEvent, useContext, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { ReviewDispatchContext } from "../contexts/ReviewDispatchContext";
import { ActionType } from "../reducers/ReviewsReducer";
import styled from "styled-components";

const PhotoHandler = styled.div``;
const PhotoAdded = styled.p`
  margin-left: -160px;

  @media (min-width: 768px) {
    margin-left: -200px;
  }
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
    }
  };

  return (
    <PhotoHandler>
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
      <PhotoAdded>{uploadedPhotoText}</PhotoAdded>
    </PhotoHandler>
  );
};

export default PhotoUploader;
