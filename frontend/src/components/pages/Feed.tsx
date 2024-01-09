import { useContext, useEffect, useState } from "react";
import { AllReviewsReducerContext } from "../../contexts/ReviewContext";
import AllPhotos from "../AllPhotos";
import styled from "styled-components";
import Pagination from "../Pagination";
import ViewButtons from "../ViewButtons";
import DetailedView from "../DetailedView";
import Searchbar from "../Searchbar";
import LoadingSpinner from "../LoadingSpinner";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
`;

const LoadingContainer = styled.div`
  margin-top: 40%;
  display: flex;
  justify-content: center;
`;

// pagination logic from https://aalhommada.medium.com/make-pagination-with-reactjs-d052b3b92720
export const Feed = () => {
  const { reviews } = useContext(AllReviewsReducerContext);
  const [loading, setLoading] = useState(false);
  const [selectedView, setSelectedView] = useState("detailed");

  // filter for searchbar
  const [filteredData, setFilteredData] = useState(reviews);
  const [searchInput, setSearchInput] = useState("");

  // pages
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // handle filter on feed
  const currentPosts = searchInput
    ? filteredData.slice(indexOfFirstPost, indexOfLastPost)
    : reviews.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = searchInput
    ? Math.ceil(filteredData.length / postsPerPage)
    : Math.ceil(reviews.length / postsPerPage);

  console.log(filteredData);
  console.log(searchInput);

  useEffect(() => {
    if (reviews.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [reviews]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGalleryClick = () => {
    setSelectedView("gallery");
  };

  const handleDetailedClick = () => {
    setSelectedView("detailed");
  };

  return (
    <>
      <Searchbar
        setFilteredData={setFilteredData}
        setSearchInput={setSearchInput}
      />
      <ButtonContainer>
        <ViewButtons
          onGalleryClick={handleGalleryClick}
          onDetailedClick={handleDetailedClick}
          selectedView={selectedView}
        />
      </ButtonContainer>
      {loading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
      {!loading && (
        <>
          {selectedView === "gallery" && <AllPhotos reviews={currentPosts} />}
          {selectedView === "detailed" && (
            <DetailedView reviews={currentPosts} />
          )}
          <Container>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Container>
        </>
      )}
    </>
  );
};

export default Feed;
