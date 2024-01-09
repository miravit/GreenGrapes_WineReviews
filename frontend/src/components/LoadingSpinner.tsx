import styled from "styled-components";
import { theme } from "../themes/theme";

const Loading = styled.div`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${theme.buttonColor};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: rotate 1s linear infinite;
  margin: auto;
  margin-top: 50px;
`;

export const LoadingSpinner = () => {
  return <Loading></Loading>;
};

export default LoadingSpinner;
