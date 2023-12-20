import { ChangeEvent, useContext, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { ReviewDispatchContext } from "../contexts/ReviewDispatchContext";
import { ActionType } from "../reducers/ReviewsReducer";

export const PhotoUploader = () => {
  const dispatch = useContext(ReviewDispatchContext);
  const [photoUploaded, setPhotoUploaded] = useState("");

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      dispatch({
        type: ActionType.UPDATEREVIEW,
        payload: {
          photo: file,
        },
      });
      setPhotoUploaded("Photo Successfully uploaded!");
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
      <p>{photoUploaded}</p>
    </>
  );
};

export default PhotoUploader;
