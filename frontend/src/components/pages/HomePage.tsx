import styled from "styled-components";
import { theme } from "../../themes/theme";
import Searchbar from "../Searchbar";
import ViewButtons from "../ViewButtons";
import Feed from "./Feed";
//import { Link } from "react-router-dom";
import { BiPlusMedical } from "react-icons/bi";
import AboutSection from "../AboutSection";
import ContactSection from "../ContactSection";
import { Link as ScrollLink, Element } from "react-scroll";

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
        <IconContainer>
          <ScrollLink to="review" smooth={true} duration={500}>
            <BiPlusMedical className="react-icon-plus" />
          </ScrollLink>
        </IconContainer>
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
