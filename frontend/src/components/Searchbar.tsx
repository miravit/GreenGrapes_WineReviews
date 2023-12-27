import styled from "styled-components";
import { theme } from "../themes/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 280px;
  height: 40px;
  border-radius: 7px;
  border: none;
  margin-left: 13px;
`;

const Button = styled.button`
  margin-left: 10px;
  background-color: ${theme.buttonColor};
  color: ${theme.buttonTextColor};
`;

export const Searchbar = () => {
  return (
    <Container>
      <Input />
      <Button>Sök</Button>
    </Container>
  );
};

export default Searchbar;
