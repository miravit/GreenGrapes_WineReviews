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
  //margin-left: 13px;
  height: 44px;
  padding: 0;
  background-color: ${(props) =>
    props.active ? `${theme.backroundColor}` : theme.buttonColor};
  border: ${(props) => (props.active ? "2px solid #ddd" : theme.buttonColor)};
  color: ${theme.buttonTextColor};
`;

const GalleryButton = styled(BaseButton)``;

const DetailedButton = styled(BaseButton)`
  margin-left: 20px;
`;

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
      <GalleryButton
        type="button"
        className="gallery-button"
        onClick={onGalleryClick}
        active={selectedView === "gallery"}
      >
        Gallery View
      </GalleryButton>
      <DetailedButton
        type="button"
        className="detailed-button"
        onClick={onDetailedClick}
        active={selectedView === "detailed"}
      >
        Detailed View
      </DetailedButton>
    </Container>
  );
};

export default ViewButtons;
