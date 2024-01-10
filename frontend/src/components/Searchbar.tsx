import styled from "styled-components";
import { theme } from "../themes/theme";
import { IoSearchOutline } from "react-icons/io5";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { IReview } from "../models/IReview";
import { AllReviewsReducerContext } from "../contexts/ReviewContext";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
  cursor: pointer;

  @media (min-width: 500px) and (max-width: 767px) {
  }

  @media (min-width: 768px) {
    // align-items: center;
    margin-bottom: 40px;
  }

  .search {
    font-size: 30px;
    cursor: pointer;
    margin-left: -40px;
    margin-bottom: -7px;
    color: ${theme.buttonColor};

    @media (min-width: 500px) and (max-width: 767px) {
      display: none;
      color: ${theme.backroundColor};
    }

    @media (min-width: 768px) {
      color: ${theme.backroundColor};
    }
  }
`;

const Input = styled.input`
  width: 330px;
  height: 40px;
  border-radius: 7px;
  border: none;

  @media (min-width: 500px) and (max-width: 767px) {
    width: 270px;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    width: 42vw;
    height: 60px;
    border-radius: 7px;
    border: none;
  }
`;

interface SearchBarProps {
  setFilteredData: (data: IReview[]) => void;
  setSearchInput: (search: string) => void;
}

export const Searchbar = ({
  setFilteredData,
  setSearchInput,
}: SearchBarProps) => {
  const { reviews } = useContext(AllReviewsReducerContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);

    // string fields
    const stringMatches = reviews.filter((review) => {
      const searchableFields = [
        review.wineName,
        review.grape,
        review.firstname,
        review.lastname,
        review.foodPairing,
        review.producer,
      ];

      return searchableFields.some(
        (field) =>
          typeof field === "string" &&
          field.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    // number fields
    const priceMatches = reviews.filter((review) => {
      const priceFields = [review.price];

      return priceFields.some(
        (field) =>
          typeof field === "number" &&
          field.toString().includes(searchQuery.toLowerCase())
      );
    });

    // number fields (rating)
    const ratingMatches = reviews.filter((review) => {
      const ratingFields = [review.rating];

      return ratingFields.some(
        (field) =>
          typeof field === "number" &&
          field.toString().includes(searchQuery.toLowerCase())
      );
    });

    const matches = [...stringMatches, ...priceMatches, ...ratingMatches];

    setFilteredData(matches);
    setSearchInput(searchQuery);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <IoSearchOutline
          className="search"
          onClick={handleSubmit}
          type="submit"
        />
      </form>
    </Container>
  );
};

export default Searchbar;
