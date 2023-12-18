import { ChangeEvent, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";

interface PhotoUploaderProps {
  onPhotoChange: (photo: File) => void;
}
const PhotoUploader = ({ onPhotoChange }: PhotoUploaderProps) => {
  const [photoUploaded, setPhotoUploaded] = useState("");

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      onPhotoChange(file);
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
