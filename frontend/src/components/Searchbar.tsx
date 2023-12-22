import { BiPlusMedical } from "react-icons/bi";

import styled from "styled-components";
import { theme } from "../themes/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 280px;
  height: 40px;
  border-radius: 7px;
  border: none;
  margin-left: 13px;
`;

const IconContainer = styled.div`
  .hello {
    font-size: 60px;
    margin-top: -10px;
    margin-left: 15px;
    color: ${theme.iconColor};
  }
`;

export const Searchbar = () => {
  return (
    <Container>
      <Input />
      <IconContainer>
        <BiPlusMedical className="hello" />
      </IconContainer>
    </Container>
  );
};

export default Searchbar;
