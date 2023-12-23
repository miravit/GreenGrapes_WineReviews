import { useState } from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";
import { useNavigate } from "react-router-dom";

// Create a styled component for the container
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const BaseButton = styled.button`
  background-color: ${theme.buttonColor};
  color: ${theme.buttonTextColor};
  width: 118px;
`;

const HomeorReviewButton = styled(BaseButton)``;

const AboutButton = styled(BaseButton)``;

const ContactButton = styled(BaseButton)``;

export const Navbar = () => {
  const navigate = useNavigate();
  const [changeReviewButton, setChangeReviewButton] = useState("Review");
  const [changeContactButton, setChangeContactButton] = useState("Contact");
  const [changeAboutButton, setChangeAboutButton] = useState("About");

  // let location = useLocation().pathname;
  // console.log(location);

  const handleButtonClick = () => {
    if (changeReviewButton === "Review") {
      navigate("/review");
      setChangeReviewButton("Home");
      setChangeAboutButton("About");
      setChangeContactButton("Contact");
      return;
    } else if (changeReviewButton === "Home") {
      navigate("/");
      setChangeReviewButton("Review");
      return;
    }
    return;
  };

  const handleContactClick = () => {
    if (changeContactButton === "Contact") {
      navigate("/contact");
      setChangeContactButton("Home");
      setChangeAboutButton("About");
      setChangeReviewButton("Review");
      return;
    } else if (changeContactButton === "Home") {
      navigate("/");
      setChangeContactButton("Contact");
      return;
    }
    return;
  };

  const handleAboutClick = () => {
    if (changeAboutButton === "About") {
      navigate("/about");
      setChangeAboutButton("Home");
      setChangeReviewButton("Review");
      setChangeContactButton("Contact");
      return;
    } else if (changeAboutButton === "Home") {
      navigate("/");
      setChangeAboutButton("About");

      return;
    }
    return;
  };

  return (
    <>
      <Container>
        <HomeorReviewButton onClick={handleButtonClick}>
          {changeReviewButton}
        </HomeorReviewButton>

        <AboutButton onClick={handleAboutClick}>
          {changeAboutButton}
        </AboutButton>

        <ContactButton onClick={handleContactClick}>
          {changeContactButton}
        </ContactButton>
      </Container>
    </>
  );
};

export default Navbar;
