import styled from "styled-components";
import { theme } from "../themes/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const BaseButton = styled.button`
  width: 130px;
  margin-left: 13px;
  height: 44px;
  padding: 0;
  background-color: ${theme.buttonColor};
  color: ${theme.buttonTextColor};
`;

const GalleryButton = styled(BaseButton)``;

const DetailedButton = styled(BaseButton)`
  margin-left: 25px;
`;

export const ViewButtons = () => {
  const handleGalleryClick = () => {
    console.log("gallery view");
  };

  const handleDetailedClick = () => {
    console.log("detailed view");
  };

  return (
    <Container>
      <GalleryButton
        type="button"
        className="gallery-button"
        onClick={handleGalleryClick}
      >
        Gallery View
      </GalleryButton>
      <DetailedButton
        type="button"
        className="detailed-button"
        onClick={handleDetailedClick}
      >
        Detailed View
      </DetailedButton>
    </Container>
  );
};

export default ViewButtons;
