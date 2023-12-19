import Searchbar from "../Searchbar";
import Feed from "./Feed";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Searchbar />
      <Link to="/review">Create a Review!</Link>
      <Feed />
    </>
  );
};

export default HomePage;
