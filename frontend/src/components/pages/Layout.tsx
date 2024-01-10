import styled from "styled-components";
import { Outlet } from "react-router";
import { theme } from "../../themes/theme";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  padding: 10px;
  padding-top: 0px;
  margin-top: -5px;

  @media (min-width: 768px) {
    margin-left: 4%;
  }
`;

const Main = styled.main``;

const Heading = styled.h1`
  font-size: 30pt;
  margin: 0;
  color: ${theme.headingColor};
  @media (min-width: 768px) {
    font-size: 70pt;
  }
`;

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <Heading className="custom-font">Green Grapes</Heading>
        </Link>
        <Navbar></Navbar>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;
