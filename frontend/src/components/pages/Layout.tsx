import styled from "styled-components";
import { Outlet } from "react-router";
import { theme } from "../../themes/theme";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

// Create a styled component for the container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// Create a styled component for the header
const Header = styled.header`
  padding: 10px;
`;

// Create a styled component for the main content
const Main = styled.main`
  /* flex: 1;
  padding: 20px; */
`;

// Create a styled component for the h1 element
const Heading = styled.h1`
  margin: 0;
  color: ${theme.headingColor};
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
