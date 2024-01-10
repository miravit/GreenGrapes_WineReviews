import styled from "styled-components";

export const ReviewModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .winecard {
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 8px;
    padding-top: 8px;
    margin: 16px;
    margin-top: 20px;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    background-color: #84ba5a;

    &:hover {
      transform: scale(1.05);
    }
  }

  .winecard-smaller {
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    padding-top: 2px;
    margin: 7px;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    background-color: #ffffff75;

    &:hover {
      transform: scale(1.01);
    }
  }

  .wine-name-container {
    display: flex;
    justify-content: center;

    .wine-name {
      margin: 0px;
      padding-bottom: 3px;
      color: #333;
      font-size: 14pt;
      text-align: center;
    }
  }

  .wine-img-container {
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      border-radius: 4px;
      border: 2px;
    }
  }

  .wine-details-container {
    font-size: 14px;

    .small-info-container {
      display: flex;
      justify-content: space-between;
      margin: 0;
      max-width: 100vw;
      margin-bottom: 10px;
      padding: 4px;
    }
    .text-wrapper {
      padding: 3px;
    }
    p {
      border: 2px solid white;
      border-radius: 8px;
      width: 70px;
      text-align: center;
    }
    .static-text {
      color: #333;
      font-style: oblique;
    }
  }

  .name-wrapper {
    display: flex;
    justify-content: end;
    span {
      color: #333;
      font-size: 10pt;
      font-style: oblique;
    }
  }

  .modal-content {
    padding: 20px;
    border-radius: 8px;
    max-width: 90%;
    max-height: 80%;
    overflow-y: auto;
    color: black;
  }

  .close-button {
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    height: 0px;

    .close-icon {
      font-size: 25pt;
      margin-left: 240px;
    }
  }
  @media screen and (min-width: 768px) {
  }
`;
