import { ChangeEvent, useContext, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { ReviewDispatchContext } from "../contexts/ReviewDispatchContext";
import { ActionType } from "../reducers/ReviewsReducer";
// import { ReviewReducerContext } from "../contexts/ReviewContext";
// import { IReview } from "../models/IReview";

export const PhotoUploader = () => {
  const dispatch = useContext(ReviewDispatchContext);
  // const createReview = useContext(ReviewReducerContext);
  // const review: IReview = createReview.review;
  const [uploadedPhotoText, setUploadedPhotoText] = useState("");
  //const [uploadedPhoto, setUploadedPhoto] = useState<File>();

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
      //setUploadedPhoto(file);
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
