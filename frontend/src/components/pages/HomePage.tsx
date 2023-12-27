import styled from "styled-components";
import { theme } from "../../themes/theme";
import Searchbar from "../Searchbar";
import ViewButtons from "../ViewButtons";
import Feed from "./Feed";
//import { Link } from "react-router-dom";
import { BiPlusMedical } from "react-icons/bi";
import AboutSection from "../AboutSection";
import ContactSection from "../ContactSection";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

const IconContainer = styled.div`
  .react-icon-plus {
    font-size: 60px;
    margin-top: -10px;
    margin-left: 15px;
    color: ${theme.iconColor};
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export const HomePage = () => {
  return (
    <>
      <Searchbar />
      <ButtonContainer>
        <ViewButtons />
        <Link to="/review">
          <IconContainer>
            <BiPlusMedical className="react-icon-plus" />
          </IconContainer>
        </Link>
      </ButtonContainer>
      <Feed />
      <Element name="about">
        <AboutSection />
      </Element>
      <Element name="contact">
        <ContactSection />
      </Element>
    </>
  );
};

export default HomePage;
