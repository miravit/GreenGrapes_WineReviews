import styled from "styled-components";
import { theme } from "../themes/theme";
import { IoSearchOutline } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;

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

export const Searchbar = () => {
  const handleSearch = () => {
    console.log("hej");
  };
  return (
    <Container>
      <form onClick={handleSearch}>
        <Input />

        <IoSearchOutline className="search" onClick={handleSearch} />
      </form>
    </Container>
  );
};

export default Searchbar;
