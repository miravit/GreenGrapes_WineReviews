import Searchbar from "../Searchbar";
import ViewButtons from "../ViewButtons";
import Feed from "./Feed";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Searchbar />
      <ViewButtons />
      <Link to="/review">Create a Review!</Link>
      <Feed />
    </>
  );
};

export default HomePage;
