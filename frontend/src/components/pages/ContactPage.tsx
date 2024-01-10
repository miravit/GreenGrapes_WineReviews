import { TfiEmail } from "react-icons/tfi";
import {
  Container,
  Wrapper,
  AboutWrapper,
  Contact,
  PhotoWrapper,
} from "../styled/ContactPageStyled";

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
        <img
          className="desktop-photo"
          src="/src/assets/photos/photo1.jpg"
          alt="photo of wine"
        />
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
