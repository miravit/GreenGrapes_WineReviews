import styled from "styled-components";
import { theme } from "../../themes/theme";

export const Container = styled.div`
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

  .desktop-photo {
    display: none;
    @media (min-width: 768px) {
      display: block;
      width: 350px;
      height: 380px;
      border: 2px solid #ddd;
      border-radius: 8px;
      margin-top: 30px;
    }
    @media (min-width: 1024px) {
      width: 400px;
      height: 380px;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 0px;
    margin-top: 80px;
  }
`;

export const Wrapper = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  padding-top: 8px;
  margin: 10px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #84ba5a;

  @media (min-width: 768px) {
    width: 400px;
    max-height: 200px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const AboutWrapperTwo = styled.div`
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

export const WrapperTwo = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  padding-top: 8px;
  margin: 10px;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #84ba5a;

  @media (min-width: 768px) {
    width: 400px;
    max-height: 700px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const AboutWrapper = styled.div`
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

export const Contact = styled.div`
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

export const PhotoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2px;

  @media (min-width: 768px) {
    display: none;
  }

  img {
    width: 49.7%;
    @media (min-width: 768px) {
    }
  }
`;
