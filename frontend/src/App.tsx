import "./App.css";
import AllPhotos from "./components/AllPhotos";
import CloudinaryPhotos from "./components/CloudinaryPhotos";
import PhotoUploader from "./components/PhotoUploader";

function App() {
  return (
    <>
      <PhotoUploader />
      {/* <CloudinaryPhotos /> */}
      <AllPhotos />
    </>
  );
}

export default App;
