import styled from "styled-components";
import { theme } from "../../themes/theme";
import { TfiEmail } from "react-icons/tfi";

const Container = styled.div`
  h3 {
    color: ${theme.buttonColor};
  }

  span {
    color: black;
    font-size: 10pt;
  }

  ul {
    color: ${theme.buttonColor};
    padding: 0;
    margin: 0%;
  }

  p {
    color: black;
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  padding-top: 8px;
  margin: 10px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #84ba5a;

  &:hover {
    transform: scale(1.05);
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  padding-top: 2px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #ffffff75;

  &:hover {
    transform: scale(1.01);
  }
`;

const Contact = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 7px;

  div:hover {
    transform: scale(1.3);
  }

  .email-icon {
    font-size: 20px;
    color: black;
  }
  p {
    padding-left: 10px;
    margin: 0;
  }

  a {
    display: flex;
    flex-direction: row;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2px;

  img {
    width: 49.7%;
  }
`;

export const ContactPage = () => {
  return (
    <Container>
      <Wrapper>
        <AboutWrapper>
          <h3 className="custom-font">Hey wine lovers! </h3>
          <span>
            Ever walked into a store, faced with endless choices, and thought,
            "Which one's the one?" We got you! This is the perfect space for you
            and your friends to share and explore fantastic wines.
          </span>
          <Contact>
            <div>
              <a href="mailto:miravitsas1@gmail.com?subject=Green Grapes Support&">
                <TfiEmail className="email-icon" />
                <p>Email us!</p>
              </a>
            </div>
          </Contact>
        </AboutWrapper>
      </Wrapper>

      <PhotoWrapper>
        <img src="/src/assets/photos/photo1.jpg" alt="photo of wine" />
        <img src="/src/assets/photos/photo2.jpg" alt="photo of wine" />
        <img src="/src/assets/photos/photo5.jpg" alt="photo of wine" />
        <img src="/src/assets/photos/photo4.jpg" alt="photo of wine" />
      </PhotoWrapper>

      <Wrapper>
        <AboutWrapper>
          <h3 className="custom-font">Why us?</h3>
          <ul>
            <p>
              <strong>Share with your friends: </strong>
            </p>
            <span>
              Dive into the world of wine with heartfelt reviews and
              recommendations. Let your friends know about the hidden gems
              you've stumbled upon.
            </span>
          </ul>
          <ul>
            <p>
              <strong> Find Your New Favourite: </strong>
            </p>
            <span>
              Looking for a specific type of wine? Use our easy searchbar to
              filter on ratings, a friends name, price ranges, or grape
              varieties. Your next favorite bottle is just a search away.
            </span>
          </ul>
          <ul>
            <p>
              <strong> Your Digital Wine Cellar: </strong>
            </p>
            <span>
              Forget about losing track of your favorite finds. Keep a digital
              cellar, and never forget the name of that fantastic orange you had
              last summer.
            </span>
          </ul>
        </AboutWrapper>
      </Wrapper>
    </Container>
  );
};

export default ContactPage;
