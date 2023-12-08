// eslint-disable-next-line @typescript-eslint/no-var-requires
import { useEffect, useState } from "react";
import axios from "axios";

const CloudinaryPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const cloud_name = import.meta.env.VITE_CLOUD_NAME;
        const api_key = import.meta.env.VITE_CLOUD_API_KEY;
        const api_secret = import.meta.env.VITE_CLOUD_API_SECRET;

        const response = await axios.get(
          `https://${api_key}:${api_secret}@api.cloudinary.com/v1_1/${cloud_name}/resources/image`
        );

        setPhotos(response.data.resources);
        console.log(response.data.resources);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);
  console.log(photos);

  return (
    <div>
      <h2>Photos from Cloudinary</h2>
      {/* <div>
        {photos.map((photo) => (
          <img
            key={photo.public_id}
            src={photo.url}
            alt={photo.public_id}
            style={{ width: "250px", height: "250px", margin: "5px" }}
          />
        ))}
      </div> */}
    </div>
  );
};

export default CloudinaryPhotos;
