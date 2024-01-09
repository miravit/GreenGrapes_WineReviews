import styled from "styled-components";
import { theme } from "../themes/theme";
import { useLocation, useNavigate } from "react-router-dom";

interface ButtonProps {
  isActive: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 0px;
`;

const BaseButton = styled.button<ButtonProps>`
  background-color: ${({ isActive }) =>
    isActive ? theme.backroundColor : theme.buttonColor};
  border: ${({ isActive }) =>
    isActive ? "2px solid #ddd" : theme.buttonColor};
  color: ${theme.buttonTextColor};
  width: 118px;
`;

const HomeButton = styled(BaseButton)``;

const ReviewButton = styled(BaseButton)``;

const ContactButton = styled(BaseButton)``;

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    navigate("/");
    window.location.reload();
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
        <HomeButton
          onClick={handleButtonClick}
          isActive={location.pathname === "/"}
        >
          Home
        </HomeButton>

        <ReviewButton
          onClick={handleAboutClick}
          isActive={location.pathname === "/review"}
        >
          Review
        </ReviewButton>

        <ContactButton
          onClick={handleContactClick}
          isActive={location.pathname === "/contact"}
        >
          Contact
        </ContactButton>
      </Container>
    </>
  );
};

export default Navbar;
