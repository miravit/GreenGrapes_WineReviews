import styled from "styled-components";
import { theme } from "../themes/theme";
import { IoSearchOutline } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
`;

const Input = styled.input`
  width: 280px;
  height: 40px;
  border-radius: 7px;
  border: none;

  .search {
    font-size: 50px;
  }
`;

const Button = styled.div`
  width: 50px;
  padding: 2px;
  padding-top: 8px;
  margin-left: -40px;
  //margin-left: 20px;
  //background-color: white;

  color: ${theme.buttonColor};
  .search {
    font-size: 25px;
    cursor: pointer;
  }
`;

export const Searchbar = () => {
  return (
    <Container>
      <Input />
      <Button>
        <IoSearchOutline className="search" onClick="" />
      </Button>
    </Container>
  );
};

export default Searchbar;
