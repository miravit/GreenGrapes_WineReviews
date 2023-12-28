import { useContext, useState } from "react";
import { AllReviewsReducerContext } from "../../contexts/ReviewContext";
import AllPhotos from "../AllPhotos";
import styled from "styled-components";
import Pagination from "../Pagination";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

// pagination logic from https://aalhommada.medium.com/make-pagination-with-reactjs-d052b3b92720
export const Feed = () => {
  const { reviews } = useContext(AllReviewsReducerContext);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(reviews.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AllPhotos reviews={currentPosts} />
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
