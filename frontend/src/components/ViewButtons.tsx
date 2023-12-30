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

interface ViewButtonsProps {
  onGalleryClick: () => void;
  onDetailedClick: () => void;
}

export const ViewButtons: React.FC<ViewButtonsProps> = ({
  onGalleryClick,
  onDetailedClick,
}) => {
  return (
    <Container>
      <GalleryButton
        type="button"
        className="gallery-button"
        onClick={onGalleryClick}
      >
        Gallery View
      </GalleryButton>
      <DetailedButton
        type="button"
        className="detailed-button"
        onClick={onDetailedClick}
      >
        Detailed View
      </DetailedButton>
    </Container>
  );
};

export default ViewButtons;
