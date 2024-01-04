import { useContext, useState } from "react";
import { AllReviewsReducerContext } from "../../contexts/ReviewContext";
import AllPhotos from "../AllPhotos";
import styled from "styled-components";
import Pagination from "../Pagination";
import ViewButtons from "../ViewButtons";
import { Link } from "react-router-dom";
//import { theme } from "../../themes/theme";
//import { BiPlusMedical } from "react-icons/bi";
import DetailedView from "../DetailedView";
import Searchbar from "../Searchbar";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

// const IconContainer = styled.div`
//   .react-icon-plus {
//     font-size: 60px;
//     margin-top: -10px;
//     margin-left: 15px;
//     color: ${theme.iconColor};
//     cursor: pointer;
//   }
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
`;

// pagination logic from https://aalhommada.medium.com/make-pagination-with-reactjs-d052b3b92720
export const Feed = () => {
  const { reviews } = useContext(AllReviewsReducerContext);
  const [selectedView, setSelectedView] = useState("gallery");

  // pages
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(reviews.length / postsPerPage);

  // filter for searchbar
  const [filteredData, setFilteredData] = useState(reviews);

  console.log(filteredData);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGalleryClick = () => {
    setSelectedView("gallery");
    setPostsPerPage(6);
  };

  const handleDetailedClick = () => {
    setSelectedView("detailed");
    setPostsPerPage(3);
  };

  return (
    <>
      <Searchbar setFilteredData={setFilteredData} />
      <ButtonContainer>
        <ViewButtons
          onGalleryClick={handleGalleryClick}
          onDetailedClick={handleDetailedClick}
          selectedView={selectedView}
        />
        <Link to="/review">
          {/* <IconContainer>
            <BiPlusMedical className="react-icon-plus" />
          </IconContainer> */}
        </Link>
      </ButtonContainer>
      {selectedView === "gallery" && <AllPhotos reviews={currentPosts} />}
      {selectedView === "detailed" && <DetailedView reviews={currentPosts} />}
      <Container>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Container>
    </>
  );
};

export default Feed;
