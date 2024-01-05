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

  .search {
    font-size: 30px;
    cursor: pointer;
    margin-left: -34px;
    margin-bottom: -7px;
    color: ${theme.buttonColor};
  }
`;

const Input = styled.input`
  width: 330px;
  height: 40px;
  border-radius: 7px;
  border: none;
`;

interface SearchBarProps {
  setFilteredData: (data: IReview[]) => void;
}

export const Searchbar = ({ setFilteredData }: SearchBarProps) => {
  const { reviews } = useContext(AllReviewsReducerContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);

    //string fields
    const filteredData = reviews.filter((review) => {
      const searchableFields = [
        review.wineName,
        review.grape,
        review.firstname,
        review.lastname,
        review.foodPairing,
        review.producer,
      ];

      //number fields
      const priceFields = [review.price];
      const ratingFields = [review.rating];

      // searchableFields.some((field) => {
      //   console.log("field:", field);
      //   console.log("searchQuery:", searchQuery);
      //   //console.log(stringMatches);
      //   const match =
      //     typeof field === "string" &&
      //     field.toLowerCase().includes(searchQuery.toLowerCase());
      //   console.log("match:", match);
      //   return match;
      // });
      // return stringMatches;

      if (searchQuery !== "") {
        const stringMatches = searchableFields.some(
          (field) =>
            typeof field === "string" &&
            field.includes(searchQuery.toLowerCase())
        );
        return stringMatches;
      }

      if (searchQuery.length > 1) {
        const priceMatches = priceFields.some(
          (field) =>
            typeof field === "number" &&
            field.toString().includes(searchQuery.toLowerCase())
        );
        return priceMatches;
      }
      if (searchQuery.length === 1) {
        const ratingMatches = ratingFields.some(
          (field) =>
            typeof field === "number" &&
            field.toString().includes(searchQuery.toLowerCase())
        );
        return ratingMatches;
      }
    });

    setFilteredData(filteredData);
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
