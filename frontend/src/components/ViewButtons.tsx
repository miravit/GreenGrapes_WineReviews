import styled from "styled-components";
import { theme } from "../themes/theme";

interface ButtonProps {
  active: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const BaseButton = styled.button<ButtonProps>`
  width: 130px;
  height: 44px;
  padding: 0;
  background-color: ${(props) =>
    props.active ? `${theme.backroundColor}` : theme.buttonColor};
  border: ${(props) => (props.active ? "2px solid #ddd" : theme.buttonColor)};
  color: ${theme.buttonTextColor};

  @media (min-width: 768px) {
    width: 150px;
    height: 50px;
  }
  @media (min-width: 1024px) {
    margin-top: 20px;
    width: 150px;
    height: 40px;
  }
`;

const GalleryButton = styled(BaseButton)`
  margin-left: 10px;
  @media (min-width: 1024px) {
    margin-left: 13px;
  }
`;

const DetailedButton = styled(BaseButton)``;

interface ViewButtonsProps {
  onGalleryClick: () => void;
  onDetailedClick: () => void;
  selectedView: string;
}

export const ViewButtons: React.FC<ViewButtonsProps> = ({
  onGalleryClick,
  onDetailedClick,
  selectedView,
}) => {
  return (
    <Container>
      <DetailedButton
        type="button"
        className="detailed-button"
        onClick={onDetailedClick}
        active={selectedView === "detailed"}
      >
        Detailed View
      </DetailedButton>
      <GalleryButton
        type="button"
        className="gallery-button"
        onClick={onGalleryClick}
        active={selectedView === "gallery"}
      >
        Gallery View
      </GalleryButton>
    </Container>
  );
};

export default ViewButtons;
