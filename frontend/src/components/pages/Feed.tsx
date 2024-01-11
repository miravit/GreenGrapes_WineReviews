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

const Header = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: start;
    margin-left: 110px;
    //width: 100vw;
    //  margin-top: -55px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6px;

  /* @media (min-width: 500px) and (max-width: 767px) {
    margin-left: 0%;
  } */

  @media (min-width: 768px) {
    margin-left: 3%;
  }
  @media (min-width: 1024px) {
    margin-left: 525px;
  }
`;

const LoadingContainer = styled.div`
  margin-top: 40%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 13%;
  }
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

  const postsPerPage =
    window.innerWidth < 768 ? 6 : window.innerWidth >= 1024 ? 12 : 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // handle filter on feed
  const currentPosts = searchInput
    ? filteredData.slice(indexOfFirstPost, indexOfLastPost)
    : reviews.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = searchInput
    ? Math.ceil(filteredData.length / postsPerPage)
    : Math.ceil(reviews.length / postsPerPage);

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
      <Header>
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
      </Header>
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
