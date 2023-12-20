import { ChangeEvent, useContext, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { ReviewDispatchContext } from "../contexts/ReviewDispatchContext";
import { ActionType } from "../reducers/ReviewsReducer";

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
      setUploadedPhotoText("Photo Added!");
    }
  };

  return (
    <>
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
      <div>
        <p>{uploadedPhotoText}</p>
      </div>
    </>
  );
};

export default PhotoUploader;
