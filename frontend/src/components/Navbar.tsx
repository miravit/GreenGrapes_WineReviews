import styled from "styled-components";
import { theme } from "../themes/theme";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 0px;
`;

const BaseButton = styled.button`
  background-color: ${theme.buttonColor};
  color: ${theme.buttonTextColor};
  width: 118px;
`;

const HomeButton = styled(BaseButton)``;

const ReviewButton = styled(BaseButton)``;

const ContactButton = styled(BaseButton)``;

export const Navbar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleAboutClick = () => {
    navigate("/review");
  };

  return (
    <>
      <Container>
        <HomeButton onClick={handleButtonClick}>Home</HomeButton>

        <ReviewButton onClick={handleAboutClick}>Review</ReviewButton>

        <ContactButton onClick={handleContactClick}>Contact</ContactButton>
      </Container>
    </>
  );
};

export default Navbar;
